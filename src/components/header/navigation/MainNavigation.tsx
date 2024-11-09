'use client';

// Dependencies
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

// Components
import Link from 'next/link';

// The navigation links
export const navLinks = [
  // { href: '/', label: 'Home' },
  { href: '/#', label: 'About me' },
  { href: '/#', label: 'Gallery' },
  { href: '/#', label: 'Contact' },
] as const;

// Types
export type NavLinkType = (typeof navLinks)[number];
type Props = {
  className?: string;
};

/**
 * The Navigation component
 * @description A component that displays the navigation links
 * @returns The Navigation component
 */
export const MainNavigation = ({ className }: Props) => {
  // Bring in the pathname
  const pathname = usePathname();

  // Check if the pathname matches any of the nav links
  const isActive = (nav: NavLinkType) => pathname === nav.href;

  // Render the navigation links
  return (
    <nav className={cn('flex items-center gap-4 text-lg', className)}>
      {navLinks.map((nav, index) => (
        <Link key={index} href={nav.href} className={cn('font-medium relative group')}>
          {nav.label}

          <span
            className={cn(
              'absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full',
              {
                'w-full': isActive(nav),
              }
            )}
          />
        </Link>
      ))}
    </nav>
  );
};
