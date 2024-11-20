"use client";

// Dependencies
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { wait } from "@/lib/utils";
import * as z from "zod";

// Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Schema
const formSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  subject: z.string({ required_error: "Subject is required" }),
  message: z.string({ required_error: "Message is required" }),
});
type FormValues = z.infer<typeof formSchema>;

const FormValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

/**
 * Contact Form
 * @description Contact form for the website
 * @returns {JSX.Element} Contact form component
 */
export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await wait();
      console.log(values);

      toast.success(
        "Thank you for your message. We will get back to you soon.",
      );
      form.reset(FormValues);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" type="email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="subject"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          isLoading={form.formState.isSubmitting || form.formState.isLoading}
          disabled={!form.formState.isValid || form.formState.isValidating}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
