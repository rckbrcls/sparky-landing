import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { MessageCircle, MapPin, Bell, Trash2, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Support | Sparky",
  description:
    "Get help with Sparky. Find answers to common questions and contact our support team.",
};

const faqs = [
  {
    icon: MapPin,
    question: "How do location-based reminders work?",
    answer:
      "Sparky uses geofences to monitor areas you define. When you arrive at or leave a location, the app triggers your reminder. Location monitoring happens entirely on-device through Apple's Core Location framework. Your location data is never sent anywhere.",
  },
  {
    icon: Bell,
    question: "Why am I not receiving notifications?",
    answer:
      'Make sure notifications are enabled for Sparky in your device Settings. Go to Settings > Sparky > Notifications and ensure "Allow Notifications" is turned on. For location reminders, also confirm that Location is set to "Always" under Settings > Sparky > Location.',
  },
  {
    icon: Shield,
    question: "Is my data backed up?",
    answer:
      "All your data is stored locally on your device. If you have iCloud Backup enabled on your iPhone, your Sparky data will be included in your device backup. However, we do not provide cloud sync or our own backup service. We recommend keeping regular device backups.",
  },
  {
    icon: Trash2,
    question: "How do I delete all my data?",
    answer:
      "You can delete individual memories, minds, and attachments directly within the app. To remove all Sparky data completely, simply uninstall the app from your device. Since no data exists outside your device, uninstalling guarantees complete data deletion.",
  },
  {
    icon: MessageCircle,
    question: "Can I recover deleted memories?",
    answer:
      "Once a memory is deleted, it cannot be recovered within the app. If you have a recent device backup from before the deletion, you may be able to restore your data by restoring your device from that backup.",
  },
];

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight">
        Support
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Find answers to common questions or get in touch with us.
      </p>

      <Separator className="my-8" />

      <div className="space-y-12">
        <section>
          <h2 className="font-serif text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <faq.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div className="space-y-2">
                      <CardTitle>{faq.question}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {faq.answer}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        <section>
          <h2 className="font-serif text-2xl font-bold">Contact Us</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Can&apos;t find what you&apos;re looking for? We&apos;re happy to
            help. Send us an email and we&apos;ll get back to you as soon as
            possible.
          </p>
          <div className="mt-6">
            <a
              href="mailto:contact@polterware.com"
              className="inline-flex items-center gap-2 text-foreground underline underline-offset-4 hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
              contact@polterware.com
            </a>
          </div>
        </section>

        <Separator />

        <section>
          <h2 className="font-serif text-2xl font-bold">System Requirements</h2>
          <ul className="mt-4 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>iPhone with iOS 26.0 or later</li>
            <li>No internet connection required</li>
            <li>No account or sign-up needed</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
