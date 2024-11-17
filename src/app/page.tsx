// Components
import { Header } from '@/components/header/Header';
import { AbstractedShapes } from '@/components/home/AbstractedShapes';
import {
  AboutSection,
  ContactSection,
  FeaturedSection,
  HeroSection,
} from '@/components/home';
import { Footer } from '@/components/footer/Footer';

/**
 * The Home component
 * @description A component that displays the home page
 * @returns The Home component
 */
export default function HomePage() {
  return (
    <div className='min-h-full w-full h-full bg-gradient-to-br from-rose-100 via-fuchsia-100 to-indigo-100 relative overflow-y-auto'>
      <AbstractedShapes />

      <Header className='mb-8' />

      <main className='relative z-10 flex flex-col gap-8 min-h-dvh max-w-screen-xl mx-auto p-4'>
        <HeroSection className='sm:mb-14' />

        <FeaturedSection />

        <AboutSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
