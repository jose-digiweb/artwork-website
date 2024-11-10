import { CloudinaryImage } from '@/components/cloudinary';
import { Nav } from '@/components/header/Nav';
import { AbstractedShapes } from '@/components/home/AbstractedShapes';
import Link from 'next/link';

const FeaturedImages = [
  {
    src: 'The_Unseen_Divide_uyvlqq.jpg',
    title: 'Chromatic Dreams',
    description: '2024 Collection',
  },
  {
    src: 'The_Unseen_Force_zbjipp.jpg',
    title: 'Ethereal Forms',
    description: '2024 Collection',
  },
  {
    src: 'new1_bogmow.jpg',
    title: 'Ethereal Forms',
    description: '2024 Collection',
  },
];

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
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0'>
            <div className='relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl'>
              <CloudinaryImage
                fill
                priority
                alt='Bange Yhodhy'
                src='bange_yhodhy_ub8mki.png'
                className='rounded-full object-cover'
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className='w-full lg:w-1/2 lg:pl-12 text-center lg:text-left'>
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-800 mb-4 tracking-tight'>
              Hi, I&apos;m Bange Yhodhy
            </h1>
            <p className='text-xl text-gray-600 mb-4'>and I love abstract paintings.</p>
            <p className='text-gray-500 leading-relaxed mb-8'>
              My artwork is a vibrant exploration of color, form, and texture. I draw
              inspiration from my surroundings, my emotions, and my innermost thoughts.
            </p>
            <button className='bg-fuchsia-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-fuchsia-600 transition-colors'>
              Explore My Gallery
            </button>
          </div>
        </div>

        {/* Featured Section */}
        <section className='w-full mt-8 py-8'>
          <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
            Featured Artworks
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {FeaturedImages.map((image, i) => (
              <div
                key={i}
                className='relative aspect-square overflow-hidden rounded-lg shadow-lg group'
              >
                <CloudinaryImage
                  fill
                  priority
                  src={image.src}
                  alt={`Featured Artwork ${image.title}`}
                  className='transition-transform duration-300 group-hover:scale-110 object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4'>
                  <p className='text-white text-lg font-semibold'>{image.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Link
              href='/#'
              className='inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors'
            >
              View All Artworks
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
