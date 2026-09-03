"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/context";

export default function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/modulos", label: t.nav.modules },
    { href: "/inteligencia-procesal", label: t.nav.intelligence },
    { href: "/#pricing", label: t.nav.pricing },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-900 border-b border-accent-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-19">
          <Link href="/" className="flex items-center">
            <Image
              src="/jurisai-logo.png"
              alt="JurisAI"
              width={160}
              height={46}
              className="h-9 w-auto brightness-0 invert"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary-100 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/estado"
              className="text-sm text-accent-400 border-b border-accent-400/50 pb-0.5 hover:text-accent-300 hover:border-accent-300 transition-colors"
            >
              {t.footer.status}
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleLocale}
              className="mono px-2.5 py-1 text-xs text-primary-200 border border-white/20 rounded-edge hover:border-accent-400 hover:text-accent-400 transition-colors"
              aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <Link href="/login" className="text-sm text-primary-200 hover:text-white transition-colors">
              {t.nav.login}
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold text-primary-900 bg-accent-400 hover:bg-accent-300 px-5 py-2.5 rounded-edge transition-colors"
            >
              {t.nav.register}
            </Link>
          </div>

          <button
            className="lg:hidden p-3"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={1.6} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-5 pt-2 animate-fade-in border-t border-white/10">
            {[...links, { href: "/estado", label: t.footer.status }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-3 text-base text-primary-100 hover:text-accent-400 border-b border-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={toggleLocale}
                className="mono px-3 py-2.5 text-xs text-primary-200 border border-white/20 rounded-edge"
              >
                {locale === "es" ? "EN" : "ES"}
              </button>
              <Link
                href="/login"
                className="flex-1 text-center text-sm text-primary-100 border border-white/20 px-4 py-3 rounded-edge"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.login}
              </Link>
              <Link
                href="/register"
                className="flex-1 text-center text-sm font-semibold text-primary-900 bg-accent-400 px-4 py-3 rounded-edge"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav.register}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
