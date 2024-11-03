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
    <header className={cn('w-full flex items-center justify-between', className)}>
      <Link href='/' className='text-2xl font-bold text-primary'>
        BangeYhodhy
      </Link>

      <AppNavigation />
    </header>
  );
};
