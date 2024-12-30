"use client";

// Dependencies
import { cn } from "@/lib/utils";
import { useState } from "react";
import { addArtworkAction, deleteCloudinaryAssetAction } from "@/serverActions";

// Components
import {
  CloudinaryUploadButton,
  CloudinaryUploadResult,
} from "@/components/cloudinary";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { AddArtworkForm, type AddArtworkFormValues } from "../AddArtworkForm";

// Types
type Props = {
  className?: string;
};

/**
 * The Header component
 * @description The header component
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @returns {React.ReactNode} The Header component
 */
export const Header = ({ className }: Props) => {
  const [imageData, setImageData] = useState<CloudinaryUploadResult | null>(
    null,
  );

  const handleCancel = async () => {
    if (!imageData) return;

    const formData = new FormData();
    formData.append("id", imageData.public_id);

    deleteCloudinaryAssetAction(null, formData);
    setImageData(null);
  };

  const handleSubmit = async (values: AddArtworkFormValues) => {
    if (!imageData || !values) return;

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("year", values.year);
    formData.append("dimensions", values.dimensions);
    formData.append("size", values.size);
    formData.append("imageUrl", imageData.url);
    formData.append("imageSecureUrl", imageData.secure_url);
    formData.append("imagePublicId", imageData.public_id);
    formData.append("thumbnailUrl", imageData.thumbnail_url);
    formData.append("featured", values.featured.toString());

    addArtworkAction(null, formData);
    setImageData(null);
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <CloudinaryUploadButton onSuccess={setImageData} />

      {imageData !== null ? (
        <Dialog open={imageData !== null}>
          <DialogContent showCloseButton={false}>
            <div className="flex h-full max-h-dvh flex-col gap-8 overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Artwork Information</DialogTitle>

                <DialogDescription>
                  Provide some information about your artwork
                </DialogDescription>
              </DialogHeader>

              <AddArtworkForm onSubmit={handleSubmit} onCancel={handleCancel} />
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
};
