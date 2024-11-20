"use client";

// Dependencies
import { cn } from "@/lib/utils";
import { useState } from "react";

// Components
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Paintbrush, Palette, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
      "Bange Yhodhy is a contemporary abstract artist known for pushing the boundaries of form and color. With a career spanning over two decades, Yhodhy's work has been featured in galleries across Europe and North America.",
  },
  {
    title: "The Inspiration",
    icon: Palette,
    content:
      "Inspired by urban landscapes, natural phenomena, and human emotions, Yhodhy creates pieces that resonate on a subconscious level with viewers. Each artwork is an exploration of the unseen connections that bind us all.",
  },
  {
    title: "The Process",
    icon: Zap,
    content:
      "Yhodhy's creative process is a dance of intuition and technique. Starting with bold, gestural strokes, Yhodhy builds layers of color and texture, often incorporating unconventional materials to create depth and intrigue in each piece.",
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
                  <AnimatePresence mode="wait">
                    {activeCard === index && (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
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
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionBgBlur>
    </section>
  );
}
