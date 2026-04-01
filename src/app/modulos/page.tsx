"use client";

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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m7.784-4.817a.5.5 0 00-.596.72 10.001 10.001 0 01-16.376 0 .5.5 0 00-.596-.72M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1z" />
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
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.228 6.228 2 10.428 2 15.5c0 5.072 4.228 9.272 10 9.272s10-4.2 10-9.272c0-5.072-4.228-9.247-10-9.247zm0 13v-13m0-1c5.888 0 10.5 3.582 10.5 8s-4.612 8-10.5 8S1.5 16.418 1.5 12 6.088 4 12 4z" />
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

export default function ModulosPage() {
  const { t } = useI18n();

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.modulesPage.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            {t.modulesPage.subtitle}
          </p>
        </div>
      </section>

      {/* 9 Modules Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.modulesPage.modules.map((module, index) => {
              const isAlternateBackground = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-8 border transition-all hover:shadow-lg hover:scale-105 ${
                    isAlternateBackground
                      ? "bg-slate-50 border-slate-200"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-400 to-accent-300 flex items-center justify-center text-primary-950 mb-6">
                    {getModuleIcon(index)}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-primary-950 mb-3">{module.title}</h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">{module.description}</p>

                  {/* Stats Line */}
                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {module.stats}
                    </p>
                  </div>

                  {/* Impact Badge */}
                  <div className="mb-6 inline-block px-4 py-2 bg-gradient-to-r from-accent-50 to-yellow-50 border border-accent-200 rounded-full">
                    <p className="text-xs font-semibold text-amber-900">✨ {module.impact}</p>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                      Capacidades
                    </p>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Normative Ecosystem Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-950 mb-4">
              {t.features.normativeTitle}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.features.normativeSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.features.normativeItems.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-accent-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-400 to-accent-300"></span>
                  <p className="font-semibold text-slate-900 text-sm">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para potenciar tu práctica legal?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Accede a los 9 módulos especializados y 11 productos normativos diseñados para abogados dominicanos.
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
