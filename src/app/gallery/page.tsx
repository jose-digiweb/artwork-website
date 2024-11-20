// Components
import { apiClient } from "@/apiClient";
import { GalleryPage } from "@/components/galleryPage";
import { AppPage } from "@/components/utils";

/**
 * The gallery page
 * @description The gallery page
 * @returns {JSX.Element} The gallery page
 */
export default async function galleryPage() {
  const artWorks = await apiClient.artwork.getArtworks();

  return (
    <AppPage>
      <GalleryPage artWorks={artWorks} />
    </AppPage>
  );
}
