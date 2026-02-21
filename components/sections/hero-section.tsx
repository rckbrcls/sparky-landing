import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="hero-gradient px-4 pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">
        <div className="flex shrink-0 items-center justify-center">
          <Image
            src="/sparky-character.png"
            alt="Sparky mascot"
            width={280}
            height={300}
            className="drop-shadow-xl"
            priority
          />
        </div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge variant="secondary" className="mb-6">
            Available on iOS
          </Badge>
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your second brain,
            <br />
            always with you.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Capture thoughts, set smart reminders, and organize everything that
            matters. Privately, on your device.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="https://apps.apple.com/app/sparky/id000000000">
                Download on App Store
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
