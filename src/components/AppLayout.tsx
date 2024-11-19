// Components
import { AppHeader } from "./appHeader";
import { AppFooter } from "./appFooter";

// Types
import type { PropsWithChildren } from "react";

/**
 * The RootLayout component
 * @description The root layout component
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @param {React.ReactNode} children - The children components
 * @returns {React.ReactNode} The root layout component
 */
export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid min-h-dvh w-full grid-cols-1 grid-rows-[auto,1fr,auto] gap-8 overflow-y-auto">
      <AppHeader />

      {children}

      <AppFooter />
    </main>
  );
};
