// Components
import { AppHeader } from '@/components/header';
import { AbstractedShapes } from '@/components/utils';
import {
  AboutSection,
  ContactSection,
  FeaturedSection,
  HeroSection,
} from '@/components/home';
import { AppFooter } from '@/components/footer';

/**
 * The Home component
 * @description A component that displays the home page
 * @returns {React.ReactNode} The Home component
 */
export default function HomePage() {
  return (
    <div className='min-h-full w-full h-full relative overflow-y-auto'>
      <AbstractedShapes />

      <AppHeader className='mb-8' />

      <main className='relative z-10 flex flex-col gap-8 min-h-dvh max-w-screen-xl mx-auto p-4'>
        <HeroSection className='sm:mb-14' />

        <FeaturedSection />

        <AboutSection />

        <ContactSection />
      </main>

      <AppFooter />
    </div>
  );
}
