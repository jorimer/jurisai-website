"use client";

import React from "react";
import { useI18n } from "@/i18n/context";

export default function Testimonials() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
            {t.testimonials.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-gray-200 bg-white hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
            >
              {/* Quotation mark icon */}
              <div className="flex items-start mb-4">
                <svg
                  className="w-8 h-8 text-accent-400 opacity-60"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 21c3-1 7-1 11 0 4 0 8-11 8-11s1-7 0-9-4 1-6 2c-2 2-4 8-7 8-4 0-2-4-2-4s2-1 2-4c0-5-5-4-7-4-3 0-4 2-4 4 0 2 2 4 6 6 2 1 7 0 8-1 1-2 0-4-1-4-1 0-3 1-4 2-2 2-4 8-7 8-4 0-2-4-2-4s2-1 2-4c0-5-5-4-7-4z" />
                </svg>
              </div>

              {/* Quote text */}
              <p className="text-base leading-relaxed text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author and firm */}
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm italic text-gray-600">{testimonial.firm}</p>
              </div>

              {/* Hover accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 to-accent-300 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
