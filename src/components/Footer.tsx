"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  const columns = [
    {
      title: t.footer.product,
      links: [
        { href: "/modulos", label: t.nav.modules },
        { href: "/inteligencia-procesal", label: t.nav.intelligence },
        { href: "/#pricing", label: t.nav.pricing },
        { href: "/contact", label: t.nav.contact },
      ],
    },
    {
      title: t.footer.company,
      links: [
        { href: "/acerca", label: t.footer.about },
        { href: "/recursos", label: t.footer.blog },
        { href: "/estado", label: t.footer.status },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { href: "#", label: t.footer.privacy },
        { href: "#", label: t.footer.terms },
        { href: "#", label: t.footer.cookies },
      ],
    },
  ];

  return (
    <footer className="bg-primary-950 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-80 lg:flex-shrink-0">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/jurisai-logo.png"
                alt="JurisAI"
                width={150}
                height={43}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-primary-300">
              {t.footer.description}
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="kicker text-primary-400 mb-4">{col.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-200 hover:text-accent-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-primary-400">
            &copy; {new Date().getFullYear()} JurisAI by SDQ Consulting. {t.footer.rights}
          </p>
          <p className="text-xs text-primary-400">
            Sus datos no entrenan modelos. Aislamiento por firma. Registro de auditoría por acción.
          </p>
        </div>
      </div>
    </footer>
  );
}
