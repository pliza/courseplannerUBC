"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const milestones = [
  { label: "Core Sciences", credits: 18, total: 30 },
  { label: "CS Electives", credits: 12, total: 24 },
  { label: "Math", credits: 9, total: 15 },
  { label: "Free Electives", credits: 6, total: 18 },
];

function CreditBar({
  label,
  credits,
  total,
}: {
  label: string;
  credits: number;
  total: number;
}) {
  const pct = Math.round((credits / total) * 100);
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="tabular-nums text-muted-foreground">
          {credits} / {total} cr
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default function DegreeProgress() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const overallPct = 0; // default 0 %
  const trailColor = isDark ? "#1e2a3b" : "#e2e8f0";
  const pathColor = isDark ? "#3b82f6" : "#002145";
  const textColor = isDark ? "#f1f5f9" : "#002145";

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-12 sm:px-8">
      {/* Heading */}
      <div className="text-center">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary dark:bg-primary/20">
          Academic Record
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Progress
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Track your credits and degree completion at a glance.
        </p>
      </div>

      {/* Main card */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#002145] via-[#3b82f6] to-[#60a5fa]" />

        <div className="flex flex-col items-center gap-6 px-8 py-10">
          {/* Circular progress */}
          {mounted ? (
            <div className="h-44 w-44 drop-shadow-sm">
              <CircularProgressbar
                value={overallPct}
                text={`${overallPct}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.8,
                  pathColor,
                  textColor,
                  trailColor,
                  textSize: "18px",
                })}
              />
            </div>
          ) : (
            <div className="h-44 w-44 animate-pulse rounded-full bg-muted" />
          )}

          <p className="text-lg font-semibold text-foreground">
            Degree Progress
          </p>
          <p className="text-sm text-muted-foreground">
            0 of 120 credits completed
          </p>
        </div>
      </div>

      {/* Credit breakdown */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-5 text-base font-semibold text-foreground">
          Credit Breakdown
        </h2>
        <div className="space-y-4">
          {milestones.map((m) => (
            <CreditBar key={m.label} {...m} />
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Credits Earned", value: "0" },
          { label: "In Progress", value: "0" },
          { label: "Remaining", value: "120" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-card p-4 text-center shadow-sm"
          >
            <p className="text-2xl font-bold text-primary">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
