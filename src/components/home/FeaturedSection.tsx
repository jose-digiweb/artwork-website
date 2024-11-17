'use client';

import { motion } from 'framer-motion';
import { Gallery } from '@/components/home/Gallery';
import { SectionTitle } from './SectionTitle';
import { SectionBgBlur } from './SectionBgBlur';

export const FeaturedSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className='w-full'
    >
      <SectionTitle
        title='Featured Works'
        description="Bange Yhodhy's latest creations."
      />

      <SectionBgBlur className='p-4'>
        <Gallery />
      </SectionBgBlur>
    </motion.section>
  );
};
