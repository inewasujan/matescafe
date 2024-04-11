import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { Button } from "@/components/ui/button";
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="w-full h-screen relative flex flex-col justify-between items-center">
        <h1 className='font-extrabold text-6xl'>~ We love to make food ~</h1>
        <div className="flex flex-x-2 items-center my-10">
          <div>
            <Image 
              src="/images/barista.jpg"
              alt="food"
              width={640}
              height={440}
            />

          </div>
          <div className='mx-20'>
            <h1 className="text-6xl font-bold mb-4">Food</h1>
            <p className="pb-4">We love to keep clean kitchen, cook tasty food and want to see beautiful smiles of every customer who walks in.</p>
            <p>We think of customer as part of our <span className="text-orange-300 font-semibold">MATESCAFE</span> family.</p>
            <Button variant="secondary" className="bg-black font-medium text-white rounded-none p-4 mt-5">VIEW MENU</Button>
          </div>
        </div>
      </div>

    </div>
  )
}
