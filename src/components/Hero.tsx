import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className='w-full h-screen relative mb-20'>
        <div>
        <Image 
            className='w-full h-screen object-cover mb-10'
            src="/images/hero.jpg"
            alt="hero"
            width={1920}
            height={1080}
            />
        </div>
        <div className="absolute font-semibold bottom-52 left-24 lg:text-4xl  text-white tracking-wide">
          <p>
              Though best <span className="text-orange-300">food</span> in town
          </p>
          <p>
              costs you <span className="text-orange-300">more?</span>
          </p>
          <Button variant="secondary" className="bg-black font-medium text-white rounded-none p-4 mt-5">B00K NOW</Button>
        </div>
    </div>

  )
}
