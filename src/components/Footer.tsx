
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
// import Map from '@/components/Map';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-96">
      <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-center">BOOK A TABLE</h1>
      <div className="my-20 md:my-32 lg:my-64 flex flex-col md:flex-row items-center justify-center gap-4">
        <Image
          src="/people.svg"
          alt="people"
          height={40}
          width={40}
        />
        <input type="number" placeholder="Number of Person" className="border-b-4 border-black mb-4 md:mb-0"/>
        <Image
          src="/calender.svg"
          alt="calendar"
          height={40}
          width={40}
        />
        <input type="date" placeholder="Date" className="border-b-4 border-black mb-4 md:mb-0"/>
        <Image
          src="/time.svg"
          alt="time"
          height={40}
          width={40}
        />
        <input type="time" placeholder="Time" className="border-b-4 border-black mb-4 md:mb-0"/>
        <Button className='px-8 py-7 tracking-wide bg-black font-bold hover:text-orange-300 text-lg lg:text-xl hover:scale-110 transition-transform duration-300 ease-in-out md:ml-4'>
          BOOK NOW
        </Button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 bg-black w-full text-white '>
        <div className='text-center md:text-left p-8'>
          <div className='flex justify-center md:justify-center it'>
            <Image
              src="/images/icons/matescafe_dark.png"
              alt="MATESCAFE"
              height={40}
              width={40}
              className="hover:scale-150 transition-transform duration-300 ease-in-out hover:cursor-pointer"
              
            />
            <p className='text-4xl font-bold pl-2'>MATESCAFE</p>
          </div>
          <div className='flex flex-row justify-center md:justify-center gap-4 my-4'>
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
        <div className="p-8 flex flex-col justify-center items-center">
          <p className='text-3xl font-bold mb-4'>Opening Hours</p>          
          <p className="text-lg">Mon - Fri 6:00 am - 2:00 pm</p>
          <p className="text-lg">Sat - Sun 7:00 am - 2:00 pm</p>

          
        </div>
        <div className="p-8 flex flex-col justify-center items-center">
          <p className='text-3xl font-bold mb-4'>Contact Us</p>
          <p className="text-lg">+61 044 9793 923</p>
          <p className="text-lg">114 William St, Carrington, </p>
          <p className="text-lg">Perth WA 6108</p>
          
        </div>
      </div>
        <p className="text-lg flex justify-center items-center w-full bg-black text-white " >© 2024 MATESCAFE. All rights reserved</p>
    </footer>
  );
}
