// Dependencies
import { cn } from "@/lib/utils";

// Types
type Props = {
  className?: string;
};

export const AssetsList = ({ className }: Props) => {
  return <div className={cn("flex flex-col", className)}>AssetsList</div>;
};
