// Dependencies
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../../../ui/card';
import { SectionTitle, SectionBgBlur } from '../../utils';
import { ContactForm } from './ContactForm';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/atelie_bangeyhodhy',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/bangeyhodhy',
    icon: Facebook,
  },
];

export const ContactSection = () => {
  return (
    <section className='w-full flex flex-col rounded-lg pb-4'>
      <SectionTitle
        id='contact-section'
        title='Contact Me'
        description='Get in touch with Bange Yhodhy.'
      />

      <SectionBgBlur className='flex flex-col md:flex-row gap-8 p-4'>
        <div className='md:w-1/2'>
          <ContactForm />
        </div>

        <div className='md:w-1/2'>
          <Card className='bg-transparent border'>
            <CardContent>
              <CardHeader className='p-0'>
                <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>
              </CardHeader>

              <div className='space-y-4'>
                <div className='flex items-center'>
                  <Mail className='h-5 w-5 mr-2 text-purple-600' />
                  <span>contact@bangeyhody.com</span>
                </div>
                <div className='flex items-center'>
                  <Phone className='h-5 w-5 mr-2 text-purple-600' />
                  <span>+31 687 523 821</span>
                </div>
                <div className='flex items-center'>
                  <MapPin className='h-5 w-5 mr-2 text-purple-600' />
                  <span>Rotterdam, The Netherlands</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='mt-6 bg-transparent border p-0'>
            <CardContent>
              <CardHeader className='p-0'>
                <h3 className='text-xl font-semibold mb-4'>Follow Me</h3>
              </CardHeader>

              <div className='flex space-x-4'>
                {SOCIAL_LINKS.map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target='_blank'
                    className='text-purple-600 hover:text-purple-700'
                  >
                    <span className='sr-only'>{link.name}</span>
                    <link.icon className='size-6' />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionBgBlur>
    </section>
  );
};
