"use client";

import React from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { useI18n } from "@/i18n/context";

export default function Transparency() {
  const { t } = useI18n();

  return (
    <section id="transparency" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t.transparency.title}
          intro={t.transparency.subtitle}
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {t.transparency.items.map((item, i) => (
            <div key={i} className="border-t-2 border-accent-600 pt-5">
              <h3 className="text-xl leading-snug text-primary-800">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-primary-900 rounded-edge p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl text-white">{t.transparency.footerTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-primary-200 max-w-3xl">
                {t.transparency.footerText}
              </p>
            </div>
            <Link
              href="/estado"
              className="flex-shrink-0 text-center text-base font-semibold text-primary-900 bg-accent-400 hover:bg-accent-300 px-7 py-4 rounded-edge transition-colors"
            >
              {t.transparency.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
