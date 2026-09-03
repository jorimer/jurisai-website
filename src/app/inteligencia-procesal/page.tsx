"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

export default function InteligenciaProcesalPage() {
  const { t } = useI18n();

  return (
    <main>
      <Navbar />

      {/* Hero Section with Gradient */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            {t.ipPage.title}
          </h1>
          <p className="text-lg sm:text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            {t.ipPage.subtitle}
          </p>
        </div>
      </section>

      {/* Judge Profile Metrics Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-primary-950 mb-4">
              {t.ipPage.profileTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.ipPage.profileMetrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-paper to-white rounded-edge border border-rule hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-sm text-primary-950 mb-3 uppercase tracking-wider">
                  {metric.label}
                </h3>
                <p className="text-sm text-primary-600 leading-relaxed">
                  {metric.description}
                </p>
                <div className="mt-4 pt-4 border-t border-rule">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-400 to-accent-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prediction Model Section */}
      <section className="py-24 bg-gradient-to-b from-paper to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text & Tech Specs */}
            <div>
              <h2 className="text-3xl sm:text-4xl text-primary-950 mb-4">
                {t.ipPage.predictionTitle}
              </h2>
              <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                {t.ipPage.predictionDesc}
              </p>

              <div className="space-y-4">
                <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider">
                  Especificaciones Técnicas
                </p>
                {t.ipPage.techSpecs.map((spec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-accent-400 to-accent-300 mt-2 flex-shrink-0"></span>
                    <p className="text-sm text-primary-600">{spec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visualization */}
            <div className="bg-white rounded-edge p-8 border border-rule shadow-lg">
              <h3 className="text-lg text-primary-950 mb-8 text-center">
                Distribución del Corpus por Tribunal
              </h3>

              {/* Corpus por tribunal */}
              <div className="space-y-8">
                {/* Suprema Corte de Justicia */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <p className="text-sm font-semibold text-primary-600">Suprema Corte de Justicia</p>
                    <p className="text-2xl font-bold text-primary-800">87,9%</p>
                  </div>
                  <div className="w-full h-3 bg-paper-warm rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-700 to-primary-600 rounded-full transition-all duration-500" style={{ width: '87.9%' }}></div>
                  </div>
                  <p className="text-xs text-primary-400 mt-2">94.025 sentencias con texto íntegro · med. 1-ago-2026</p>
                </div>

                {/* Tribunal Constitucional */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <p className="text-sm font-semibold text-primary-600">Tribunal Constitucional</p>
                    <p className="text-2xl font-bold text-accent-600">9,8%</p>
                  </div>
                  <div className="w-full h-3 bg-paper-warm rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full transition-all duration-500" style={{ width: '9.8%' }}></div>
                  </div>
                  <p className="text-xs text-primary-400 mt-2">10.457 sentencias con texto íntegro · med. 1-ago-2026</p>
                </div>

                {/* Tribunal Superior Administrativo */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <p className="text-sm font-semibold text-primary-600">Tribunal Superior Administrativo</p>
                    <p className="text-2xl font-bold text-primary-500">2,3%</p>
                  </div>
                  <div className="w-full h-3 bg-paper-warm rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-400 to-primary-300 rounded-full transition-all duration-500" style={{ width: '2.3%' }}></div>
                  </div>
                  <p className="text-xs text-primary-400 mt-2">2.479 sentencias con texto íntegro · med. 1-ago-2026</p>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-12 pt-8 border-t border-rule">
                <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider mb-4">
                  Nota
                </p>
                <p className="text-xs text-primary-600 leading-relaxed">
                  Las tres cifras se midieron el 1-ago-2026 y suman 106.961. El total de 130.906 es del 25-ago e incluye tribunales cuyo desglose no hemos publicado. Preferimos declarar la diferencia a cuadrar el número.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Section - Gold Tinted */}
      <section className="py-24 bg-gradient-to-b from-amber-50 via-yellow-50 to-white border-y border-accent-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-edge p-12 border border-accent-300 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-300 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl text-primary-950">
                {t.ipPage.ethicsTitle}
              </h2>
            </div>

            <p className="text-lg text-primary-600 leading-relaxed mb-6">
              {t.ipPage.ethicsDesc}
            </p>

            <div className="mt-8 pt-8 border-t border-rule grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-950 mb-2">Marco ABA 512</p>
                <p className="text-sm text-primary-600">Competencia, confidencialidad y supervisión humana</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-950 mb-2">n ≥ 30</p>
                <p className="text-sm text-primary-600">Muestra mínima para publicar un perfil</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-950 mb-2">Sin tasa de acierto</p>
                <p className="text-sm text-primary-600">No publicamos una que no hayamos medido</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl text-white mb-6">
            ¿Quieres Ver la Inteligencia Procesal en Acción?
          </h2>
          <p className="text-lg text-primary-200 mb-10 max-w-2xl mx-auto">
            Solicita una demostración personalizada y descubre cómo el perfilamiento judicial predictivo puede transformar tu estrategia de litigios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-block px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-300 text-primary-950 font-semibold rounded-edge hover:from-accent-300 hover:to-accent-200 transition-all shadow-lg shadow-accent-400/30 hover:shadow-xl hover:scale-105"
            >
              {t.ipPage.cta}
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-edge border border-white/20 hover:bg-white/20 transition-all"
            >
              Contactar Ventas
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Context Section */}
      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl text-primary-950 mb-4">¿Cómo Funciona?</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                La Inteligencia Procesal construye perfiles sobre las 130.906 sentencias del corpus, con resolución de entidades y duración real de resolución. La predicción considera juez, materia, abogado, jurisdicción y monto, y declara cuándo opera en modo heurístico.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-primary-600">130.906 sentencias con texto íntegro · med. 25-ago-2026</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-primary-600">Perfil fiable desde 30 sentencias del magistrado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-primary-600">Modo heurístico declarado bajo 200 casos etiquetados</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl text-primary-950 mb-4">Casos de Uso Reales</h3>
              <p className="text-primary-600 mb-6 leading-relaxed">
                Sirve para evaluar el riesgo antes de llevar un caso a juicio y para preparar una audiencia sabiendo cómo ha decidido ese tribunal en esa materia. Describe comportamiento histórico: no predice el resultado de un caso concreto.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-primary-600">Evaluación de riesgo previa a juicio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-primary-600">Preparación de audiencia por magistrado y materia</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-primary-600">Duración real de resolución por materia y corte</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
