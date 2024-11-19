import React from 'react';
import { TextGradientClip } from '../../utils';
import { cn } from '@/lib/utils';

// Types
type Props = {
  id?: string;
  title: string;
  description: string;
  className?: string;
};

export const SectionTitle = ({ id, title, description, className }: Props) => {
  return (
    <div
      id={id}
      className={cn(
        'flex flex-col items-start justify-center text-center md:py-4 mb-6 md:mb-0 scroll-mt-16',
        className
      )}
    >
      <TextGradientClip className='text-3xl font-light tracking-tight sm:text-5xl mb-1'>
        <h2>{title}</h2>
      </TextGradientClip>
      <div className='w-16 h-0.5 bg-gray-300 mb-2' />
      <p className='max-w-[600px] text-gray-500 md:text-lg/relaxed'>{description}</p>
    </div>
  );
};
