"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { cn } from "@/utils/cn";
import {
  ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  AlertTriangle, Check, Minus, Plus, GraduationCap,
  CalendarDays, Pin, X, Sun,
} from "lucide-react";
import {
  SPECIALIZATIONS, COMP_STUDIES_CATEGORIES,
  CPEN_CHOICES, MATH2_CHOICES,
  type PlanCourse, type SpecId,
} from "../_data/bme-courses";
import {
  getAllCourses, getAllCoursesForDisplay,
  validatePrerequisites, buildDegreePlan, checkFeasibility,
  computeYearVariants, makeSlotKey, sumCredits,
  type TermSlot, type PrereqError, type CoursePin, type TermExclusion, type YearVariant,
} from "../_utils/planner";

// ─── Category metadata ────────────────────────────────────────────────────────

export const CAT_META = {
  required: {
    label: "Core Required",
    description: "Must-take BME program courses",
    pill: "border-slate-300 bg-slate-100 text-slate-800 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200",
    dot:  "bg-slate-400",
    bar:  "bg-slate-400",
  },
  choice: {
    label: "Elective Choice",
    description: "Pick one option from a group",
    pill: "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-600 dark:bg-amber-900/30 dark:text-amber-200",
    dot:  "bg-amber-400",
    bar:  "bg-amber-400",
  },
  elective: {
    label: "Specialization Elective",
    description: "Courses for your chosen specialization",
    pill: "border-blue-300 bg-blue-50 text-blue-900 dark:border-blue-600 dark:bg-blue-900/30 dark:text-blue-200",
    dot:  "bg-blue-400",
    bar:  "bg-blue-400",
  },
  comp: {
    label: "Complementary Studies",
    description: "Humanities, ethics, communication",
    pill: "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-200",
    dot:  "bg-emerald-400",
    bar:  "bg-emerald-400",
  },
} as const;

// ─── Reusable primitives ──────────────────────────────────────────────────────

function Select({ value, onChange, children }: {
  value: string; onChange: (v: string) => void; children: React.ReactNode;
}) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-foreground dark:bg-card"
    >
      {children}
    </select>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</label>
      {children}
    </div>
  );
}

function CoursePill({ course, onPin, pinned, onEject }: {
  course: PlanCourse;
  onPin?: () => void;
  pinned?: boolean;
  /** Remove from current term → reschedule elsewhere */
  onEject?: () => void;
}) {
  return (
    <span
      title={`${course.name}${course.note ? ` — ${course.note}` : ""}${course.summerEligible ? " (also offered in Summer)" : ""}`}
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-lg border px-2 py-1 text-xs font-medium transition-colors",
        CAT_META[course.category].pill,
        pinned && "ring-1 ring-offset-1 ring-foreground/40"
      )}
    >
      <span className="font-mono font-bold">{course.code}</span>
      <span className="text-[10px] font-semibold opacity-60 tabular-nums">{course.credits}cr</span>
      {course.summerEligible && <span title="Also available in Summer"><Sun className="h-2.5 w-2.5 opacity-50" /></span>}
      {onPin && (
        <button type="button" onClick={(e) => { e.stopPropagation(); onPin(); }}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          title={pinned ? "Remove pin" : "Pin to this term"}
        >
          <Pin className={cn("h-2.5 w-2.5", pinned ? "fill-current" : "")} />
        </button>
      )}
      {onEject && (
        <button type="button" onClick={(e) => { e.stopPropagation(); onEject(); }}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
          title="Move to another term"
        >
          <X className="h-2.5 w-2.5" />
        </button>
      )}
    </span>
  );
}

function CourseCheckRow({ course, checked, onChange }: {
  course: PlanCourse; checked: boolean; onChange: (id: string, v: boolean) => void;
}) {
  return (
    <label className={cn(
      "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 transition-colors",
      checked
        ? cn("ring-1", CAT_META[course.category].pill,
            course.category === "choice" ? "ring-amber-400" :
            course.category === "elective" ? "ring-blue-400" :
            course.category === "comp" ? "ring-emerald-400" : "ring-slate-400")
        : "border-border bg-card hover:bg-secondary/50"
    )}>
      <span className={cn(
        "flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
        checked ? "border-foreground bg-foreground text-background" : "border-border"
      )}>
        {checked && <Check className="h-2.5 w-2.5 stroke-[3]" />}
      </span>
      <span className="shrink-0 font-mono text-xs font-bold text-foreground">{course.code}</span>
      <span className="flex-1 truncate text-xs text-muted-foreground">{course.name}</span>
      {course.note && (
        <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          {course.note}
        </span>
      )}
      {course.summerEligible && (
        <span title="Also available in Summer"><Sun className="h-3 w-3 shrink-0 text-amber-500" /></span>
      )}
      <span className="shrink-0 text-[11px] font-semibold tabular-nums text-muted-foreground">
        {course.credits}cr
      </span>
      <input type="checkbox" checked={checked} className="sr-only" readOnly
        onChange={(e) => onChange(course.id, e.target.checked)} />
    </label>
  );
}

