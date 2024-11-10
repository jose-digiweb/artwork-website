'use client';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { CloudinaryImage } from '../cloudinary';
import Link from 'next/link';

const FeaturedImages = [
  {
    src: 'https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg',
    title: 'Chromatic Dreams',
    description: '2024 Collection',
  },
  {
    src: 'https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731257065/The_Unseen_Force_zbjipp.jpg',
    title: 'Ethereal Forms',
    description: '2024 Collection',
  },
  {
    src: 'https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256763/new1_bogmow.jpg',
    title: 'Ethereal Forms',
    description: '2024 Collection',
  },
];

export const Gallery = () => {
  return (
    <LightGallery selector='a' speed={500} plugins={[lgThumbnail, lgZoom]}>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {FeaturedImages.map((image, i) => (
          <Link
            key={i}
            href={image.src}
            className='relative aspect-square overflow-hidden rounded-lg shadow-lg group'
          >
            <CloudinaryImage
              fill
              priority
              src={image.src}
              alt={`Featured Artwork ${image.title}`}
              className='transition-transform duration-300 group-hover:scale-110 object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4'>
              <p className='text-white text-lg font-semibold'>{image.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </LightGallery>
  );
};
