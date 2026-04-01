"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/context";

export default function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-black/5 border-b border-primary-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/jurisai-logo.png"
              alt="JurisAI"
              width={160}
              height={46}
              className={`h-9 w-auto transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/modulos"
              className={`text-sm font-medium transition-colors ${scrolled ? "text-primary-500 hover:text-primary-800" : "text-white/80 hover:text-white"}`}
            >
              {t.nav.modules}
            </Link>
            <Link
              href="/#pricing"
              className={`text-sm font-medium transition-colors ${scrolled ? "text-primary-500 hover:text-primary-800" : "text-white/80 hover:text-white"}`}
            >
              {t.nav.pricing}
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${scrolled ? "text-primary-500 hover:text-primary-800" : "text-white/80 hover:text-white"}`}
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full border transition-all ${
                scrolled
                  ? "border-primary-200 text-primary-500 hover:border-accent-400 hover:text-accent-600"
                  : "border-white/30 text-white/80 hover:border-accent-400 hover:text-accent-400"
              }`}
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <Link
              href="/login"
              className={`text-sm font-medium transition-colors px-4 py-2 ${
                scrolled ? "text-primary-600 hover:text-primary-800" : "text-white/90 hover:text-white"
              }`}
            >
              {t.nav.login}
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium text-primary-900 bg-gradient-to-r from-accent-400 to-accent-300 hover:from-accent-300 hover:to-accent-200 px-5 py-2.5 rounded-full transition-all shadow-lg shadow-accent-400/25 hover:shadow-accent-400/40"
            >
              {t.nav.register}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg
              className={`w-6 h-6 ${scrolled ? "text-primary-700" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in bg-white rounded-xl mt-2 p-4 shadow-xl border border-primary-100">
            <Link
              href="/modulos"
              className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.modules}
            </Link>
            <Link
              href="/#pricing"
              className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.pricing}
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.contact}
            </Link>
            <div className="flex items-center gap-2 px-4 pt-2 border-t border-primary-100">
              <button
                onClick={toggleLocale}
                className="px-3 py-1.5 text-xs font-semibold rounded-full border border-primary-200 text-primary-500"
              >
                {locale === "es" ? "EN" : "ES"}
              </button>
              <Link
                href="/login"
                className="text-sm font-medium text-primary-600 px-4 py-2"
              >
                {t.nav.login}
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium text-primary-900 bg-accent-400 px-4 py-2 rounded-full"
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
