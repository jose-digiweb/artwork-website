// Components
import { AppHeader } from '@/components/header';
import { AppHero, BackgroundImage } from '@/components/home';

/**
 * The Home component
 * @description A component that displays the home page
 * @returns The Home component
 */
export default function HomePage() {
  return (
    <div id='mes' className='flex relative flex-col w-full h-dvh overflow-y-auto'>
      <BackgroundImage />
      <div className='flex sticky top-0 z-50 items-center w-full backdrop-blur-md h-header bg-background/10 backdrop-saturate-200 px-4'>
        <AppHeader className='max-w-screen-lg mx-auto h-header' />
      </div>

      <main className='z-10 flex flex-col gap-2 w-full h-full  max-w-screen-lg mx-auto'>
        <AppHero className='h-hero px-4' />
      </main>
    </div>
  );
}
