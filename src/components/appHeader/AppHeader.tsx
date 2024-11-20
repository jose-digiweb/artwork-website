"use client";

// Dependencies
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";

// Components
import Link, { LinkProps } from "next/link";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";

// Types
type Props = {
  className?: string;
};

/**
 * The AppHeader component
 * @description The app header component
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @returns {React.ReactNode} The app header component
 */
export const AppHeader = ({ className }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      className={cn(
        "flex h-min w-full shrink-0 grow-0 flex-col bg-white/50 px-4 shadow backdrop-blur-md",
        className,
      )}
    >
      <nav className="h-header mx-auto flex w-full max-w-screen-xl shrink-0 grow-0 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-kushan)] text-2xl font-bold text-gray-800"
        >
          Bange Yhodhy
        </Link>

        <div className="hidden gap-6 font-medium md:flex">
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/about">About Me</NavLink>
          <NavLink href="/#contact-section">Contact</NavLink>
          <NavLink href="/admin">Admin</NavLink>
        </div>

        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle menu"
          data-open={isMenuOpen}
          className="group transition-colors hover:bg-white/30 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex w-8 flex-col gap-2">
            <div className="h-[3px] w-1/2 origin-right rounded-2xl bg-black duration-500 group-data-[open=true]:-translate-x-[12px] group-data-[open=true]:-translate-y-[1px] group-data-[open=true]:rotate-[225deg]" />
            <div className="h-[3px] w-full rounded-2xl bg-black duration-500 group-data-[open=true]:-rotate-45" />
            <div className="h-[3px] w-1/2 origin-left place-self-end rounded-2xl bg-black duration-500 group-data-[open=true]:translate-x-[12px] group-data-[open=true]:translate-y-[1px] group-data-[open=true]:rotate-[225deg]" />
          </div>
        </Button>
      </nav>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-x-0 top-full z-50 overflow-hidden bg-gradient-to-br from-rose-100 via-fuchsia-100 to-indigo-100 drop-shadow-md md:hidden"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col items-end space-y-4 text-xl">
                <NavLink href="/gallery" onClick={() => setIsMenuOpen(false)}>
                  Gallery
                </NavLink>
                <NavLink href="/about" onClick={() => setIsMenuOpen(false)}>
                  About Me
                </NavLink>
                <NavLink
                  href="#contact-section"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

function NavLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
} & LinkProps) {
  const pathname = usePathname();

  const isActive = useMemo(() => pathname === href, [pathname, href]);

  return (
    <Link
      href={href}
      className={cn(
        "text-gray-600 transition-colors hover:text-gray-800 hover:text-primary",
        {
          "text-primary": isActive,
        },
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
