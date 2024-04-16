import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="relative flex flex-col justify-center items-center px-4 container mx-auto pb-56">
      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl tracking-tighter py-40 text-center">
        Food<span className="text-orange-300"> enthusiasts,</span> Let's
        celebrate.
      </h1>
      <div className="grid grid-cols-2 gap-32 md:flex-row items-center">
        <div className="">
          <Image
            src="/images/slides/5.jpg"
            alt="food"
            width={1080}
            height={1080}
            className="object-cover md:h-[60vh] lg:h-[70vh] rounded-md"
          />
        </div>
        <div className="">
          <h2 className="font-bold text-5xl lg:text-7xl my-8 text-center md:text-left mb-12">
            Food
          </h2>
          <div className="text-lg md:text-2xl">
            <p className="text-center md:text-left pb-12">
              We love to keep a clean kitchen, cook tasty food, and want to see
              beautiful smiles on every customer who walks in. We believe that a good food feeds your belly and best quality food feeds your soul.
              
              <br />
              <br />
              We think of customers as part of our
              <span className="text-orange-400 font-semibold"> MATESCAFE </span>
              family.
            </p>
            <Button className="my-8 px-8 md:py-7 tracking-wide bg-black font-bold hover:text-orange-300 text-base md:text-lg hover:scale-110 transition-transform duration-300 ease-in-out">
              VIEW MENU
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
