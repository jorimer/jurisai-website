"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

// Sin escala de severidad: el tintado por gravedad y el color de alerta son
// rótulos de método, y el brand kit los confina al canal técnico interno
// (TONE.md §3.4). Lo que la fila significa lo dice su propio texto.

export default function EstadoPage() {
  const { t } = useI18n();

  return (
    <main>
      <Navbar />

      {/* Cabecera */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-accent-400 bg-accent-400/10 border border-accent-400/30 rounded-full mb-6">
            {t.estadoPage.kicker}
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl text-white tracking-tight">
                {t.estadoPage.title}
              </h1>
              <p className="mt-6 text-lg text-primary-200 leading-relaxed max-w-3xl">
                {t.estadoPage.intro}
              </p>
            </div>
            <div className="flex-shrink-0 lg:text-right">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                {t.estadoPage.lastReviewLabel}
              </div>
              <div className="mt-2 text-2xl font-bold text-white tabular-nums">
                {t.estadoPage.lastReview}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tablas */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14">
            {t.estadoPage.sections.map((section, si) => (
              <div key={si}>
                <h2 className="text-2xl text-primary-800 pb-3 border-b-2 border-primary-800">
                  {section.title}
                </h2>
                <div>
                  {section.rows.map((row, ri) => (
                    <div
                      key={ri}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 px-2 py-3.5 border-b border-rule"
                    >
                      <span
                        className={`flex-1 text-sm sm:text-base ${
                          row.indent ? "pl-5 text-primary-400" : "text-primary-700"
                        }`}
                      >
                        {row.indent && <span aria-hidden="true">— </span>}
                        {row.label}
                      </span>
                      <span
                        className="text-sm sm:text-base font-semibold tabular-nums text-primary-800"
                      >
                        {row.value}
                      </span>
                      <span className="text-xs text-muted tabular-nums sm:w-24 sm:text-right">
                        {row.date}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-primary-400 leading-relaxed">
                  {section.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abiertos */}
      <section className="pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-edge bg-gradient-to-br from-primary-800 to-primary-900 p-8 sm:p-10">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 pb-5 border-b border-white/10">
              <h2 className="text-2xl text-white">{t.estadoPage.openTitle}</h2>
              <span className="text-base text-primary-300">
                {t.estadoPage.openSubtitle}
              </span>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              {t.estadoPage.openItems.map((item, i) => (
                <div key={i}>
                  <h3 className="text-base text-accent-400 leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-primary-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
            <p className="flex-1 text-base text-primary-500 leading-relaxed">
              {t.estadoPage.contactText}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 flex-shrink-0 px-6 py-4 text-base font-semibold text-primary-900 bg-gradient-to-r from-accent-400 to-accent-300 rounded-full hover:from-accent-300 hover:to-accent-200 hover:shadow-lg hover:shadow-accent-400/30 transition-all"
            >
              {t.estadoPage.contactCta}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
