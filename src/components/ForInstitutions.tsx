"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { useI18n } from "@/i18n/context";

export default function ForInstitutions() {
  const { t } = useI18n();

  return (
    <section id="instituciones" className="bg-primary-900 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="§ 04"
          title={t.forInstitutions.title}
          intro={t.forInstitutions.subtitle}
          tone="dark"
          className="mb-12"
        />
        <div className="grid lg:grid-cols-3 gap-6">
          {t.forInstitutions.items.map((item, i) => (
            <article
              key={i}
              className="bg-white/[0.04] border border-white/10 rounded-edge p-7 flex flex-col"
            >
              <h3 className="text-2xl leading-snug text-white">{item.name}</h3>
              <p className="mt-3.5 text-[15px] leading-relaxed text-primary-200 flex-1">
                {item.body}
              </p>
              <p className="mt-5 pt-4 border-t border-white/10 text-sm font-medium text-accent-400 leading-relaxed">
                {item.gain}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6 border-t border-white/10 pt-7">
          <p className="flex-1 text-sm leading-relaxed text-primary-300">
            {t.forInstitutions.note}
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 text-center text-base font-semibold text-primary-900 bg-accent-400 hover:bg-accent-300 px-7 py-4 rounded-edge transition-colors"
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
