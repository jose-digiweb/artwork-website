"use client";

// Dependencies
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { SectionTitle } from "../utils";
import { CloudinaryImage } from "../cloudinary";
import { FilterList } from "./FilterList";

const artworks = [
  {
    id: 1,
    title: "Emotional Cascade",
    year: 2023,
    size: "medium",
    dimensions: '36" x 48"',
    url: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg",
  },
  {
    id: 2,
    title: "Vibrant Whispers",
    year: 2022,
    size: "small",
    dimensions: '24" x 36"',
    url: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg",
  },
  {
    id: 3,
    title: "Serenity in Chaos",
    year: 2023,
    size: "large",
    dimensions: '40" x 60"',
    url: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg",
  },
  {
    id: 4,
    title: "Chromatic Symphony",
    year: 2021,
    size: "medium",
    dimensions: '30" x 30"',
    url: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg",
  },
  {
    id: 5,
    title: "Textural Landscape",
    year: 2022,
    size: "large",
    dimensions: '48" x 36"',
    url: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg",
  },
  {
    id: 6,
    title: "Ethereal Dreams",
    year: 2023,
    size: "small",
    dimensions: '24" x 48"',
    url: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg",
  },
  {
    id: 7,
    title: "Organic Formations",
    year: 2021,
    size: "medium",
    dimensions: '36" x 36"',
    url: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg",
  },
  {
    id: 8,
    title: "Neon Emotions",
    year: 2022,
    size: "large",
    dimensions: '40" x 40"',
    url: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg",
  },
  {
    id: 9,
    title: "Fluid Expressions",
    year: 2023,
    size: "medium",
    dimensions: '30" x 48"',
    url: "https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256590/The_Unseen_Divide_uyvlqq.jpg",
  },
];

/**
 * The GalleryPage component
 * @description A component that displays the gallery page
 * @returns {JSX.Element} The GalleryPage component
 */
export function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filteredArtworks = useMemo(() => {
    return filter === "All"
      ? artworks
      : artworks.filter(
          (artwork) =>
            artwork.size.toLowerCase().trim() === filter.toLowerCase().trim(),
        );
  }, [filter]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex min-h-dvh flex-col"
    >
      <SectionTitle
        title="Browse Artworks"
        description="Browse through the collection of artworks"
      />

      <FilterList filter={filter} setFilter={setFilter} className="mb-6 mt-4" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredArtworks.map((artwork) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer transition-shadow hover:shadow-lg">
                    <CardContent className="overflow-hidden rounded-xl p-0">
                      <CloudinaryImage
                        src={artwork.url}
                        alt={artwork.title}
                        width={400}
                        height={300}
                        quality="auto"
                        format="auto"
                        crop={{
                          type: "scale",
                          source: true,
                          width: 400,
                          aspectRatio: "4:5",
                        }}
                        className="h-64 w-full object-cover"
                      />
                      <div className="p-4">
                        <h2 className="mb-2 text-xl font-semibold">
                          {artwork.title}
                        </h2>
                        <p className="text-sm text-gray-600">
                          {artwork.year} - Acrylic on Canvas
                        </p>
                        <p className="text-sm text-gray-600">
                          {artwork.dimensions}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="flex max-h-full max-w-3xl flex-col overflow-y-auto p-0">
                  <div className="grid gap-4 p-4 md:grid-cols-2">
                    <CloudinaryImage
                      src={artwork.url}
                      alt={artwork.title}
                      width={600}
                      height={450}
                      quality="auto"
                      format="auto"
                      crop={{
                        type: "scale",
                        source: true,
                        width: 500,
                      }}
                      className="h-auto w-full rounded-lg object-cover"
                    />

                    <div className="flex flex-col gap-4">
                      <DialogHeader className="gap-2">
                        <DialogTitle asChild>
                          <h2 className="text-xl font-bold">{artwork.title}</h2>
                        </DialogTitle>

                        <DialogDescription asChild>
                          <div className="flex flex-col gap-1">
                            <p className="text-gray-600">
                              {artwork.year} - Acrylic on Canvas
                            </p>
                            <p className="text-gray-600">
                              Dimensions: {artwork.dimensions}
                            </p>
                          </div>
                        </DialogDescription>
                      </DialogHeader>

                      <p className="mb-4">
                        This captivating acrylic abstract piece by Bange Yhodhy
                        explores the depths of emotion through a harmonious
                        blend of color, form, and texture. The artwork invites
                        viewers to immerse themselves in a world of
                        non-representational beauty, evoking personal
                        interpretations and feelings.
                      </p>
                      <p className="mb-4">
                        Yhodhy&lsquo;s masterful use of acrylic paint creates
                        layers of visual intrigue, with each brushstroke and
                        color choice carefully considered to produce a balanced
                        yet dynamic composition. The piece reflects the
                        artist&lsquo;s commitment to pushing the boundaries of
                        abstract expression through the versatile medium of
                        acrylics.
                      </p>
                    </div>
                  </div>
                  <DialogFooter className="gap-2 border-t p-4">
                    <Button className="order-1 mb-2 w-full">
                      Inquire About This Piece
                    </Button>
                    <Button variant="outline" className="w-full">
                      Add to Favorites
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
