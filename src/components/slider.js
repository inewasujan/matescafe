"use client";
import React, { useState } from "react";
import Image from "next/image";

const TwoColumnLayout = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { url: "/images/slides/1.jpg" },
    { url: "/images/slides/2.jpg" },
    { url: "/images/slides/3.jpg" },
    { url: "/images/slides/4.jpg" },
  ];

  const textContent = [
    "Text for Image 1",
    "Text for Image 2",
    "Text for Image 3",
  ];

  const handleTextChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex items-center">
        <div>Testimonial</div>
        <div>
            <Image
                src="/images/slides/2.jpg"
                alt="Image"
                width={400}
                height={400}
            />
        </div>
    </div>
        
  );
};

export default TwoColumnLayout;
