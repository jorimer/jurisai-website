"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function SocialProof() {
  const { t } = useI18n();

  return (
    <section className="bg-white border-b border-rule py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {t.socialProof.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 border-t-2 border-primary-800 pt-4">
              <span className="figure-value text-4xl lg:text-[2.6rem] text-primary-800">
                {stat.value}
              </span>
              <span className="text-sm leading-snug text-primary-400">{stat.label}</span>
              <span className="mono text-[10px] uppercase tracking-[0.05em] text-muted">
                {stat.date}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-primary-300">
          Cada cifra lleva su fecha de medición. Si un dato nuestro no la tiene, no lo cites.{" "}
          <Link
            href="/estado"
            className="text-accent-600 hover:text-accent-700 underline underline-offset-4 decoration-accent-600/40"
          >
            Cómo medimos
          </Link>
        </p>
      </div>
    </section>
  );
}
