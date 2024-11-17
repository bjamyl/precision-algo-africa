import React from "react";
import { Landmark, ChartNoAxesCombined, Rocket } from "lucide-react";
export default function Benefits() {
  return (
    <div className="mx-6 my-12 xl:my-[120px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:my-16 max-w-[1280px] xl:mx-auto">
      <BenefitCard
        icon={<Landmark />}
        title="Cost Savings and Resource Allocation"
        subtext="Data visualization tools can highlight spending inefficiencies, leading to better budget management and ROI improvements."
      />
      <BenefitCard
        icon={<ChartNoAxesCombined />}
        title="Competitive Advantage"
        subtext="Staying ahead with market trends, customer demands, and internal process improvements can help your business outpace competitors."
      />
      <BenefitCard
        icon={<Rocket />}
        title="Improved Decision-Making"
        subtext="Predictive analytics can anticipate market trends, customer behavior, and risks, allowing you to proactively adjust strategies."
      />
    </div>
  );
}
type BenefitCardProps = {
  icon: React.ReactElement;
  title: string;
  subtext: string;
};

export function BenefitCard({ icon, title, subtext }: BenefitCardProps) {
  return (
    <div className="flex gap-3">
      <div className="p-3 rounded-md h-fit bg-slate-200 w-fit">{icon}</div>
      <div className="">
        <p className="font-bold text-lg">{title}</p>
        <p className="text-slate-700">{subtext}</p>
      </div>
    </div>
  );
}
