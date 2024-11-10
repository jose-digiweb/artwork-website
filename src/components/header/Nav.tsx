'use client';

import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Link, { LinkProps } from 'next/link';
import React, { useState } from 'react';

export const Nav = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={cn('relative z-50 w-full mb-8', className)}>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-gray-800 text-2xl font-bold'>
            Bange Yhodhy
          </Link>
          <div className='hidden md:flex space-x-8'>
            <NavLink href='/#'>About Me</NavLink>
            <NavLink href='/#'>Gallery</NavLink>
            <NavLink href='/#'>Contact</NavLink>
          </div>
          <button
            className='md:hidden text-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white/90 drop-shadow-md z-50'>
          <div className='container mx-auto px-6 py-4'>
            <div className='flex flex-col space-y-4'>
              <NavLink href='/#' onClick={() => setIsMenuOpen(false)}>
                About Me
              </NavLink>
              <NavLink href='/#' onClick={() => setIsMenuOpen(false)}>
                Gallery
              </NavLink>
              <NavLink href='/#' onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

function NavLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & LinkProps) {
  return (
    <Link
      href={href}
      className='text-gray-600 hover:text-gray-800 transition-colors'
      {...props}
    >
      {children}
    </Link>
  );
}
