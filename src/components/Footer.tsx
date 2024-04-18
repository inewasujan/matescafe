import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import Map from '@/components/Map';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center">
      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-center mt-40">
        BOOK A TABLE
      </h1>
      <div className="my-20 md:my-32 lg:my-40 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex gap-2">
          <Image src="/people.svg" alt="people" height={40} width={40} />
          <input
            type="number"
            placeholder="Number of Person"
            className="border-b-2 border-black mb-4 md:mb-0"
          />
        </div>
        <div className="flex gap-2">
          <Image src="/calender.svg" alt="calendar" height={40} width={40} />
          <input
            type="date"
            placeholder="Date"
            className="border-b-2 border-black mb-4 md:mb-0"
          />
        </div>
        <div className="flex gap-2">
          <Image src="/time.svg" alt="time" height={40} width={40} />
          <input
            type="time"
            placeholder="Time"
            className="border-b-2 border-black mb-4 md:mb-0"
          />
        </div>
        <Button className="px-8 py-7 tracking-wide bg-black font-bold hover:text-orange-300 text-lg lg:text-xl hover:scale-110 transition-transform duration-300 ease-in-out md:ml-4">
          BOOK NOW
        </Button>
      </div>
      <div className="grid md:grid-cols-3 bg-black w-full text-white md:p-10 p-8 gap-8 ">
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-center">
            <Image
              src="/images/icons/matescafe_dark.png"
              alt="MATESCAFE"
              height={40}
              width={40}
              className="hover:scale-125 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            />
            <p className="text-4xl font-bold pl-2">MATESCAFE</p>
          </div>
          <div className="flex flex-row justify-center md:justify-center gap-4 mt-4">
            <Image
              src="/images/socials/faceb.png"
              alt="Facebook"
              height={40}
              width={40}
              className="hover:scale-125 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            />
            <Image
              src="/images/socials/twitter.png"
              alt="Twitter"
              height={40}
              width={40}
              className="hover:scale-125 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            />
            <Image
              src="/images/socials/insta.png"
              alt="Instagram"
              height={40}
              width={40}
              className="hover:scale-125 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col text-center gap-2">
          <p className="text-3xl font-bold">Contact Us</p>
          <p className="text-lg">+61 044 9793 923</p>
          <p className="text-lg">114 William St, Carrington, </p>
          <p className="text-lg">Perth WA 6108</p>
          <p className="text-3xl font-bold">Opening Hours</p>
          <p className="text-lg">Mon - Fri 6:00 am - 2:00 pm</p>
          <p className="text-lg">Sat - Sun 7:00 am - 2:00 pm</p>
          <p className="text-lg text-center w-full bg-black text-white mt-20 ">
            © 2024 MATESCAFE. All rights reserved
          </p>
        </div>
        <div className="flex flex-col text-center gap-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.352439088523!2d115.88885721251746!3d-31.924187473923343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32ba57f35f4549%3A0x7654adbd5f3f2b7b!2s3VGR%2B8H%2C%20Maylands%20WA%206051!5e0!3m2!1sen!2sau!4v1713404695714!5m2!1sen!2sau"
            width="550"
            height="350"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
