// Components
import { cn } from '@/lib/utils';
import { AppNavigation } from './navigation';
import Link from 'next/link';

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
    <header
      className={cn('w-full flex items-center justify-between gap-4 p-4', className)}
    >
      <Link href='/'>
        <h1 className='sm:text-3xl text-2xl font-black text-primary'>BangeYhodhy</h1>
      </Link>

      <AppNavigation />
    </header>
  );
};
