import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-6 text-center mt-32">
      <h1 className="xl:mb-5">Precision Algorithms Africa</h1>
      <p className="text-4xl md:text-5xl lg:text-6xl">
        Empowering Businesses <br className="hidden md:block"/> Through Data-Driven Insights
      </p>
      <div className="mt-5 xl:mt-10 mb-10 xl:mb-20 space-x-4">
        <Button>Get in Touch</Button>
        <Button variant="outline">Learn more</Button>
      </div>
      <div className="lg:h-[70vh]">
        <Image className="rounded-xl h-full w-full object-cover" src="/51736.jpg" width={1280} height={720} alt="hero-img" />
      </div>
    </section>
  );
}
