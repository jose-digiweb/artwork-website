"use client";

// Dependencies
import { cn } from "@/lib/utils";

// Components
import { CloudinaryImage } from "@/components/cloudinary";
import { SectionBgBlur, SectionTitle } from "../../utils";

// Types
type Props = {
  className?: string;
};

/**
 * The Biography section
 * @description The biography section of the home page
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @returns {JSX.Element} The Biography section component
 */
export const BiographySection = ({ className }: Props) => {
  return (
    <section className={cn("grid grid-cols-1 grid-rows-[auto,1fr]", className)}>
      <SectionTitle
        title="Biography"
        description="The story behind the artist"
      />

      <SectionBgBlur className="grid grid-cols-1 grid-rows-1 gap-4 p-4 md:grid-cols-[1fr,auto]">
        <article className="prose lg:prose-xl">
          <p>
            Born and raised in Bafatá, Guinea-Bissau, my artistic journey is
            deeply rooted in the vibrant colors and cultural rhythms of my
            homeland. As a child, the intricate patterns of my Fulani heritage
            and the natural beauty of West Africa ignited my fascination with
            abstract forms and textures.
          </p>

          <p>
            After spending many years in Cape Verde, I moved to São Paulo,
            Brazil, and later settled in Rotterdam, Netherlands. These diverse
            experiences broadened my perspective, infusing my work with global
            influences and blending vibrant hues, layered compositions, and
            emotional depth to create paintings that resonate universally.
          </p>

          <p>
            My approach to abstract art is a synthesis of tradition and
            innovation. Inspired by the vibrant textures of my Fulani roots, the
            colors of Guinea-Bissau, and the diverse cultures I’ve encountered
            in Cape Verde, São Paulo, and Rotterdam, I use acrylics and mixed
            media to construct dynamic textures and movements on canvas. The
            movement of my hands across the canvas mirrors the dynamic flow of
            life, aiming to evoke the complexities of identity, resilience, and
            transformation.
          </p>

          <p>
            Painting with my hands allows me to immerse myself fully in the
            creative process, blending intuition with raw emotion. This tactile
            journey creates a sense of intimacy and authenticity in my work,
            where every gesture carries the rhythm of my heritage and the energy
            of my experiences. Each piece becomes an exploration of emotion, a
            bridge between the tangible and intangible, and a tribute to the
            diversity of human experience.
          </p>

          <p>
            My paintings have been exhibited in galleries and cultural spaces in
            São Paulo and Rotterdam, inviting viewers to interpret and connect
            with the themes woven into each work. Through abstract art, I strive
            to inspire curiosity, spark conversations, and create a space for
            reflection and empowerment.
          </p>
        </article>

        <div className="hidden flex-col gap-8 md:flex md:max-w-72 lg:max-w-96">
          <div className="relative flex w-full flex-col overflow-hidden rounded-xl drop-shadow-md">
            <div className="relative aspect-[4/5] h-96 overflow-hidden">
              <CloudinaryImage
                fill
                quality="auto"
                format="auto"
                crop={{
                  type: "scale",
                  source: true,
                  width: 300,
                  aspectRatio: "4:5",
                }}
                src="https://res.cloudinary.com/dg0lp0ga7/image/upload/v1732199790/bange-studio-4_ylae9u.jpg"
                alt="Bange Yhodhy in the studio"
                className="h-full w-full object-cover object-left-top"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-2 rounded-xl bg-white/50 p-4 backdrop-blur-md">
            <h3 className="font-semibold">Artist Statement</h3>

            <p className="italic">
              My art is a bridge between the visible and the invisible, the
              tangible and the felt. Through abstract forms and vivid colors, I
              seek to give shape to the intangible emotions that define our
              human experience. Each piece is an invitation to the viewer to
              explore their own emotional landscape and find resonance in the
              interplay of color, texture, and form.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-xl bg-white/50 p-4 backdrop-blur-md">
            <h3 className="font-semibold">My influences and inspirations</h3>

            <ul className="text-sm">
              <li>Amoako Boafo</li>
              <li>Tutu Sousa</li>
              <li>Sidney Cerqueira</li>
              <li>Jean Michel Basquiat</li>
              <li>Armand Boua</li>
              <li>Laetitia Ky</li>
            </ul>
          </div>
        </div>
      </SectionBgBlur>
    </section>
  );
};
