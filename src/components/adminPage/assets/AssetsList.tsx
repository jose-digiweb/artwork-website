// Dependencies
import { cn } from "@/lib/utils";

// Types
import type { Artwork } from "@prisma/client";
type Props = {
  artWorks: Artwork[];
  className?: string;
};

/**
 * The AssetsList component
 * @description The assets list component
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @returns {React.ReactNode} The AssetsList component
 */
export const AssetsList = ({ artWorks, className }: Props) => {
  return (
    <div className={cn("flex flex-col", className)}>
      {artWorks.map((artwork) => (
        <div key={artwork.id} className="flex flex-col">
          <h3>{artwork.title}</h3>

          <p>{artwork.description}</p>
        </div>
      ))}
    </div>
  );
};
