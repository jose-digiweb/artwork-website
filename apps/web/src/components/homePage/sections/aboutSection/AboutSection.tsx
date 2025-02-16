"use client";

// Dependencies
import { cn } from "@/lib/utils";
import { useState } from "react";

// Components
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Paintbrush, Palette, Zap } from "lucide-react";
import { CloudinaryImage } from "../../../cloudinary";
import { SectionTitle, SectionBgBlur } from "../../../utils";
import Link from "next/link";

// Types
type Props = {
  className?: string;
};

const cards = [
  {
    title: "The Artist",
    icon: Paintbrush,
    content:
      "I’m Bange Yhodhy, an artist deeply inspired by the colors and textures of my Fulani heritage from Guinea-Bissau, interwoven with the rich influences of Cape Verde, São Paulo, and Rotterdam.",
  },
  {
    title: "The Inspiration",
    icon: Palette,
    content:
      "Inspired by the vibrant textures of my Fulani roots, the colors of Guinea-Bissau, and the diverse cultures I’ve encountered in Cape Verde, São Paulo, and Rotterdam, I aim to evoke the complexities of identity, resilience, and transformation. The movement of my hands across the canvas mirrors the dynamic flow of life, creating art that invites viewers to feel, reflect, and connect.",
  },
  {
    title: "The Process",
    icon: Zap,
    content:
      "My art is a tactile journey, where the connection between my hands and the canvas becomes a form of storytelling. Painting with my hands allows me to immerse myself fully in the creative process, blending intuition with raw emotion. This direct interaction brings a sense of intimacy and authenticity to my work, as every gesture carries the rhythm of my heritage and the energy of my experiences.",
  },
];

export function AboutSection({ className }: Props) {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className={cn("flex w-full flex-col", className)}>
      <SectionTitle
        title="About me"
        description="Read more about Bange Yhodhy."
      />

      <SectionBgBlur className="grid grid-cols-1 items-start gap-4 overflow-hidden rounded-xl p-4 md:grid-cols-[auto_1fr] lg:gap-12">
        <div className="relative hidden aspect-[3/3] overflow-hidden rounded-lg md:flex md:w-96">
          <CloudinaryImage
            fill
            quality="auto"
            format="auto"
            crop={{
              type: "scale",
              source: true,
              width: 400,
              aspectRatio: "4:5",
            }}
            className="rounded-lg object-cover"
            alt="Bange Yhodhy in the studio"
            src="https://res.cloudinary.com/dg0lp0ga7/image/upload/v1731783497/by-insta-1_itbmzd.jpg"
          />
          <blockquote className="absolute inset-x-0 bottom-0 text-pretty bg-gradient-to-t from-black/80 to-transparent p-4 pt-6 text-sm italic text-white md:text-base">
            Art is the language of the soul, speaking truths that words cannot
            express.
            <footer className="mt-2 text-xs font-medium md:text-sm">
              - Bange Yhodhy
            </footer>
          </blockquote>
        </div>

        <div className="flex flex-col gap-4">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="border bg-transparent transition-all duration-300"
              onClick={() => setActiveCard(index)}
            >
              <CardContent>
                <CardHeader
                  className={cn(
                    "group cursor-pointer flex-row items-center gap-4 p-0 transition-colors hover:text-primary",
                    {
                      "mb-2 cursor-auto text-primary": activeCard === index,
                    },
                  )}
                >
                  <card.icon className="size-6 shrink-0" />

                  <h3 className="w-full text-lg font-semibold">{card.title}</h3>
                </CardHeader>

                <div className="w-full pl-10">
                  {activeCard === index && (
                    <p
                      key={index}
                      className="overflow-hidden text-pretty text-sm md:text-base"
                    >
                      {card.content}

                      <Link
                        href="/about"
                        className="group mt-2 flex w-min items-center text-sm text-primary hover:underline"
                      >
                        <span className="truncate font-semibold">
                          Read More
                        </span>
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionBgBlur>
    </section>
  );
}
