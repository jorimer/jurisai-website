import type { Metadata } from "next";
import { I18nProvider } from "@/i18n/context";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "JurisAI — IA Legal con Citas Verificadas | República Dominicana",
    template: "%s | JurisAI",
  },
  description:
    "IA legal sobre el corpus dominicano: 130.906 sentencias con texto íntegro y 202.444 componentes normativos. Gestión de asuntos, verificación de citas y vigencia point-in-time.",
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
    "gestión de asuntos legales",
    "verificación de citas jurisprudenciales",
    "vigencia normativa República Dominicana",
    "consulta point-in-time normativa",
    "repositorio normativo dominicano",
    "redactor legislativo IA",
    "dictamen proyectos de ley",
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
    title: "JurisAI — Cada cita, atada al texto que la sostiene",
    description:
      "Investiga, redacta y dictamina sobre el corpus normativo y jurisprudencial dominicano, y coteja cada cita contra el texto original. Cuando una cita no se sostiene, el documento lo dice.",
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
      "130.906 sentencias con texto íntegro y el 100 % del corpus normativo embebido. Verificación de citas contra el texto original y vigencia point-in-time.",
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
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
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
              description: "Plataforma de inteligencia artificial especializada en derecho dominicano, construida sobre el corpus normativo y jurisprudencial de la República Dominicana.",
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
                highPrice: "799",
                offerCount: "3",
              },
              featureList: [
                "Gestión de Asuntos (11 tipos, litigiosos y no litigiosos)",
                "Verificación de Citas contra el Texto Original",
                "Motor de Vigencia con Consulta Point-in-Time",
                "Repositorio Normativo con Grafo de Relaciones",
                "Análisis de Contratos con IA",
                "Due Diligence Automatizado",
                "Compliance Regulatorio",
                "eDiscovery",
                "Investigación Legal con RAG",
                "Generación de Documentos",
                "Asistente Legal Virtual",
                "Inteligencia Procesal",
                "Redactor Legislativo IA",
                "Evaluador de Impacto Legislativo",
                "API de Verificación Normativa",
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
