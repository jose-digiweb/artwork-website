// Components
import { GalleryPage } from "@/components/galleryPage";

/**
 * The gallery page
 * @description The gallery page
 * @returns {JSX.Element} The gallery page
 */
export default async function galleryPage() {
  return (
    <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col p-4">
      <GalleryPage />
    </div>
  );
}
