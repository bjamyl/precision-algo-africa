import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  BrainCircuit,
  ChartScatter,
  Database,
  BriefcaseBusiness,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Data Analysis & Visualization",
      subtext:
        "Transform raw data into actionable insights with our advanced analysis and visualisation techniques. We help you understand complex patterns and trends in your data enabling informed decision making",
      icon: <ChartScatter />,
    },
    {
      title: "Predictive Modeling & Machine Learning",
      subtext:
        "Leverage the power of AI and Machine Learning to forecast trends, optimize operations and gain a competitive edge. Our models help you anticipate market changes and customer behaviours",
      icon: <BrainCircuit />,
    },
    {
      title: "Database Engineering & ETL Services",
      subtext:
        "Build robust data pipelines and inrastructure to collect, process and store your data efficiently. We ensure your data is clean, accessible and ready for analysis",
      icon: <Database />,
    },
    {
      title: "Business Intelligence Solutions",
      subtext:
        "Empower your team with custom dashboards and reports that provide real-time insights into your business performance. Our BI solutions help you track your KPIs and make data-driven decisions.",
      icon: <BriefcaseBusiness />,
    },
  ];
  return (
    <section className="mx-6">
      <div className=" flex flex-col md:flex-row justify-between mb-10 md:mb-20">
        <div>
          <h3 className="text-4xl md:text-5xl">Our Services</h3>
          <p className="max-w-[768px] text-slate-700 font-light">
            We offer a wide range of data analytics, AI and ML solutions that
            propel your organization to unimaginable heights
          </p>
        </div>
        <Button className="rounded-none mt-3 md:m-0 w-fit">Get in touch</Button>
      </div>
      {/* Holding and rendering the cards */}
      <div className="grid md:grid-cols-2 gap-5 ">
        {services.map((service) => (
          <ServiceCard
            title={service.title}
            subtext={service.subtext}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}

type ServiceCardProps = {
  title: string;
  subtext: string;
  icon: React.ReactElement;
};

export function ServiceCard({ title, subtext, icon }: ServiceCardProps) {
  return (
    <div className="border rounded-lg p-5 hover:cursor-pointer md:h-[250px]">
      <div className="mb-6">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="font-light text-slate-700">{subtext}</p>
    </div>
  );
}
