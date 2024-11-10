import type { Metadata } from 'next';
import { Kaushan_Script } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const kalam = Kaushan_Script({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-kushan',
});

export const metadata: Metadata = {
  title: 'BangeYhodhy Abstract Painting',
  description:
    'Discover stunning abstract paintings, by BangeYhodhy, a talented artist from Guinea Bissau, based in Rotterdam, The Netherlands. Each piece is unique, and each one is a work of art.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='font-[family-name:var(--font-geist-sans)]'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} antialiased w-full h-dvh overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
