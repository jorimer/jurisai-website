"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import IPHighlight from "@/components/IPHighlight";
import Testimonials from "@/components/Testimonials";
import Impact from "@/components/Impact";
import Trust from "@/components/Trust";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <Features />
      <IPHighlight />
      <Testimonials />
      <Impact />
      <Trust />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
