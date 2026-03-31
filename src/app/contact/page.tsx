"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

export default function ContactPage() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", firm: "", firmSize: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend or email service
    console.log("Contact:", form);
    setSubmitted(true);
  };

  const update = (field: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{t.contact.title}</h1>
            <p className="mt-4 text-lg text-gray-500">{t.contact.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-sm text-gray-500">info@jurisai.do</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Santo Domingo, RD</h3>
                <p className="text-sm text-gray-500">SDQ Consulting</p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Horario</h3>
                <p className="text-sm text-gray-500">Lun - Vie: 8:00 AM - 6:00 PM (AST)</p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="text-center py-16 bg-green-50 rounded-2xl">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.contact.success}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text" value={form.name} onChange={update("name")}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-gray-900 placeholder-gray-400"
                        placeholder={t.contact.namePlaceholder}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email" value={form.email} onChange={update("email")}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-gray-900 placeholder-gray-400"
                        placeholder={t.contact.emailPlaceholder}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text" value={form.firm} onChange={update("firm")}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-gray-900 placeholder-gray-400"
                      placeholder={t.contact.firmPlaceholder}
                    />
                    <select
                      value={form.firmSize} onChange={update("firmSize")}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-gray-900"
                    >
                      <option value="">{t.contact.firmSize}</option>
                      {t.contact.firmSizes.map((size, i) => (
                        <option key={i} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    value={form.message} onChange={update("message")}
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm text-gray-900 placeholder-gray-400 resize-none"
                    placeholder={t.contact.messagePlaceholder}
                    required
                  />

                  <button
                    type="submit"
                    className="w-full py-3 px-6 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg shadow-primary-500/25"
                  >
                    {t.contact.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
