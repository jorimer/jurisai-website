"use client";

import React from "react";
import { useI18n } from "@/i18n/context";

export default function SocialProof() {
  const { t } = useI18n();

  return (
    <section className="relative bg-gradient-to-r from-primary-800 via-primary-900 to-primary-950 py-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-20 w-[300px] h-[300px] rounded-full bg-accent-400 blur-3xl" />
        <div className="absolute bottom-0 left-20 w-[300px] h-[300px] rounded-full bg-accent-400 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {t.socialProof.stats.map((stat, index) => (
            <div
              key={index}
              className={`px-6 sm:px-8 py-8 flex flex-col items-center justify-center text-center ${
                index !== t.socialProof.stats.length - 1
                  ? "border-r border-b md:border-b-0 lg:border-b-0"
                  : ""
              } ${index % 2 === 1 && index !== 3 ? "md:border-r-0" : ""} hover:bg-white/5 transition-colors`}
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
