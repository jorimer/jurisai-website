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
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const arg = (n) => {
  const i = process.argv.indexOf(n);
  return i > -1 ? process.argv[i + 1] : undefined;
};
const HOY = new Date();
const DIAS_FRESCURA = 30;

const registro = JSON.parse(readFileSync(resolve(raiz, "src/data/figures.json"), "utf8"));
const traducciones = readFileSync(resolve(raiz, "src/i18n/translations.ts"), "utf8");

// Las páginas también publican cifras escritas a mano en el JSX (login, registro,
// panel, metadatos). Hasta el 19-nov-2026 este script no las leía, y «130.906»
// sobrevivió en siete de ellas tres meses después de superarse.
const tsx = [];
const recorrer = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) recorrer(p);
    else if (e.name.endsWith(".tsx")) tsx.push({ ruta: relative(raiz, p), texto: readFileSync(p, "utf8") });
  }
};
recorrer(resolve(raiz, "src"));
const copy = traducciones + "\n" + tsx.map((f) => f.texto).join("\n");

// ── Literales de prosa del sitio, sin clases de Tailwind, rutas ni claves ──
const esClaseTailwind = (s) => /^[a-z0-9:/[\]().,%-]+(?:\s+[a-z0-9:/[\]().,%-]+)*$/.test(s);
// Sin salto de línea dentro del literal y sin mínimo de longitud: exigir 4+
// caracteres dejaba sueltos los cortos como "Key", y su comilla emparejaba con
// la siguiente, desincronizando el resto del archivo.
const literales = [...traducciones.matchAll(/"((?:[^"\\\n]|\\.)*)"/g)]
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
      `El registro declara «${f.value}» (${f.id}) pero no aparece en translations.ts ni en ningún .tsx. ` +
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
// En el JSX no se separa prosa de clases y rutas, así que ahí solo se buscan las
// cifras con separador de miles, que no aparecen en clases de Tailwind ni en SVG.
// ⚠️ Límite: porcentajes y cifras cortas (596, 85, 52) escritos en el JSX NO se
// detectan. Las cifras del producto van en translations.ts, que sí se lee entero.
const MILES = /\b\d{1,3}(?:[.,]\d{3})+\b/g;
// Fuera del análisis: trazados SVG, colores y URLs, que son números sin ser cifras.
const sinGeometria = (t) =>
  t
    .replace(/\bd=\{?["'][^"']*["']/g, "")
    .replace(/["']M-?\d[-\d .,a-zA-Z]*["']/g, "")
    .replace(/rgba?\([^)]*\)/g, "")
    .replace(/https?:\/\/[^"'\s]+/g, "");
for (const f of tsx) {
  for (const m of sinGeometria(f.texto).matchAll(MILES)) {
    const t = canon(m[0]);
    if (declarados.has(t) || ignorados.has(t)) continue;
    const ctx = sinGeometria(f.texto).slice(Math.max(0, m.index - 45), m.index + 45).replace(/\s+/g, " ");
    if (!sinDeclarar.has(t)) sinDeclarar.set(t, `${f.ruta}: ${ctx.trim()}`);
  }
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
