// Components
import { AppHeader } from '@/components/appHeader';
import { AbstractedShapes } from '@/components/utils';
import * as Home from '@/components/homePage';
import { AppFooter } from '@/components/appFooter';

/**
 * The Home component
 * @description A component that displays the home page
 * @returns {React.ReactNode} The Home component
 */
export default function HomePage() {
  return (
    <main
      role='main'
      className='min-h-full w-full h-full relative overflow-y-auto scroll-smooth'
    >
      <AbstractedShapes />

      <AppHeader className='mb-8' />

      <div className='relative z-10 flex flex-col gap-8 min-h-dvh max-w-screen-xl mx-auto p-4'>
        <Home.HeroSection className='sm:mb-14' />

        <Home.FeaturedSection />

        <Home.AboutSection />

        <Home.ContactSection />
      </div>

      <AppFooter />
    </main>
  );
}
