// Dependencies
import { prisma } from "@/lib/prisma";
import { Artwork } from "@prisma/client";

export type ArtworkType = Omit<Artwork, "id" | "createdAt" | "updatedAt">;

export const getArtworks = async () => {
  const artworks = await prisma.artwork.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });

  return artworks;
};

export const getFeaturedArtworks = async () => {
  const artworks = await prisma.artwork.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return artworks;
};

export const addArtwork = async (data: ArtworkType) => {
  const artwork = await prisma.artwork.create({ data });

  return artwork;
};

export const deleteArtwork = async (id: string) => {
  await prisma.artwork.delete({
    where: {
      id,
    },
  });
};
