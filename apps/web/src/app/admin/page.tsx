// Components
import { apiClient } from "@/apiClient";
import { AssetsManager } from "@/components/adminPage";
import { AppPage, SectionTitle } from "@/components/utils";
import { redirect } from "next/navigation";

/**
 * The Admin page
 * @description The admin page of the website
 * @returns {JSX.Element} The Admin page component
 */
export default async function AdminPage() {
  if (process.env.NODE_ENV === "production") redirect("/");

  const artworks = await apiClient.artwork.getArtworks();

  return (
    <AppPage className="gap-8">
      <SectionTitle
        title="Manage Artworks"
        description="Manage your artworks"
      />

      <AssetsManager artWorks={artworks} />
    </AppPage>
  );
}
