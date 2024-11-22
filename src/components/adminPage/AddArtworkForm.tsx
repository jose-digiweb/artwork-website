"use client";

// Dependencies
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save } from "lucide-react";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { Artwork } from "@prisma/client";

// Schema
export const addArtworkFormSchema = z.object({
  title: z.string({ required_error: "Title is required" }),
  description: z.string({ required_error: "Description is required" }),
  dimensions: z.string({ required_error: "Dimensions are required" }),
  size: z.string({ required_error: "Size is required" }),
  year: z.string({ required_error: "Year is required" }),
  featured: z.boolean(),
});

// Types
export type AddArtworkFormValues = z.infer<typeof addArtworkFormSchema>;
type Props = {
  artwork?: Artwork;
  className?: string;
  onCancel: () => void;
  onSubmit: (payload: AddArtworkFormValues) => void;
};

const dimensions = [
  '36" x 48"',
  '24" x 36"',
  '40" x 60"',
  '30" x 30"',
  '48" x 36"',
  '24" x 48"',
  '36" x 36"',
  '40" x 40',
  '30" x 48"',
] as const;
const sizes = ["small", "medium", "large"] as const;

export type ArtworkSize = (typeof sizes)[number];
export type ArtworkDimensions = (typeof dimensions)[number];

const initialValues: AddArtworkFormValues = {
  title: "",
  description: "",
  dimensions: dimensions[0],
  size: sizes[0],
  featured: false,
  year: new Date().getFullYear().toString(),
};

/**
 * The AddArtworkForm component
 * @description The add artwork form component
 * @param {Props} props - The component props
 * @param {string} props.className - The component className
 * @returns {React.ReactNode} The AddArtworkForm component
 */
export function AddArtworkForm({
  artwork,
  onSubmit,
  onCancel,
  className,
}: Props) {
  const form = useForm<AddArtworkFormValues>({
    mode: "onBlur",
    defaultValues: artwork || initialValues,
    resolver: zodResolver(addArtworkFormSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex h-full w-full flex-col", className)}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Add a title" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="dimensions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dimensions</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the dimensions" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {dimensions.map((dimension) => (
                        <SelectItem key={dimension} value={dimension}>
                          {dimension}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Size</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the size" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Array.from(
                    { length: 20 },
                    (_, i) => new Date().getFullYear() - i,
                  ).map((year) => (
                    <SelectItem key={year} value={`${year}`}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Add a description" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="featured"
          render={({ field }) => (
            <FormItem className="mb-8 flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="flex flex-col gap-2">
                <FormLabel>Make it Featured</FormLabel>
                <FormDescription>Feature on the home page</FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="mt-auto flex items-center justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>

          <Button
            isLoading={form.formState.isSubmitting}
            disabled={!form.formState.isValid || form.formState.isValidating}
            type="submit"
            className="gap-2"
          >
            <Save />

            <span>Save</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
