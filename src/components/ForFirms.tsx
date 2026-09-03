"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { useI18n } from "@/i18n/context";

export default function ForFirms() {
  const { t } = useI18n();

  return (
    <section id="firmas" className="bg-paper py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="§ 01"
          title={t.forFirms.title}
          intro={t.forFirms.subtitle}
          className="mb-12"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {t.forFirms.items.map((item, i) => (
            <article
              key={i}
              className="bg-white border border-rule rounded-edge p-7 sm:p-8 flex flex-col"
            >
              <div className="flex items-baseline gap-3.5">
                <span className="mono text-xs text-accent-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl leading-snug text-primary-800">{item.moment}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-primary-600 flex-1">
                {item.body}
              </p>
              <p className="mt-5 pt-4 border-t border-rule text-sm font-medium text-accent-700">
                {item.gain}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
