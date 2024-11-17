import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { SectionTitle } from './SectionTitle';

export const ContactSection = () => {
  return (
    <section className='w-full  flex flex-col rounded-lg pb-4'>
      <div className='container mx-auto px-4'>
        <SectionTitle
          title='Contact Me'
          description='Get in touch with Bange Yhodhy.'
          className='md:mb-4'
        />

        <div className='flex flex-col md:flex-row gap-8 bg-white/50 backdrop-blur-sm p-4 rounded-xl'>
          <div className='md:w-1/2'>
            <form className='space-y-4'>
              <Input type='text' placeholder='Your Name' aria-label='Your Name' />
              <Input type='email' placeholder='Your Email' aria-label='Your Email' />
              <Input type='text' placeholder='Subject' aria-label='Subject' />
              <Textarea placeholder='Your Message' aria-label='Your Message' rows={4} />
              <Button
                type='button'
                className='w-full bg-purple-600 hover:bg-purple-700 mt-auto'
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className='md:w-1/2'>
            <Card className='p-6 bg-transparent shadow-none'>
              <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <Mail className='h-5 w-5 mr-2 text-purple-600' />
                  <span>bange.yhodhy@example.com</span>
                </div>
                <div className='flex items-center'>
                  <Phone className='h-5 w-5 mr-2 text-purple-600' />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className='flex items-center'>
                  <MapPin className='h-5 w-5 mr-2 text-purple-600' />
                  <span>123 Art Studio Lane, Creativity City, AC 12345</span>
                </div>
              </div>
            </Card>
            <Card className='mt-6 bg-transparent shadow-none p-4'>
              <h3 className='text-xl font-semibold mb-4'>Follow Me</h3>
              <div className='flex space-x-4'>
                <Link
                  href='https://instagram.com'
                  className='text-purple-600 hover:text-purple-700'
                >
                  <span className='sr-only'>Instagram</span>
                  <Instagram className='h-6 w-6' />
                </Link>
                <Link
                  href='https://facebook.com'
                  className='text-purple-600 hover:text-purple-700'
                >
                  <span className='sr-only'>Facebook</span>
                  <Facebook className='h-6 w-6' />
                </Link>
                <Link
                  href='https://twitter.com'
                  className='text-purple-600 hover:text-purple-700'
                >
                  <span className='sr-only'>Twitter</span>
                  <Twitter className='h-6 w-6' />
                </Link>
                <Link
                  href='https://linkedin.com'
                  className='text-purple-600 hover:text-purple-700'
                >
                  <span className='sr-only'>LinkedIn</span>
                  <Linkedin className='h-6 w-6' />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
