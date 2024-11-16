import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string;
} & PropsWithChildren;

export const TextGradientClip = ({ className, children }: Props) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
};
