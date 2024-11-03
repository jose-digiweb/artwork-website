// Components
import { MainNavigation } from './MainNavigation';
import { MobileNavigation } from './MobileNavigation';

/**
 * The AppNavigation component
 * @description A component that displays the app navigation
 * @returns The AppNavigation component
 */
export const AppNavigation = () => {
  return (
    <>
      <MainNavigation className='hidden sm:flex' />
      <MobileNavigation className='sm:hidden' />
    </>
  );
};
