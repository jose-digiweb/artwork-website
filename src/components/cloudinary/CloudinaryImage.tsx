"use client";

// Dependencies
import { CldImage, type CldImageProps } from "next-cloudinary";

/**
 * The CloudinaryImage component
 * @description A wrapper around the CldImage component
 * @param props - The props for the CldImage component
 * @returns The CloudinaryImage component
 */
export const CloudinaryImage = (
  props: Omit<CldImageProps, "quality" | "format">,
) => {
  return (
    <CldImage
      quality="auto"
      format="auto"
      {...props}
      draggable={false}
      className={`select-none ${props.className}`}
    />
  );
};
