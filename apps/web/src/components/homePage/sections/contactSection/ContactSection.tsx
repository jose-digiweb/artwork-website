// Dependencies
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../../../ui/card";
import { SectionTitle, SectionBgBlur } from "../../../utils";
import { ContactForm } from "./ContactForm";
import { cn } from "@/lib/utils";

// Types
type Props = {
  className?: string;
};

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/atelie_bangeyhodhy",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/bangeyhodhy",
    icon: Facebook,
  },
];

export const ContactSection = ({ className }: Props) => {
  return (
    <section className={cn("flex w-full flex-col rounded-lg", className)}>
      <SectionTitle
        id="contact-section"
        title="Contact Me"
        description="Get in touch with Bange Yhodhy."
      />

      <SectionBgBlur className="flex flex-col gap-8 p-4 md:flex-row">
        <div className="md:w-1/2">
          <ContactForm />
        </div>

        <div className="md:w-1/2">
          <Card className="border bg-transparent">
            <CardContent>
              <CardHeader className="p-0">
                <h3 className="mb-4 text-xl font-semibold">
                  Contact Information
                </h3>
              </CardHeader>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-purple-600" />
                  <span>contact@bangeyhody.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-purple-600" />
                  <span>+31 687 523 821</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-purple-600" />
                  <span>Rotterdam, The Netherlands</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6 border bg-transparent p-0">
            <CardContent>
              <CardHeader className="p-0">
                <h3 className="mb-4 text-xl font-semibold">Follow Me</h3>
              </CardHeader>

              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    <span className="sr-only">{link.name}</span>
                    <link.icon className="size-6" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </SectionBgBlur>
    </section>
  );
};
