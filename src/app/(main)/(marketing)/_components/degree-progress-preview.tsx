"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const requirements = [
  { label: "Core Requirements",     done: 18, total: 24, status: "Completed" },
  { label: "Major Requirements",    done: 30, total: 45, status: "In Progress" },
  { label: "Electives",             done: 15, total: 24, status: "In Progress" },
  { label: "Breadth Requirements",  done: 15, total: 15, status: "Completed" },
];

export default function DegreeProgressPreview() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const pathColor   = isDark ? "#e5e7eb" : "#111";
  const trailColor  = isDark ? "#27272a" : "#e5e7eb";
  const textColor   = isDark ? "#f9fafb" : "#111";

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-8">

        {/* Circular progress */}
        <div className="flex flex-col items-center gap-2 shrink-0">
          <p className="text-xs font-semibold text-muted-foreground">Degree Progress</p>
          <div className="h-[100px] w-[100px]">
            {mounted ? (
              <CircularProgressbar
                value={65}
                text="65%"
                styles={buildStyles({
                  pathColor,
                  trailColor,
                  textColor,
                  textSize: "18px",
                  pathTransitionDuration: 0.8,
                })}
              />
            ) : (
              <div className="h-[100px] w-[100px] animate-pulse rounded-full bg-muted" />
            )}
          </div>
          <p className="text-center text-xs text-muted-foreground leading-snug">
            Completed
            <br />
            <span className="font-semibold text-foreground">78 / 120 credits</span>
          </p>
        </div>

        {/* Requirements list */}
        <div className="flex flex-1 flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-wider text-foreground">
            Requirements
          </p>
          {requirements.map((r) => {
            const pct = Math.round((r.done / r.total) * 100);
            return (
              <div key={r.label} className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs font-medium text-foreground">{r.label}</span>
                  <div className="text-right">
                    <span className="block text-[10px] text-muted-foreground">{r.status}</span>
                    <span className="text-[11px] font-semibold text-foreground tabular-nums">
                      {r.done} / {r.total}
                    </span>
                  </div>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-foreground transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