// ─── Colour Key (Sidebar) ─────────────────────────────────────────────────────

function ColourKey() {
  return (
    <div className="space-y-3">
      <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Course Key</p>
      {(Object.entries(CAT_META) as [keyof typeof CAT_META, typeof CAT_META[keyof typeof CAT_META]][]).map(
        ([, meta]) => (
          <div key={meta.label} className="flex items-start gap-2.5">
            <span className={cn("mt-0.5 h-3 w-3 shrink-0 rounded-full", meta.dot)} />
            <div>
              <p className="text-xs font-semibold text-foreground">{meta.label}</p>
              <p className="text-[11px] text-muted-foreground leading-snug">{meta.description}</p>
            </div>
          </div>
        )
      )}
      <div className="flex items-start gap-2.5 pt-1 border-t border-border">
        <Sun className="mt-0.5 h-3 w-3 shrink-0 text-amber-500" />
        <div>
          <p className="text-xs font-semibold text-foreground">Summer option</p>
          <p className="text-[11px] text-muted-foreground leading-snug">Available in summer session</p>
        </div>
      </div>
      <div className="flex items-start gap-2.5">
        <Pin className="mt-0.5 h-3 w-3 shrink-0 text-foreground" />
        <div>
          <p className="text-xs font-semibold text-foreground">Pinned course</p>
          <p className="text-[11px] text-muted-foreground leading-snug">Locked to a specific term</p>
        </div>
      </div>
    </div>
  );
}

// ─── Term section within year plan ───────────────────────────────────────────

