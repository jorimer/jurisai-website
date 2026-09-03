"use client";

import React from "react";

/**
 * Cabecera de sección del sistema: número de párrafo en mono, filete fino
 * y titular en la serif de display. Es el ritmo que da el aire de documento.
 */
export default function SectionHeader({
  number,
  title,
  intro,
  aside,
  tone = "light",
  className = "",
}: {
  number: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-12 border-t pt-5 ${
        dark ? "border-accent-400/30" : "border-rule-strong"
      } ${className}`}
    >
      <span
        className={`kicker flex-shrink-0 sm:w-14 sm:pt-3 ${dark ? "text-accent-400" : "text-accent-600"}`}
      >
        {number}
      </span>
      <div className="flex-1 flex flex-col lg:flex-row lg:items-baseline gap-6 lg:gap-10">
        <div className="flex-1">
          <h2
            className={`text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] max-w-3xl ${
              dark ? "text-white" : "text-primary-800"
            }`}
          >
            {title}
          </h2>
          {intro && (
            <p
              className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
                dark ? "text-primary-200" : "text-primary-400"
              }`}
            >
              {intro}
            </p>
          )}
        </div>
        {aside && (
          <div
            className={`lg:w-80 lg:flex-shrink-0 text-sm leading-relaxed ${
              dark ? "text-primary-300" : "text-primary-300"
            }`}
          >
            {aside}
          </div>
        )}
      </div>
    </div>
  );
}
