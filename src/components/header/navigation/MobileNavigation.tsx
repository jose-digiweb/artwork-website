// Components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import { MainNavigation } from './MainNavigation';

// Types
type Props = {
  className?: string;
};

/**
 * The MobileNavigation component
 * @description A component that displays the mobile navigation
 * @returns The MobileNavigation component
 */
export const MobileNavigation = ({ className }: Props) => {
  return (
    <Sheet>
      <SheetTrigger className={cn('', className)}>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className='bg-background/70 border-none backdrop-blur-sm'>
        <SheetHeader className='sr-only'>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>A menu for navigating the website</SheetDescription>
        </SheetHeader>

        <div className='flex w-full h-full'>
          <MainNavigation className='flex w-full items-end text-5xl flex-col gap-6 pt-8 h-full' />
        </div>
      </SheetContent>
    </Sheet>
  );
};
