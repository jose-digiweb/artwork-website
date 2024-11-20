// Components
import * as About from "@/components/aboutPage";
import { AppPage } from "@/components/utils";

/**
 * The About page
 * @description The about page of the website
 * @returns {JSX.Element} The About page component
 */
export default function aboutPage() {
  return (
    <AppPage className="gap-8">
      <About.HeroSection className="mb-8 sm:mb-14" />

      <About.BiographySection />

      <About.ConnectSection />
    </AppPage>
  );
}
