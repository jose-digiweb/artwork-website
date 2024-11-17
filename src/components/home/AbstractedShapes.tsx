'use client';

import { useCallback, useEffect, useRef } from 'react';

export const AbstractedShapes = () => {
  const mouseRef = useRef({ x: 0, y: 0 });
  const gradientRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    };
    if (gradientRef.current) {
      gradientRef.current.style.background = `radial-gradient(circle at ${mouseRef.current.x}% ${mouseRef.current.y}%, rgba(255,182,193,0.3) 0%, transparent 40%)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className='absolute z-0 inset-0 w-full h-full overflow-hidden'>
      {/* Abstract background shapes */}
      <svg className='w-full h-full' xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <pattern id='smallGrid' width='20' height='20' patternUnits='userSpaceOnUse'>
            <path
              d='M 20 0 L 0 0 0 20'
              fill='none'
              stroke='rgba(0,0,0,0.05)'
              strokeWidth='0.5'
            />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#smallGrid)' />
        <circle
          className='animate-float'
          cx='5%'
          cy='10%'
          r='50'
          fill='rgba(255,182,193,0.3)'
        />
        <circle
          className='animate-float animation-delay-2000'
          cx='95%'
          cy='50%'
          r='100'
          fill='rgba(216,180,254,0.3)'
        />
        <circle
          className='animate-float animation-delay-4000'
          cx='15%'
          cy='90%'
          r='70'
          fill='rgba(165,180,252,0.3)'
        />
        <path d='M0,0 Q50,100 100,0 V100 H0 Z' fill='rgba(255,255,255,0.05)' />
        <path d='M0,100 Q50,0 100,100 V0 H0 Z' fill='rgba(0,0,0,0.03)' />
      </svg>

      {/* Interactive background gradient */}
      <div ref={gradientRef} className='absolute inset-0 opacity-30' />

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(10px, 10px) rotate(5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
        .animate-float {
          animation: float 15s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};
