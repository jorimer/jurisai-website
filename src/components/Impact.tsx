"use client";

import React from "react";
import { useI18n } from "@/i18n/context";

export default function Impact() {
  const { t } = useI18n();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-300" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-800 bg-white/30 rounded-full mb-4">
            {t.impact.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 tracking-tight">
            {t.impact.title}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.impact.stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {/* Value */}
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-800 to-primary-900 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>

              {/* Label */}
              <p className="text-base font-medium text-primary-700">
                {stat.label}
              </p>

              {/* Hover accent */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-400 to-accent-300 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Optional: Subtext or additional context */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-base text-primary-800/80">
            Métricas medidas en implementaciones reales de JurisAI en firmas dominicanas durante los últimos 12 meses.
          </p>
        </div>
      </div>
    </section>
  );
}
