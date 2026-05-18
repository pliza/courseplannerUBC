import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DegreeProgressPreview from "./_components/degree-progress-preview";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col px-6 pb-24">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center gap-16 py-20 lg:flex-row lg:items-center lg:gap-12">
        {/* Left copy */}
        <div className="flex flex-1 flex-col items-start gap-6">
          <h1 className="text-[2.8rem] font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
            Plan Your Degree.
            <br />
            Track Your Progress.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Map out your degree, plan your courses, and track your progress all
            in one simple place.
          </p>
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-80"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Right preview card */}
        <div className="w-full flex-1 lg:max-w-[480px]">
          <DegreeProgressPreview />
        </div>
      </section>

      {/* ── Bottom tagline ───────────────────────────────────────────── */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
          All Your Degree Planning.
          <br />
          All Your Progress.
        </h2>
      </section>

    </div>
  );
}
