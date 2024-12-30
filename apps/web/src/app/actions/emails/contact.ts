"use server";

import { resend, ContactEmailTemplate } from "@bangeyhodhy/email";
import { z } from "zod";
import { env } from "@bangeyhodhy/env";

const contactFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  subject: z.string({ required_error: "Subject is required" }),
  message: z.string({ required_error: "Message is required" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

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
      from: `Bange Yhodhy Website <${env.RESEND_FROM_EMAIL}>`,
      to: [env.RESEND_FROM_EMAIL],
      subject: data.subject,
      react: ContactEmailTemplate({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
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
