// Dependencies
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    <section className={cn('flex flex-col items-start gap-12 justify-center', className)}>
      <div className='flex flex-col gap-4 max-w-lg'>
        <p className='text-pretty font-bold text-3xl sm:text-4xl'>
          Hi, I’m <span className='text-primary'>Bange Yhodhy</span>, <br /> and I love to
          create abstract paintings.
        </p>
        <p className='text-pretty text-lg'>
          My artwork is a vibrant exploration of color, form, and texture. <br /> I draw
          inspiration from my surroundings, my emotions, and my innermost thoughts.
        </p>
        <p className='text-pretty text-lg'>
          Each piece is a unique journey into the depths of the human imagination.
        </p>
      </div>

      <Button>View Gallery</Button>
    </section>
  );
};
