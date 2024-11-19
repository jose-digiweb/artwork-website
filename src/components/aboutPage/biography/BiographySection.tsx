"use client";

// Dependencies
import { cn } from "@/lib/utils";

// Components
import { CloudinaryImage } from "@/components/cloudinary";
import { SectionBgBlur, SectionTitle } from "@/components/homePage/utils";

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
    <section
      className={cn("z-10 grid grid-cols-1 grid-rows-[auto,1fr]", className)}
    >
      <SectionTitle
        title="Biography"
        description="The story behind the artist"
      />

      <SectionBgBlur className="grid grid-cols-1 grid-rows-1 gap-4 p-4 md:grid-cols-[1fr,auto]">
        <article className="prose lg:prose-xl">
          <p>
            Born in 1988 in a small coastal town, I, Bange Yhodhy, discovered my
            passion for art at a young age. The vibrant colors of the sea and
            sky, and the ever-changing moods of nature became my first sources
            of inspiration. As a child, I would spend hours with my sketchbook,
            trying to capture the essence of the world around me.
          </p>

          <p>
            My formal journey into the world of art began in 2010 when I
            enrolled at the National Art Academy. It was here that I first
            encountered abstract art, and it was love at first sight. The
            freedom to express emotions and ideas without the constraints of
            representational art opened up a whole new world for me.
          </p>

          <p>
            During my time at the academy, I experimented with various mediums
            and techniques, but I found myself consistently drawn to acrylics
            and mixed media. The versatility of these mediums allowed me to
            create layers, textures, and depth that I felt best represented the
            complexity of human emotions.
          </p>

          <p>
            In 2013, I held my first solo exhibition, &quot;Chromatic
            Emotions,&quot; at the Urban Gallery. This marked a significant
            milestone in my career, as it was the first time I presented my
            abstract interpretations of emotions to the public. The positive
            reception encouraged me to push my boundaries further.
          </p>

          <p>
            Two years later, in 2015, I was honored to receive the Young Artist
            of the Year award from the Contemporary Art Foundation. This
            recognition not only validated my artistic approach but also opened
            doors to new opportunities and collaborations.
          </p>

          <p>
            One such opportunity came in 2017 when I was invited for a residency
            at the International Art Collective in Paris. This experience was
            transformative, exposing me to diverse artistic perspectives and
            cultural influences. It was during this time that I began
            incorporating more global themes into my work, while still
            maintaining my focus on emotional expression.
          </p>
        </article>

        <div className="hidden flex-col gap-8 md:flex md:max-w-72 lg:max-w-96">
          <div className="relative flex w-full flex-col overflow-hidden rounded-xl drop-shadow-md">
            <div className="relative aspect-[4/5] h-96 overflow-hidden">
              <CloudinaryImage
                fill
                aspectRatio="4:5"
                src="https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731783497/by-insta-1_itbmzd.jpg"
                alt="Bange Yhodhy in the studio"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="absolute bottom-0 left-0 bg-white/80 p-4 text-sm backdrop-blur-sm">
              Bange Yhodhy working on a large-scale abstract piece in the
              studio, 2022
            </p>
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
              <li>Wassily Kandinsky</li>
              <li>Mark Rothko</li>
              <li>Helen Frankenthaler</li>
              <li>Cy Twombly</li>
              <li>Joan Mitchell</li>
            </ul>
          </div>
        </div>
      </SectionBgBlur>
    </section>
  );
};
