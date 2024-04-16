"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const images = [
  {
    url: '/images/hero.jpg',
  },
  {
    url: '/images/barista1.jpg',
  },
  {
    url: '/images/girl.jpg',
  }
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <div className="absolute w-full h-full">
        <Image
          src={images[currentImage].url}
          alt="hero"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute text-white text-center font-bold tracking-tighter lg:text-8xl md:text-6xl text-6xl left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center lg:p-20">
        <p>Thought best food in town</p>
        <p>costs you more?</p>
        <Button className="px-8 py-7 mt-10 tracking-wide bg-black font-bold hover:text-orange-300 text-lg lg:text-xl hover:scale-110 transition-transform duration-300 ease-in-out">
          BOOK NOW
        </Button>
      </div>
    </div>
  );
}
