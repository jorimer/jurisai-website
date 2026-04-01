"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function Pricing() {
  const { t } = useI18n();
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-primary-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-accent-700 bg-accent-50 rounded-full mb-4">
            {t.pricing.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-800 tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-primary-400">{t.pricing.subtitle}</p>

          {/* Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!annual ? "text-primary-800" : "text-primary-300"}`}>
              {t.pricing.monthly}
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                annual ? "bg-accent-400" : "bg-primary-200"
              }`}
            >
              <div
                className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow-sm transition-transform ${
                  annual ? "translate-x-7" : "translate-x-0.5"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-primary-800" : "text-primary-300"}`}>
              {t.pricing.annual}
            </span>
            {annual && (
              <span className="px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                {t.pricing.annualSave}
              </span>
            )}
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, i) => {
            const isPopular = i === 1;
            const isEnterprise = i === 2;

            return (
              <div
                key={i}
                className={`relative rounded-2xl p-8 transition-all ${
                  isPopular
                    ? "bg-gradient-to-br from-primary-800 to-primary-900 text-white shadow-2xl shadow-primary-800/30 scale-105 z-10"
                    : "bg-white border border-primary-100 hover:border-accent-300 hover:shadow-lg"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-bold text-primary-800 bg-accent-400 rounded-full shadow-lg">
                      {t.pricing.popular}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-xl font-bold ${
                      isPopular ? "text-white" : "text-primary-800"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      isPopular ? "text-primary-200" : "text-primary-400"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span
                    className={`text-4xl font-extrabold ${
                      isPopular ? "text-accent-400" : "text-primary-800"
                    }`}
                  >
                    {isEnterprise
                      ? "Custom"
                      : annual
                      ? plan.priceAnnual
                      : plan.priceMonthly}
                  </span>
                  {!isEnterprise && (
                    <span
                      className={`text-sm ${
                        isPopular ? "text-primary-300" : "text-primary-300"
                      }`}
                    >
                      {annual ? t.pricing.perYear : t.pricing.perMonth}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          isPopular ? "text-accent-400" : "text-accent-500"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          isPopular ? "text-primary-100" : "text-primary-500"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={isEnterprise ? "/contact" : "/register"}
                  className={`block text-center py-3 px-6 rounded-full font-semibold text-sm transition-all ${
                    isPopular
                      ? "bg-accent-400 text-primary-900 hover:bg-accent-300 shadow-lg"
                      : isEnterprise
                      ? "bg-primary-800 text-white hover:bg-primary-700"
                      : "bg-primary-800 text-white hover:bg-primary-700 shadow-lg shadow-primary-800/25"
                  }`}
                >
                  {isEnterprise ? t.pricing.ctaEnterprise : t.pricing.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
