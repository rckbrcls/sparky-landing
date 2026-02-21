import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Terms of Service | Sparky",
  description:
    "Terms of Service for Sparky, a privacy-first personal memory and reminder app.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="font-serif text-4xl font-bold tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: February 21, 2026
      </p>

      <Separator className="my-8" />

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-foreground">
        <section>
          <h2 className="font-serif text-2xl font-bold">
            Agreement to Terms
          </h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            By downloading, installing, or using Sparky (&quot;the App&quot;),
            you agree to be bound by these Terms of Service (&quot;Terms&quot;).
            If you do not agree with these Terms, do not use the App. Sparky is
            developed and maintained by Polterware (&quot;we&quot;,
            &quot;us&quot;, &quot;our&quot;).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Use of the App</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Sparky is a personal memory and reminder app designed for individual
            use. You may use the App for any lawful personal purpose. You agree
            not to:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
            <li>
              Reverse-engineer, decompile, or disassemble any part of the App
            </li>
            <li>
              Attempt to extract the source code of the App
            </li>
            <li>
              Redistribute, sublicense, or sell the App or any portion thereof
            </li>
            <li>
              Use the App in any manner that could damage, disable, or impair
              its functionality
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Your Data</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            All data you create in Sparky (memories, checklists, attachments,
            reminders, and settings) is stored exclusively on your device. We
            do not have access to your data, and we cannot recover it if you
            delete the App or lose your device. You are solely responsible for
            backing up your device and any data stored in Sparky.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">
            Intellectual Property
          </h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            The App, including its design, code, graphics, and all related
            intellectual property, is owned by Polterware. These Terms do not
            grant you any rights to our trademarks, logos, or brand elements.
            Content you create within the App remains yours.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">
            Disclaimer of Warranties
          </h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Sparky is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, either express or implied,
            including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the App will be
            uninterrupted, error-free, or free of harmful components.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">
            Limitation of Liability
          </h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            To the maximum extent permitted by applicable law, Polterware
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, including but not limited to
            loss of data, loss of profits, or loss of use, arising out of or
            related to your use of the App. Since all data is stored locally
            on your device, we are not responsible for any data loss resulting
            from device failure, app deletion, or any other cause.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">
            Device Permissions
          </h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Sparky may request access to device features such as your camera,
            microphone, photo library, location, speech recognition, and
            notifications. These permissions are optional and used solely to
            enable features you choose to use. You can manage these
            permissions at any time through your device&apos;s Settings app.
            For details on how these permissions are used, please see our{" "}
            <a
              href="/privacy"
              className="text-foreground underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Termination</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            You may stop using the App at any time by deleting it from your
            device. We reserve the right to discontinue the App or any of its
            features at any time without prior notice. Upon termination, all
            provisions of these Terms that by their nature should survive will
            remain in effect, including intellectual property provisions,
            disclaimers, and limitations of liability.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">
            Changes to These Terms
          </h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            We may update these Terms from time to time. When we do, we will
            post the revised version on this page with an updated &quot;Last
            updated&quot; date. Your continued use of the App after any
            changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Governing Law</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            These Terms shall be governed by and construed in accordance with
            the laws of Brazil, without regard to its conflict of law
            provisions.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold">Contact</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            If you have any questions about these Terms of Service, contact us
            at{" "}
            <a
              href="mailto:contact@polterware.com"
              className="text-foreground underline underline-offset-4 hover:text-primary"
            >
              contact@polterware.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
