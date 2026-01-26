'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Geospatial Portfolio</div>
        
        <div className="hidden md:flex gap-8">
          <Link href="#hero" className="hover:text-primary transition">Home</Link>
          <Link href="#skills" className="hover:text-primary transition">Skills</Link>
          <Link href="#projects" className="hover:text-primary transition">Projects</Link>
          <Link href="#education" className="hover:text-primary transition">Education</Link>
          <Link href="#contact" className="hover:text-primary transition">Contact</Link>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white md:hidden border-b">
            <div className="flex flex-col p-4 gap-4">
              <Link href="#hero" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="#skills" onClick={() => setIsOpen(false)}>Skills</Link>
              <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link href="#education" onClick={() => setIsOpen(false)}>Education</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
