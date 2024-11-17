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
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} antialiased w-full h-dvh overflow-hidden bg-gradient-to-br from-rose-100 via-fuchsia-100 to-indigo-100`}
      >
        {children}
      </body>
    </html>
  );
}
