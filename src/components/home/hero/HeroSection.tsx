import { CloudinaryImage } from '@/components/cloudinary';
import { AppHeader } from '@/components/header';

export const HeroSection = () => {
  return (
    <section className='w-full relative h-full flex flex-col overflow-x-hidden px-4'>
      <AppHeader className='sticky top-6 z-50 backdrop-blur-md bg-white/70 shadow drop-shadow-sm mt-6 max-w-screen-lg mx-auto rounded-3xl ' />

      <section className='w-full flex flex-col'>
        <div className='relative sm:w-max mx-auto mt-6 flex flex-col items-center justify-center'>
          <div className='flex w-[100px] mb-6'>
            <CloudinaryImage
              width={100}
              height={100}
              alt='BangeYhodhy'
              src='bange-frame_un1jxc.png'
              className='w-full h-full object-contain rounded-sm'
            />
          </div>

          <p className='text-center text-4xl mb-2'>
            Hi, I’m{' '}
            <span className='px-2 text-white bg-primary rounded font-kushan]'>
              Bange Yhodhy
            </span>
            , <br />
          </p>
          <p className='text-center text-4xl mb-4'>and I love abstract paintings.</p>
          <p className='text-pretty text-lg text-center max-w-sm sm:max-w-lg'>
            My artwork is a vibrant exploration of color, form, and texture. <br /> I draw
            inspiration from my surroundings, my emotions, and my innermost thoughts.
          </p>
        </div>
      </section>

      <section className='w-full h-full flex items-center py-14 justify-center gap-14'>
        <div className='max-w-[200px] hidden sm:flex h-[300px] shrink-0 rounded-sm shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <CloudinaryImage
            width={200}
            height={300}
            alt='BangeYhodhy'
            src='canva-portrait-reds_bmpsso.jpg'
            className='w-full h-full object-cover rounded-sm shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] sm:hover:scale-110 sm:scale-100 scale-110 sm:hover:-rotate-3 -rotate-3 transition-all duration-500 cursor-pointer shrink-0 sm:rotate-0'
          />
        </div>

        <div className='sm:w-[250px] sm:h-[350px] w-[200px] h-[300px] flex shrink-0 rounded-sm shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <CloudinaryImage
            width={300}
            height={400}
            alt='BangeYhodhy'
            src='canvas-portrait-women_pet6fe.jpg'
            className='w-full h-full object-cover rounded-sm shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] sm:hover:scale-110 scale-110 sm:hover:rotate-3 rotate-3 transition-all duration-500 cursor-pointer shrink-0 sm:scale-100 sm:rotate-0'
          />
        </div>

        <div className='sm:h-[500px] sm:w-[350px] w-[200px] h-[300px] flex shrink-0 grow-0 rounded-sm shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <CloudinaryImage
            width={500}
            height={600}
            alt='BangeYhodhy'
            src='canvas-2-portrait_1_znptnh.png'
            className='w-full h-full object-cover sm:hover:scale-110 scale-110 sm:hover:-rotate-3 -rotate-3 grow-0 transition-all duration-500 cursor-pointer shrink-0 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] sm:scale-100 sm:rotate-0'
          />
        </div>

        <div className='sm:w-[250px] sm:h-[350px] w-[200px] h-[300px] flex shrink-0 grow-0 rounded-sm shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]'>
          <CloudinaryImage
            width={300}
            height={400}
            alt='BangeYhodhy'
            src='canva-portrait_wcmdc6.png'
            className='w-full h-full object-cover sm:hover:scale-110 scale-110 sm:hover:rotate-3 rotate-3 transition-all duration-500 cursor-pointer shrink-0 grow-0 rounded-sm sm:scale-100 sm:rotate-0'
          />
        </div>

        <div className='max-w-[200px] h-[300px] shrink-0 grow-0 rounded-sm shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hidden sm:flex'>
          <CloudinaryImage
            width={200}
            height={300}
            alt='BangeYhodhy'
            src='canva-portrait-green_j8diub.jpg'
            className='w-full h-full object-cover sm:hover:scale-110 scale-110 sm:hover:-rotate-3 -rotate-3 sm:scale-100 sm:rotate-0 transition-all duration-500 cursor-pointer shrink-0 grow-0 rounded-sm'
          />
        </div>
      </section>
    </section>
  );
};
