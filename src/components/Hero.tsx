"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-violet-50/30" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary-200/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-200/20 blur-3xl" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium mb-8 animate-fade-in-up">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {t.hero.badge}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight animate-fade-in-up animation-delay-200">
            {t.hero.title}{" "}
            <span className="gradient-text">{t.hero.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Link
              href="/register"
              className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-full shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 hover:from-primary-700 hover:to-accent-700 transition-all"
            >
              {t.hero.cta}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:border-primary-300 hover:text-primary-600 transition-all shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t.hero.ctaSecondary}
            </Link>
          </div>

          {/* Trust indicator */}
          <div className="mt-16 animate-fade-in animation-delay-600">
            <p className="text-sm text-gray-400 mb-4">{t.hero.trustedBy}</p>
            <div className="flex items-center justify-center gap-8 opacity-40">
              <span className="text-sm font-semibold text-gray-500">TSA</span>
              <span className="text-sm font-semibold text-gray-500">TSE</span>
              <span className="text-sm font-semibold text-gray-500">TC</span>
              <span className="text-sm font-semibold text-gray-500">Suprema Corte</span>
            </div>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 max-w-5xl mx-auto animate-fade-in-up animation-delay-600">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-200/50">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-1">
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-8">
                  <div className="bg-gray-700/50 rounded-lg px-4 py-1.5 text-center">
                    <span className="text-xs text-gray-400">app.jurisai.do</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 sm:p-12">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-xs text-gray-400 mb-1">Contratos Revisados</div>
                  <div className="text-2xl font-bold text-gray-900">1,284</div>
                  <div className="text-xs text-green-600 mt-1">+12% este mes</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-xs text-gray-400 mb-1">Horas Ahorradas</div>
                  <div className="text-2xl font-bold text-gray-900">3,450</div>
                  <div className="text-xs text-green-600 mt-1">+8% este mes</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="text-xs text-gray-400 mb-1">Precisión IA</div>
                  <div className="text-2xl font-bold text-gray-900">97.8%</div>
                  <div className="text-xs text-green-600 mt-1">+0.3% este mes</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 h-32">
                  <div className="text-xs text-gray-400 mb-2">Actividad Reciente</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="text-xs text-gray-600">Contrato de Arrendamiento - Revisado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <span className="text-xs text-gray-600">Due Diligence Corp. XYZ - En progreso</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-400" />
                      <span className="text-xs text-gray-600">Investigación Jurisprudencial - Completada</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 h-32">
                  <div className="text-xs text-gray-400 mb-2">Módulos Activos</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-full">Contratos</span>
                    <span className="px-2 py-1 text-xs bg-purple-50 text-purple-700 rounded-full">Due Diligence</span>
                    <span className="px-2 py-1 text-xs bg-green-50 text-green-700 rounded-full">Investigación</span>
                    <span className="px-2 py-1 text-xs bg-amber-50 text-amber-700 rounded-full">Inteligencia Procesal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
