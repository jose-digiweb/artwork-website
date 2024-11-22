"use server";

import { revalidatePath } from "next/cache";
import { apiClient } from "@/apiClient";
import { Artwork } from "@prisma/client";

export async function addArtworkAction(state: unknown, formData: FormData) {
  const data = Object.fromEntries(formData.entries()) as unknown as Artwork;

  try {
    await apiClient.artwork.addArtwork({
      ...data,
      featured: String(data.featured) === "true",
    });

    revalidatePath("/admin");
    revalidatePath("/gallery");
    revalidatePath("/");
  } catch (error) {
    throw new Error(`Failed to add artwork ${(error as Error).message}`);
  }
}

export async function deleteArtworkAction(state: unknown, formData: FormData) {
  const id = formData.get("id") as string;
  const imageId = formData.get("imageId") as string;

  if (!id) throw new Error("Artwork id is required");
  if (!imageId) throw new Error("Image id is required");

  try {
    await apiClient.cloudinary.deleteArtwork(imageId);
    await apiClient.artwork.deleteArtwork(id);

    revalidatePath("/admin");
    revalidatePath("/gallery");
    revalidatePath("/");
  } catch (error) {
    throw new Error(`Failed to delete artwork ${(error as Error).message}`);
  }
}

export async function editArtworkAction(state: unknown, formData: FormData) {
  const id = formData.get("id") as string;
  const data = Object.fromEntries(formData.entries()) as unknown as Artwork;

  if (!id) throw new Error("Artwork id is required");

  try {
    await apiClient.artwork.editArtwork(id, {
      ...data,
      featured: String(data.featured) === "true",
    });

    revalidatePath("/admin");
    revalidatePath("/gallery");
    revalidatePath("/");
  } catch (error) {
    throw new Error(`Failed to edit artwork ${(error as Error).message}`);
  }
}

export async function toggleFeaturedArtworkAction(
  state: unknown,
  formData: FormData,
) {
  const id = formData.get("id") as string;
  const featured = formData.get("featured") as string;

  if (!id) throw new Error("Artwork id is required");

  try {
    await apiClient.artwork.toggleFeaturedArtwork(id, featured === "true");

    revalidatePath("/admin");
    revalidatePath("/gallery");
    revalidatePath("/");
  } catch (error) {
    throw new Error(
      `Failed to toggle featured artwork ${(error as Error).message}`,
    );
  }
}

export async function deleteCloudinaryAssetAction(
  state: unknown,
  formData: FormData,
) {
  const id = formData.get("id") as string;

  if (!id) throw new Error("Asset id is required");

  try {
    await apiClient.cloudinary.deleteArtwork(id);

    revalidatePath("/admin");
  } catch (error) {
    throw new Error(`Failed to delete artwork ${(error as Error).message}`);
  }
}
