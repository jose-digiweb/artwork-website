// Components

import FeaturedSection from '@/components/featured-arts';
import { HeroSection } from '@/components/home/hero/HeroSection';

/**
 * The Home component
 * @description A component that displays the home page
 * @returns The Home component
 */
export default function HomePage() {
  return (
    <main className='flex flex-col w-full h-full overflow-y-auto items-center bg-background bg-gradient-to-br from-primary via-pink-500 to-red-500'>
      <div className='absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-primary/10 via-primary/50 blur-3xl' />
      <HeroSection />
      <FeaturedSection />
    </main>
  );
}
