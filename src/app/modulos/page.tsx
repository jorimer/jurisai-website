"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

// Icon components
const FileCheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-1m6 1l3 1m-3-1l-3 9a5.002 5.002 0 006.001 0M9 17l3 9m3-9l-3 9" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7m0 0c0 2.21-3.582 4-8 4s-8-1.79-8-4m0 0V5c0 2.21 3.582 4 8 4s8-1.79 8-4v2zm0 9v2c0 2.21-3.582 4-8 4s-8-1.79-8-4v-2m0 0c0 2.21 3.582 4 8 4s8-1.79 8-4" />
  </svg>
);

const BookOpenIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const MessageSquareIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const FileTextIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const getModuleIcon = (index: number) => {
  const icons = [FileCheckIcon, ScaleIcon, ShieldIcon, SearchIcon, DatabaseIcon, BookOpenIcon, MessageSquareIcon, TrendingUpIcon, FileTextIcon];
  const IconComponent = icons[index];
  return <IconComponent />;
};

type TabKey = "core" | "ip" | "normativa";

export default function ModulosPage() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<TabKey>("core");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "core", label: t.modulesPage.tabs.core },
    { key: "ip", label: t.modulesPage.tabs.ip },
    { key: "normativa", label: t.modulesPage.tabs.normativa },
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.modulesPage.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            {t.modulesPage.subtitle}
          </p>

          {/* Tab Navigation */}
          <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-2xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-accent-400 to-accent-300 text-primary-900 shadow-lg shadow-accent-400/25"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="min-h-[60vh]">
        {/* ===== TAB: Módulos Core ===== */}
        {activeTab === "core" && (
          <>
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {t.modulesPage.modules.map((module, index) => (
                    <div
                      key={index}
                      className={`rounded-2xl p-8 border transition-all hover:shadow-lg hover:scale-[1.02] ${
                        index % 2 === 1 ? "bg-slate-50 border-slate-200" : "bg-white border-slate-200"
                      }`}
                    >
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-400 to-accent-300 flex items-center justify-center text-primary-950 mb-6">
                        {getModuleIcon(index)}
                      </div>
                      <h3 className="text-xl font-bold text-primary-950 mb-3">{module.title}</h3>
                      <p className="text-sm text-slate-600 mb-6 leading-relaxed">{module.description}</p>
                      <div className="mb-6 pb-6 border-b border-slate-200">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{module.stats}</p>
                      </div>
                      <div className="mb-6 inline-block px-4 py-2 bg-gradient-to-r from-accent-50 to-yellow-50 border border-accent-200 rounded-full">
                        <p className="text-xs font-semibold text-amber-900">&#10024; {module.impact}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Capacidades</p>
                        <ul className="space-y-2">
                          {module.capabilities.map((capability, capIndex) => (
                            <li key={capIndex} className="flex items-start gap-3">
                              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0"></span>
                              <span className="text-sm text-slate-700">{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ===== TAB: Inteligencia Procesal ===== */}
        {activeTab === "ip" && (
          <>
            {/* Judge Profile Metrics */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
                    {t.ipPage.profileTitle}
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    {t.ipPage.subtitle}
                  </p>
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
                      <p className="text-sm text-slate-600 leading-relaxed">{metric.description}</p>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-accent-400 to-accent-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Prediction Model */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
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

                  <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                    <h3 className="text-lg font-bold text-primary-950 mb-8 text-center">
                      Distribución de Resultados
                    </h3>
                    <div className="space-y-8">
                      <div>
                        <div className="flex justify-between items-baseline mb-3">
                          <p className="text-sm font-semibold text-slate-700">Resultados Favorables</p>
                          <p className="text-2xl font-bold text-emerald-600">62%</p>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: '62%' }}></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Decisiones favorables al demandante por materia jurídica</p>
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline mb-3">
                          <p className="text-sm font-semibold text-slate-700">Resultados Parciales</p>
                          <p className="text-2xl font-bold text-accent-500">23%</p>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-accent-400 to-amber-300 rounded-full" style={{ width: '23%' }}></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Sentencias parcialmente favorables con resoluciones mixtas</p>
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline mb-3">
                          <p className="text-sm font-semibold text-slate-700">Resultados Desfavorables</p>
                          <p className="text-2xl font-bold text-rose-600">15%</p>
                        </div>
                        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-rose-500 to-rose-400 rounded-full" style={{ width: '15%' }}></div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2">Sentencias desfavorables al demandante</p>
                      </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-200">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Nota</p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Las predicciones incluyen intervalos de confianza ±15-20% y factores que sustentan cada resultado. Son herramientas de apoyo, no sustitutos del criterio profesional.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Ethics Section */}
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

            {/* How it works + Use Cases */}
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
          </>
        )}

        {/* ===== TAB: Inteligencia Normativa ===== */}
        {activeTab === "normativa" && (
          <>
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
                    {t.features.normativeTitle}
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    {t.features.normativeSubtitle}
                  </p>
                </div>

                {/* Normative Products - expanded cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {t.features.normativeItems.map((item, index) => {
                    const descriptions = [
                      "Búsqueda semántica full-text sobre leyes, reglamentos y resoluciones con Graph RAG y filtros por jurisdicción, materia y temporalidad.",
                      "Verificación automatizada de vigencia de artículos y disposiciones legales con detección de derogaciones tácitas y expresas.",
                      "Alertas en tiempo real sobre cambios regulatorios, nuevas resoluciones y modificaciones legislativas relevantes para tu práctica.",
                      "Generación automatizada de memorándums legales bajo demanda con estructura CREAC y citas verificadas del corpus normativo.",
                      "Análisis automatizado del impacto de cambios regulatorios sobre contratos vigentes, operaciones y obligaciones de cumplimiento.",
                      "Evaluación regulatoria especializada para fondos de inversión, incluyendo CNMV, SIB y normativa de mercado de valores.",
                      "Contextualización automática de sentencias con las normas aplicables, historial legislativo y jurisprudencia relacionada.",
                      "Dashboard de cumplimiento regulatorio con scoring por área y tracking de remediación con deadlines.",
                      "Herramientas de investigación académica legal con análisis de tendencias legislativas y generación de bibliografía.",
                      "Evaluación prospectiva del impacto de proyectos de ley sobre sectores económicos e industrias específicas.",
                      "Análisis detallado de proyectos de ley en trámite legislativo con tracking de estado y predicción de aprobación.",
                    ];
                    const icons = [
                      "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                      "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                      "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
                      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                      "M13 10V3L4 14h7v7l9-11h-7z",
                      "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                      "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-1m6 1l3-1m-3 1l3 9a5 5 0 01-6 0m3-9l-3 9",
                      "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                      "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                      "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
                      "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                    ];

                    return (
                      <div
                        key={index}
                        className="group rounded-2xl p-8 bg-white border border-slate-200 hover:border-accent-300 hover:shadow-xl transition-all"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center mb-5">
                          <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[index]} />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-primary-950 mb-3">{item}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{descriptions[index]}</p>
                        <div className="mt-5 flex items-center gap-2">
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-50 text-primary-700 rounded-full">
                            Graph RAG
                          </span>
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent-50 text-accent-700 rounded-full">
                            Tiempo Real
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Stack for Normative */}
                <div className="mt-16 bg-gradient-to-br from-primary-800 to-primary-950 rounded-2xl p-10 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Stack Tecnológico</h3>
                  <p className="text-primary-200 max-w-2xl mx-auto mb-8">
                    Infraestructura de última generación para el procesamiento del corpus legislativo dominicano completo.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {["Graph RAG", "Neo4j", "Versionamiento Temporal", "NLP Avanzado", "FastAPI", "Vector Search"].map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      {/* CTA Section - always visible */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para potenciar tu práctica legal?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Accede a los 9 módulos especializados, inteligencia procesal y 11 productos normativos diseñados para abogados dominicanos.
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-300 text-primary-950 font-semibold rounded-xl hover:from-accent-300 hover:to-accent-200 transition-all shadow-lg shadow-accent-400/30 hover:shadow-xl hover:scale-105"
          >
            Solicitar Demo Personalizada
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
