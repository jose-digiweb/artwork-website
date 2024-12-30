"use client";

// Dependencies
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { sendContactEmailAction } from "@/app/actions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

// Schema
export const contactFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  subject: z.string({ required_error: "Subject is required" }),
  message: z.string({ required_error: "Message is required" }),
});
export type ContactFormValues = z.infer<typeof contactFormSchema>;

const formValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

/**
 * Contact Form
 * @description Contact form for the website
 * @returns Contact form component
 */
export function ContactForm() {
  const form = useForm<ContactFormValues>({
    mode: "onBlur",
    resolver: zodResolver(contactFormSchema),
    defaultValues: formValues,
  });

  const [state, action, isPending] = useActionState(
    sendContactEmailAction,
    null,
  );

  useEffect(() => {
    if (!state) return;
    if (state.success) {
      form.reset(formValues);
      toast.success(state.message);
    }
    if (!state.success) {
      toast.error(state.message);
    }
  }, [form, state]);

  return (
    <Form {...form}>
      <form action={action} className="flex flex-col gap-2">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Your name"
                  defaultValue={state?.inputs?.name}
                  {...field}
                />
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
                <Input
                  type="email"
                  placeholder="Your email"
                  defaultValue={state?.inputs?.email}
                  {...field}
                />
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
                <Input
                  type="text"
                  placeholder="Subject"
                  defaultValue={state?.inputs?.subject}
                  {...field}
                />
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
                <Textarea
                  placeholder="Your message"
                  defaultValue={state?.inputs?.message}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          isLoading={
            form.formState.isSubmitting || form.formState.isLoading || isPending
          }
          disabled={!form.formState.isValid || form.formState.isValidating}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
