"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

export default function AboutPage() {
  const { t } = useI18n();

  const getStatusColor = (status: string) => {
    if (status === "Completado" || status === "Completed") {
      return "bg-green-100 text-green-800";
    } else if (status === "En Progreso" || status === "In Progress") {
      return "bg-amber-100 text-amber-800";
    } else {
      return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.aboutPage.title}
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            {t.aboutPage.subtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="rounded-2xl border-2 border-accent-400 bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                {t.aboutPage.missionTitle}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.aboutPage.missionDesc}
              </p>
            </div>

            {/* Vision Card */}
            <div className="rounded-2xl border-2 border-accent-400 bg-gradient-to-br from-slate-50 to-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                {t.aboutPage.visionTitle}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t.aboutPage.visionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 text-center mb-16">
            {t.aboutPage.roadmapTitle}
          </h2>

          <div className="space-y-8">
            {t.aboutPage.roadmap.map((item: any, index: number) => (
              <div key={index} className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-accent-400 border-4 border-white shadow-lg flex-shrink-0 mt-2"></div>
                  {index !== t.aboutPage.roadmap.length - 1 && (
                    <div className="w-1 bg-gradient-to-b from-accent-400 to-accent-200 flex-grow my-2" style={{ minHeight: "120px" }}></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold text-primary-900">
                        {item.quarter}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 text-center mb-6">
            {t.aboutPage.teamTitle}
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-12">
            {t.aboutPage.teamDesc}
          </p>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-8 text-center">
            <p className="text-slate-200 text-sm mb-3">¿Preguntas? / Questions?</p>
            <a
              href={`mailto:${t.aboutPage.contactEmail}`}
              className="inline-block text-accent-400 text-lg font-semibold hover:text-accent-300 transition-colors"
            >
              {t.aboutPage.contactEmail}
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900 to-primary-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Listo para transformar tu firma? / Ready to transform your firm?
          </h2>
          <p className="text-slate-200 mb-8 text-lg">
            Contáctanos para una demostración personalizada / Contact us for a personalized demo
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-300 text-primary-900 font-bold rounded-xl hover:from-accent-300 hover:to-accent-200 transition-all shadow-lg hover:shadow-xl"
          >
            Contactar →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
