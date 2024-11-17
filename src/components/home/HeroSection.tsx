'use client';

// Components
import { motion } from 'framer-motion';
import { TextGradientClip } from '../utils';
import { Button } from '../ui/button';
import { GalleryVertical } from 'lucide-react';
import { CloudinaryImage } from '../cloudinary';

/**
 * The HeroSection component
 * @description A component that displays the hero section of the home page
 * @returns {JSX.Element} The HeroSection component
 */
export const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='flex flex-col md:flex-row items-center md:justify-start w-full py-4 md:gap-24 sm:mb-8'
    >
      <div className='w-full md:w-1/2 text-center md:text-left order-2 md:order-1s'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2 tracking-tight'>
          Hi, I&apos;m <TextGradientClip>Bange Yhodhy</TextGradientClip>
        </h1>
        <p className='sm:text-3xl text-xl text-gray-800 mb-4'>
          and I love <TextGradientClip>abstract paintings.</TextGradientClip>
        </p>
        <p className='text-gray-500 leading-relaxed mb-8'>
          My artwork is a vibrant exploration of color, form, and texture. <br /> I draw
          inspiration from my surroundings, my emotions, and my innermost thoughts.
        </p>

        <Button className='gap-4'>
          <GalleryVertical />

          <span>Explore Gallery</span>
        </Button>
      </div>

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
  );
};
