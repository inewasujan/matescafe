import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="z-[999] relative">
        <div className="w-full fixed inset-x-0 top-0 flex justify-between items-center p-4 bg-white px-20">
            <h2 className="text-xl font-extrabold text-slate-950">MATESCAFE</h2>
            <div className="grid grid-cols-4 gap-1 text-sm">
                <Link className="font-bold hover:text-orange-300" href="/">Home</Link>
                <Link className="font-bold hover:text-orange-300" href="/menu">Menu</Link>
                <Link className="font-bold hover:text-orange-300" href="/about">About</Link>
                <Link className="font-bold hover:text-orange-300" href="/contact">Contact Us</Link>   
            </div>
        </div>
    </nav>
  )
}
