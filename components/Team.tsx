import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Team() {
  const teamMembers = [
    {
      name: "Collins Amoo",
      title: "CEO",
      imgDir: "/profile.jpg",
    },
    {
      name: "Mike Yeboah",
      title: "Data Analyst",
      imgDir: "/profile2.jpg",
    },
    {
      name: "Christina Michael",
      title: "Machine Learning Engineer",
      imgDir: "/profile4.jpg",
    },
    {
      name: "Andrews Boateng",
      title: "Data Analyst",
      imgDir: "/profile3.png",
    },
  ];

  return (
    <div className="mx-6 mt-32 max-w-[1280px] xl:mx-auto">
      <h3 className="text-4xl md:text-5xl">Our Team</h3>
      <p className="max-w-[768px] text-slate-700 font-light">
        We have got an entire team dedicated to supporting you and your business
      </p>
      <div className="mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            <TeamMember
              imgDir={member.imgDir}
              name={member.name}
              position={member.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type TeamMemberProps = {
  name: string;
  position: string;
  imgDir: string;
};

export function TeamMember({ name, position, imgDir }: TeamMemberProps) {
  return (
    <div className="relative">
      <Image
        className="w-full rounded-lg h-full object-cover"
        src={imgDir}
        width={250}
        height={500}
        alt="team-member"
      />
      <div className="absolute px-3 bottom-2 right-0 left-0">
        <div className="w-full text-center py-1 rounded-lg bg-white opacity-55">
          <p className="font-semibold">{name}</p>
          <p className="text-sm font-light">{position}</p>
        </div>
      </div>
    </div>
  );
}
