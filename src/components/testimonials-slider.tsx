"use client";

import Image from "next/image";
import { imageLoader } from "@/lib/imageLoader";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Testimonial } from "@/types/testimonial";

interface TestimonialSliderCardProps {
  testimonials: Testimonial[];
}

export default function TestimonialSliderCard({
  testimonials,
}: TestimonialSliderCardProps) {
  return (
    <section className="">
      <div className="">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 7000,
            }),
          ]}
        >

          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="">                                 
                  <div className="flex flex-col place-items-end mx-20">
                    <p className="p-4 text-2xl font-light"> Elite Customer </p>
                    <p className="flex flex-row gap-2 text-4xl font-semibold text-gray-900 p-4 ">
                      <span className=" rounded-full">
                        <Image
                          loader={imageLoader}
                          className="h-10 w-10 rounded-full"
                          height={40}
                          width={40}
                          alt={testimonial.name}
                          src={testimonial.imgSrc}
                          loading="lazy"
                        />
                      </span>
                      {testimonial.name}
                    </p>
                    <p className="text-2xl font-light text-gray-900 p-4 text-end">
                      {testimonial.quote}
                    </p>
                    <p className="text-xl font-light text-gray-900 p-4">
                      {testimonial.role}
                    </p>
                    {/* <CarouselNext className="fill-black" /> */}
                  </div>                
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
