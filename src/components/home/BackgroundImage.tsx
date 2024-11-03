// Components
import { CloudinaryImage } from '@/components/cloudinary';

/**
 * The BackgroundImage component
 * @description A component that displays a background image
 * @returns The BackgroundImage component
 */
export function BackgroundImage() {
  return (
    <div className='absolute inset-0 z-0'>
      <CloudinaryImage
        fill
        crop='fill'
        sizes='100vw 100vh'
        alt='BangeYhodhy'
        src='canva-1_o5i5e9.png'
        className='absolute object-cover z-0'
      />
      <div className='absolute inset-0 bg-background/70 z-10' />
    </div>
  );
}
