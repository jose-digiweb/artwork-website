'use client';

import { CloudinaryImage } from '@/components/cloudinary';
import { Nav } from '@/components/header/Nav';
import { AbstractedShapes } from '@/components/home/AbstractedShapes';
import { Gallery } from '@/components/home/Gallery';
import { Button } from '@/components/ui/button';
import { GalleryVertical } from 'lucide-react';
import { motion } from 'framer-motion';
import { TextGradientClip } from '@/components/utils';
import { AboutSection } from '@/components/home';
import { Footer } from '@/components/footer/Footer';

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
      <main className='relative z-10 flex flex-col items-center gap-8 justify-center min-h-dvh px-4 lg:px-12 max-w-screen-xl mx-auto'>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col md:flex-row items-center md:justify-start w-full py-4 md:gap-24 sm:mb-8'
        >
          {/* Right Column - Text Content */}
          <div className='w-full md:w-1/2 text-center md:text-left order-2 md:order-1s'>
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

          {/* Left Column - Artist Photo */}
          <div className='relative size-64 order-1 md:order-2 shrink-0 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl mb-6 sm:md-0'>
            <CloudinaryImage
              fill
              priority
              format='auto'
              aspectRatio='1:1'
              sizes='(max-width: 768px) 320px, 640px'
              crop='auto'
              alt='Bange Yhodhy'
              src='https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256581/bange_yhodhy_ub8mki.png'
              className='rounded-full object-cover'
            />
          </div>
        </motion.section>

        {/* Featured Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='w-full sm:mb-8'
        >
          <div className='flex flex-col items-start justify-center space-y-4 md:text-center py-6'>
            <TextGradientClip className='text-3xl font-light tracking-tight sm:text-5xl'>
              Featured Works
            </TextGradientClip>
            <div className='w-16 h-0.5 bg-gray-300' />
            <p className='max-w-[600px] text-gray-500 md:text-lg/relaxed'>
              Explore my latest creations, where form and texture intertwine.
            </p>
          </div>

          <Gallery />
        </motion.section>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
