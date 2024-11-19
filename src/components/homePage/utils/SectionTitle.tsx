import React from "react";
import { TextGradientClip } from "../../utils";
import { cn } from "@/lib/utils";

// Types
type Props = {
  id?: string;
  title: string;
  description: string;
  className?: string;
};

export const SectionTitle = ({ id, title, description, className }: Props) => {
  return (
    <div
      id={id}
      className={cn(
        "mb-6 flex scroll-mt-8 flex-col items-start justify-center text-center md:mb-0 md:py-4",
        className,
      )}
    >
      <TextGradientClip className="mb-1 pb-1 text-3xl font-light tracking-tight sm:text-5xl">
        <h2>{title}</h2>
      </TextGradientClip>
      <div className="mb-2 h-0.5 w-16 bg-gray-300" />
      <p className="max-w-[600px] text-gray-500 md:text-lg/relaxed">
        {description}
      </p>
    </div>
  );
};
