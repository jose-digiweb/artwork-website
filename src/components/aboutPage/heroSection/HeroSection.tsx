// Components
import { TextGradientClip } from "../../utils";
import { Button } from "../../ui/button";
import { GalleryVertical } from "lucide-react";
import { CloudinaryImage } from "../../cloudinary";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Types
type Props = {
  className?: string;
};

export const HeroSection = ({ className }: Props) => {
  return (
    <section
      className={cn(
        "flex w-full flex-col items-center md:flex-row md:justify-start md:gap-24",
        className,
      )}
    >
      <div className="md:order-1s order-2 w-full text-center md:w-1/2 md:text-left">
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-800">
          About <TextGradientClip>Bange Yhodhy</TextGradientClip>
        </h1>

        <p className="mb-4 text-lg leading-relaxed text-gray-600">
          Abstract artist, color enthusiast, and emotion translator.
        </p>
        <p className="mb-8 text-balance leading-relaxed text-gray-500">
          My art is a tactile journey, where the connection between my hands and
          the canvas becomes a form of storytelling.{" "}
          <strong>Painting with my hands </strong>
          allows me to immerse myself fully in the creative process, blending
          intuition with raw emotion. This direct interaction brings a sense of
          intimacy and authenticity to my work, as every gesture carries the
          rhythm of my heritage and the energy of my experiences.
        </p>

        <Link href="/gallery">
          <Button className="gap-4 hover:scale-105">
            <GalleryVertical />

            <span>Explore Gallery</span>
          </Button>
        </Link>
      </div>

      <div className="relative order-1 mb-6 size-64 shrink-0 overflow-hidden rounded-full bg-white/10 shadow-2xl ring-8 ring-primary/10 backdrop-blur-lg md:order-2 md:size-80">
        <CloudinaryImage
          fill
          priority
          format="auto"
          aspectRatio="1:1"
          sizes="(max-width: 768px) 320px, 640px"
          crop="auto"
          alt="Bange Yhodhy"
          src="https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731256581/bange_yhodhy_ub8mki.png"
          className="rounded-full object-cover"
        />
      </div>
    </section>
  );
};
