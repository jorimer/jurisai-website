import type { Metadata } from "next";
import { I18nProvider } from "@/i18n/context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "JurisAI — Decisiones Legales Más Inteligentes | República Dominicana",
    template: "%s | JurisAI",
  },
  description:
    "Plataforma de inteligencia artificial con 23+ módulos legales, 50+ agentes IA y 11,000+ sentencias dominicanas analizadas. Contratos, litigios, compliance, due diligence e inteligencia procesal.",
  keywords: [
    "JurisAI",
    "inteligencia artificial legal",
    "legal tech",
    "República Dominicana",
    "software abogados",
    "revisión de contratos IA",
    "due diligence automatizado",
    "derecho dominicano",
    "jurisprudencia dominicana",
    "análisis contratos IA",
    "inteligencia procesal",
    "perfilamiento judicial",
    "compliance regulatorio",
    "SDQ Consulting",
  ],
  authors: [{ name: "SDQ Consulting Group" }],
  creator: "SDQ Consulting Group",
  publisher: "SDQ Consulting Group",
  metadataBase: new URL("https://jurisai.do"),
  openGraph: {
    title: "JurisAI — Decisiones Legales Más Inteligentes",
    description:
      "23+ módulos legales, 50+ agentes IA. Plataforma de inteligencia artificial especializada en derecho dominicano para firmas de abogados.",
    url: "https://jurisai.do",
    siteName: "JurisAI",
    type: "website",
    locale: "es_DO",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JurisAI — IA Legal para República Dominicana",
    description:
      "Potencia tu firma con 50+ agentes IA especializados en derecho dominicano. Contratos, litigios, compliance e inteligencia procesal.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://jurisai.do",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "JurisAI",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "Plataforma de inteligencia artificial con 23+ módulos legales especializada en derecho dominicano.",
              url: "https://jurisai.do",
              author: {
                "@type": "Organization",
                name: "SDQ Consulting Group",
                url: "https://sdqconsulting.com.do",
                email: "ricardo.mercado@sdqconsulting.com.do",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Santo Domingo",
                  addressCountry: "DO",
                },
              },
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                lowPrice: "99",
                highPrice: "299",
                offerCount: "3",
              },
              featureList: [
                "Análisis de Contratos con IA",
                "Gestión de Litigios",
                "Compliance Regulatorio",
                "Due Diligence Automatizado",
                "eDiscovery",
                "Investigación Legal con RAG",
                "Chatbot Legal 24/7",
                "Predicción de Resultados",
                "Generación de Documentos",
                "Inteligencia Procesal",
                "Repositorio Normativo",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
