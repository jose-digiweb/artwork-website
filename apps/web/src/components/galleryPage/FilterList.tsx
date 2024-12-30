"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const sizes = ["All", 'Small (up to 24")', 'Medium (25"-36")', 'Large (37"+)'];

// Types
type Props = {
  className?: string;
  filter: string;
  setFilter: (size: string) => void;
};

const getFilter = (filter: string) => {
  return filter.split(" ")[0];
};

export const FilterList = ({ className, filter, setFilter }: Props) => {
  return (
    <div className={cn("flex w-full gap-2 overflow-x-auto", className)}>
      {sizes.map((size) => (
        <Button
          key={size}
          onClick={() => setFilter(getFilter(size))}
          variant={filter === getFilter(size) ? "default" : "outline"}
        >
          {size}
        </Button>
      ))}
    </div>
  );
};
