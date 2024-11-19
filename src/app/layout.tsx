// Dependencies
import { Kaushan_Script } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Components
import Head from "next/head";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AppLayout } from "@/components/AppLayout";

// Types
import type { Metadata } from "next";
import { AbstractedShapes } from "@/components/utils";

// Fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const kalam = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-kushan",
});

// Metadata
export const metadata: Metadata = {
  title: "BangeYhodhy Abstract Painting",
  description:
    "Discover stunning abstract paintings, by BangeYhodhy, a talented artist from Guinea Bissau, based in Rotterdam, The Netherlands. Each piece is unique, and each one is a work of art.",
};

/**
 * The RootLayout component
 * @description The root layout component
 * @param {React.ReactNode} children - The children components
 * @returns {React.ReactNode} The root layout component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-[family-name:var(--font-geist-sans)]">
      <Head>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bangeyhodhy.com" />
        <meta property="og:title" content="BangeYhodhy Abstract Painting" />
        <meta property="og:site_name" content="BangeYhodhy Abstract Painting" />
        <meta
          property="og:description"
          content="Discover stunning abstract paintings, by BangeYhodhy, a talented artist from Guinea Bissau, based in Rotterdam, The Netherlands. Each piece is unique, and each one is a work of art."
        />
        <meta property="og:image" content="/openg.jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="BangeYhodhy Abstract Painting" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:secure_url"
          content="https://bangeyhodhy.com/openg.jpg"
        />
        <meta
          property="og:image:url"
          content="https://bangeyhodhy.com/openg.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bangeyhodhy.com" />
        <meta property="twitter:url" content="https://bangeyhodhy.com" />
        <meta name="twitter:title" content="BangeYhodhy Abstract Painting" />
        <meta
          name="twitter:description"
          content="Discover stunning abstract paintings, by BangeYhodhy, a talented artist from Guinea Bissau, based in Rotterdam, The Netherlands. Each piece is unique, and each one is a work of art."
        />
        <meta name="twitter:image" content="/openg.jpg" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kalam.variable} h-full min-h-dvh scroll-smooth bg-gradient-to-br from-rose-100 via-fuchsia-100 to-indigo-100 antialiased`}
      >
        <AppLayout>{children}</AppLayout>
        <Toaster />
        <AbstractedShapes />
        <SpeedInsights />
      </body>
    </html>
  );
}
