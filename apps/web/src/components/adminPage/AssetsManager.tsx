// Dependencies
import { cn } from "@/lib/utils";

// Components
import { Header } from "./header";
import { AssetsList } from "./assets";

// Types
import type { Artwork } from "@bangeyhodhy/database";
type Props = {
  artWorks: Artwork[];
  className?: string;
};

/**
 * The AssetsManager component
 * @description The assets manager component
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @returns {React.ReactNode} The AssetsManager component
 */
export const AssetsManager = ({ artWorks, className }: Props) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Header />
      <AssetsList artWorks={artWorks} />
    </div>
  );
};
