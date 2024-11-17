'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowRight, Paintbrush, Palette, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudinaryImage } from '../cloudinary';
import { SectionTitle } from './SectionTitle';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SectionBgBlur } from './SectionBgBlur';

const cards = [
  {
    title: 'The Artist',
    icon: Paintbrush,
    content:
      "Bange Yhodhy is a contemporary abstract artist known for pushing the boundaries of form and color. With a career spanning over two decades, Yhodhy's work has been featured in galleries across Europe and North America.",
  },
  {
    title: 'The Inspiration',
    icon: Palette,
    content:
      'Inspired by urban landscapes, natural phenomena, and human emotions, Yhodhy creates pieces that resonate on a subconscious level with viewers. Each artwork is an exploration of the unseen connections that bind us all.',
  },
  {
    title: 'The Process',
    icon: Zap,
    content:
      "Yhodhy's creative process is a dance of intuition and technique. Starting with bold, gestural strokes, Yhodhy builds layers of color and texture, often incorporating unconventional materials to create depth and intrigue in each piece.",
  },
];

export function AboutSection() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className='w-full flex flex-col'>
      <SectionTitle title='About me' description='Read more about Bange Yhodhy.' />

      <SectionBgBlur className='grid md:grid-cols-[auto_1fr] grid-cols-1 gap-4 lg:gap-12 items-start overflow-hidden rounded-xl p-4'>
        <div className='relative aspect-[3/3] md:w-96 hidden md:flex rounded-lg overflow-hidden'>
          <CloudinaryImage
            fill
            format='auto'
            aspectRatio='4:5'
            crop={{ type: 'thumb', source: true }}
            className='object-cover rounded-lg'
            alt='Bange Yhodhy in the studio'
            src='https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731783497/by-insta-1_itbmzd.jpg'
          />
          <blockquote className='absolute bottom-0 inset-x-0 text-pretty italic text-white text-sm md:text-base p-4 bg-gradient-to-t from-black/80 to-transparent pt-6'>
            Art is the language of the soul, speaking truths that words cannot express.
            <footer className='mt-2 text-xs md:text-sm font-medium'>
              - Bange Yhodhy
            </footer>
          </blockquote>
        </div>

        <div className='flex flex-col gap-4'>
          {cards.map((card, index) => (
            <Card
              key={index}
              className='transition-all duration-300 bg-transparent border'
              onClick={() => setActiveCard(index)}
            >
              <CardContent>
                <CardHeader
                  className={cn(
                    'flex-row items-center cursor-pointer gap-4 group hover:text-primary p-0 transition-colors',
                    {
                      'text-primary mb-2 cursor-auto': activeCard === index,
                    }
                  )}
                >
                  <card.icon className='size-6 shrink-0' />

                  <h3 className='font-semibold text-lg w-full'>{card.title}</h3>
                </CardHeader>

                <div className='w-full pl-10'>
                  <AnimatePresence mode='wait'>
                    {activeCard === index && (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='text-sm md:text-base overflow-hidden text-pretty'
                      >
                        {card.content}

                        <Link
                          href='/'
                          className='text-primary hover:underline mt-2 text-sm flex items-center group w-min'
                        >
                          <span className='truncate font-semibold'>Read More</span>
                          <ArrowRight className='ml-2 size-4 transition-transform group-hover:translate-x-1' />
                        </Link>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionBgBlur>
    </section>
  );
}
