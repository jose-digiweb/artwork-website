// Components
import { CloudinaryImage } from '@/components/cloudinary';

/**
 * The BackgroundImage component
 * @description A component that displays a background image
 * @returns The BackgroundImage component
 */
export function BackgroundImage() {
  return (
    <picture className='absolute inset-0 z-0'>
      <source
        type='image/png'
        media='(min-width: 768px)'
        srcSet='https://res.cloudinary.com/dg0lp0ga7/image/upload/v1730653500/canva-1_o5i5e9.png'
        sizes='100vw 100vh'
      />

      <source
        type='image/png'
        media='(max-width: 768px)'
        srcSet='https://res.cloudinary.com/dg0lp0ga7/image/upload/v1730653800/canva-portrait_wcmdc6.png'
        sizes='100vw 100vh'
      />

      <CloudinaryImage
        fill
        priority
        crop='fill'
        sizes='100vw 100vh'
        alt='BangeYhodhy'
        src='canva-1_o5i5e9.png'
        className='absolute object-cover z-0'
      />
      <div className='absolute inset-0 bg-background/70 z-10' />
    </picture>
  );
}
