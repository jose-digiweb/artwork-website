"use client";

import { Button } from "@/components/ui/button";
// Dependencies
import { cn } from "@/lib/utils";

// Components
import { CldUploadWidget } from "next-cloudinary";
import { toast } from "sonner";

// Types
type Props = {
  className?: string;
};

export const Header = ({ className }: Props) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <CldUploadWidget
        uploadPreset="artwork-upload"
        options={{
          maxFiles: 10,
          multiple: true,
          maxFileSize: 1024 * 1024 * 5,
          sources: ["local", "unsplash"],
        }}
        signatureEndpoint={
          process.env.NEXT_PUBLIC_CLOUDINARY_SIGNATURE_ENDPOINT
        }
        onSuccess={(results) => {
          console.log("Public ID", results);
        }}
        onError={() => {
          toast.error("Error uploading image, please try again");
        }}
      >
        {({ open }) => {
          return (
            <Button onClick={() => open()} className="w-max">
              Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
