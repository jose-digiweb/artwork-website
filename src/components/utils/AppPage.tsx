// Dependencies
import { cn } from "@/lib/utils";

// Types
import type { ReactNode } from "react";
type Props = {
  className?: string;
  children: ReactNode;
};

/**
 * The AppPage component
 * @description The app page component
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @param {ReactNode} props.children - The component children
 * @returns {React.ReactNode} The AppPage component
 */
export const AppPage = ({ className, children }: Props) => {
  return (
    <section
      className={cn(
        "h-page-min mx-auto flex h-full w-full max-w-screen-xl flex-col p-4 py-8",
        className,
      )}
    >
      {children}
    </section>
  );
};
