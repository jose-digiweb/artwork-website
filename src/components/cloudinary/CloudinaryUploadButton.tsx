// Components
import {
  CldUploadWidget,
  type CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";

// Types
export type CloudinaryUploadResult = CloudinaryUploadWidgetInfo;
type Props = {
  onSuccess: (results: CloudinaryUploadResult) => void;
};

/**
 * The CloudinaryUploadButton component
 * @description The CloudinaryUploadButton component
 * @param {Props} props - The component props
 * @param {(results: CloudinaryUploadWidgetInfo) => void} props.onSuccess - The onSuccess callback function
 * @returns {React.ReactNode} The CloudinaryUploadButton component
 */
export const CloudinaryUploadButton = ({ onSuccess }: Props) => {
  return (
    <CldUploadWidget
      uploadPreset="artwork-upload"
      options={{
        maxFiles: 10,
        multiple: true,
        sources: ["local", "unsplash"],
      }}
      signatureEndpoint={process.env.NEXT_PUBLIC_CLOUDINARY_SIGNATURE_ENDPOINT}
      onSuccess={(results) => {
        if (!results.info || typeof results.info === "string") return;

        onSuccess(results.info);
      }}
      onError={() => {
        toast.error("Error uploading image, please try again");
      }}
      onQueuesEnd={(_, { widget }) => {
        widget.close();
      }}
    >
      {({ open }) => {
        return (
          <Button onClick={() => open()} className="w-max gap-2">
            <PlusCircle />

            <span>Upload Image</span>
          </Button>
        );
      }}
    </CldUploadWidget>
  );
};
