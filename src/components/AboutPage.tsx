'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { SectionTitle } from './homePage/utils';

const timeline = [
  { year: 2010, event: 'Began formal art education at the National Art Academy' },
  {
    year: 2013,
    event: "First solo exhibition 'Chromatic Emotions' at the Urban Gallery",
  },
  {
    year: 2015,
    event: 'Awarded the Young Artist of the Year by the Contemporary Art Foundation',
  },
  { year: 2017, event: 'Residency at the International Art Collective in Paris' },
  { year: 2019, event: "Published first art book 'Abstract Journeys'" },
  {
    year: 2021,
    event: 'Opened personal art studio and began mentoring aspiring artists',
  },
];

export function AboutPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-50 to-purple-50'>
      <header className='container mx-auto px-4 py-6'>
        <nav className='flex items-center justify-between'>
          <Link href='/' className='text-xl font-semibold'>
            Bange Yhodhy
          </Link>
          <div className='flex gap-6'>
            <Link href='/about' className='text-sm hover:text-purple-600'>
              About Me
            </Link>
            <Link href='/gallery' className='text-sm hover:text-purple-600'>
              Gallery
            </Link>
            <Link href='/contact' className='text-sm hover:text-purple-600'>
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className='container mx-auto px-4'>
        <section className='py-12 md:py-24'>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <motion.div
              className='relative w-64 h-64 md:w-96 md:h-96'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full' />
              <Image
                src='https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731783497/by-insta-1_itbmzd.jpg'
                alt='Bange Yhodhy portrait'
                width={384}
                height={384}
                className='relative rounded-full object-cover'
                priority
              />
            </motion.div>
            <div className='max-w-xl text-center md:text-left'>
              <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                About{' '}
                <span className='bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent'>
                  Bange Yhodhy
                </span>
              </h1>
              <p className='text-xl mb-6'>
                Abstract artist, color enthusiast, and emotion translator
              </p>
              <p className='text-gray-600 mb-6'>
                Welcome to my world of vibrant abstractions and emotive art. I'm Bange
                Yhodhy, an artist dedicated to exploring the depths of human emotion
                through color, form, and texture. My journey in the world of abstract art
                has been one of constant discovery and growth.
              </p>
              <Button className='bg-purple-600 hover:bg-purple-700'>
                View My Gallery
              </Button>
            </div>
          </div>
        </section>

        <section className='w-full bg-white/50 backdrop-blur-sm overflow-hidden rounded-xl p-8 my-12'>
          <SectionTitle
            title='Full Biography'
            description='The story behind the artist'
          />
          <div className='grid md:grid-cols-[2fr_1fr] gap-8 items-start'>
            <div className='space-y-4'>
              <p>
                Born in 1988 in a small coastal town, I, Bange Yhodhy, discovered my
                passion for art at a young age. The vibrant colors of the sea and sky, and
                the ever-changing moods of nature became my first sources of inspiration.
                As a child, I would spend hours with my sketchbook, trying to capture the
                essence of the world around me.
              </p>
              <p>
                My formal journey into the world of art began in 2010 when I enrolled at
                the National Art Academy. It was here that I first encountered abstract
                art, and it was love at first sight. The freedom to express emotions and
                ideas without the constraints of representational art opened up a whole
                new world for me.
              </p>
              <p>
                During my time at the academy, I experimented with various mediums and
                techniques, but I found myself consistently drawn to acrylics and mixed
                media. The versatility of these mediums allowed me to create layers,
                textures, and depth that I felt best represented the complexity of human
                emotions.
              </p>
              <p>
                In 2013, I held my first solo exhibition, "Chromatic Emotions," at the
                Urban Gallery. This marked a significant milestone in my career, as it was
                the first time I presented my abstract interpretations of emotions to the
                public. The positive reception encouraged me to push my boundaries
                further.
              </p>
              <p>
                Two years later, in 2015, I was honored to receive the Young Artist of the
                Year award from the Contemporary Art Foundation. This recognition not only
                validated my artistic approach but also opened doors to new opportunities
                and collaborations.
              </p>
              <p>
                One such opportunity came in 2017 when I was invited for a residency at
                the International Art Collective in Paris. This experience was
                transformative, exposing me to diverse artistic perspectives and cultural
                influences. It was during this time that I began incorporating more global
                themes into my work, while still maintaining my focus on emotional
                expression.
              </p>
              <p>
                In 2019, I published my first art book, "Abstract Journeys." This book was
                not just a collection of my works but also an exploration of my artistic
                philosophy and process. It allowed me to share my insights and experiences
                with a broader audience, beyond the confines of galleries.
              </p>
              <p>
                Most recently, in 2021, I achieved a long-held dream of opening my own art
                studio. This space has become not just a place for my personal creative
                work, but also a hub for nurturing new talent. I've begun mentoring
                aspiring artists, sharing the knowledge and experiences I've gained over
                the years.
              </p>
              <p>
                Throughout my journey, my core artistic vision has remained constant: to
                create art that resonates with the soul, that speaks to the universal
                human experience of emotion. Whether it's joy, sorrow, love, or anxiety, I
                strive to translate these feelings into visual symphonies of color and
                form.
              </p>
              <p>
                As I look to the future, I'm excited to continue evolving as an artist, to
                keep pushing the boundaries of abstract expression, and to inspire others
                to find their own unique artistic voice. Art, to me, is a never-ending
                journey of discovery, and I invite you to join me on this colorful,
                emotive adventure.
              </p>
            </div>
            <div className='space-y-8'>
              <Card className='overflow-hidden'>
                <Image
                  src='/placeholder.svg'
                  alt='Bange Yhodhy in the studio'
                  width={400}
                  height={300}
                  className='w-full h-48 object-cover'
                />
                <CardContent className='p-4'>
                  <p className='text-sm text-gray-600'>
                    Bange Yhodhy working on a large-scale abstract piece in the studio,
                    2022
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-4'>
                  <h3 className='font-semibold mb-2'>Artist Statement</h3>
                  <p className='text-sm italic'>
                    My art is a bridge between the visible and the invisible, the tangible
                    and the felt. Through abstract forms and vivid colors, I seek to give
                    shape to the intangible emotions that define our human experience.
                    Each piece is an invitation to the viewer to explore their own
                    emotional landscape and find resonance in the interplay of color,
                    texture, and form.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className='p-4'>
                  <h3 className='font-semibold mb-2'>Artistic Influences</h3>
                  <ul className='text-sm space-y-1'>
                    <li>Wassily Kandinsky</li>
                    <li>Mark Rothko</li>
                    <li>Helen Frankenthaler</li>
                    <li>Cy Twombly</li>
                    <li>Joan Mitchell</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className='py-12'>
          <SectionTitle
            title='My Artistic Journey'
            description='A timeline of key moments in my career'
          />
          <div className='space-y-8'>
            {timeline.map((item, index) => (
              <div key={index} className='flex items-center gap-4'>
                <div className='flex-shrink-0 w-24 text-right font-bold text-purple-600'>
                  {item.year}
                </div>
                <div className='w-px h-4 bg-purple-600'></div>
                <div className='flex-grow'>{item.event}</div>
              </div>
            ))}
          </div>
        </section>

        <section className='py-12 bg-white/50 backdrop-blur-sm rounded-xl my-12'>
          <SectionTitle
            title='My Skills'
            description='Areas of expertise and continuous learning'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div>
              <h3 className='font-semibold mb-4'>Technical Skills</h3>
              <ul className='space-y-2'>
                <li>Acrylic Painting</li>
                <li>Mixed Media Techniques</li>
                <li>Color Theory and Application</li>
                <li>Texture Creation</li>
                <li>Large-scale Canvas Work</li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-4'>Soft Skills</h3>
              <ul className='space-y-2'>
                <li>Creative Problem Solving</li>
                <li>Project Management</li>
                <li>Client Communication</li>
                <li>Art Education and Mentoring</li>
                <li>Exhibition Curation</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='py-12'>
          <SectionTitle
            title='Connect With Me'
            description='Follow my artistic journey on social media'
          />
          <div className='flex justify-center space-x-6'>
            <Link
              href='https://instagram.com'
              className='text-purple-600 hover:text-purple-700'
            >
              <span className='sr-only'>Instagram</span>
              <Instagram className='h-8 w-8' />
            </Link>
            <Link
              href='https://facebook.com'
              className='text-purple-600 hover:text-purple-700'
            >
              <span className='sr-only'>Facebook</span>
              <Facebook className='h-8 w-8' />
            </Link>
            <Link
              href='https://twitter.com'
              className='text-purple-600 hover:text-purple-700'
            >
              <span className='sr-only'>Twitter</span>
              <Twitter className='h-8 w-8' />
            </Link>
            <Link
              href='https://linkedin.com'
              className='text-purple-600 hover:text-purple-700'
            >
              <span className='sr-only'>LinkedIn</span>
              <Linkedin className='h-8 w-8' />
            </Link>
          </div>
        </section>
      </main>

      <footer className='bg-purple-800 text-white py-6 mt-12'>
        <div className='container mx-auto px-4 text-center'>
          <p className='text-sm'>
            © {new Date().getFullYear()} Bange Yhodhy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
