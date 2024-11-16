import { Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='bg-white/50 backdrop-blur-sm mt-16'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-900'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/about' className='text-gray-600 hover:text-purple-600'>
                  About Me
                </Link>
              </li>
              <li>
                <Link href='/gallery' className='text-gray-600 hover:text-purple-600'>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href='/exhibitions' className='text-gray-600 hover:text-purple-600'>
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-gray-600 hover:text-purple-600'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-900'>Contact</h3>
            <p className='text-gray-600'>Email: info@bangeyhodhy.com</p>
            <p className='text-gray-600'>Phone: +234 123 456 7890</p>
            <p className='text-gray-600'>Studio: 123 Art Street, Lagos, Nigeria</p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-900'>Follow Me</h3>
            <div className='flex space-x-4'>
              <Link href='#' className='text-gray-600 hover:text-purple-600'>
                <Instagram className='h-6 w-6' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link href='#' className='text-gray-600 hover:text-purple-600'>
                <Twitter className='h-6 w-6' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link href='#' className='text-gray-600 hover:text-purple-600'>
                <Facebook className='h-6 w-6' />
                <span className='sr-only'>Facebook</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-200 text-center text-gray-600'>
          <p>&copy; 2024 Bange Yhodhy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
