'use client';

import { CloudinaryImage } from '@/components/cloudinary';
import { Nav } from '@/components/header/Nav';
import { AbstractedShapes } from '@/components/home/AbstractedShapes';
import { Gallery } from '@/components/home/Gallery';
import { Button } from '@/components/ui/button';
import { GalleryVertical, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TextGradientClip } from '@/components/utils';

/**
 * The Home component
 * @description A component that displays the home page
 * @returns The Home component
 */
export default function HomePage() {
  return (
    <div className='min-h-full w-full h-full bg-gradient-to-br from-rose-100 via-fuchsia-100 to-indigo-100 relative overflow-y-auto'>
      <AbstractedShapes />

      <Nav className='sticky top-0 bg-white/20 backdrop-blur-sm' />

      {/* Main Content */}
      <main className='relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 lg:px-12 max-w-7xl mx-auto'>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col lg:flex-row items-center justify-center w-full py-4 md:mb-8'
        >
          {/* Left Column - Artist Photo */}
          <div className='relative size-64 shrink-0 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl mb-6 sm:md-0'>
            <CloudinaryImage
              fill
              priority
              sizes='(max-width: 768px) 320px, 640px'
              crop='auto'
              alt='Bange Yhodhy'
              src='bange_yhodhy_ub8mki.png'
              className='rounded-full object-cover'
            />
          </div>

          {/* Right Column - Text Content */}
          <div className='w-full lg:w-1/2 lg:pl-12 text-center lg:text-left'>
            <h1 className='text-5xl font-bold text-gray-800 mb-2 tracking-tight'>
              Hi, I&apos;m <TextGradientClip>Bange Yhodhy</TextGradientClip>
            </h1>
            <p className='sm:text-3xl text-xl text-gray-800 mb-4'>
              and I love <TextGradientClip>abstract paintings.</TextGradientClip>
            </p>
            <p className='text-gray-500 leading-relaxed mb-8'>
              My artwork is a vibrant exploration of color, form, and texture. <br /> I
              draw inspiration from my surroundings, my emotions, and my innermost
              thoughts.
            </p>

            <Button className='gap-4'>
              <GalleryVertical />

              <span>Explore Gallery</span>
            </Button>
          </div>
        </motion.section>

        {/* Featured Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='w-full'
        >
          <div className='flex flex-col items-center justify-center space-y-4 text-center py-8'>
            <TextGradientClip className='text-3xl font-light tracking-tight sm:text-5xl'>
              Featured Works
            </TextGradientClip>
            <div className='w-16 h-0.5 bg-gray-300' />
            <p className='max-w-[600px] text-gray-500 md:text-lg/relaxed'>
              Explore my latest creations, where form and texture intertwine.
            </p>
          </div>

          <Gallery />

          <div className='text-center py-8'>
            <Link href='/#'>
              <Button className='h-12'>
                <ImageIcon />
                <span>View All Artworks</span>
              </Button>
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
