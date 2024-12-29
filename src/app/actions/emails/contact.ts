"use server";

import { ContactEmail } from "@/components/email/templates/Contact";

import { Resend } from "resend";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  subject: z.string({ required_error: "Subject is required" }),
  message: z.string({ required_error: "Message is required" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

type ActionResponse = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
  inputs: ContactFormValues;
};

export async function sendContactEmailAction(
  _: ActionResponse | null,
  formData: FormData,
): Promise<ActionResponse> {
  console.log(formData);

  const rawData = {
    email: formData.get("email") as string,
    name: formData.get("name") as string,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
  };

  try {
    const validatedData = contactFormSchema.safeParse(rawData);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Invalid data",
        errors: validatedData.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }
    const data = validatedData.data;

    const { error } = await resend.emails.send({
      from: `Bange Yhodhy Website <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_FROM_EMAIL!],
      subject: data.subject,
      react: ContactEmail({ ...data }),
    });

    if (error) {
      return {
        success: false,
        message: "Failed to send email",
        inputs: rawData,
      };
    }

    return {
      success: true,
      message: "Email sent successfully",
      inputs: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };

    // Catch errors
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
      inputs: rawData,
    };
  }
}