import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "TechNova Solutions",
      work: "Building a Custom AI Predictive Model",
      imgDir: "/case-studies/tech-nova.jpg",
      achievement:
        "Developed a predictive AI model to forecast sales trends, improving accuracy by 25% and reducing manual data processing by 40%.",
    },
    {
      company: "GreenHealth Analytics",
      work: "Data Integration for Healthcare Insights",
      imgDir: "/case-studies/healthcare.jpg",
      achievement:
        "Integrated disparate healthcare data sources into a unified dashboard, enabling faster patient outcome analysis and a 15% reduction in reporting time.",
    },
    {
      company: "FinEdge Corp",
      work: "Enhancing Financial Forecasting Models",
      imgDir: "/case-studies/analytics.jpg",
      achievement:
        "Upgraded forecasting algorithms, resulting in a 30% improvement in revenue predictions and better risk mitigation strategies.",
    },
    {
      company: "RetailDrive Ltd",
      work: "Building Interactive Data Dashboards",
      imgDir: "/case-studies/delivery.jpg",
      achievement:
        "Designed and implemented a real-time dashboard for inventory tracking, increasing stock visibility and reducing overstock by 20%.",
    },
    {
      company: "AeroInsights Group",
      work: "Optimizing Aircraft Maintenance Scheduling",
      imgDir: "/case-studies/airplane.jpg",
      achievement:
        "Developed a machine learning solution to optimize maintenance scheduling, decreasing downtime by 18% and improving operational efficiency.",
    },
  ];

  return (
    <section className="mx-6 mt-32">
      <div className=" flex flex-col md:flex-row justify-between mb-10 md:mb-20">
        <div>
          <h3 className="text-4xl md:text-5xl">Case Studies</h3>
          <p className="max-w-[768px] text-slate-700 font-light">
            Our work features creativity and data-driven strategies to deliver
            impactful results that drive growth
          </p>
        </div>
        <Button className="rounded-none mt-3 md:m-0 w-fit">View all</Button>
      </div>
      {/* Rendering the cards */}
      <div className="flex flex-col gap-10 md:gap-20">
        {caseStudies.map((study) => (
          <CaseStudyCard
            achievement={study.achievement}
            company={study.company}
            imgDir={study.imgDir}
            work={study.work}
          />
        ))}
      </div>
    </section>
  );
}

type CaseStudyProps = {
  company: string;
  work: string;
  imgDir: string;
  achievement: string;
};

export function CaseStudyCard({
  company,
  work,
  imgDir,
  achievement,
}: CaseStudyProps) {
  return (
    <div className="border rounded-md flex px-2 pt-2 pb-5 md:p-5 hover:cursor-pointer">
      <div className="grid md:grid-cols-2 md:gap-16">
        <div>
          <Image
            src={imgDir}
            height={720}
            width={1280}
            alt="case-study"
            className="rounded-lg"
          />
        </div>
        <div className="mt-5">
          <p className="text-slate-700 font-light">{company}</p>
          <h4 className="text-3xl md:text-4xl xl:text-5xl">{work}</h4>
          <p>{achievement}</p>
        </div>
      </div>
    </div>
  );
}
