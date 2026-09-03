"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function Coverage() {
  const { t } = useI18n();

  return (
    <section className="bg-white border-b border-rule py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="kicker text-accent-600 mb-8">{t.coverage.title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {t.coverage.items.map((item, i) => (
            <div key={i} className="border-t-2 border-primary-800 pt-4">
              <p className="text-[15px] leading-relaxed text-primary-700">{item.claim}</p>
              <p className="mono mt-3 text-[10px] uppercase tracking-[0.05em] text-muted leading-relaxed">
                {item.proof}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-primary-300">
          <Link
            href="/estado"
            className="text-accent-600 hover:text-accent-700 underline underline-offset-4 decoration-accent-600/40"
          >
            {t.coverage.cta}
          </Link>
        </p>
      </div>
    </section>
  );
}
