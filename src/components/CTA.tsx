"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/context";

export default function CTA() {
  const { t } = useI18n();

  return (
    <section className="bg-paper border-t border-rule py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl leading-[1.14] text-primary-800">
              Traiga un expediente real a la demo.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-400">
              Cuarenta minutos, su propio caso, y la lista completa de lo que el sistema no pudo
              verificar. Es la mejor forma de saber si esto le sirve.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:flex-shrink-0">
            <Link
              href="/register"
              className="text-center text-base font-semibold text-primary-900 bg-accent-400 hover:bg-accent-300 px-9 py-4 rounded-edge transition-colors"
            >
              {t.cta.button}
            </Link>
            <Link
              href="/contact"
              className="text-center text-sm text-primary-300 hover:text-accent-600 transition-colors"
            >
              {t.cta.buttonSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
