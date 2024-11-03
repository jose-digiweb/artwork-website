// Dependencies
import { cn } from '@/lib/utils';

// Components
import { CloudinaryImage } from '@/components/cloudinary';
import { Button } from '@/components/ui/button';

// Types
type Props = {
  className?: string;
};

/**
 * The AppHero component
 * @description A component that displays the app hero
 * @param className - The class name for the component
 * @returns {JSX.Element} The AppHero component
 */
export const AppHero = ({ className }: Props) => {
  return (
    <section className={cn('flex items-center justify-between', className)}>
      <div className='flex flex-col gap-2 max-w-lg items-start'>
        <h1 className='text-pretty font-bold text-3xl sm:text-4xl mb-4'>
          Hi, I’m <span className='text-primary'>Bange Yhodhy</span>, <br /> and I love to
          create abstract paintings.
        </h1>
        <p className='text-pretty text-lg'>
          My artwork is a vibrant exploration of color, form, and texture. <br /> I draw
          inspiration from my surroundings, my emotions, and my innermost thoughts.
        </p>
        <p className='text-pretty text-lg'>
          Each piece is a unique journey into the depths of the human imagination.
        </p>

        <div className='flex items-center gap-4 mt-6'>
          <Button>View Gallery</Button>
          <Button variant='outline'>Gent in Touch</Button>
        </div>
      </div>

      <div className='sm:flex relative w-96 overflow-hidden hidden'>
        <CloudinaryImage
          width={300}
          height={600}
          alt='BangeYhodhy'
          src='bange-frame_un1jxc.png'
          className='w-full h-full object-contain'
        />
      </div>
    </section>
  );
};
