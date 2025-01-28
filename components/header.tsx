'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 py-1 flex justify-between items-center'>
        <div className='flex items-center'>
          <Image
            src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HireHub-E6WF95GLinDn8fZXmxpEufGa0Euh0s.png'
            width={500}
            height={500}
            alt='HireHub Logo'
            className='h-20 w-auto'
          ></Image>
        </div>
        <nav className='hidden md:flex space-x-6'>
          <a
            href='#services'
            className='text-gray-600 hover:text-teal-600 transition-colors'
          >
            Services
          </a>
          <a
            href='#process'
            className='text-gray-600 hover:text-teal-600 transition-colors'
          >
            Our Process
          </a>
          <a
            href='#testimonials'
            className='text-gray-600 hover:text-teal-600 transition-colors'
          >
            Testimonials
          </a>
          <a
            href='#contact'
            className='text-gray-600 hover:text-teal-600 transition-colors'
          >
            Contact
          </a>
        </nav>
        <Button className='hidden md:inline-flex'>Get Started</Button>
        <button
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className='md:hidden bg-white py-4'>
          <nav className='flex flex-col space-y-4 px-4'>
            <a
              href='#services'
              className='text-gray-600 hover:text-teal-600 transition-colors'
            >
              Services
            </a>
            <a
              href='#process'
              className='text-gray-600 hover:text-teal-600 transition-colors'
            >
              Our Process
            </a>
            <a
              href='#testimonials'
              className='text-gray-600 hover:text-teal-600 transition-colors'
            >
              Testimonials
            </a>
            <a
              href='#contact'
              className='text-gray-600 hover:text-teal-600 transition-colors'
            >
              Contact
            </a>
            <Button className='w-full h-11'>Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
