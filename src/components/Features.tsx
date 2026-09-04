"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { useI18n } from "@/i18n/context";

const icons: Record<string, React.ReactNode> = {
  FileCheck: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  Scale: (
    <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  ),
  Shield: (
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  Search: <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  Database: (
    <path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  ),
  BookOpen: (
    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  ),
  MessageSquare: (
    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  ),
  TrendingUp: <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  FileText: (
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  ),
};

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="features" className="bg-paper py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t.features.title}
          intro={t.features.subtitle}
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.features.items.map((feature, i) => (
            <article
              key={i}
              className="group flex flex-col bg-white border border-rule rounded-edge p-6 hover:border-accent-300 transition-colors"
            >
              <span className="inline-flex w-10 h-10 items-center justify-center bg-primary-800 text-accent-400 rounded-edge">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {icons[feature.icon]}
                </svg>
              </span>
              <h3 className="mt-4 text-xl leading-snug text-primary-800">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-primary-400 flex-1">
                {feature.description}
              </p>
              <p className="mt-4 pt-3.5 border-t border-rule text-sm font-medium text-accent-700 leading-snug">
                {feature.purpose}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 bg-primary-900 rounded-edge p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-baseline gap-6 lg:gap-12 border-b border-white/10 pb-6">
            <h3 className="text-2xl sm:text-3xl text-white flex-1">
              {t.features.normativeTitle}
            </h3>
            <p className="lg:w-96 text-sm leading-relaxed text-primary-300">
              {t.features.normativeSubtitle}
            </p>
          </div>
          <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3.5">
            {t.features.normativeItems.map((item, i) => (
              <li key={i} className="flex items-baseline gap-3.5">
                <span className="mono text-[11px] text-accent-400 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] text-primary-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
