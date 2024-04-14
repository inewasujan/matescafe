import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-center">BOOK A TABLE</h1>
        <div className="my-72 flex flex-row items-center justify-center gap-4">
            <Image
                src="/people.svg"
                alt="people"
                height={40}
                width={40}
            /> 
            <input type="number" placeholder="Number of Person" className="border-b-4 border-black"/>
            <Image
                src="/calender.svg"
                alt="people"
                height={40}
                width={40}
            />
            <input type="date" placeholder="Date" className="border-b-4 border-black"/> 
            <Image
                src="/time.svg"
                alt="people"
                height={40}
                width={40}
            />     
            <input type="time" placeholder="Time" className="border-b-4 border-black"/> 
            <Button className='px-8 py-7 tracking-wide bg-black font-bold hover:text-orange-300 text-lg lg:text-xl hover:scale-110 transition-transform duration-300 ease-in-out'>
              BOOK NOW
            </Button>                 
        </div>
        <div className='bg-black w-full h-72 text-white items-center justify-center'>
          
          <p>MATESCAFE</p>
        </div>
        
    </footer>
  )
}
