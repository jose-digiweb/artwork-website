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

export const editArtwork = async (id: string, data: ArtworkType) => {
  await prisma.artwork.update({
    where: {
      id,
    },
    data,
  });
};

export const toggleFeaturedArtwork = async (id: string, featured: boolean) => {
  await prisma.artwork.update({
    where: { id },
    data: { featured },
  });
};
