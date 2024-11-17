'use client';

import { motion } from 'framer-motion';
import { Gallery } from '@/components/home/Gallery';
import { SectionTitle } from './SectionTitle';

export const FeaturedSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className='w-full sm:mb-8'
    >
      <SectionTitle
        title='Featured Works'
        description="Bange Yhodhy's latest creations."
        className='md:mb-4'
      />

      <Gallery />
    </motion.section>
  );
};
