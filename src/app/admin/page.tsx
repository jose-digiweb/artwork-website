// Components
import { apiClient } from "@/apiClient";
import { AssetsManager } from "@/components/adminPage";
import { AppPage, SectionTitle } from "@/components/utils";

/**
 * The Admin page
 * @description The admin page of the website
 * @returns {JSX.Element} The Admin page component
 */
export default async function AdminPage() {
  const artworks = await apiClient.artwork.getArtworks();

  return (
    <AppPage>
      <SectionTitle
        title="Manage Artworks"
        description="Manage your artworks"
      />

      <AssetsManager artWorks={artworks} />
    </AppPage>
  );
}
