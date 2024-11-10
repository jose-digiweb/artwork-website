import Image from 'next/image';
import Link from 'next/link';

export function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-rose-100 via-fuchsia-100 to-indigo-100 relative overflow-hidden'>
      {/* Abstract background shapes */}
      <svg className='absolute inset-0 w-full h-full' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <pattern id='smallGrid' width='20' height='20' patternUnits='userSpaceOnUse'>
            <path
              d='M 20 0 L 0 0 0 20'
              fill='none'
              stroke='rgba(0,0,0,0.05)'
              strokeWidth='0.5'
            />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#smallGrid)' />
        <circle cx='5%' cy='10%' r='50' fill='rgba(255,182,193,0.3)' />
        <circle cx='95%' cy='50%' r='100' fill='rgba(216,180,254,0.3)' />
        <circle cx='15%' cy='90%' r='70' fill='rgba(165,180,252,0.3)' />
        <path d='M0,0 Q50,100 100,0 V100 H0 Z' fill='rgba(255,255,255,0.05)' />
        <path d='M0,100 Q50,0 100,100 V0 H0 Z' fill='rgba(0,0,0,0.03)' />
      </svg>

      {/* Header */}
      <header className='relative z-10 p-6'>
        <nav className='max-w-7xl mx-auto flex justify-between items-center'>
          <Link href='/' className='text-gray-800 text-2xl font-bold'>
            Bange Yhodhy
          </Link>
          <div className='space-x-8'>
            <Link
              href='/about'
              className='text-gray-600 hover:text-gray-800 transition-colors'
            >
              About Me
            </Link>
            <Link
              href='/gallery'
              className='text-gray-600 hover:text-gray-800 transition-colors'
            >
              Gallery
            </Link>
            <Link
              href='/contact'
              className='text-gray-600 hover:text-gray-800 transition-colors'
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className='relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 lg:px-12 max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-center w-full mb-16'>
          {/* Left Column - Artist Photo */}
          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0'>
            <div className='relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl'>
              <Image
                src='/placeholder.svg?height=400&width=400'
                alt='Bange Yhodhy'
                layout='fill'
                objectFit='cover'
                className='rounded-full'
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
        <section className='w-full mt-16'>
          <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
            Featured Artworks
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className='relative aspect-square overflow-hidden rounded-lg shadow-lg group'
              >
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Artwork+${i}`}
                  alt={`Featured Artwork ${i}`}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4'>
                  <p className='text-white text-lg font-semibold'>Artwork Title {i}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center mt-12'>
            <Link
              href='/gallery'
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
