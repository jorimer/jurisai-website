"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { useI18n } from "@/i18n/context";

export default function Problem() {
  const { t } = useI18n();

  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="§ 01"
          title={t.problem.title}
          intro={t.problem.subtitle}
          className="mb-12"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
          {t.problem.items.map((item, i) => (
            <div key={i} className="border-t border-rule-strong pt-4">
              <div className="flex items-baseline gap-3">
                <span className="mono text-xs text-accent-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl text-primary-800">{item.title}</h3>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-primary-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
