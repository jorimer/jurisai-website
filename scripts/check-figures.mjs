#!/usr/bin/env node
/**
 * Verifica que las cifras publicadas en el sitio coincidan con docs/ESTADO.md
 * del repo de la app, que es la fuente de verdad declarada del proyecto.
 *
 * Existe porque esta desconexión ya produjo un error en producción: el sitio
 * anunció que la cobertura de decretos empezaba en 2012, copiado de una fila
 * de ESTADO.md que contradecía a su propia auditoría. Nadie lo detectó hasta
 * que un lector lo leyó.
 *
 *   node scripts/check-figures.mjs [--estado <ruta>] [--sin-estado]
 *
 * Salidas: 0 todo bien · 1 hay divergencia · 2 no se pudo verificar.
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const arg = (n) => {
  const i = process.argv.indexOf(n);
  return i > -1 ? process.argv[i + 1] : undefined;
};
const HOY = new Date();
const DIAS_FRESCURA = 30;

const registro = JSON.parse(readFileSync(resolve(raiz, "src/data/figures.json"), "utf8"));
const copy = readFileSync(resolve(raiz, "src/i18n/translations.ts"), "utf8");

// ── Literales de prosa del sitio, sin clases de Tailwind, rutas ni claves ──
const esClaseTailwind = (s) => /^[a-z0-9:/[\]().,%-]+(?:\s+[a-z0-9:/[\]().,%-]+)*$/.test(s);
// Sin salto de línea dentro del literal y sin mínimo de longitud: exigir 4+
// caracteres dejaba sueltos los cortos como "Key", y su comilla emparejaba con
// la siguiente, desincronizando el resto del archivo.
const literales = [...copy.matchAll(/"((?:[^"\\\n]|\\.)*)"/g)]
  .map((m) => m[1])
  .filter((s) => s.length >= 4)
  .filter((s) => /\s/.test(s) && !s.startsWith("/") && !s.startsWith("#") && !s.startsWith("http"))
  .filter((s) => !esClaseTailwind(s));
const prosa = literales.join("\n");

// «130.906» y «130,906» son la misma cifra; «99,5» no lleva separador de miles.
const canon = (s) =>
  s
    .replace(/[.,](?=\d{3}(?!\d))/g, "") // separador de miles, en cualquiera de las dos convenciones
    .replace(/,(?=\d)/, ".")              // decimal: «99,5» y «99.5» son la misma cifra
    .replace(/\s?%$/, "")
    .trim();

const errores = [];
const avisos = [];

// ── 1 · El registro no puede desviarse de lo publicado ──
for (const f of registro.figuras) {
  if (!copy.includes(f.value)) {
    errores.push(
      `El registro declara «${f.value}» (${f.id}) pero no aparece en translations.ts. ` +
        `O la cifra se cambió en el sitio sin actualizar el registro, o sobra del registro.`
    );
  }
}

// ── 2 · Lo publicado no puede traer cifras sin declarar ──
// Una sola pasada: la alternativa de miles va primero, así consume «130.906»
// entera en vez de dejar «130» y «906» sueltos.
const FORMA = /\d{1,3}(?:[.,]\d{3})+|\d+(?:[.,]\d+)? ?%|\b\d{3,}\b/g;
const declarados = new Set(registro.figuras.map((f) => canon(f.value)));
const ignorados = new Set(registro.ignorar.map((i) => canon(i.token)));
const sinDeclarar = new Map();
for (const m of prosa.matchAll(FORMA)) {
  const t = canon(m[0]);
  if (declarados.has(t) || ignorados.has(t)) continue;
  if (/^(1[89]\d{2}|20[0-4]\d)$/.test(t)) continue; // años
  const ctx = prosa.slice(Math.max(0, m.index - 45), m.index + 45).replace(/\n/g, " ");
  if (!sinDeclarar.has(t)) sinDeclarar.set(t, ctx.trim());
}
for (const [t, ctx] of sinDeclarar) {
  errores.push(
    `Cifra sin declarar en el registro: «${t}» — …${ctx}… ` +
      `Añadila a src/data/figures.json con su fecha de medición y su fuente, o a "ignorar" si no es una cifra del producto.`
  );
}

// ── 3 · Frescura, con la misma regla de treinta días de ESTADO.md ──
for (const f of registro.figuras) {
  const dias = Math.floor((HOY - new Date(f.measuredOn)) / 86400000);
  if (dias > DIAS_FRESCURA) {
    avisos.push(`«${f.value}» (${f.id}) lleva ${dias} días sin medirse. Medida el ${f.measuredOn}.`);
  }
}

// ── 4 · Cotejo contra ESTADO.md ──
const rutaEstado =
  arg("--estado") ||
  process.env.JURISAI_ESTADO_PATH ||
  resolve(raiz, "../../../JurisAi/docs/ESTADO.md");
let estadoVerificado = false;

if (process.argv.includes("--sin-estado")) {
  avisos.push("Cotejo contra ESTADO.md omitido por --sin-estado.");
} else if (!existsSync(rutaEstado)) {
  console.error(
    `\n⚠  NO SE VERIFICÓ contra ESTADO.md: no se encontró en ${rutaEstado}\n` +
      `   Pasá --estado <ruta>, definí JURISAI_ESTADO_PATH, o --sin-estado para omitirlo a propósito.\n` +
      `   Las cifras del sitio quedan sin cotejar contra su fuente de verdad.`
  );
} else {
  estadoVerificado = true;
  const estado = readFileSync(rutaEstado, "utf8");
  const filas = estado
    .split("\n")
    .filter((l) => l.trim().startsWith("|") && l.split("|").length >= 4)
    .map((l) => l.split("|").map((c) => c.trim()));

  for (const f of registro.figuras.filter((x) => x.source === "estado")) {
    const fila = filas.find((c) => c[1] && c[1].replace(/[*—]/g, "").trim() === f.estadoRow);
    if (!fila) {
      errores.push(
        `ESTADO.md no tiene la fila «${f.estadoRow}» que el registro cita para ${f.id}. ` +
          `O la fila se renombró, o el sitio cita algo que la fuente ya no dice.`
      );
      continue;
    }
    const valorFila = fila[2] || "";
    if (!canon(valorFila).includes(canon(f.value)) && !valorFila.includes(f.value)) {
      errores.push(
        `DIVERGENCIA en «${f.estadoRow}»: el sitio publica «${f.value}» y ESTADO.md dice «${valorFila}».`
      );
    }
    const fechaFila = (fila[3] || "").trim();
    if (fechaFila && fechaFila !== f.measuredOn) {
      errores.push(
        `Fecha distinta en «${f.estadoRow}»: el registro dice ${f.measuredOn} y ESTADO.md ${fechaFila}.`
      );
    }
  }
}

// ── Informe ──
const n = registro.figuras.length;
console.log(`\nCifras declaradas: ${n} · cotejadas contra ESTADO.md: ${estadoVerificado ? registro.figuras.filter((f) => f.source === "estado").length : 0}`);
if (avisos.length) {
  console.log("\nAvisos:");
  for (const a of avisos) console.log("  ·", a);
}
if (errores.length) {
  console.error("\nErrores:");
  for (const e of errores) console.error("  ✗", e);
  console.error(`\n${errores.length} problema(s). El sitio y su fuente no dicen lo mismo.\n`);
  process.exit(1);
}
if (!estadoVerificado && !process.argv.includes("--sin-estado")) {
  console.error("\nSin cotejar contra ESTADO.md.\n");
  process.exit(2);
}
console.log("\nOK: cada cifra publicada coincide con su fuente.\n");
