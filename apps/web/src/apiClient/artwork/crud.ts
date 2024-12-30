// Dependencies
import { database, type Artwork } from "@bangeyhodhy/database";

export type ArtworkType = Omit<Artwork, "id" | "createdAt" | "updatedAt">;

export const getArtworks = async () => {
  const artworks = await database.artwork.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });

  return artworks;
};

export const getFeaturedArtworks = async () => {
  const artworks = await database.artwork.findMany({
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
  const artwork = await database.artwork.create({ data });

  return artwork;
};

export const deleteArtwork = async (id: string) => {
  await database.artwork.delete({
    where: {
      id,
    },
  });
};

export const editArtwork = async (id: string, data: ArtworkType) => {
  await database.artwork.update({
    where: {
      id,
    },
    data,
  });
};

export const toggleFeaturedArtwork = async (id: string, featured: boolean) => {
  await database.artwork.update({
    where: { id },
    data: { featured },
  });
};