function TermSection({
  slot, pinnedIds, onTogglePin, onCapacityChange, onAddPin, onEject, availableToPin,
}: {
  slot: TermSlot;
  pinnedIds: ReadonlySet<string>;
  onTogglePin: (courseId: string) => void;
  onCapacityChange: (label: string, cap: number) => void;
  onAddPin: (courseId: string, year: number, term: 1 | 2) => void;
  onEject: (courseId: string, term: 1 | 2) => void;
  availableToPin: PlanCourse[];
}) {
  const [showPinPicker, setShowPinPicker] = useState(false);
  const isSummer = slot.displayLabel.includes("Summer");

  return (
    <div className={cn("px-5 py-4", isSummer && "bg-amber-50/40 dark:bg-amber-950/10")}>
      {/* Term header */}
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {isSummer && <Sun className="h-3.5 w-3.5 text-amber-500" />}
          <div>
            <p className={cn("text-xs font-bold uppercase tracking-widest",
              isSummer ? "text-amber-700 dark:text-amber-400" : "text-muted-foreground"
            )}>
              {slot.displayLabel}
              {!isSummer && (slot.term === 1 ? " · Sep – Dec" : " · Jan – Apr")}
            </p>
            <p className="text-[11px] text-muted-foreground">
              {slot.courses.length} courses · {slot.totalCredits} cr
              {slot.overCapacity && <span className="ml-1 text-amber-600">⚠ over cap</span>}
            </p>
          </div>
        </div>

        {/* Capacity control (not for summer) */}
        {!isSummer && (
          <div className="flex items-center gap-1 rounded-full border border-border px-1.5 py-0.5 shrink-0">
            <button type="button" onClick={() => onCapacityChange(slot.label, Math.max(1, slot.capacity - 1))}
              className="flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary">
              <Minus className="h-2.5 w-2.5" />
            </button>
            <span className="w-5 text-center text-[11px] font-bold tabular-nums">{slot.capacity}</span>
            <button type="button" onClick={() => onCapacityChange(slot.label, Math.min(9, slot.capacity + 1))}
              className="flex h-5 w-5 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary">
              <Plus className="h-2.5 w-2.5" />
            </button>
            <span className="ml-1 text-[10px] text-muted-foreground">max</span>
          </div>
        )}
      </div>

      {/* Course pills */}
      <div className="flex flex-wrap gap-1.5">
        {slot.courses.map((c) => (
          <CoursePill
            key={c.id} course={c}
            pinned={pinnedIds.has(c.id)}
            onPin={() => onTogglePin(c.id)}
            onEject={isSummer ? undefined : () => onEject(c.id, slot.term)}
          />
        ))}
        {slot.courses.length === 0 && (
          <p className="text-xs italic text-muted-foreground">No courses scheduled this term.</p>
        )}
      </div>

      {/* Pin a specific course here */}
      {!isSummer && (
        <div className="mt-3">
          {showPinPicker ? (
            <div className="flex items-center gap-2">
              <select
                className="flex-1 rounded-lg border border-border bg-background px-2 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-foreground dark:bg-card"
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) {
                    onAddPin(e.target.value, slot.academicYear, slot.term);
                    setShowPinPicker(false);
                  }
                }}
              >
                <option value="" disabled>Select a course to pin here…</option>
                {availableToPin.map((c) => (
                  <option key={c.id} value={c.id}>{c.code} — {c.name}</option>
                ))}
              </select>
              <button type="button" onClick={() => setShowPinPicker(false)}
                className="rounded-lg border border-border p-1.5 text-muted-foreground hover:bg-secondary">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => setShowPinPicker(true)}
              className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
            >
              <Pin className="h-3 w-3" />
              Pin a specific course to this term
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Year Plan Box with variant navigation ────────────────────────────────────

function YearPlanBox({
  year, currentVariant, variantIdx, totalVariants,
  pinnedIds, onTogglePin, onCapacityChange, onAddPin, onEject, availableToPin, defaultOpen,
}: {
  year: number;
  currentVariant: YearVariant;
  variantIdx: number;
  totalVariants: number;
  pinnedIds: ReadonlySet<string>;
  onTogglePin: (courseId: string) => void;
  onCapacityChange: (label: string, cap: number) => void;
  onAddPin: (courseId: string, year: number, term: 1 | 2) => void;
  onEject: (courseId: string, term: 1 | 2) => void;
  availableToPin: PlanCourse[];
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  const totalCr = currentVariant.slots.reduce((s, sl) => s + sl.totalCredits, 0);
  const totalCourses = currentVariant.slots.reduce((s, sl) => s + sl.courses.length, 0);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Wide header */}
      <button type="button" onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/40"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-extrabold text-background">
          {year}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-bold text-foreground">Year {year}</p>
            {totalVariants > 1 && (
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                {variantIdx + 1}/{totalVariants}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">
            {currentVariant.label} · {totalCourses} courses · {totalCr} credits
          </p>
        </div>
        {/* Credit bar */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-secondary">
            <div className="h-full rounded-full bg-foreground transition-all"
              style={{ width: `${Math.min(100, (totalCr / 40) * 100)}%` }} />
          </div>
          <span className="text-[11px] tabular-nums text-muted-foreground">{totalCr} cr</span>
        </div>
        {open ? <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
               : <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />}
      </button>

      {open && (
        <div className="border-t border-border divide-y divide-border">
          {currentVariant.slots.map((slot) => (
            <TermSection
              key={slot.label}
              slot={slot}
              pinnedIds={pinnedIds}
              onTogglePin={onTogglePin}
              onCapacityChange={onCapacityChange}
              onAddPin={onAddPin}
              onEject={onEject}
              availableToPin={availableToPin}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Complementary Studies Card ───────────────────────────────────────────────

const CS_CATEGORIES = [
  {
    id: "econ",
    label: "Engineering Economics & Project Mgmt",
    minCredits: 3,
    required: true,
    description: "Business and financial concepts for engineers. Required for CEAB accreditation.",
    examples: ["APSC 261 — Technology and Society (3 cr)", "COMM 296 — Introduction to Business (3 cr)"],
    badge: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    note: "APSC 261 is the standard choice for most BME students.",
  },
  {
    id: "huma",
    label: "Humanities & Social Sciences",
    minCredits: 6,
    required: true,
    description: "Courses in arts, social sciences, economics, or languages that broaden non-technical knowledge.",
    examples: [
      "PHIL 220 — Intro to Philosophy (3 cr)",
      "ECON 101 — Principles of Microeconomics (3 cr)",
      "SOCI 100 — Intro to Sociology (3 cr)",
      "PSYC 101 — Introduction to Psychology (3 cr)",
      "HIST 220 — History of Science (3 cr)",
    ],
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    note: "Any upper-level ARTS or social-science course counts. Look for courses that interest you!",
  },
  {
    id: "comm",
    label: "Oral & Written Communication",
    minCredits: 6,
    required: true,
    description: "Develops professional writing and speaking skills essential for engineers.",
    examples: [
      "WRDS 150 — Writing and Research in the Disciplines (3 cr)",
      "APSC 201 — Technical Communication (3 cr)",
      "ENGL 301 — Non-fiction Writing (3 cr)",
      "ENGL 112 — Strategies for University Writing (3 cr)",
    ],
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    note: "APSC 201 is highly recommended — it is specifically designed for engineers.",
  },
  {
    id: "ethics",
    label: "Professionalism, Ethics & Law",
    minCredits: 2,
    required: true,
    description: "Professional responsibilities, engineering ethics, and legal obligations. Mandatory for P.Eng. eligibility.",
    examples: ["APSC 450 — Professional Engineering Practice (2 cr)"],
    badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    note: "APSC 450 is required — it is the only approved course for this category.",
  },
  {
    id: "impact",
    label: "Technology Impact & Sustainability",
    minCredits: 3,
    required: false,
    description: "Explores societal, environmental, and ethical implications of technology and engineering solutions.",
    examples: [
      "APSC 261 — Technology and Society (3 cr, overlaps Economics category)",
      "ENVR 300 — Introduction to Research in Environmental Science (3 cr)",
      "SUST 200 — Sustainability Science (3 cr)",
    ],
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    note: "APSC 261 can satisfy both this category and Economics — check with your advisor.",
  },
];

function CompStudiesCard() {
  const [open, setOpen] = useState(false);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <button type="button" onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-secondary/40 transition-colors"
      >
        <GraduationCap className="h-4 w-4 shrink-0 text-muted-foreground" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">Complementary Studies</p>
          <p className="text-xs text-muted-foreground">5 categories · min. 20 credits required · CEAB accreditation</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="hidden sm:block text-[11px] font-bold text-muted-foreground">20 cr total</span>
          {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
        </div>
      </button>

      {open && (
        <div className="border-t border-border">
          {/* Intro */}
          <div className="px-5 py-4 bg-secondary/20 space-y-2">
            <p className="text-xs text-foreground font-medium">
              What are Complementary Studies (CS)?
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              CS courses are non-technical courses required by the Canadian Engineering Accreditation Board
              (CEAB) to ensure engineers develop well-rounded professional skills. You need{" "}
              <strong className="text-foreground">at least 20 credits</strong> spread across the 5 categories
              below. Most students complete 1–2 CS courses per year in Years 2–4 alongside their technical
              courses — they count as free electives in your degree audit.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="rounded-full bg-foreground/10 px-2.5 py-1 text-[11px] font-semibold text-foreground">
                ✓ Count toward your 149 total credits
              </span>
              <span className="rounded-full bg-foreground/10 px-2.5 py-1 text-[11px] font-semibold text-foreground">
                ✓ Register via SSC like any other course
              </span>
              <span className="rounded-full bg-foreground/10 px-2.5 py-1 text-[11px] font-semibold text-foreground">
                ✓ Must be from approved CEAB list
              </span>
            </div>
          </div>

          {/* Category rows */}
          <div className="divide-y divide-border">
            {CS_CATEGORIES.map((cat, i) => {
              const isOpen = expandedCat === cat.id;
              return (
                <div key={cat.id}>
                  <button type="button"
                    onClick={() => setExpandedCat(isOpen ? null : cat.id)}
                    className="flex w-full items-center gap-3 px-5 py-3.5 text-left hover:bg-secondary/30 transition-colors"
                  >
                    <span className="text-sm font-bold text-muted-foreground tabular-nums w-4 shrink-0">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-semibold text-foreground">{cat.label}</p>
                        {cat.required
                          ? <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-900/40 dark:text-red-400">Required</span>
                          : <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">Optional category</span>
                        }
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{cat.description}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-bold", cat.badge)}>
                        min {cat.minCredits} cr
                      </span>
                      {isOpen ? <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" />
                               : <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-2 bg-secondary/10 space-y-3">
                      <p className="text-xs text-muted-foreground leading-relaxed">{cat.description}</p>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Example courses
                        </p>
                        <ul className="space-y-1">
                          {cat.examples.map((ex) => (
                            <li key={ex} className="flex items-start gap-2 text-xs text-foreground">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                              {ex}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {cat.note && (
                        <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 dark:border-amber-800 dark:bg-amber-950/30">
                          <span className="text-amber-600 dark:text-amber-400 text-[11px] mt-0.5">💡</span>
                          <p className="text-[11px] text-amber-800 dark:text-amber-300 leading-relaxed">{cat.note}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer summary */}
          <div className="flex items-center justify-between px-5 py-3 bg-secondary/20 border-t border-border">
            <p className="text-[11px] text-muted-foreground">
              Plan for ~1 CS course per term in Years 2–4 · usually 3 cr each
            </p>
            <span className="rounded-full bg-foreground text-background px-3 py-1 text-[11px] font-bold">
              20 cr minimum
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Taken Year Box ───────────────────────────────────────────────────────────

function TakenYearBox({ year, courses, completedIds, onToggle }: {
  year: number; courses: PlanCourse[];
  completedIds: ReadonlySet<string>;
  onToggle: (id: string, v: boolean) => void;
}) {
  const done = courses.filter((c) => completedIds.has(c.id)).length;
  return (
    <div className="border-t border-border px-5 pb-5 pt-4 space-y-1.5">
      <div className="mb-2 flex gap-3">
        <button type="button" onClick={() => courses.forEach((c) => onToggle(c.id, true))}
          className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground">
          Mark all done
        </button>
        <button type="button" onClick={() => courses.forEach((c) => onToggle(c.id, false))}
          className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground">
          Unmark all
        </button>
        <span className="ml-auto text-xs text-muted-foreground">{done} / {courses.length} done</span>
      </div>
      {courses.filter((c) => c.category !== "choice").map((c) => (
        <CourseCheckRow key={c.id} course={c} checked={completedIds.has(c.id)} onChange={onToggle} />
      ))}
      {courses.some((c) => c.category === "choice") && (
        <>
          <p className="pt-2 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Choose one per group
          </p>
          {courses.filter((c) => c.category === "choice").map((c) => (
            <CourseCheckRow key={c.id} course={c} checked={completedIds.has(c.id)} onChange={onToggle} />
          ))}
        </>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CoursePlanner() {
  const planRef = useRef<HTMLDivElement>(null);

  // ── Config
  const [spec, setSpec] = useState<SpecId>("biomaterials");
  const [track, setTrack] = useState<"stt" | "transfer">("stt");
  const [standing, setStanding] = useState(1);
  const [totalYears, setTotalYears] = useState(4);
  const [defaultLoad, setDefaultLoad] = useState(5);

  // ── Taken courses
  const [showTaken, setShowTaken] = useState(false);
  const [openTakenYear, setOpenTakenYear] = useState<number | null>(null);
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  // ── Plan
  const [termCapacities, setTermCapacities] = useState<Record<string, number>>({});
  const [pinnedCourses, setPinnedCourses] = useState<CoursePin[]>([]);
  const [termExclusions, setTermExclusions] = useState<TermExclusion[]>([]);
  const [yearVariantIdx, setYearVariantIdx] = useState<Record<number, number>>({});
  const [generated, setGenerated] = useState(false);
  const [prereqErrors, setPrereqErrors] = useState<PrereqError[]>([]);
  const [plan, setPlan] = useState<TermSlot[]>([]);

  // ── Derived
  const completedSet = useMemo(() => new Set(completedIds), [completedIds]);

  const displayCourses = useMemo(
    () => getAllCoursesForDisplay(track, spec), [track, spec]
  );

  // Stable course list used only for the standing auto-fill.
  // Intentionally identical to displayCourses (depends on track+spec only) so
  // that any future display-only state (like variant indices) never causes a
  // spurious plan reset.
  const stableCoursesForStanding = useMemo(
    () => getAllCoursesForDisplay(track, spec), [track, spec]
  );

  const allCourses = useMemo(
    () => getAllCourses(track, spec, completedSet), [track, spec, completedSet]
  );

  // Auto-fill completed from standing — uses stableCoursesForStanding so that
  // display-only changes (variant navigation) never trigger a plan reset.
  useEffect(() => {
    const autoIds = stableCoursesForStanding.filter((c) => c.minYear < standing).map((c) => c.id);
    setCompletedIds((prev) => {
      const manual = prev.filter((id) => {
        const c = stableCoursesForStanding.find((x) => x.id === id);
        return c ? c.minYear >= standing : false;
      });
      const merged = [...autoIds];
      manual.forEach((id) => { if (!merged.includes(id)) merged.push(id); });
      return merged;
    });
    setGenerated(false);
    setPlan([]);
    setPrereqErrors([]);
    setPinnedCourses([]);
    setTermExclusions([]);
  }, [standing, stableCoursesForStanding]);

  const displayByYear = useMemo(() => {
    const map = new Map<number, PlanCourse[]>();
    displayCourses.forEach((c) => {
      const arr = map.get(c.minYear) ?? [];
      arr.push(c);
      map.set(c.minYear, arr);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a - b);
  }, [displayCourses]);

  const feasibility = useMemo(
    () => checkFeasibility(allCourses, completedSet, defaultLoad, standing, 1, totalYears),
    [allCourses, completedSet, defaultLoad, standing, totalYears]
  );

  // Plan grouped by year
  const planByYear = useMemo(() => {
    const map = new Map<number, TermSlot[]>();
    plan.forEach((s) => {
      const arr = map.get(s.academicYear) ?? [];
      arr.push(s);
      map.set(s.academicYear, arr);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a - b);
  }, [plan]);

  // Year variants (computed from plan)
  const yearVariants = useMemo(() => {
    const result = new Map<number, YearVariant[]>();
    planByYear.forEach(([year, slots]) => {
      result.set(year, computeYearVariants(slots, defaultLoad));
    });
    return result;
  }, [planByYear, defaultLoad]);

  const pinnedIds = useMemo(() => new Set(pinnedCourses.map((p) => p.courseId)), [pinnedCourses]);

  // Courses available to pin (not completed, not already in plan from their natural slot)
  const availableToPin = useMemo(
    () => allCourses.filter((c) => !completedSet.has(c.id)),
    [allCourses, completedSet]
  );

  const totalPlanCredits = plan.reduce((s, sl) => s + sl.totalCredits, 0);
  const totalPlanCourses = plan.reduce((s, sl) => s + sl.courses.length, 0);
  const remainingCount = allCourses.filter((c) => !completedSet.has(c.id)).length;

  // ── Handlers
  const toggleCompleted = useCallback((id: string, checked: boolean) => {
    setCompletedIds((prev) =>
      checked ? (prev.includes(id) ? prev : [...prev, id]) : prev.filter((x) => x !== id)
    );
    setGenerated(false);
  }, []);

  // Helper — builds plan with current params plus overrides
  const rebuildPlan = useCallback((
    overrides: {
      pins?: CoursePin[];
      caps?: Record<string, number>;
      excls?: TermExclusion[];
    }
  ) => {
    return buildDegreePlan({
      allCourses,
      completedIds: completedSet,
      startYear: standing,
      startTerm: 1,
      defaultCoursesPerTerm: defaultLoad,
      termCapacities: overrides.caps ?? termCapacities,
      totalDegreeYears: totalYears,
      pinnedCourses: overrides.pins ?? pinnedCourses,
      termExclusions: overrides.excls ?? termExclusions,
    });
  }, [allCourses, completedSet, standing, defaultLoad, termCapacities, totalYears, pinnedCourses, termExclusions]);

  const handleCapacityChange = useCallback((label: string, cap: number) => {
    setTermCapacities((prev) => {
      const next = { ...prev, [label]: cap };
      setPlan(rebuildPlan({ caps: next }));
      return next;
    });
  }, [rebuildPlan]);

  const handleTogglePin = useCallback((courseId: string) => {
    setPinnedCourses((prev) => {
      const next = prev.filter((p) => p.courseId !== courseId);
      setPlan(rebuildPlan({ pins: next }));
      return next;
    });
  }, [rebuildPlan]);

  const handleAddPin = useCallback((courseId: string, year: number, term: 1 | 2) => {
    setPinnedCourses((prev) => {
      const filtered = prev.filter((p) => p.courseId !== courseId);
      const next = [...filtered, { courseId, year, term }];
      // When pinning to a term, clear any exclusion for that course+term
      setTermExclusions((excls) => {
        const newExcls = excls.filter((ex) => !(ex.courseId === courseId && ex.term === term));
        setPlan(rebuildPlan({ pins: next, excls: newExcls }));
        return newExcls;
      });
      return next;
    });
  }, [rebuildPlan]);

  const handleEject = useCallback((courseId: string, fromTerm: 1 | 2) => {
    // Remove any existing pin for this course+fromTerm
    const newPins = pinnedCourses.filter((p) => !(p.courseId === courseId && p.term === fromTerm));
    setPinnedCourses(newPins);

    setTermExclusions((prev) => {
      // Idempotent: add exclusion if not already present
      const already = prev.some((ex) => ex.courseId === courseId && ex.term === fromTerm);
      const next = already ? prev : [...prev, { courseId, term: fromTerm }];
      setPlan(rebuildPlan({ pins: newPins, excls: next }));
      return next;
    });
  }, [pinnedCourses, rebuildPlan]);

  const handleGenerate = () => {
    const errors = validatePrerequisites(completedSet, displayCourses);
    setPrereqErrors(errors);
    if (errors.length > 0) { setGenerated(false); setPlan([]); return; }

    const result = buildDegreePlan({
      allCourses,
      completedIds: completedSet,
      startYear: standing,
      startTerm: 1,
      defaultCoursesPerTerm: defaultLoad,
      termCapacities,
      totalDegreeYears: totalYears,
      pinnedCourses,
      termExclusions,
    });
    setPlan(result);
    setGenerated(true);
    setYearVariantIdx({});
    setTimeout(() => planRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  };

  const standingLabel = ["", "First", "Second", "Third", "Fourth"][standing] ?? `Year ${standing}`;

  return (
    <div className="mx-auto max-w-3xl space-y-7 px-4 py-10 sm:px-6">

      {/* Header */}
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          B.A.Sc. · Applied Science · BME
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Degree Planner
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Biomedical Engineering · 2022W entry · ~149 credit program
        </p>
      </div>

      {/* Config */}
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">About You</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Field label="Specialization">
            <Select value={spec} onChange={(v) => { setSpec(v as SpecId); setGenerated(false); }}>
              {SPECIALIZATIONS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
            </Select>
          </Field>
          <Field label="Year 1 Track">
            <Select value={track} onChange={(v) => { setTrack(v as "stt"|"transfer"); setGenerated(false); }}>
              <option value="stt">Standard BME (STT)</option>
              <option value="transfer">Transfer Program</option>
            </Select>
          </Field>
          <Field label="Academic Standing">
            <Select value={String(standing)} onChange={(v) => setStanding(Number(v))}>
              {[1,2,3,4].map((y) => <option key={y} value={y}>Year {y} ({["1st","2nd","3rd","4th"][y-1]})</option>)}
            </Select>
          </Field>
          <Field label="Graduate In">
            <Select value={String(totalYears)} onChange={(v) => { setTotalYears(Number(v)); setGenerated(false); }}>
              {[3,4,5,6,7].map((y) => <option key={y} value={y}>{y} years total</option>)}
            </Select>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-border pt-4">
          <Field label="Courses per term">
            <Select value={String(defaultLoad)} onChange={(v) => { setDefaultLoad(Number(v)); setGenerated(false); }}>
              {[3,4,5,6,7].map((n) => <option key={n} value={n}>{n} courses</option>)}
            </Select>
          </Field>
          <div className="col-span-2 sm:col-span-3 flex items-end pb-0.5">
            <p className="text-xs text-muted-foreground flex flex-wrap gap-x-3 gap-y-1">
              <span className="flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5" />{standingLabel}-year standing</span>
              <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{Math.max(1, totalYears - standing + 1)} years remaining</span>
              <span>{remainingCount} courses to schedule</span>
            </p>
          </div>
        </div>
      </div>

      {/* Standing note */}
      {standing > 1 && (
        <div className="flex items-start gap-3 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 dark:border-emerald-700 dark:bg-emerald-950/30">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          <p className="text-xs text-emerald-800 dark:text-emerald-200">
            Year {standing} standing: Year 1{standing > 2 ? `–${standing - 1}` : ""} courses pre-marked as completed.
            Fine-tune below.
          </p>
        </div>
      )}

      {/* Taken courses */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        <label className="flex cursor-pointer items-center gap-4 px-6 py-4 transition-colors hover:bg-secondary/40">
          <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors",
            showTaken ? "border-foreground bg-foreground text-background" : "border-border")}>
            {showTaken && <Check className="h-3 w-3 stroke-[3]" />}
          </span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">I have already taken some courses</p>
            <p className="text-xs text-muted-foreground">
              {completedIds.length > 0 ? `${completedIds.length} courses marked as completed` : "Click to select courses you have already completed"}
            </p>
          </div>
          <input type="checkbox" checked={showTaken} className="sr-only"
            onChange={(e) => setShowTaken(e.target.checked)} />
        </label>

        {showTaken && (
          <div className="border-t border-border px-5 pb-5 pt-4">
            <p className="text-xs text-muted-foreground mb-3">Click a year number to expand and select completed courses.</p>
            {/* 4 year buttons */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {displayByYear.map(([year, courses]) => {
                const done = courses.filter((c) => completedSet.has(c.id)).length;
                const isOpen = openTakenYear === year;
                return (
                  <button key={year} type="button"
                    onClick={() => setOpenTakenYear(isOpen ? null : year)}
                    className={cn(
                      "rounded-2xl border px-3 py-3 text-left transition-all",
                      isOpen ? "border-foreground bg-secondary/40 ring-1 ring-foreground" : "border-border bg-card hover:border-foreground/40"
                    )}
                  >
                    <p className="text-2xl font-extrabold text-foreground leading-none">{year}</p>
                    <p className="text-[11px] font-medium text-foreground mt-1">Year {year}</p>
                    <p className="text-[11px] text-muted-foreground">{done}/{courses.length}</p>
                    {done === courses.length && courses.length > 0 && (
                      <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">✓ All done</p>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Expanded year courses */}
            {openTakenYear !== null && (() => {
              const courses = displayByYear.find(([y]) => y === openTakenYear)?.[1] ?? [];
              return (
                <div className="rounded-2xl border border-foreground overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 bg-secondary/30">
                    <p className="text-sm font-bold text-foreground">Year {openTakenYear} Courses</p>
                    <button type="button" onClick={() => setOpenTakenYear(null)}>
                      <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                    </button>
                  </div>
                  <TakenYearBox
                    year={openTakenYear} courses={courses}
                    completedIds={completedSet} onToggle={toggleCompleted}
                  />
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Active pins summary */}
      {pinnedCourses.length > 0 && (
        <div className="rounded-xl border border-border bg-card px-4 py-3">
          <div className="flex items-center gap-2 mb-2">
            <Pin className="h-3.5 w-3.5 text-muted-foreground" />
            <p className="text-xs font-semibold text-foreground">Pinned Courses ({pinnedCourses.length})</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {pinnedCourses.map((pin) => {
              const course = allCourses.find((c) => c.id === pin.courseId);
              if (!course) return null;
              return (
                <div key={pin.courseId} className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 text-xs">
                  <Pin className="h-2.5 w-2.5 fill-current text-muted-foreground" />
                  <span className="font-mono font-bold">{course.code}</span>
                  <span className="text-muted-foreground">→ Y{pin.year}·T{pin.term}</span>
                  <button type="button" onClick={() => handleTogglePin(pin.courseId)}
                    className="ml-0.5 text-muted-foreground hover:text-destructive">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Feasibility warning */}
      {!feasibility.ok && (
        <div className="flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 dark:border-amber-700 dark:bg-amber-950/30">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
          <p className="text-xs text-amber-800 dark:text-amber-200">{feasibility.message}</p>
        </div>
      )}

      {/* Generate button */}
      <button type="button" onClick={handleGenerate}
        className="w-full rounded-2xl bg-foreground px-6 py-4 text-sm font-bold text-background transition-opacity hover:opacity-80 active:opacity-70"
      >
        Generate My Schedule →
      </button>

      {/* Prereq errors */}
      {prereqErrors.length > 0 && (
        <div className="rounded-2xl border border-red-300 bg-red-50 p-5 dark:border-red-700 dark:bg-red-950/30">
          <div className="mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
            <p className="text-sm font-bold text-red-700 dark:text-red-300">
              Prerequisite Issues — Please fix before generating
            </p>
          </div>
          <ul className="space-y-3">
            {prereqErrors.map((err, i) => (
              <li key={i} className="rounded-xl border border-red-200 bg-white px-4 py-3 dark:border-red-800 dark:bg-red-900/20">
                <p className="text-sm font-bold text-red-700 dark:text-red-300">{err.courseCode} — {err.courseName}</p>
                <p className="mt-1 text-xs text-red-600 dark:text-red-400">
                  Missing prerequisite{err.missing.length > 1 ? "s" : ""}:{" "}
                  {err.missing.map((m, j) => (
                    <span key={j}><strong>{m.code}</strong> ({m.name}){j < err.missing.length - 1 ? ", " : ""}</span>
                  ))}
                </p>
                <p className="mt-1 text-[11px] text-red-500">
                  Fix: either mark {err.missing.map((m) => m.code).join(" and ")} as completed, or uncheck {err.courseCode}.
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Generated Plan */}
      {generated && plan.length > 0 && (
        <section ref={planRef} className="space-y-5 scroll-mt-24">
          {/* Section header */}
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl font-extrabold tracking-tight text-foreground">Your Degree Plan</h2>
            <span className="text-sm text-muted-foreground">{totalPlanCourses} courses · {totalPlanCredits} credits</span>
          </div>

          {/* Two-column layout: sticky legend + year boxes */}
          <div className="flex gap-6 items-start">
            {/* Sticky colour key (desktop only) */}
            <aside className="hidden lg:block w-44 shrink-0 sticky top-24 self-start">
              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <ColourKey />
              </div>
            </aside>

            {/* Plan content */}
            <div className="flex-1 min-w-0 space-y-4">
              {/* Mobile legend */}
              <div className="lg:hidden flex flex-wrap gap-3 rounded-xl border border-border bg-card px-4 py-3">
                {(Object.entries(CAT_META) as [keyof typeof CAT_META, typeof CAT_META[keyof typeof CAT_META]][]).map(
                  ([, meta]) => (
                    <div key={meta.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <span className={cn("h-2 w-2 shrink-0 rounded-full", meta.dot)} />
                      {meta.label}
                    </div>
                  )
                )}
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Sun className="h-2.5 w-2.5 text-amber-500" /> Summer eligible
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Use <strong>← →</strong> arrows beside each year to see alternative arrangements. Hover any course pill and click <strong>📌</strong> to pin it or <strong>×</strong> to move it to another term.
              </p>

              {/* Year boxes with external arrows */}
              {planByYear.map(([year, slots], idx) => {
                const variants = yearVariants.get(year) ?? [{ label: "Standard", slots }];
                const rawIdx = yearVariantIdx[year] ?? 0;
                const safeIdx = Math.min(rawIdx, variants.length - 1);
                const currentVariant = variants[safeIdx];
                const hasAlts = variants.length > 1;

                const goLeft = () =>
                  setYearVariantIdx((prev) => ({ ...prev, [year]: Math.max(0, (prev[year] ?? 0) - 1) }));
                const goRight = () =>
                  setYearVariantIdx((prev) => ({ ...prev, [year]: Math.min(variants.length - 1, (prev[year] ?? 0) + 1) }));

                return (
                  <div key={year} className="flex items-start gap-2">
                    {/* Left arrow — outside the box */}
                    <div className="flex shrink-0 flex-col items-center justify-start pt-3.5 gap-1" style={{ width: "32px" }}>
                      {hasAlts && (
                        <>
                          <button type="button" disabled={safeIdx === 0} onClick={goLeft}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:bg-secondary disabled:opacity-25"
                            title="Previous arrangement"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          {/* Dot indicators */}
                          <div className="flex flex-col gap-0.5 mt-1">
                            {variants.map((_, i) => (
                              <button key={i} type="button" onClick={() => setYearVariantIdx((prev) => ({ ...prev, [year]: i }))}
                                className={cn("h-1.5 w-1.5 rounded-full transition-all",
                                  i === safeIdx ? "bg-foreground" : "bg-border hover:bg-muted-foreground"
                                )}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Year box */}
                    <div className="flex-1 min-w-0">
                      <YearPlanBox
                        year={year}
                        currentVariant={currentVariant}
                        variantIdx={safeIdx}
                        totalVariants={variants.length}
                        pinnedIds={pinnedIds}
                        onTogglePin={handleTogglePin}
                        onCapacityChange={handleCapacityChange}
                        onAddPin={handleAddPin}
                        onEject={handleEject}
                        availableToPin={availableToPin}
                        defaultOpen={idx === 0}
                      />
                    </div>

                    {/* Right arrow — outside the box */}
                    <div className="flex shrink-0 flex-col items-center justify-start pt-3.5" style={{ width: "32px" }}>
                      {hasAlts && (
                        <button type="button" disabled={safeIdx >= variants.length - 1} onClick={goRight}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-sm transition-colors hover:bg-secondary disabled:opacity-25"
                          title="Next arrangement"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Complementary Studies */}
              <CompStudiesCard />
            </div>
          </div>
        </section>
      )}

      <p className="text-center text-xs text-muted-foreground pt-2">
        Suggestions only. Always verify with your academic advisor and the{" "}
        <a href="https://bme.ubc.ca/" target="_blank" rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground">UBC BME department</a>.
      </p>
    </div>
  );
}
