'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Paintbrush, Palette, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudinaryImage } from '../cloudinary';
import { cn } from '@/lib/utils';
import { SectionTitle } from './SectionTitle';

export function AboutSection() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      title: 'The Artist',
      icon: Paintbrush,
      content:
        "Bange Yhody is a contemporary abstract artist known for pushing the boundaries of form and color. With a career spanning over two decades, Yhody's work has been featured in galleries across Europe and North America.",
    },
    {
      title: 'The Inspiration',
      icon: Palette,
      content:
        'Inspired by urban landscapes, natural phenomena, and human emotions, Yhody creates pieces that resonate on a subconscious level with viewers. Each artwork is an exploration of the unseen connections that bind us all.',
    },
    {
      title: 'The Process',
      icon: Zap,
      content:
        "Yhody's creative process is a dance of intuition and technique. Starting with bold, gestural strokes, Yhody builds layers of color and texture, often incorporating unconventional materials to create depth and intrigue in each piece.",
    },
  ];

  return (
    <section className='w-full bg-white/50 md:bg-transparent backdrop-blur-sm overflow-hidden rounded-xl p-4 md:p-0 mt-8 md:mt-0'>
      <SectionTitle title='About me' description='Read more about Bange Yhodhy.' />

      <div className='grid md:grid-cols-[auto_1fr] grid-cols-1 gap-4 md:gap-12 items-start md:py-4'>
        <motion.div
          className='relative aspect-[3/4] md:w-96 hidden md:flex rounded-lg overflow-hidden'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CloudinaryImage
            fill
            format='auto'
            aspectRatio='4:5'
            crop={{
              type: 'thumb',
              source: true,
            }}
            src='https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731783497/by-insta-1_itbmzd.jpg'
            alt='Bange Yhodhy in the studio'
            className='object-cover rounded-lg'
          />
          <motion.div
            className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.blockquote
            className='absolute bottom-4 left-4 right-4 italic text-white text-sm md:text-base'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Art is the language of the soul, speaking truths that words cannot express.
            <footer className='mt-2 text-xs md:text-sm font-medium'>
              - Bange Yhodhy
            </footer>
          </motion.blockquote>
        </motion.div>

        <div className='h-full flex flex-col gap-4'>
          {cards.map((card, index) => (
            <Card
              key={index}
              className={cn(
                'cursor-pointer transition-all duration-300 border-none',
                activeCard === index
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-gray-100'
              )}
              onClick={() => setActiveCard(index)}
            >
              <CardContent className='p-4 flex items-start space-x-4'>
                <card.icon
                  className={cn(
                    'w-6 h-6',
                    activeCard === index ? 'text-primary-foreground' : 'text-primary'
                  )}
                />
                <div>
                  <h3 className='font-semibold mb-2'>{card.title}</h3>
                  <AnimatePresence mode='wait'>
                    {activeCard === index && (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className='text-sm md:text-base'
                      >
                        {card.content}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button className='w-min mt-6'>
            Read More about Bange Yhodhy
            <ArrowRight className='ml-2 size-4 transition-transform group-hover:translate-x-1' />
          </Button>
        </div>
      </div>
    </section>
  );
}
