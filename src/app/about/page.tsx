// Components
import * as About from "@/components/aboutPage";

/**
 * The About page
 * @description The about page of the website
 * @returns {JSX.Element} The About page component
 */
export default function aboutPage() {
  return (
    <section className="mx-auto flex h-full w-full max-w-screen-xl flex-col gap-8 p-4">
      <About.HeroSection className="mb-8 sm:mb-14" />

      <About.BiographySection />

      <About.ConnectSection />
    </section>
  );
}
