# Plan — alinear sitio, ESTADO.md y solicitud a la Residency con producción (2026-11-19)

Fuentes cotejadas:

- **P** = auditoría de producción `JurisAi/docs/audits/produccion-para-residency-2026-11-18.md`
  (rama `claude/produccion-para-residency-2026-11-18`, sin mergear), medida el 19-nov 01:51–01:57Z.
- **E** = `JurisAi/docs/ESTADO.md` en `origin/main` (última revisión general: 2026-09-20).
- **S** = este sitio (`src/i18n/translations.ts` + `src/data/figures.json`), cifras de ago-2026.
- **R** = «Why do you want to work at Anthropic V2.docx».

Sensor: `node scripts/check-figures.mjs --estado <E>` hoy da **14 errores** contra E
(medido 2026-11-19). Todas las cifras del registro tienen más de 30 días.

## 1. Lo que el sitio afirma y producción desmiente (orden: daño)

| # | Sitio hoy | Producción / ESTADO | Fuente |
|---|---|---|---|
| 1 | «596 decretos, ninguno entre 1885 y 2020; de 2024, 16 de 708» (limites, /estado) | **13.265 decretos**; cobertura de ingesta contra consultoria.gov.do: 8.981/8.981, 15 de 15 años completos | P §F |
| 2 | «Ministerios, congreso y direcciones jurídicas… **usan**» (forInstitutions) | 0 usuarios, firmas o solicitudes de gobierno; 2 tenants, ambos internos | P §B, §E |
| 3 | «52 anulaciones parciales pendientes de carga; el motor no responde por artículo» (limites, /estado, roadmap Q4) | 74 filas cargadas el 25-ago; visibles en la pantalla de vigencia desde el 6-sep | E §Motor, §Abiertos |
| 4 | «versionado temporal artículo por artículo», «Consulta point-in-time: en producción» | El point-in-time de **texto** no funciona (0 de 539.082 filas con `effective_until`); lo que funciona es «¿regía esta norma en tal fecha?» | E §Corpus, 20-sep |
| 5 | «Modelo entrenado desde n = 200» | No hay modelo guardado; corre en heurístico. Hay 29.977 participaciones etiquetadas (> 200) y nunca se entrenó; el directorio no es persistente | P §G |
| 6 | «6 reglas formales de inferencia» | Corren 5; R6 no se invoca | E §cotejo 20-sep |
| 7 | 130.906 sentencias (y 94.025 / 10.457 / 2.479 por corte) | 145.494 documentos de sentencia (P); 136.671 con texto íntegro, SCJ 96.199, TC 11.353, TSA 3.690 (E, 20-sep) | P §F, E |
| 8 | 6.680 leyes | 7.369 `ley_ordinaria` | P §F |
| 9 | 85 entregables del Redactor | 176 | P §H |
| 10 | 22.146 relaciones del grafo | 22.580 (20-sep) | E |
| 11 | «~6.100 leyes anteriores a 2010» | derivada de 6.680; hay que recalcular con 7.369 | — |
| 12 | 7.395 pruebas, 26 módulos, 8 estados, < 2 % cobertura FE | sin remedir desde ago/sep; E no tiene nada más nuevo | E |

Lo que el sitio **no dice** y P sí mide: 2 tenants internos, 0 facturas, 0 pilotos de gobierno.

## 2. La solicitud a la Residency contra producción

| Afirmación de R | Estado | Fuente |
|---|---|---|
| ~25.000 normas | ✅ 25.360 | P §F |
| ~145.000 sentencias | ✅ 145.494 | P §F |
| «113 comprobaciones, 70 leen la prosa; 19 corridas; cambió un número de artículo» | ✅ `docs/plans/SOLUCION-frontera-redactor-2026-10-04.md` l. 8–31 | repo |
| «The system is in production» | ✅ SHA `3961d488` desplegado, 0 commits sin desplegar | P §A |
| «It has no external users yet» | ⚠️ P clasifica una cuenta `gmail.com` como `otro_externo`, con 177 registros de uso del Redactor y login el 19-nov. Si esa cuenta es la del fundador, R es correcta y P debe decirlo | P §B, §C |
| «spent the last year building» | [Sin verificar] El primer tenant es del 2026-04-20 y el primer uso del 2026-04-22. La historia de `origin/main` empieza el 2026-08-12 (3.396 commits) | P §B; git |
| «engines that track the temporal validity of norms» | ✅ si se lee como «estado de vigencia a una fecha»; ❌ si se lee como versiones del texto (ver fila 4) | E |
| «hybrid retrieval with RRF and reranking» | [Sin verificar] afirmación de código, no medida en P | — |

## 3. Pasos propuestos (cada uno espera tu OK)

1. **ESTADO.md (repo JurisAi, PR aparte).** Volcar las filas de P con fecha 2026-11-18: normas por
   tipo, sentencias (con el nombre de la fila nuevo: «documentos de sentencia», que no es lo mismo
   que «con texto íntegro»), Redactor 176, Comercial (2 tenants internos, 0 facturas, 0 gobierno),
   predictor sin modelo. Y retirar de Reconciliación las filas de decretos que P contradice.
   Requiere mergear antes la rama de P o citarla por ruta.
2. **Sitio, cifras.** Actualizar `figures.json` y `translations.ts` (ES y EN) a las filas nuevas de
   E, y corregir los nombres de fila para que `check-figures` vuelva a cotejar. Sensor: 0 errores.
3. **Sitio, afirmaciones (copy de cliente → decisión tuya).** Filas 1–6:
   - decretos: retirar el límite «no están en el corpus» y sustituirlo por lo medido (cobertura de
     ingesta completa en decretos y leyes; resoluciones 13 de 17 años; anteriores a 2010 sin
     reconciliar);
   - instituciones: «usan» → «está diseñada para» (o similar);
   - anulaciones: retirar «52 pendientes»; roadmap Q4 sin esa tarea;
   - point-in-time: «estado de vigencia a una fecha», sin «versionado del texto»;
   - predictor: «hoy responde en modo heurístico; no hay modelo entrenado»;
   - reglas: 5.
4. **/estado, sección comercial (opcional).** Una tabla «Estado comercial»: 2 tenants internos, sin
   facturación, sin piloto. Hace que el sitio y R digan lo mismo.
5. **R (no lo edito, el .docx es tuyo).** Te paso las dos correcciones si las quieres: la cuenta gmail
   y «last year».

Fuera de alcance: remedir pruebas, módulos y cobertura FE (las dejo con su fecha y el aviso).
