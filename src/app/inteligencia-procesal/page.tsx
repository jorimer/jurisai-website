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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.ipPage.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t.ipPage.subtitle}
          </p>
        </div>
      </section>

      {/* Judge Profile Metrics Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
              {t.ipPage.profileTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.ipPage.profileMetrics.map((metric, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <h3 className="text-sm font-bold text-primary-950 mb-3 uppercase tracking-wider">
                  {metric.label}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {metric.description}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-400 to-accent-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prediction Model Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text & Tech Specs */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
                {t.ipPage.predictionTitle}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {t.ipPage.predictionDesc}
              </p>

              <div className="space-y-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Especificaciones Técnicas
                </p>
                {t.ipPage.techSpecs.map((spec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-accent-400 to-accent-300 mt-2 flex-shrink-0"></span>
                    <p className="text-sm text-slate-700">{spec}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visualization */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
              <h3 className="text-lg font-bold text-primary-950 mb-8 text-center">
                Distribución de Resultados
              </h3>

              {/* Prediction Bars */}
              <div className="space-y-8">
                {/* Favorable - 62% */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <p className="text-sm font-semibold text-slate-700">Resultados Favorables</p>
                    <p className="text-2xl font-bold text-emerald-600">62%</p>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500" style={{ width: '62%' }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Decisiones favorables al demandante por materia jurídica</p>
                </div>

                {/* Parcial - 23% */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <p className="text-sm font-semibold text-slate-700">Resultados Parciales</p>
                    <p className="text-2xl font-bold text-accent-500">23%</p>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent-400 to-amber-300 rounded-full transition-all duration-500" style={{ width: '23%' }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Sentencias parcialmente favorables con resoluciones mixtas</p>
                </div>

                {/* Desfavorable - 15% */}
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <p className="text-sm font-semibold text-slate-700">Resultados Desfavorables</p>
                    <p className="text-2xl font-bold text-rose-600">15%</p>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-full transition-all duration-500" style={{ width: '15%' }}></div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Sentencias desfavorables al demandante</p>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Nota
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Las predicciones incluyen intervalos de confianza ±15-20% y factores que sustentan cada resultado. Son herramientas de apoyo, no sustitutos del criterio profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Section - Gold Tinted */}
      <section className="py-24 bg-gradient-to-b from-amber-50 via-yellow-50 to-white border-y border-accent-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-12 border border-accent-300 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-300 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-950">
                {t.ipPage.ethicsTitle}
              </h2>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              {t.ipPage.ethicsDesc}
            </p>

            <div className="mt-8 pt-8 border-t border-slate-200 grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-950 mb-2">ABA 512</p>
                <p className="text-sm text-slate-600">Estándares de ética</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-950 mb-2">±15-20%</p>
                <p className="text-sm text-slate-600">Intervalo de confianza</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary-950 mb-2">Transparencia</p>
                <p className="text-sm text-slate-600">Explicabilidad SHAP completa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Quieres Ver la Inteligencia Procesal en Acción?
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Solicita una demostración personalizada y descubre cómo el perfilamiento judicial predictivo puede transformar tu estrategia de litigios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-block px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-300 text-primary-950 font-semibold rounded-xl hover:from-accent-300 hover:to-accent-200 transition-all shadow-lg shadow-accent-400/30 hover:shadow-xl hover:scale-105"
            >
              {t.ipPage.cta}
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Contactar Ventas
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Context Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-950 mb-4">¿Cómo Funciona?</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                La Inteligencia Procesal analiza 11,000+ sentencias dominicanas usando XGBoost y SHAP. El modelo identifica patrones en decisiones judiciales considerando juez, materia, abogado, jurisdicción y monto.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-slate-700">Análisis de 11,000+ sentencias dominicanas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-slate-700">32 endpoints especializados por tipo de caso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-slate-700">Explicabilidad con SHAP en cada predicción</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary-950 mb-4">Casos de Uso Reales</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Litigantes usan Inteligencia Procesal para evaluar riesgo antes de llevar casos a juicio, abogados de firmas grandes la utilizan para perfilar jueces antes de cada audiencia.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-slate-700">Evaluación de riesgo previa a juicio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-slate-700">Selección de estrategia por juez</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                  <span className="text-slate-700">Estimación de probabilidades y tiempos de resolución</span>
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
