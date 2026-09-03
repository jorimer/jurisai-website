"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { useI18n } from "@/i18n/context";

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="howItWorks" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader number="§ 02" title={t.howItWorks.title} className="mb-12" />
        <ol className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {t.howItWorks.steps.map((step, i) => (
            <li key={i} className="border-t-2 border-primary-800 pt-5">
              <span className="figure-value block text-5xl text-accent-600">{step.number}</span>
              <h3 className="mt-4 text-2xl text-primary-800">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-primary-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
