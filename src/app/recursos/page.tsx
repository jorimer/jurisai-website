"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

const categoryIcons = [
  // BookOpen
  <svg key="0" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
  // Scale
  <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
  // Shield
  <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  // Star
  <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
];

export default function ResourcesPage() {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.resourcesPage.title}
          </h1>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto">
            {t.resourcesPage.subtitle}
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.resourcesPage.categories.map((category, index) => (
              <div
                key={index}
                className="rounded-xl bg-gradient-to-br from-primary-900 to-primary-950 p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent-400 rounded-lg group-hover:scale-110 transition-transform text-primary-900">
                    {categoryIcons[index]}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50/50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-primary-100 p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-primary-800 text-center mb-4">
              {t.resourcesPage.comingSoon}
            </h2>
            <p className="text-lg text-primary-400 text-center mb-10">
              {t.resourcesPage.comingSoonDesc}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent text-primary-800 placeholder-primary-300"
                placeholder={t.resourcesPage.emailPlaceholder}
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-accent-400 to-accent-300 text-primary-900 font-bold rounded-xl hover:from-accent-300 hover:to-accent-200 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                {t.resourcesPage.subscribe}
              </button>
            </form>

            {subscribed && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-center">
                <p className="text-green-800 font-semibold">
                  ¡Suscripción completada!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
