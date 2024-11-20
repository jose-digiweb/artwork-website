// Components
import { AssetsManager } from "@/components/adminPage";
import { AppPage, SectionTitle } from "@/components/utils";

/**
 * The Admin page
 * @description The admin page of the website
 * @returns {JSX.Element} The Admin page component
 */
export default function AdminPage() {
  return (
    <AppPage>
      <SectionTitle
        title="Manage Artworks"
        description="Manage your artworks"
      />

      <AssetsManager />
    </AppPage>
  );
}
