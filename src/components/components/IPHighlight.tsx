"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function IPHighlight() {
  const { t } = useI18n();

  // SVG icons for metrics
  const MetricsChart = () => (
    <div className="flex flex-col gap-4">
      {/* Title */}
      <div className="text-sm font-semibold text-primary-200 mb-2">
        Perfil Judicial - Predicción
      </div>

      {/* Metric bars with actual data from t.ipHighlight.metrics */}
      <div className="space-y-4">
        {t.ipHighlight.metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-primary-300">{metric.label}</span>
              <span className="text-sm font-bold text-white">{metric.value}</span>
            </div>
            <div className="w-full h-2 bg-primary-700/50 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  metric.color === "green"
                    ? "bg-emerald-400"
                    : metric.color === "gold"
                      ? "bg-accent-400"
                      : "bg-red-400"
                }`}
                style={{
                  width: metric.value.replace("%", ""),
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Sample profile name */}
      <div className="mt-6 pt-4 border-t border-primary-700/30">
        <div className="text-xs text-primary-400">Juez: Hon. Dr. Carlos Rodríguez</div>
        <div className="text-xs text-primary-400 mt-1">Corte: TSA (Civil)</div>
      </div>
    </div>
  );

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950" />

      {/* Decorative blurs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-400/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-400/3 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Content */}
          <div>
            {/* Badge */}
            <span className="inline-block px-3 py-1 text-sm font-semibold text-accent-400 bg-accent-400/10 border border-accent-400/30 rounded-full mb-6">
              {t.ipHighlight.sectionTitle}
            </span>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              {t.ipHighlight.title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-primary-200 mb-8">
              {t.ipHighlight.subtitle}
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {t.ipHighlight.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent-400 flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-primary-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech line */}
            <div className="py-4 px-4 rounded-lg bg-primary-800/50 border border-primary-700/50 mb-8">
              <p className="text-sm text-primary-300">
                <span className="font-semibold text-accent-400">Tecnología:</span>{" "}
                {t.ipHighlight.tech}
              </p>
            </div>

            {/* Disclaimer */}
            <p className="text-xs italic text-primary-400 mb-8">
              {t.ipHighlight.disclaimer}
            </p>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-primary-900 bg-gradient-to-r from-accent-400 to-accent-300 rounded-full hover:shadow-lg hover:shadow-accent-400/30 transition-all"
            >
              {t.ipHighlight.cta}
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
          </div>

          {/* Right side: Mockup with metrics */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-primary-800/80 border border-primary-700/50 p-8 shadow-2xl shadow-black/30">
              {/* Mockup header */}
              <div className="flex items-center gap-2 pb-6 border-b border-primary-700/30">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-400 to-accent-300 flex items-center justify-center text-primary-900 font-bold text-sm">
                  IP
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Inteligencia Procesal</div>
                  <div className="text-xs text-primary-400">Análisis Judicial en Tiempo Real</div>
                </div>
              </div>

              {/* Metrics visualization */}
              <div className="mt-6">
                <MetricsChart />
              </div>

              {/* Additional info box */}
              <div className="mt-6 pt-6 border-t border-primary-700/30 grid grid-cols-2 gap-4">
                <div className="bg-primary-900/50 rounded-lg p-3">
                  <div className="text-xs text-primary-400">Confianza</div>
                  <div className="text-lg font-bold text-white mt-1">±15-20%</div>
                </div>
                <div className="bg-primary-900/50 rounded-lg p-3">
                  <div className="text-xs text-primary-400">Sentencias</div>
                  <div className="text-lg font-bold text-white mt-1">11,000+</div>
                </div>
              </div>
            </div>

            {/* Floating accent element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent-400/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
