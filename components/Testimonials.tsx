import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Emily Hayes",
      msg: "Partnering with Precision Algorithms Africa has transformed the way we handle healthcare data. Their expertise in integrating complex data sources into a single platform has drastically improved our reporting speed and accuracy. The team’s professionalism and attention to detail exceeded our expectations. We highly recommend them for any data-driven project!",
    },
    {
      name: "John Paul",
      msg: "The team at Precision Algorithms Africa delivered an exceptional interactive dashboard that has revolutionized our inventory management process. We now have real-time visibility into stock levels, which has helped us reduce overstock and streamline operations. Their innovative solutions and commitment to our success made them an invaluable partner.",
    },
    {
      name: "Karen Owusu",
      msg: "We faced significant challenges in optimizing our maintenance schedules, but Precision Algorithms Africa provided a game-changing solution. Their machine learning expertise helped us cut downtime by nearly 20% while ensuring compliance with safety standards. It’s clear they truly understand the unique needs of the aviation industry.",
    },
  ];
  return (
    <section className="mx-6 mt-32">
      <h3 className="text-4xl md:text-5xl mb-5 xl:mb-20">Customer Stories </h3>

      <Swiper navigation={true} modules={[Navigation]} className="">
        {testimonials.map((testimonial) => (
          <SwiperSlide>
            <TestimonialCard name={testimonial.name} msg={testimonial.msg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

type CardProps = {
  msg: string;
  name: string;
};

export function TestimonialCard({ msg, name }: CardProps) {
  return (
    <div className=" flex items-center justify-center text-center">
      <div className="max-w-[738px]">
        <p className="">{msg}</p>
        <p className="font-light mt-3 text-slate-700">{name}</p>
      </div>
    </div>
  );
}
