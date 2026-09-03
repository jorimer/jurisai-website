import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estado de la plataforma",
  description:
    "Las cifras de JurisAI con su fecha de medición: corpus, reconciliación contra la fuente oficial, motor de vigencia, calidad y lo que sigue abierto.",
  alternates: { canonical: "https://jurisai.do/estado" },
  openGraph: {
    title: "Estado de la plataforma | JurisAI",
    description:
      "Cada cifra con su fecha de medición, y los tres límites declarados del motor de vigencia. Si un dato lleva más de treinta días sin medirse, lo decimos en vez de citarlo.",
    url: "https://jurisai.do/estado",
  },
};

export default function EstadoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
