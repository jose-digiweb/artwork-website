'use client';

import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { AnimatePresence, motion } from 'framer-motion';

export const Nav = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className={cn('relative z-50 w-full mb-8', className)}>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-gray-800 text-2xl font-bold'>
            Bange Yhodhy
          </Link>
          <div className='hidden md:flex space-x-6'>
            <NavLink href='/#'>Gallery</NavLink>
            <NavLink href='/#'>About Me</NavLink>
            <NavLink href='/#'>Contact</NavLink>
          </div>

          <Button
            variant='ghost'
            size='icon'
            aria-label='Toggle menu'
            data-open={isMenuOpen}
            className='md:hidden hover:bg-white/30 transition-colors group'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className='flex flex-col gap-2 w-8'>
              <div className='rounded-2xl h-[3px] w-1/2 bg-black duration-500 group-data-[open=true]:rotate-[225deg] origin-right group-data-[open=true]:-translate-x-[12px] group-data-[open=true]:-translate-y-[1px]' />
              <div className='rounded-2xl h-[3px] w-full bg-black duration-500 group-data-[open=true]:-rotate-45' />
              <div className='rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end group-data-[open=true]:rotate-[225deg] origin-left group-data-[open=true]:translate-x-[12px] group-data-[open=true]:translate-y-[1px]' />
            </div>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className='md:hidden absolute top-full inset-x-0 overflow-hidden bg-gradient-to-br from-rose-100 via-fuchsia-100 to-indigo-100 drop-shadow-md z-50'
          >
            <div className='container mx-auto px-6 py-4'>
              <div className='flex flex-col space-y-4 items-end text-xl'>
                <NavLink href='/#' onClick={() => setIsMenuOpen(false)}>
                  Gallery
                </NavLink>
                <NavLink href='/#' onClick={() => setIsMenuOpen(false)}>
                  About Me
                </NavLink>
                <NavLink href='/#' onClick={() => setIsMenuOpen(false)}>
                  Contact
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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