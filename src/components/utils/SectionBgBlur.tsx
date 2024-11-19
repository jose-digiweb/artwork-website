// Dependencies
import { cn } from '@/lib/utils';

// Types
import type { HTMLAttributes, ReactNode } from 'react';
type Props = {
  className?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const SectionBgBlur = ({ className, children, ...props }: Props) => {
  return (
    <div className={cn('bg-white/60 backdrop-blur-md rounded-xl', className)} {...props}>
      {children}
    </div>
  );
};
