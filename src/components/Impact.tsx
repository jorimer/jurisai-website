"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { useI18n } from "@/i18n/context";

export default function Impact() {
  const { t } = useI18n();

  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="§ 06"
          title={t.impact.title}
          aside="Cada cifra lleva su fecha de medición. Si un dato nuestro no la tiene, no lo cites."
          className="mb-12"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {t.impact.stats.map((stat, i) => (
            <div key={i} className="border-t-2 border-primary-800 pt-4">
              <span className="figure-value block text-4xl lg:text-[2.6rem] text-primary-800">
                {stat.value}
              </span>
              <p className="mt-2.5 text-sm leading-snug text-primary-400">{stat.label}</p>
              <span className="mono mt-2 block text-[10px] uppercase tracking-[0.05em] text-muted">
                {stat.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
