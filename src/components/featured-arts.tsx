import { CloudinaryImage } from './cloudinary';

export default function FeaturedSection() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-3 lg:gap-12'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <div className='inline-block rounded-lg bg-white/10 px-3 py-1 text-sm backdrop-blur-xl'>
                Featured Work
              </div>
              <h2 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl'>
                Abstract Expressions
              </h2>
              <p className='max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Discover my latest collection of vibrant abstract paintings exploring
                color, form, and texture.
              </p>
            </div>
          </div>
          <div className='lg:col-span-2 grid gap-4 sm:grid-cols-2'>
            <div className='group relative overflow-hidden rounded-lg shadow-lg'>
              <div className='absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40' />
              <CloudinaryImage
                src='The_Unseen_Divide_uyvlqq.jpg'
                alt='Abstract Painting 1'
                className='aspect-[4/3] object-cover w-full transition-transform group-hover:scale-105'
                width={600}
                height={400}
              />
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-lg font-bold text-white'>Chromatic Dreams</h3>
                <p className='text-sm text-white/90'>2024 Collection</p>
              </div>
            </div>
            <div className='group relative overflow-hidden rounded-lg shadow-lg'>
              <div className='absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40' />
              <CloudinaryImage
                src='The_Unseen_Force_zbjipp.jpg'
                alt='Abstract Painting 2'
                className='aspect-[4/3] object-cover w-full transition-transform group-hover:scale-105'
                width={600}
                height={400}
              />
              <div className='absolute bottom-0 left-0 right-0 p-4'>
                <h3 className='text-lg font-bold text-white'>Ethereal Forms</h3>
                <p className='text-sm text-white/90'>2024 Collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
