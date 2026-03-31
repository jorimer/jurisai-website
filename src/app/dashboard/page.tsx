"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

const modules = [
  { name: "Revisión de Contratos", nameEn: "Contract Review", icon: "FileCheck", color: "blue", count: 24 },
  { name: "Due Diligence", nameEn: "Due Diligence", icon: "Search", color: "emerald", count: 8 },
  { name: "Investigación Legal", nameEn: "Legal Research", icon: "BookOpen", color: "violet", count: 156 },
  { name: "Inteligencia Procesal", nameEn: "Procedural Intelligence", icon: "Brain", color: "amber", count: 42 },
  { name: "Documentos", nameEn: "Documents", icon: "FileText", color: "rose", count: 67 },
  { name: "Cumplimiento", nameEn: "Compliance", icon: "Shield", color: "cyan", count: 12 },
];

const recentActivity = [
  { action: "Contrato de Arrendamiento revisado", time: "Hace 2 min", status: "completed" },
  { action: "Due Diligence - Corp. ABC iniciado", time: "Hace 15 min", status: "in_progress" },
  { action: "Investigación jurisprudencial completada", time: "Hace 1 hora", status: "completed" },
  { action: "Documento de poder generado", time: "Hace 2 horas", status: "completed" },
  { action: "Análisis de cumplimiento DGII", time: "Hace 3 horas", status: "in_progress" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
  violet: "bg-violet-50 text-violet-600 border-violet-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
  rose: "bg-rose-50 text-rose-600 border-rose-100",
  cyan: "bg-cyan-50 text-cyan-600 border-cyan-100",
};

export default function DashboardPage() {
  const { t, locale, toggleLocale } = useI18n();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">J</span>
              </div>
              <span className="text-lg font-bold text-gray-900">
                Juris<span className="gradient-text">AI</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-primary-600">{t.dashboard.overview}</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">{t.dashboard.modules}</a>
              <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-700">{t.dashboard.settings}</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="px-3 py-1.5 text-xs font-semibold rounded-full border border-gray-200 text-gray-600 hover:border-primary-300"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-700 font-semibold text-xs">RM</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {t.dashboard.welcome}, Ricardo
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            {locale === "es"
              ? "Aquí tienes un resumen de tu actividad reciente."
              : "Here's a summary of your recent activity."}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: locale === "es" ? "Consultas Hoy" : "Today's Queries", value: "47", change: "+12%" },
            { label: locale === "es" ? "Documentos Activos" : "Active Documents", value: "156", change: "+3%" },
            { label: locale === "es" ? "Horas Ahorradas" : "Hours Saved", value: "23.5", change: "+18%" },
            { label: locale === "es" ? "Precisión" : "Accuracy", value: "97.8%", change: "+0.3%" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-green-600 mt-1">{stat.change}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Modules grid */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{t.dashboard.modules}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {modules.map((mod, i) => (
                <button
                  key={i}
                  className={`p-4 rounded-xl border ${colorMap[mod.color]} hover:shadow-md transition-all text-left`}
                >
                  <div className="text-sm font-semibold mb-1">
                    {locale === "es" ? mod.name : mod.nameEn}
                  </div>
                  <div className="text-xs opacity-70">{mod.count} {locale === "es" ? "activos" : "active"}</div>
                </button>
              ))}
            </div>

            {/* Quick actions */}
            <h2 className="text-lg font-semibold text-gray-900 mb-4 mt-8">{t.dashboard.quickActions}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <button className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">
                    {locale === "es" ? "Nuevo Análisis" : "New Analysis"}
                  </div>
                  <div className="text-xs text-gray-500">
                    {locale === "es" ? "Subir documento para análisis" : "Upload document for analysis"}
                  </div>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-900">
                    {locale === "es" ? "Buscar Jurisprudencia" : "Search Jurisprudence"}
                  </div>
                  <div className="text-xs text-gray-500">
                    {locale === "es" ? "TSA, TSE, TC, Suprema Corte" : "TSA, TSE, TC, Supreme Court"}
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Recent activity */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{t.dashboard.recentActivity}</h2>
            <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-50">
              {recentActivity.map((item, i) => (
                <div key={i} className="p-4 flex items-start gap-3">
                  <div
                    className={`w-2 h-2 rounded-full mt-1.5 ${
                      item.status === "completed" ? "bg-green-400" : "bg-blue-400"
                    }`}
                  />
                  <div>
                    <div className="text-sm text-gray-900">{item.action}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Webapp integration note */}
        <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                {locale === "es" ? "Zona de Integración Webapp" : "Webapp Integration Zone"}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === "es"
                  ? "Este dashboard es el shell donde se integra tu webapp Vite/React existente. Conecta tu aplicación FastAPI como backend y embebe los componentes React aquí."
                  : "This dashboard is the shell where your existing Vite/React webapp integrates. Connect your FastAPI application as backend and embed React components here."}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
