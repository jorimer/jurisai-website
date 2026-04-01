"use client";

import React from "react";
import { useI18n } from "@/i18n/context";

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section
      id="howItWorks"
      className="py-24 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-primary-800 rounded-full mb-4 border border-primary-700">
            {t.howItWorks.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 tracking-tight">
            {t.howItWorks.title}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting lines (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-1 bg-gradient-to-r from-transparent via-accent-400/50 to-transparent -z-10" />

          {t.howItWorks.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number - large and gold */}
              <div className="text-7xl font-bold text-accent-400/20 mb-4 leading-none">
                {step.number}
              </div>

              {/* Content card */}
              <div className="relative pt-2">
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow pointing to next step (hidden on last step and mobile) */}
                {index < t.howItWorks.steps.length - 1 && (
                  <div className="hidden md:block absolute -right-12 top-8 text-accent-400/40">
                    <svg
                      className="w-8 h-8"
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
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
