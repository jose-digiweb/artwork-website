// Dependencies
import cloudinary, { type ResourceApiResponse } from "cloudinary";

export const client = cloudinary.v2.api;

export type { ResourceApiResponse };
