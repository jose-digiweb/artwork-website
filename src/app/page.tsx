import { CloudinaryImage } from '@/components/cloudinary';
import { Nav } from '@/components/header/Nav';
import { AbstractedShapes } from '@/components/home/AbstractedShapes';
import { Gallery } from '@/components/home/Gallery';
import { Button } from '@/components/ui/button';
import { Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

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
        <div className='flex flex-col lg:flex-row items-center justify-center w-full mb-16'>
          {/* Left Column - Artist Photo */}
          <div className='relative size-64 shrink-0 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl'>
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
              Hi, I&apos;m{' '}
              <span className='bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent'>
                Bange Yhodhy
              </span>
            </h1>
            <p className='text-3xl text-gray-800 mb-4'>
              and I love{' '}
              <span className='bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent'>
                abstract paintings.
              </span>
            </p>
            <p className='text-gray-500 leading-relaxed mb-8'>
              My artwork is a vibrant exploration of color, form, and texture. <br /> I
              draw inspiration from my surroundings, my emotions, and my innermost
              thoughts.
            </p>

            <Button className='h-12'>
              <ImageIcon />

              <span>Explore My Gallery</span>
            </Button>
          </div>
        </div>

        {/* Featured Section */}
        <section className='w-full mt-8 py-8'>
          <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
            Featured Artworks
          </h2>

          <Gallery />

          <div className='text-center mt-12'>
            <Link href='/#'>
              <Button className='h-12'>
                <ImageIcon />
                <span>View All Artworks</span>
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
