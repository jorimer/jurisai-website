"use client";

import React from "react";

/**
 * Cabecera de sección: filete fino y titular en la serif de display.
 *
 * Sin numeración de párrafo. El «§ 01» era andamiaje de método a la vista,
 * y el brand kit lo confina al canal técnico interno: en pieza externa el
 * lector ve la conclusión, no el método (TONE.md §3.4).
 */
export default function SectionHeader({
  title,
  intro,
  aside,
  tone = "light",
  className = "",
}: {
  title: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`border-t pt-6 ${dark ? "border-accent-400/30" : "border-rule-strong"} ${className}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-baseline gap-6 lg:gap-12">
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
          <div className="lg:w-80 lg:flex-shrink-0 text-sm leading-relaxed text-primary-300">
            {aside}
          </div>
        )}
      </div>
    </div>
  );
}
