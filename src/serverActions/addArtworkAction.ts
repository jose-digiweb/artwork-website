"use server";

import { revalidatePath } from "next/cache";
import { apiClient } from "@/apiClient";
import { Artwork } from "@prisma/client";

export async function addArtworkAction(state: unknown, formData: FormData) {
  const data = Object.fromEntries(formData.entries()) as unknown as Artwork;

  try {
    apiClient.artwork.addArtwork({
      ...data,
      featured: String(data.featured) === "true",
    });

    revalidatePath("/admin");
  } catch (error) {
    throw new Error(`Failed to add artwork ${(error as Error).message}`);
  }
}

export async function deleteArtworkAction(state: unknown, formData: FormData) {
  const id = formData.get("id") as string;
  try {
    apiClient.cloudinary.deleteArtwork(id);

    revalidatePath("/admin");
  } catch (error) {
    throw new Error(`Failed to delete artwork ${(error as Error).message}`);
  }
}
