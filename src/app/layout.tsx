import type { Metadata } from "next";
import { I18nProvider } from "@/i18n/context";
import "./globals.css";

export const metadata: Metadata = {
  title: "JurisAI — Inteligencia Artificial Legal | República Dominicana",
  description:
    "Plataforma de IA especializada en derecho dominicano. Revisión de contratos, due diligence, investigación legal y análisis predictivo para firmas de abogados.",
  keywords: [
    "JurisAI",
    "inteligencia artificial legal",
    "legal tech",
    "República Dominicana",
    "revisión de contratos",
    "due diligence",
    "derecho dominicano",
  ],
  openGraph: {
    title: "JurisAI — Inteligencia Artificial Legal",
    description:
      "Transforma tu práctica legal con IA especializada en derecho dominicano.",
    url: "https://jurisai.do",
    siteName: "JurisAI",
    type: "website",
    locale: "es_DO",
  },
  twitter: {
    card: "summary_large_image",
    title: "JurisAI — IA Legal para República Dominicana",
    description:
      "Potencia tu firma con agentes de IA especializados en derecho dominicano.",
  },
  robots: { index: true, follow: true },
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
      </head>
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
