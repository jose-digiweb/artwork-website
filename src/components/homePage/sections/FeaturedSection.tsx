"use client";

// Dependencies
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Components
import { motion } from "framer-motion";
import { SectionTitle, SectionBgBlur } from "../utils";
import { CloudinaryImage } from "../../cloudinary";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Types
type Props = {
  className?: string;
};

const FeaturedImages = [
  {
    src: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg",
    title: "Chromatic Dreams",
    description: "2024 Collection",
  },
  {
    src: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731257065/The_Unseen_Force_zbjipp.jpg",
    title: "Ethereal Forms",
    description: "2024 Collection",
  },
  {
    src: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256763/new1_bogmow.jpg",
    title: "Ethereal Forms",
    description: "2024 Collection",
  },
  {
    src: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256586/The_Unknown_abi0fn.jpg",
    title: "Immersive Forms",
    description: "2024 Collection",
  },
];

export const FeaturedSection = ({ className }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className={cn("flex w-full flex-col", className)}
    >
      <SectionTitle
        title="Featured Works"
        description="Bange Yhodhy's latest creations."
      />

      <SectionBgBlur className="p-4">
        <LightGallery selector="a" speed={500} plugins={[lgThumbnail, lgZoom]}>
          <div className="grid grid-cols-2 gap-2 sm:gap-8 lg:grid-cols-4">
            {FeaturedImages.map((image, i) => (
              <Link
                key={i}
                href={image.src}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg"
              >
                <CloudinaryImage
                  fill
                  priority
                  crop={{
                    type: "thumb",
                    source: true,
                  }}
                  format="auto"
                  aspectRatio="4:5"
                  src={image.src}
                  alt={`Featured Artwork ${image.title}`}
                  className="object-cover transition-transform duration-300 sm:group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-black/90 to-transparent p-4 pt-8 opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold text-white sm:text-lg">
                    {image.title}
                  </p>
                  <p className="text-sm text-gray-400">{image.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </LightGallery>
      </SectionBgBlur>
    </motion.section>
  );
};
