'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link, { LinkProps } from 'next/link';
import { Menu, X } from 'lucide-react';
import { CloudinaryImage } from './cloudinary';

export function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className='relative min-h-dvh w-full flex flex-col overflow-hidden bg-gradient-to-br from-primary via-pink-500 to-red-500'>
      <nav className='relative z-20 w-full bg-white bg-opacity-10 backdrop-blur-sm'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='text-white text-2xl font-bold'>
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
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-purple-700 bg-opacity-90 backdrop-blur-sm'>
            <div className='container mx-auto px-6 py-4'>
              <div className='flex flex-col space-y-4'>
                <NavLink href='/about' onClick={() => setIsMenuOpen(false)}>
                  About Me
                </NavLink>
                <NavLink href='/gallery' onClick={() => setIsMenuOpen(false)}>
                  Gallery
                </NavLink>
                <NavLink href='/contact' onClick={() => setIsMenuOpen(false)}>
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Animated abstract shapes */}
      <motion.div
        className='absolute inset-0 z-0'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70'
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className='absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70'
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70'
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.div>

      {/* Content */}
      <div className='relative z-10 flex-grow flex items-center justify-center'>
        <div className='text-center px-4 max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-8 mb-8'>
            <motion.div
              className='size-64 rounded-full shrink-0 overflow-hidden bg-white shadow-lg'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <CloudinaryImage
                width={256}
                height={256}
                alt='BangeYhodhy'
                src='bange-frame_un1jxc.png'
                className='w-full h-full object-cover'
              />
            </motion.div>
            <div className='md:text-left'>
              <motion.h1
                className='text-4xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-kushan)]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi, I&apos;m Bange Yhodhy
              </motion.h1>
              <motion.p
                className='text-xl md:text-2xl text-white mb-4'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                and I love abstract paintings.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='text-lg md:text-xl text-white mb-6'
              >
                My artwork is a vibrant exploration of color, form, and texture. <br /> I
                draw inspiration from my surroundings, my emotions, and my innermost
                thoughts.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button className='text-lg px-8 py-6 rounded-xl'>
                  Explore My Gallery
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      className='text-white hover:text-purple-200 transition-colors'
      {...props}
    >
      {children}
    </Link>
  );
}