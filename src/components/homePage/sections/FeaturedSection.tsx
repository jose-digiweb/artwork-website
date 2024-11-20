"use client";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Dependencies
import { cn } from "@/lib/utils";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Components
import LightGallery from "lightgallery/react";
import { motion } from "framer-motion";
import { SectionTitle, SectionBgBlur } from "../../utils";
import { CloudinaryImage } from "../../cloudinary";
import Link from "next/link";
import { ArtworkType } from "@/apiClient/artwork";

// Types
type Props = {
  className?: string;
  featuredArtworks: ArtworkType[];
};

export const FeaturedSection = ({ featuredArtworks, className }: Props) => {
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
            {featuredArtworks.map((artwork, i) => (
              <Link
                key={i}
                href={artwork.imageSecureUrl}
                className="group relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg"
              >
                <CloudinaryImage
                  fill
                  quality="auto"
                  format="auto"
                  crop={{
                    type: "scale",
                    source: true,
                    width: 400,
                    aspectRatio: "4:5",
                  }}
                  src={artwork.thumbnailUrl}
                  alt={`Featured Artwork ${artwork.title}`}
                  className="object-cover transition-transform duration-300 sm:group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-black/90 to-transparent p-4 pt-8 opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-semibold text-white sm:text-lg">
                    {artwork.title}
                  </p>
                  <p className="text-sm text-gray-400">{artwork.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </LightGallery>
      </SectionBgBlur>
    </motion.section>
  );
};
