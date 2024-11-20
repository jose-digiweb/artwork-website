// Components
import { GalleryPage } from "@/components/galleryPage";
import { AppPage } from "@/components/utils";

/**
 * The gallery page
 * @description The gallery page
 * @returns {JSX.Element} The gallery page
 */
export default async function galleryPage() {
  return (
    <AppPage>
      <GalleryPage />
    </AppPage>
  );
}
