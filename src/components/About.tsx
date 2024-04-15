import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="relative flex flex-col justify-center items-center px-4 md:px-10 lg:px-40 py-8 md:py-14 lg:py-24">
      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-left lg:mb-10 md:mb-8 mb-8">
        Food<span className="text-orange-300"> enthusiasts,</span> let's
        celebrate.
      </h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mx-4 md:mx-0 md:m-20">
          <Image
            src="/images/slides/3.jpg"
            alt="food"
            width={1080}
            height={1080}
            className="object-cover md:h-[60vh] lg:h-[80vh]"
          />
        </div>
        <div className="w-full md:w-1/2 mx-4 md:m-20">
          <h2 className="font-bold text-4xl lg:text-6xl my-8 text-center md:text-left">
            Food
          </h2>
          <div className="text-lg md:text-xl">
            <p className="text-center md:text-left">
              We love to keep a clean kitchen, cook tasty food, and want to see
              beautiful smiles on every customer who walks in.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              <br />
              We think of customers as part of our
              <span className="text-orange-300 font-semibold"> MATESCAFE </span>
              family.
            </p>
            <Button className="my-8 px-8  md:py-7 tracking-wide bg-black font-bold hover:text-orange-300 text-base md:text-lg hover:scale-110 transition-transform duration-300 ease-in-out">
              VIEW MENU
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
