// Components

import { HeroSection } from '@/components/home';

/**
 * The Home component
 * @description A component that displays the home page
 * @returns The Home component
 */
export default function HomePage() {
  return (
    <main className='flex flex-col w-full h-full overflow-y-auto items-center'>
      <HeroSection />
    </main>
  );
}
