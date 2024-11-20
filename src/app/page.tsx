// Components
import * as Home from "@/components/homePage";
import { AppPage } from "@/components/utils";

/**
 * The Home component
 * @description A component that displays the home page
 * @returns {React.ReactNode} The Home component
 */
export default function HomePage() {
  return (
    <AppPage className="gap-8">
      <Home.HeroSection className="mb-8 sm:mb-14" />

      <Home.FeaturedSection />

      <Home.AboutSection />

      <Home.ContactSection />
    </AppPage>
  );
}
