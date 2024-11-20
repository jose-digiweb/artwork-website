// Dependencies
import { cn } from "@/lib/utils";

// Types
type Props = {
  className?: string;
};

/**
 * The AppFooter component
 * @description The footer component
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @returns {React.ReactNode} The AppFooter component
 */
export const AppFooter = ({ className }: Props) => {
  return (
    <footer
      className={cn(
        "h-header flex items-center justify-center bg-white/50 p-4 text-center backdrop-blur-sm",
        className,
      )}
    >
      <p>&copy; 2024 Bange Yhodhy. All rights reserved.</p>
    </footer>
  );
};
