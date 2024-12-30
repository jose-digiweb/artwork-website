"use client";

// Dependencies
import { cn } from "@/lib/utils";
import { useState } from "react";
import { editArtworkAction } from "@/serverActions/addArtworkAction";
import { deleteArtworkAction } from "@/serverActions";

// Components
import { CloudinaryImage } from "@/components/cloudinary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Edit, X } from "lucide-react";
import { AddArtworkForm, type AddArtworkFormValues } from "../AddArtworkForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

// Types
import type { Artwork } from "@bangeyhodhy/database";
type Props = {
  artWorks: Artwork[];
  className?: string;
};

/**
 * The AssetsList component
 * @description The assets list component
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @returns {React.ReactNode} The AssetsList component
 */
export const AssetsList = ({ artWorks, className }: Props) => {
  const [artworkToEdit, setArtworkToEdit] = useState<Artwork | null>(null);

  const featuredCount = artWorks.filter((artwork) => artwork.featured).length;

  const handleEdit = async (values: AddArtworkFormValues) => {
    if (!artworkToEdit) return;

    const formData = new FormData();
    formData.append("id", artworkToEdit.id);
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("year", values.year);
    formData.append("dimensions", values.dimensions);
    formData.append("size", values.size);
    formData.append("imageUrl", artworkToEdit.imageSecureUrl);
    formData.append("imageSecureUrl", artworkToEdit.imageSecureUrl);
    formData.append("imagePublicId", artworkToEdit.imagePublicId);
    formData.append("thumbnailUrl", artworkToEdit.thumbnailUrl);
    formData.append("featured", values.featured.toString());

    await editArtworkAction(null, formData);
    setArtworkToEdit(null);
  };

  const toggleFeatured = async (id: string, isFeatured: boolean) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("featured", String(isFeatured));

    await editArtworkAction(null, formData);
  };

  const handleEditCancel = async () => {
    if (!artworkToEdit) return;

    setArtworkToEdit(null);
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {artWorks.map((artwork) => (
        <Card
          key={artwork.id}
          className="h-full w-full overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm"
        >
          <CardContent className="grid h-96 grid-rows-[1fr,auto] p-0">
            <div className="relative z-10 overflow-hidden">
              <CloudinaryImage
                fill
                src={artwork.thumbnailUrl}
                alt={artwork.title}
                className="h-full w-full object-contain sm:object-cover"
              />
            </div>

            <CardFooter className="z-10 flex-col gap-2 bg-white">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <h3>{artwork.title}</h3>
                  <div className="flex items-center gap-1">
                    <span>{artwork.size}</span>
                    <span className="text-muted-foreground">-</span>
                    <span>{artwork.dimensions}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={() => setArtworkToEdit(artwork)}
                  >
                    <Edit className="size-8" />
                  </Button>
                  <form
                    action={() => {
                      const formData = new FormData();
                      formData.append("id", artwork.id);
                      formData.append("imageId", artwork.imagePublicId);
                      deleteArtworkAction(null, formData);
                    }}
                  >
                    <Button type="submit" size="icon" variant="destructive">
                      <X />
                    </Button>
                  </form>
                </div>
              </div>

              <div className="flex w-full items-center justify-between">
                <span>Featured</span>

                <Switch
                  id="featured"
                  checked={artwork.featured}
                  disabled={!artwork.featured && featuredCount === 4}
                  onCheckedChange={(checked) => [
                    toggleFeatured(artwork.id, checked),
                  ]}
                />
              </div>
            </CardFooter>
          </CardContent>
        </Card>
      ))}

      <EditArtworkDialog
        artwork={artworkToEdit}
        handleSubmit={handleEdit}
        handleCancel={handleEditCancel}
      />
    </div>
  );
};

function EditArtworkDialog({
  artwork,
  handleSubmit,
  handleCancel,
}: {
  artwork: Artwork | null;
  handleSubmit: (payload: AddArtworkFormValues) => void;
  handleCancel: () => void;
}) {
  if (artwork === null) return null;

  return (
    <Dialog open={artwork !== null}>
      <DialogContent showCloseButton={false}>
        <div className="flex h-full max-h-dvh flex-col gap-8 overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Artwork</DialogTitle>

            <DialogDescription>Change the information below</DialogDescription>
          </DialogHeader>

          <AddArtworkForm
            artwork={artwork}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
