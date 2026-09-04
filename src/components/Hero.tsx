"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

const verdicts = [
  {
    tone: "ok" as const,
    label: "pareada",
    id: "TC/0822/23",
    meta: "· fundamento §7.4",
    text: "432 caracteres literales localizados en el texto de esa sentencia.",
  },
  {
    tone: "alert" as const,
    label: "impareada",
    id: "TC/0176/14",
    meta: "",
    text: "El pasaje no aparece en esa sentencia. El propio modelo la declaró «no en expediente». La afirmación se retira del dictamen.",
  },
  {
    tone: "none" as const,
    label: "sin fundamento localizable",
    id: "TC/0168/13",
    meta: "",
    text: "Está en el corpus, pero sin sección de fundamentos identificable. El sistema prohíbe citarla en vez de arriesgar la atribución.",
  },
];

const toneClass = {
  ok: "bg-verdict-ok-bg border-verdict-ok-edge",
  alert: "bg-verdict-alert-bg border-verdict-alert-edge",
  none: "bg-verdict-none-bg border-verdict-none-edge",
};

const toneInk = {
  ok: "text-verdict-ok-ink",
  alert: "text-verdict-alert-ink",
  none: "text-verdict-none-ink",
};

const VerdictIcon = ({ tone }: { tone: "ok" | "alert" | "none" }) => (
  <svg
    className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
      tone === "ok" ? "text-verdict-ok" : tone === "alert" ? "text-verdict-alert" : "text-verdict-none"
    }`}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {tone === "ok" && <path d="M4 10.5l4 4 8-9" />}
    {tone === "alert" && <path d="M10 3.5l7 13H3zM10 8v4M10 14.2v.3" />}
    {tone === "none" && (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="M10 6.5v4M10 13v.3" />
      </>
    )}
  </svg>
);

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative bg-primary-900 overflow-hidden pt-32 lg:pt-40 pb-20 lg:pb-24">
      <div
        className="absolute -top-40 right-0 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,184,122,0.10) 0%, rgba(212,184,122,0) 68%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-start">
          {/* Promesa */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2.5 border border-accent-400/30 rounded-edge px-3 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" aria-hidden="true" />
              <span className="kicker text-accent-400">{t.hero.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.06] text-white">
              Cada cita, atada
              <br />
              al texto que
              <br />
              <em className="text-accent-400 italic">la sostiene</em>.
            </h1>

            <p className="mt-7 text-lg text-primary-200 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <Link
                href="/register"
                className="text-center text-base font-semibold text-primary-900 bg-accent-400 hover:bg-accent-300 px-7 py-4 rounded-edge transition-colors"
              >
                {t.hero.cta}
              </Link>
              <Link
                href="/estado"
                className="text-center text-base font-medium text-white border border-white/25 hover:border-accent-400 hover:text-accent-400 px-7 py-4 rounded-edge transition-colors"
              >
                {t.footer.status}
              </Link>
            </div>

            <p className="mt-7 text-sm text-primary-300 leading-relaxed max-w-lg">
              Cada cifra se publica con su fecha de medición, junto con los límites que la
              plataforma aún tiene.{" "}
              <Link href="/estado" className="text-accent-400 hover:text-accent-300 underline underline-offset-4 decoration-accent-400/40">
                Estado de la plataforma
              </Link>
            </p>
          </div>

          {/* El producto real: la verificación de citas */}
          <div className="bg-white rounded-edge overflow-hidden shadow-2xl shadow-black/40 animate-fade-in-up animation-delay-200">
            <div className="flex items-center justify-between gap-4 px-5 py-3.5 bg-primary-800 border-b border-white/10">
              <span className="mono text-[11px] text-primary-200">
                dictamen · proyecto de ley 30-26
              </span>
              <span className="kicker text-accent-400">Verificación de citas</span>
            </div>

            <div className="px-5 sm:px-6 py-6">
              <blockquote className="font-display text-base sm:text-lg leading-relaxed text-primary-600 border-l-2 border-accent-300 pl-4">
                «…el Tribunal Constitucional ha establecido que la reserva de ley en materia
                sancionadora administrativa alcanza la determinación de la conducta punible…»
              </blockquote>

              <ul className="mt-6 flex flex-col gap-2.5">
                {verdicts.map((v) => (
                  <li
                    key={v.id}
                    className={`flex gap-3 px-3.5 py-3 border rounded-edge ${toneClass[v.tone]}`}
                  >
                    <VerdictIcon tone={v.tone} />
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-2.5">
                        <span className={`text-[13px] font-semibold ${toneInk[v.tone]}`}>
                          {v.label}
                        </span>
                        <span className="mono text-xs text-primary-600">{v.id}</span>
                        {v.meta && <span className="mono text-[11px] text-primary-300">{v.meta}</span>}
                      </div>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-primary-400">{v.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-5 pt-4 border-t border-rule text-xs leading-relaxed text-primary-300">
                No eliminamos el error del modelo. Lo hacemos visible antes de que salga de la firma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
