"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Coverage from "@/components/Coverage";
import ForFirms from "@/components/ForFirms";
import Features from "@/components/Features";
import IPHighlight from "@/components/IPHighlight";
import ForInstitutions from "@/components/ForInstitutions";
import Transparency from "@/components/Transparency";
import Trust from "@/components/Trust";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Coverage />
      <ForFirms />
      <Features />
      <IPHighlight />
      <ForInstitutions />
      <Transparency />
      <Trust />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
