// Dependencies
import "@bangeyhodhy/design-system/styles/globals.css";
import { DesignSystemProvider } from "@bangeyhodhy/design-system";
import { fonts } from "@bangeyhodhy/design-system/lib/fonts";
import { Kaushan_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

// Components
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AbstractedShapes } from "@/components/utils";
import { AppHeader } from "@/components/appHeader";
import { AppFooter } from "@/components/appFooter";

// Types
import type { Metadata } from "next";

// Fonts
const kalam = Kaushan_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-kushan",
});

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "BangeYhodhy Abstract Painting",
    category: "Art",
    description:
      "Discover stunning abstract paintings, by BangeYhodhy. Each piece is unique, and each one is a work of art, by this very talented artist from Guinea Bissau, based in Rotterdam, The Netherlands.",
    metadataBase: new URL("https://bangeyhodhy.com"),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      url: "https://bangeyhodhy.com",
      title: "BangeYhodhy Abstract Painting",
      siteName: "Bange Yhodhy",
      description:
        "Discover stunning abstract paintings, by BangeYhodhy. Each piece is unique, and each one is a work of art.",
      images: [
        {
          url: "/opengraph.jpg",
          width: 1200,
          height: 630,
          alt: "Bange Yhodhy's Artwork",
          host: "https://bangeyhodhy.com",
          hostname: "bangeyhodhy.com",
          secureUrl: "https://bangeyhodhy.com/opengraph.jpg",
        },
      ],
    },
    icons: {
      icon: "/favicon-16x16.png",
      shortcut: "/favicon-32x32.png",
      apple: "/apple-touch-icon.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    },
    verification: {
      google: "google",
      yandex: "yandex",
      yahoo: "yahoo",
      other: {
        me: ["contact@bangeyhodhy/.com", "mailto:contact@bangeyhodhy/.com"],
      },
    },
  };
}

/**
 * The RootLayout component
 * @description The root layout component for the website
 * @param {React.ReactNode} children - The children components
 * @returns {React.ReactNode} The root layout component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts} suppressHydrationWarning>
      <body
        className={`${kalam.variable} h-full min-h-dvh bg-gradient-to-br from-rose-100 via-fuchsia-100 to-indigo-100`}
      >
        <DesignSystemProvider>
          <AppHeader
            className="sticky top-0 z-50"
            showAdmin={process.env.NODE_ENV === "development"}
          />
          {children}
          <AppFooter className="" />

          <AbstractedShapes />
          <SpeedInsights />
          <Analytics />
        </DesignSystemProvider>
      </body>
    </html>
  );
}
