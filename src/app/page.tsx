// Components
import * as Home from "@/components/homePage";

/**
 * The Home component
 * @description A component that displays the home page
 * @returns {React.ReactNode} The Home component
 */
export default function HomePage() {
  return (
    <section className="z-10 mx-auto flex h-full w-full max-w-screen-xl flex-col gap-8 p-4">
      <Home.HeroSection className="mb-8 sm:mb-14" />

      <Home.FeaturedSection />

      <Home.AboutSection />

      <Home.ContactSection />
    </section>
  );
}
