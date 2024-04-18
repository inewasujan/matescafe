import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import Footer from "@/components/Footer";
import testimonials from "../../data/data";
import TestimonialSliderCard from "@/components/testimonials-slider";
import About from "@/components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />    
      <div className="container mx-auto relative flex flex-row items-center content-center my-20">
        <div className="max-w-xl">
          <TestimonialSliderCard testimonials={testimonials} />
        </div>
        <div>
            <Image
              src="/images/slides/1.jpg"
              alt="food"
              width={1000}
              height={600}
              className="object-cover rounded-md absolute right-24 -bottom-9 max-w-52 h-72 z-50"
            />
            <Image
              src="/images/slides/2.jpg"
              alt="food"
              width={300}
              height={500}
              className="object-cover rounded-md absolute top-0 right-56 max-w-xl h-full"
            />
        </div>
      </div>
      <Footer />
    </div>
  );
}
