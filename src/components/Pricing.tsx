"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { useI18n } from "@/i18n/context";

export default function Pricing() {
  const { t } = useI18n();
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="§ 07"
          title={t.pricing.title}
          aside={t.pricing.subtitle}
          className="mb-10"
        />

        {/* Mensual / anual */}
        <div className="flex items-center gap-3 mb-10">
          <span className={`text-sm ${!annual ? "text-primary-800 font-medium" : "text-primary-300"}`}>
            {t.pricing.monthly}
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            role="switch"
            aria-checked={annual}
            aria-label={t.pricing.annual}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              annual ? "bg-accent-500" : "bg-primary-200"
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                annual ? "translate-x-6" : "translate-x-0.5"
              }`}
            />
          </button>
          <span className={`text-sm ${annual ? "text-primary-800 font-medium" : "text-primary-300"}`}>
            {t.pricing.annual}
          </span>
          {annual && (
            <span className="kicker text-accent-700 bg-accent-50 border border-accent-200 px-2 py-1 rounded-edge">
              {t.pricing.annualSave}
            </span>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {t.pricing.plans.map((plan, i) => {
            const featured = i === 1;
            return (
              <div
                key={i}
                className={`relative flex flex-col p-7 sm:p-8 rounded-edge border ${
                  featured
                    ? "bg-primary-900 border-primary-900"
                    : "bg-white border-rule"
                }`}
              >
                {featured && (
                  <span className="kicker absolute -top-2.5 left-7 text-primary-900 bg-accent-400 px-2.5 py-1 rounded-edge">
                    {t.pricing.popular}
                  </span>
                )}
                <h3 className={`text-2xl ${featured ? "text-white" : "text-primary-800"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${featured ? "text-primary-300" : "text-primary-300"}`}>
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1.5 mt-6">
                  <span
                    className={`figure-value text-4xl ${featured ? "text-white" : "text-primary-800"}`}
                  >
                    {annual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className={`text-sm ${featured ? "text-primary-300" : "text-primary-300"}`}>
                    {annual ? t.pricing.perYear : t.pricing.perMonth}
                  </span>
                </div>

                <ul
                  className={`flex flex-col gap-2.5 mt-7 pt-6 border-t flex-1 ${
                    featured ? "border-white/12" : "border-rule"
                  }`}
                >
                  {plan.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className={`text-sm leading-snug ${featured ? "text-primary-100" : "text-primary-600"}`}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={i === 2 ? "/contact" : "/register"}
                  className={`mt-7 text-center text-sm font-semibold px-6 py-3.5 rounded-edge transition-colors ${
                    featured
                      ? "text-primary-900 bg-accent-400 hover:bg-accent-300"
                      : "text-primary-800 border border-primary-200 hover:border-accent-500"
                  }`}
                >
                  {i === 2 ? t.pricing.ctaEnterprise : t.pricing.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-7 text-xs text-muted">
          Precios vigentes al 26-ago-2026. Pago con PayPal o transferencia local; factura con NCF
          automática al cobro.
        </p>
      </div>
    </section>
  );
}
