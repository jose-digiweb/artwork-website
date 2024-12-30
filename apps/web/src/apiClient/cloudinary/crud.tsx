// Dependencies
import { cloudinary, type ResourceApiResponse } from "./cloudinaryClient";

// Types
export type GetArtworksResponse = {
  artworks: ResourceApiResponse["resources"];
  nextCursor: ResourceApiResponse["next_cursor"];
};
export type GetArtworksParams = {
  maxResults?: number;
  nextCursor?: ResourceApiResponse["next_cursor"];
};

/**
 * Get artworks
 * @description Get artworks
 * @returns {Promise<Artwork[]>} The artworks
 */
export const getArtworks = async ({
  nextCursor,
  maxResults = 30,
}: GetArtworksParams) => {
  const results = await cloudinary.resources_by_asset_folder("artworks", {
    max_results: maxResults,
    next_cursor: nextCursor,
  });

  return {
    artworks: results.resources,
    nextCursor: results.next_cursor,
  } as GetArtworksResponse;
};

export const deleteArtwork = async (id: string) => {
  await cloudinary.delete_resources([id]);
};
