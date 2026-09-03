"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function Transparency() {
  const { t } = useI18n();

  return (
    <section id="transparency" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-accent-700 bg-accent-50 rounded-full mb-4">
            {t.transparency.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 tracking-tight">
            {t.transparency.title}
          </h2>
          <p className="mt-4 text-lg text-primary-400 leading-relaxed">
            {t.transparency.subtitle}
          </p>
        </div>

        {/* Los tres límites */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.transparency.items.map((item, index) => (
            <div key={index} className="border-t-2 border-accent-600 pt-6">
              <div className="text-4xl sm:text-5xl font-bold text-accent-600 tracking-tight">
                {item.value}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-primary-800 leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-primary-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Estado de la plataforma */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary-800 to-primary-900 p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.transparency.footerTitle}
              </h3>
              <p className="mt-3 text-base text-primary-200 leading-relaxed max-w-3xl">
                {t.transparency.footerText}
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 flex-shrink-0 px-6 py-4 text-base font-semibold text-primary-900 bg-gradient-to-r from-accent-400 to-accent-300 rounded-full hover:from-accent-300 hover:to-accent-200 hover:shadow-lg hover:shadow-accent-400/30 transition-all"
            >
              {t.transparency.cta}
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
        </div>
      </div>
    </section>
  );
}
