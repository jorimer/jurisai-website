"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { useI18n } from "@/i18n/context";

export default function IPHighlight() {
  const { t } = useI18n();

  return (
    <section className="bg-primary-900 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="§ 03"
          title={t.ipHighlight.title}
          intro={t.ipHighlight.subtitle}
          tone="dark"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <ul className="flex flex-col">
              {t.ipHighlight.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-4 py-3.5 border-b border-white/10"
                >
                  <span className="mono text-[11px] text-accent-400 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-relaxed text-primary-100">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="mono mt-6 text-xs leading-relaxed text-primary-300">
              {t.ipHighlight.tech}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href="/inteligencia-procesal"
                className="text-base font-semibold text-primary-900 bg-accent-400 hover:bg-accent-300 px-7 py-4 rounded-edge transition-colors"
              >
                {t.ipHighlight.cta}
              </Link>
              <p className="text-xs leading-relaxed text-primary-300 max-w-xs">
                {t.ipHighlight.disclaimer}
              </p>
            </div>
          </div>

          {/* Umbral de fiabilidad: tamaños de muestra, no proporciones */}
          <div className="bg-white/[0.04] border border-white/10 rounded-edge p-7 sm:p-8">
            <span className="kicker text-accent-400">Umbral de fiabilidad del perfil</span>
            <div className="mt-6 flex flex-col">
              {t.ipHighlight.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="flex items-baseline justify-between gap-5 py-4 border-b border-white/10"
                >
                  <span className="text-sm leading-snug text-primary-200">{metric.label}</span>
                  <span
                    className={`mono text-base font-medium whitespace-nowrap ${
                      metric.color === "green" ? "text-emerald-400" : "text-accent-400"
                    }`}
                  >
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-primary-300">
              No mostramos un perfil de ejemplo con cifras inventadas: los valores dependen del
              magistrado y del tamaño de su muestra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
