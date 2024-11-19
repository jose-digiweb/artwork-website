import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SectionBgBlur, SectionTitle } from "../homePage/utils";
import { cn } from "@/lib/utils";

// Types
type Props = {
  className?: string;
};

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/atelie_bangeyhodhy",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/bangeyhodhy",
    icon: Facebook,
  },
];

/**
 * The Connect section
 * @description The connect section of the about page
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @returns {JSX.Element} The Connect section component
 */
export const ConnectSection = ({ className }: Props) => {
  return (
    <section className={cn("flex flex-col", className)}>
      <SectionTitle
        title="Let's connect"
        description="Follow my artistic journey on social media"
      />

      <SectionBgBlur className="flex items-center gap-4 p-4">
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            className="text-purple-600 hover:text-purple-700"
          >
            <span className="sr-only">{link.name}</span>
            <link.icon className="size-8" />
          </Link>
        ))}
      </SectionBgBlur>
    </section>
  );
};
