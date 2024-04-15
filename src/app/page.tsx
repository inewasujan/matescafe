import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import Footer  from "@/components/Footer";
import testimonials from "../../data/data";
import TestimonialSliderCard from "@/components/testimonials-slider";
import About from "@/components/About";

export default function Home() {
  
  return (
    <div>
      <Navbar />
      <Hero />
      <About />        
        <div className="relative flex flex-row items-center mx-40">
          <div className="w-1/2">
            <TestimonialSliderCard testimonials={testimonials} />   
          </div>
          <div className="">
            <div className="relative">
              <Image 
                src="/images/square.jpg"
                alt="food"
                width={600}
                height={450}
                className="object-cover h-[70vh] " />
            </div>
            <div className="absolute right-0 top-96">
              <Image 
              src="/images/slides/4.jpg"
              alt="food"
              width={500}
              height={500}
              className="object-cover h-[50vh]" />
            </div>
          </div>            
        </div>     
      <Footer />
    </div>
  );
}
