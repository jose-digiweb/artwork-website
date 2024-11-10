// Components

import { HeroSection } from '@/components/hero-section';

/**
 * The Home component
 * @description A component that displays the home page
 * @returns The Home component
 */
export default function HomePage() {
  return (
    <main className='flex flex-col w-full h-full overflow-y-auto items-center bg-background'>
      <div className='absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-primary/10 via-primary/50 blur-3xl' />
      <HeroSection />
    </main>
  );
}
