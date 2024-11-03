// Components
import { cn } from '@/lib/utils';
import { AppNavigation } from './navigation';

// Types
type Props = {
  className?: string;
};

/**
 * The AppHeader component
 * @description A component that displays the app header
 * @returns The AppHeader component
 */
export const AppHeader = ({ className }: Props) => {
  return (
    <header className={cn('w-full flex items-center justify-between', className)}>
      <h1 className='text-2xl font-bold text-primary'>BangeYhodhy</h1>

      <AppNavigation />
    </header>
  );
};
