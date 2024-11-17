import Image from "next/image";
import { Inter, Syne } from "next/font/google";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import Team from "@/components/Team";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Layout
      title="Precision Algorithms Africa"
      description="Empowering businesses through data-driven insights"
      keywords="data, analytics, visualization"
    >
      <main>
        <Header />
        <Hero />
        <Benefits />
        <Services />
        <Team />
        <CaseStudies />
        <Testimonials />
        <Contact/>
      </main>
    </Layout>
  );
}
