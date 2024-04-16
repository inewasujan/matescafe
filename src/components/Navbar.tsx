"use client";import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-[999] relative">
      <div className="fixed inset-x-0 top-0 flex justify-between items-center py-5 bg-white md:px-56">
        <div className="flex items-center gap-1">
          <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            height={40}
            width={40}
            className="hover:scale-150 transition-transform duration-300 ease-in-out cursor-pointer"
          />
          </Link>
          <h2 className=" text-xl font-extrabold text-slate-950">
            MATESCAFE
          </h2>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 12a2 2 0 11-4 0 2 2 0 014 0zm-8 2a2 2 0 100-4 2 2 0 000 4zm-7-2a2 2 0 114 0 2 2 0 01-4 0zM17.707 4.293a1 1 0 011.414 1.414L6.414 18.707a1 1 0 01-1.414-1.414L17.707 4.293z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm2-2a1 1 0 00-1 1v1a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1H6z"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-cols-4 text-lg items-center font-bold">
            <Link className="" href="/">Home</Link>
            <Link className="" href="/about">About</Link>
            <Link className="" href="/menu">Menu</Link>
            <Button className="bg-black hover:text-orange-300 hover:scale-125 transition-transform duration-300 ease-in-out ">
              <Link href="/Footer">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4">
            <Link
              className="block font-bold py-2 hover:underline-offset-1 transition duration-300"
              href="/"
            >
              Home
            </Link>
            <Link
              className="block font-bold py-2 hover:text-orange-300 transition duration-300"
              href="/menu"
            >
              Menu
            </Link>
            <Link
              className="block font-bold py-2 hover:text-orange-300 transition duration-300"
              href="/about"
            >
              About
            </Link>
            <Button  className="font-bold bg-orange-300 hover:text-orange-300 hover:scale-110 transition-transform duration-300 ease-in-out mt-4">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
