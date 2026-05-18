"use client";
import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { cn } from "@/utils/cn";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, AlertTriangle, Check, Minus, Plus, GraduationCap, CalendarDays, Pin, X, Sun, Layers, Mountain } from "lucide-react";
import { getAllGEOECoursesForDisplay, getAllGEOECourses, GEOE_PREREQUISITES, GEOE_ELECTIVE_BUNDLES, GEOE_COMP_STUDIES, type PlanCourse } from "../_data/geoe-courses";
import { validatePrerequisites, buildDegreePlan, checkFeasibility, computeYearVariants, type TermSlot, type PrereqError, type CoursePin, type TermExclusion, type YearVariant } from "../_utils/planner";

const CAT_META = {
  required: { label: "Core Required", description: "Mandatory GEOE/CIVL/EOSC/MINE courses", pill: "border-slate-300 bg-slate-100 text-slate-800 dark:border-slate-600 dark:bg-slate-800/60 dark:text-slate-200", dot: "bg-slate-400" },
  choice:   { label: "Program Choice", description: "Required — choose one from listed options", pill: "border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-600 dark:bg-amber-900/30 dark:text-amber-200", dot: "bg-amber-400" },
  elective: { label: "Technical Elective", description: "Y4 tech elective bundle — use ← →", pill: "border-blue-300 bg-blue-50 text-blue-900 dark:border-blue-600 dark:bg-blue-900/30 dark:text-blue-200", dot: "bg-blue-400" },
  comp:     { label: "Complementary Studies", description: "Humanities, ethics, communication", pill: "border-emerald-300 bg-emerald-50 text-emerald-900 dark:border-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-200", dot: "bg-emerald-400" },
} as const;

function Sel({ value, onChange, children }: { value: string; onChange: (v: string) => void; children: React.ReactNode }) {
  return <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-foreground dark:bg-card">{children}</select>;
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="flex flex-col gap-1.5"><label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</label>{children}</div>;
}
function Pill({ course, pinned, onPin, onEject }: { course: PlanCourse; pinned?: boolean; onPin?: () => void; onEject?: () => void }) {
  return (
    <span title={`${course.name}${course.note ? ` — ${course.note}` : ""}`} className={cn("group inline-flex items-center gap-1.5 rounded-lg border px-2 py-1 text-xs font-medium", CAT_META[course.category].pill, pinned && "ring-1 ring-offset-1 ring-foreground/40")}>
      <span className="font-mono font-bold">{course.code}</span>
      <span className="text-[10px] font-semibold opacity-60 tabular-nums">{course.credits}cr</span>
      {course.summerEligible && <Sun className="h-2.5 w-2.5 opacity-50" />}
      {onPin && <button type="button" onClick={(e) => { e.stopPropagation(); onPin(); }} className="opacity-0 group-hover:opacity-100"><Pin className={cn("h-2.5 w-2.5", pinned ? "fill-current" : "")} /></button>}
      {onEject && <button type="button" onClick={(e) => { e.stopPropagation(); onEject(); }} className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive"><X className="h-2.5 w-2.5" /></button>}
    </span>
  );
}
function CheckRow({ course, checked, onChange }: { course: PlanCourse; checked: boolean; onChange: (id: string, v: boolean) => void }) {
  return (
    <label className={cn("flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5", checked ? cn("ring-1", CAT_META[course.category].pill, "ring-slate-400") : "border-border bg-card hover:bg-secondary/50")}>
      <span className={cn("flex h-4 w-4 shrink-0 items-center justify-center rounded border", checked ? "border-foreground bg-foreground text-background" : "border-border")}>{checked && <Check className="h-2.5 w-2.5 stroke-[3]" />}</span>
      <span className="shrink-0 font-mono text-xs font-bold">{course.code}</span>
      <span className="flex-1 truncate text-xs text-muted-foreground">{course.name}</span>
      {course.note && <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 max-w-[200px] truncate">{course.note}</span>}
      <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">{course.credits}cr</span>
      <input type="checkbox" checked={checked} className="sr-only" readOnly onChange={(e) => onChange(course.id, e.target.checked)} />
    </label>
  );
}
function ColourKey() {
  return <div className="space-y-3"><p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Course Key</p>{(Object.entries(CAT_META) as [keyof typeof CAT_META, (typeof CAT_META)[keyof typeof CAT_META]][]).map(([, m]) => (<div key={m.label} className="flex items-start gap-2.5"><span className={cn("mt-0.5 h-3 w-3 shrink-0 rounded-full", m.dot)} /><div><p className="text-xs font-semibold text-foreground">{m.label}</p><p className="text-[11px] text-muted-foreground leading-snug">{m.description}</p></div></div>))}</div>;
}
function TermSec({ slot, pinnedIds, onTogglePin, onCapacityChange, onAddPin, onEject, availableToPin }: { slot: TermSlot; pinnedIds: ReadonlySet<string>; onTogglePin: (id: string) => void; onCapacityChange: (label: string, cap: number) => void; onAddPin: (id: string, year: number, term: 1 | 2) => void; onEject: (id: string, term: 1 | 2) => void; availableToPin: PlanCourse[] }) {
  const [showPin, setShowPin] = useState(false);
  const isSummer = slot.displayLabel.includes("Summer");
  return (
    <div className={cn("px-5 py-4", isSummer && "bg-amber-50/40")}>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div><p className={cn("text-xs font-bold uppercase tracking-widest", isSummer ? "text-amber-700" : "text-muted-foreground")}>{slot.displayLabel}{!isSummer && (slot.term === 1 ? " · Sep–Dec" : " · Jan–Apr")}</p><p className="text-[11px] text-muted-foreground">{slot.courses.length} courses · {slot.totalCredits} cr{slot.overCapacity && " ⚠"}</p></div>
        {!isSummer && <div className="flex items-center gap-1 rounded-full border border-border px-1.5 py-0.5 shrink-0"><button type="button" onClick={() => onCapacityChange(slot.label, Math.max(1, slot.capacity - 1))} className="flex h-5 w-5 items-center justify-center rounded-full hover:bg-secondary"><Minus className="h-2.5 w-2.5" /></button><span className="w-5 text-center text-[11px] font-bold tabular-nums">{slot.capacity}</span><button type="button" onClick={() => onCapacityChange(slot.label, Math.min(9, slot.capacity + 1))} className="flex h-5 w-5 items-center justify-center rounded-full hover:bg-secondary"><Plus className="h-2.5 w-2.5" /></button><span className="ml-1 text-[10px] text-muted-foreground">max</span></div>}
      </div>
      <div className="flex flex-wrap gap-1.5">{slot.courses.map((c) => <Pill key={c.id} course={c} pinned={pinnedIds.has(c.id)} onPin={() => onTogglePin(c.id)} onEject={isSummer ? undefined : () => onEject(c.id, slot.term)} />)}{slot.courses.length === 0 && <p className="text-xs italic text-muted-foreground">No courses scheduled.</p>}</div>
      {!isSummer && <div className="mt-3">{showPin ? (<div className="flex items-center gap-2"><select className="flex-1 rounded-lg border border-border bg-background px-2 py-1.5 text-xs dark:bg-card" defaultValue="" onChange={(e) => { if (e.target.value) { onAddPin(e.target.value, slot.academicYear, slot.term); setShowPin(false); } }}><option value="" disabled>Select a course to pin…</option>{availableToPin.map((c) => <option key={c.id} value={c.id}>{c.code} — {c.name}</option>)}</select><button type="button" onClick={() => setShowPin(false)} className="rounded-lg border border-border p-1.5"><X className="h-3.5 w-3.5" /></button></div>) : <button type="button" onClick={() => setShowPin(true)} className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground"><Pin className="h-3 w-3" /> Pin a course</button>}</div>}
    </div>
  );
}
function YearBox({ year, currentVariant, variantIdx, totalVariants, pinnedIds, onTogglePin, onCapacityChange, onAddPin, onEject, availableToPin, defaultOpen }: { year: number; currentVariant: YearVariant; variantIdx: number; totalVariants: number; pinnedIds: ReadonlySet<string>; onTogglePin: (id: string) => void; onCapacityChange: (label: string, cap: number) => void; onAddPin: (id: string, year: number, term: 1 | 2) => void; onEject: (id: string, term: 1 | 2) => void; availableToPin: PlanCourse[]; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const totalCr = currentVariant.slots.reduce((s, sl) => s + sl.totalCredits, 0);
  const totalC = currentVariant.slots.reduce((s, sl) => s + sl.courses.length, 0);
  return (<div className="w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm"><button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-secondary/40"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-extrabold text-background">{year}</span><div className="flex-1 min-w-0"><div className="flex items-center gap-2"><p className="font-bold">{`Year ${year}`}</p>{totalVariants > 1 && <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-700">{variantIdx + 1}/{totalVariants}</span>}</div><p className="text-xs text-muted-foreground">{currentVariant.label} · {totalC} courses · {totalCr} cr</p></div>{open ? <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />}</button>{open && <div className="border-t border-border divide-y divide-border">{currentVariant.slots.map((sl) => <TermSec key={sl.label} slot={sl} pinnedIds={pinnedIds} onTogglePin={onTogglePin} onCapacityChange={onCapacityChange} onAddPin={onAddPin} onEject={onEject} availableToPin={availableToPin} />)}</div>}</div>);
}
function TakenBox({ year, courses, completedIds, onToggle }: { year: number; courses: PlanCourse[]; completedIds: ReadonlySet<string>; onToggle: (id: string, v: boolean) => void }) {
  void year; const done = courses.filter((c) => completedIds.has(c.id)).length;
  return (<div className="border-t border-border px-5 pb-5 pt-4 space-y-1.5"><div className="mb-2 flex gap-3"><button type="button" onClick={() => courses.forEach((c) => onToggle(c.id, true))} className="text-xs text-muted-foreground underline hover:text-foreground">Mark all</button><button type="button" onClick={() => courses.forEach((c) => onToggle(c.id, false))} className="text-xs text-muted-foreground underline hover:text-foreground">Unmark all</button><span className="ml-auto text-xs text-muted-foreground">{done}/{courses.length}</span></div>{courses.map((c) => <CheckRow key={c.id} course={c} checked={completedIds.has(c.id)} onChange={onToggle} />)}</div>);
}
function CompCard() {
  const [open, setOpen] = useState(false);
  return (<div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"><button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-secondary/40"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40"><GraduationCap className="h-4 w-4 text-emerald-700 dark:text-emerald-400" /></span><div className="flex-1"><p className="font-bold">Complementary Studies</p><p className="text-xs text-muted-foreground">Min 20 credits · Click to expand</p></div>{open ? <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />}</button>{open && (<div className="border-t border-border px-5 pb-5 pt-4 space-y-3"><p className="text-xs text-muted-foreground">WRDS 150, APSC 201, and two Y3 CS elective slots satisfy most CS requirements. CIVL 402 (EIA) counts toward the environmental impact category.</p><div className="space-y-1.5">{GEOE_COMP_STUDIES.map((cat, i) => (<div key={i} className="rounded-xl border border-border px-4 py-2.5"><div className="flex justify-between"><span className="text-xs font-semibold">{cat.label}</span><span className="text-[10px] text-muted-foreground">min {cat.minCredits} cr</span></div><div className="flex flex-wrap gap-1 mt-1">{cat.examples.map((e) => <span key={e} className="rounded-md border border-border bg-card px-2 py-0.5 text-[11px]">{e}</span>)}</div></div>))}</div></div>)}</div>);
}

export default function GEOEPlanner() {
  const planRef = useRef<HTMLDivElement>(null);
  const [standing, setStanding] = useState(1);
  const [totalYears, setTotalYears] = useState(4);
  const [defaultLoad, setDefaultLoad] = useState(5);
  const [activeBundleIdx, setActiveBundleIdx] = useState(0);
  const [showTaken, setShowTaken] = useState(false);
  const [openTakenYear, setOpenTakenYear] = useState<number | null>(null);
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [termCapacities, setTermCapacities] = useState<Record<string, number>>({});
  const [pinnedCourses, setPinnedCourses] = useState<CoursePin[]>([]);
  const [termExclusions, setTermExclusions] = useState<TermExclusion[]>([]);
  const [yearVariantIdx, setYearVariantIdx] = useState<Record<number, number>>({});
  const [generated, setGenerated] = useState(false);
  const [prereqErrors, setPrereqErrors] = useState<PrereqError[]>([]);
  const [plan, setPlan] = useState<TermSlot[]>([]);

  const completedSet = useMemo(() => new Set(completedIds), [completedIds]);
  const displayCourses = useMemo(() => getAllGEOECoursesForDisplay(activeBundleIdx), [activeBundleIdx]);
  const allCourses = useMemo(() => getAllGEOECourses(activeBundleIdx, completedSet), [activeBundleIdx, completedSet]);
  const stableCoursesForStanding = useMemo(() => getAllGEOECoursesForDisplay(0), []);

  useEffect(() => {
    const autoIds = stableCoursesForStanding.filter((c) => c.minYear < standing).map((c) => c.id);
    setCompletedIds((prev) => { const manual = prev.filter((id) => { const c = stableCoursesForStanding.find((x) => x.id === id); return c ? c.minYear >= standing : false; }); const merged = [...autoIds]; manual.forEach((id) => { if (!merged.includes(id)) merged.push(id); }); return merged; });
    setGenerated(false); setPlan([]); setPrereqErrors([]); setPinnedCourses([]); setTermExclusions([]);
  }, [standing, stableCoursesForStanding]);

  const displayByYear = useMemo(() => { const map = new Map<number, PlanCourse[]>(); displayCourses.forEach((c) => { const arr = map.get(c.minYear) ?? []; arr.push(c); map.set(c.minYear, arr); }); return Array.from(map.entries()).sort(([a], [b]) => a - b); }, [displayCourses]);
  const feasibility = useMemo(() => checkFeasibility(allCourses, completedSet, defaultLoad, standing, 1, totalYears), [allCourses, completedSet, defaultLoad, standing, totalYears]);
  const planByYear = useMemo(() => { const map = new Map<number, TermSlot[]>(); plan.forEach((s) => { const arr = map.get(s.academicYear) ?? []; arr.push(s); map.set(s.academicYear, arr); }); return Array.from(map.entries()).sort(([a], [b]) => a - b); }, [plan]);
  const yearVariants = useMemo(() => { const r = new Map<number, YearVariant[]>(); planByYear.forEach(([y, slots]) => r.set(y, computeYearVariants(slots, defaultLoad))); return r; }, [planByYear, defaultLoad]);
  const pinnedIds = useMemo(() => new Set(pinnedCourses.map((p) => p.courseId)), [pinnedCourses]);
  const availableToPin = useMemo(() => allCourses.filter((c) => !completedSet.has(c.id)), [allCourses, completedSet]);
  const safeBundle = Math.min(activeBundleIdx, GEOE_ELECTIVE_BUNDLES.length - 1);
  const activeBundle = GEOE_ELECTIVE_BUNDLES[safeBundle];

  const rebuildForBundle = useCallback((bi: number, cap?: Record<string, number>) => buildDegreePlan({ allCourses: getAllGEOECourses(bi, completedSet), completedIds: completedSet, startYear: standing, startTerm: 1, defaultCoursesPerTerm: defaultLoad, termCapacities: cap ?? termCapacities, totalDegreeYears: totalYears, pinnedCourses, termExclusions }), [completedSet, standing, defaultLoad, termCapacities, totalYears, pinnedCourses, termExclusions]);
  const handleBundleChange = useCallback((n: number) => { const c = Math.max(0, Math.min(GEOE_ELECTIVE_BUNDLES.length - 1, n)); setActiveBundleIdx(c); if (generated) setPlan(rebuildForBundle(c)); }, [generated, rebuildForBundle]);
  const rebuildPlan = useCallback((o: { pins?: CoursePin[]; caps?: Record<string, number>; excls?: TermExclusion[] }) => buildDegreePlan({ allCourses, completedIds: completedSet, startYear: standing, startTerm: 1, defaultCoursesPerTerm: defaultLoad, termCapacities: o.caps ?? termCapacities, totalDegreeYears: totalYears, pinnedCourses: o.pins ?? pinnedCourses, termExclusions: o.excls ?? termExclusions }), [allCourses, completedSet, standing, defaultLoad, termCapacities, totalYears, pinnedCourses, termExclusions]);
  const handleCapacityChange = useCallback((label: string, cap: number) => { setTermCapacities((prev) => { const next = { ...prev, [label]: cap }; setPlan(rebuildPlan({ caps: next })); return next; }); }, [rebuildPlan]);
  const handleTogglePin = useCallback((courseId: string) => { setPinnedCourses((prev) => { const next = prev.filter((p) => p.courseId !== courseId); setPlan(rebuildPlan({ pins: next })); return next; }); }, [rebuildPlan]);
  const handleAddPin = useCallback((courseId: string, year: number, term: 1 | 2) => { setPinnedCourses((prev) => { const filtered = prev.filter((p) => p.courseId !== courseId); const next = [...filtered, { courseId, year, term }]; setTermExclusions((excls) => { const ne = excls.filter((ex) => !(ex.courseId === courseId && ex.term === term)); setPlan(rebuildPlan({ pins: next, excls: ne })); return ne; }); return next; }); }, [rebuildPlan]);
  const handleEject = useCallback((courseId: string, fromTerm: 1 | 2) => { const np = pinnedCourses.filter((p) => !(p.courseId === courseId && p.term === fromTerm)); setPinnedCourses(np); setTermExclusions((prev) => { const already = prev.some((ex) => ex.courseId === courseId && ex.term === fromTerm); const next = already ? prev : [...prev, { courseId, term: fromTerm }]; setPlan(rebuildPlan({ pins: np, excls: next })); return next; }); }, [pinnedCourses, rebuildPlan]);
  const toggleCompleted = useCallback((id: string, checked: boolean) => { setCompletedIds((prev) => checked ? (prev.includes(id) ? prev : [...prev, id]) : prev.filter((x) => x !== id)); setGenerated(false); }, []);

  const handleGenerate = () => {
    const errors = validatePrerequisites(completedSet, displayCourses, GEOE_PREREQUISITES);
    setPrereqErrors(errors); if (errors.length > 0) { setGenerated(false); setPlan([]); return; }
    setPlan(buildDegreePlan({ allCourses, completedIds: completedSet, startYear: standing, startTerm: 1, defaultCoursesPerTerm: defaultLoad, termCapacities, totalDegreeYears: totalYears, pinnedCourses, termExclusions }));
    setActiveBundleIdx(0); setGenerated(true); setYearVariantIdx({});
    setTimeout(() => planRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  };

  const totalPlanCredits = plan.reduce((s, sl) => s + sl.totalCredits, 0);
  const totalPlanCourses = plan.reduce((s, sl) => s + sl.courses.length, 0);
  const remainingCount = allCourses.filter((c) => !completedSet.has(c.id)).length;
  const standingLabel = ["", "First", "Second", "Third", "Fourth"][standing] ?? `Year ${standing}`;

  return (
    <div className="mx-auto max-w-3xl space-y-7 px-4 py-10 sm:px-6">
      <div><p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">B.A.Sc. · Applied Science · GEOE</p><h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Degree Planner</h1><p className="mt-1 text-sm text-muted-foreground">Geological Engineering · ~151 credit program</p></div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">About You</p>
        <div className="grid grid-cols-3 gap-4">
          <Field label="Academic Standing"><Sel value={String(standing)} onChange={(v) => setStanding(Number(v))}>{[1,2,3,4].map((y) => <option key={y} value={y}>Year {y} ({["1st","2nd","3rd","4th"][y-1]})</option>)}</Sel></Field>
          <Field label="Graduate In"><Sel value={String(totalYears)} onChange={(v) => { setTotalYears(Number(v)); setGenerated(false); }}>{[3,4,5,6,7].map((y) => <option key={y} value={y}>{y} years total</option>)}</Sel></Field>
          <Field label="Courses per term"><Sel value={String(defaultLoad)} onChange={(v) => { setDefaultLoad(Number(v)); setGenerated(false); }}>{[3,4,5,6,7].map((n) => <option key={n} value={n}>{n} courses</option>)}</Sel></Field>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5" />{standingLabel}-year standing</span>
          <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />{Math.max(1, totalYears - standing + 1)} years remaining</span>
          <span>{remainingCount} courses to schedule</span>
          <span className="flex items-center gap-1.5"><Mountain className="h-3.5 w-3.5" />Joint CIVL/EOSC/MINE — includes mandatory field schools</span>
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 dark:border-amber-700 dark:bg-amber-950/30">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
        <p className="text-xs text-amber-800 dark:text-amber-200">
          <strong>Field school requirement:</strong> EOSC 223 (Year 2) includes a <strong>1-week field school at the end of Term 2</strong>. EOSC 328/428 (Year 3) is an additional field school <strong>at the end of Year 3</strong> — plan travel and accommodation accordingly. These are mandatory and cannot be substituted.
        </p>
      </div>

      {standing > 1 && <div className="flex items-start gap-3 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 dark:border-emerald-700 dark:bg-emerald-950/30"><Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /><p className="text-xs text-emerald-800 dark:text-emerald-200">Year {standing} standing: earlier courses pre-marked complete. Fine-tune below.</p></div>}

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        <label className="flex cursor-pointer items-center gap-4 px-6 py-4 hover:bg-secondary/40">
          <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded border", showTaken ? "border-foreground bg-foreground text-background" : "border-border")}>{showTaken && <Check className="h-3 w-3 stroke-[3]" />}</span>
          <div className="flex-1"><p className="text-sm font-semibold">I have already taken some courses</p><p className="text-xs text-muted-foreground">{completedIds.length > 0 ? `${completedIds.length} courses marked complete` : "Click to select"}</p></div>
          <input type="checkbox" checked={showTaken} className="sr-only" onChange={(e) => setShowTaken(e.target.checked)} />
        </label>
        {showTaken && (<div className="border-t border-border px-5 pb-5 pt-4"><div className="grid grid-cols-4 gap-3 mb-4">{displayByYear.map(([year, courses]) => { const done = courses.filter((c) => completedSet.has(c.id)).length; const isOpen = openTakenYear === year; return (<button key={year} type="button" onClick={() => setOpenTakenYear(isOpen ? null : year)} className={cn("rounded-2xl border px-3 py-3 text-left", isOpen ? "border-foreground bg-secondary/40 ring-1 ring-foreground" : "border-border bg-card hover:border-foreground/40")}><p className="text-2xl font-extrabold">{year}</p><p className="text-[11px] font-medium mt-1">Year {year}</p><p className="text-[11px] text-muted-foreground">{done}/{courses.length}</p>{done === courses.length && courses.length > 0 && <p className="text-[10px] font-bold text-emerald-600">✓ All done</p>}</button>); })}</div>{openTakenYear !== null && (() => { const courses = displayByYear.find(([y]) => y === openTakenYear)?.[1] ?? []; return (<div className="rounded-2xl border border-foreground overflow-hidden"><div className="flex items-center justify-between px-5 py-3 bg-secondary/30"><p className="text-sm font-bold">Year {openTakenYear} Courses</p><button type="button" onClick={() => setOpenTakenYear(null)}><X className="h-4 w-4 text-muted-foreground" /></button></div><TakenBox year={openTakenYear} courses={courses} completedIds={completedSet} onToggle={toggleCompleted} /></div>); })()}</div>)}
      </div>

      {pinnedCourses.length > 0 && <div className="rounded-xl border border-border bg-card px-4 py-3"><div className="flex items-center gap-2 mb-2"><Pin className="h-3.5 w-3.5 text-muted-foreground" /><p className="text-xs font-semibold">Pinned ({pinnedCourses.length})</p></div><div className="flex flex-wrap gap-2">{pinnedCourses.map((pin) => { const c = allCourses.find((x) => x.id === pin.courseId); if (!c) return null; return (<div key={pin.courseId} className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 text-xs"><span className="font-mono font-bold">{c.code}</span><span className="text-muted-foreground">→ Y{pin.year}·T{pin.term}</span><button type="button" onClick={() => handleTogglePin(pin.courseId)}><X className="h-3 w-3 text-muted-foreground" /></button></div>); })}</div></div>}
      {!feasibility.ok && <div className="flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3"><AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" /><p className="text-xs text-amber-800">{feasibility.message}</p></div>}

      <button type="button" onClick={handleGenerate} className="w-full rounded-2xl bg-foreground px-6 py-4 text-sm font-bold text-background hover:opacity-80">Generate My Schedule →</button>

      {prereqErrors.length > 0 && <div className="rounded-2xl border border-red-300 bg-red-50 p-5"><div className="mb-3 flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-red-600" /><p className="text-sm font-bold text-red-700">Prerequisite Issues</p></div><ul className="space-y-3">{prereqErrors.map((err, i) => (<li key={i} className="rounded-xl border border-red-200 bg-white px-4 py-3"><p className="text-sm font-bold text-red-700">{err.courseCode} — {err.courseName}</p><p className="mt-1 text-xs text-red-600">Missing: {err.missing.map((m, j) => <span key={j}><strong>{m.code}</strong>{j < err.missing.length - 1 ? ", " : ""}</span>)}</p></li>))}</ul></div>}

      {generated && plan.length > 0 && (
        <section ref={planRef} className="space-y-5 scroll-mt-24">
          <div className="flex items-baseline gap-3"><h2 className="text-xl font-extrabold tracking-tight">Your Degree Plan</h2><span className="text-sm text-muted-foreground">{totalPlanCourses} courses · {totalPlanCredits} credits</span></div>
          <div className="flex gap-6 items-start">
            <aside className="hidden lg:block w-44 shrink-0 sticky top-24 self-start"><div className="rounded-2xl border border-border bg-card p-4 shadow-sm"><ColourKey /></div></aside>
            <div className="flex-1 min-w-0 space-y-4">
              <p className="text-xs text-muted-foreground">Use <strong>← →</strong> for alternative arrangements. Year 4 arrows switch tech elective bundles (9 credits). Hover pills to <strong>📌 pin</strong> or <strong>× move</strong>.</p>
              {planByYear.map(([year, slots], idx) => {
                const isElec = year === 4;
                let variantIdx: number, totalVariants: number, currentVariant: YearVariant, goLeft: () => void, goRight: () => void, dotCount: number, dotActive: number;
                if (isElec) {
                  variantIdx = safeBundle; totalVariants = GEOE_ELECTIVE_BUNDLES.length; dotCount = GEOE_ELECTIVE_BUNDLES.length; dotActive = safeBundle;
                  currentVariant = { label: activeBundle.label, slots };
                  goLeft = () => handleBundleChange(safeBundle - 1); goRight = () => handleBundleChange(safeBundle + 1);
                } else {
                  const variants = yearVariants.get(year) ?? [{ label: "Standard", slots }];
                  const rawIdx = yearVariantIdx[year] ?? 0; variantIdx = Math.min(rawIdx, variants.length - 1); totalVariants = variants.length; dotCount = variants.length; dotActive = variantIdx;
                  currentVariant = variants[variantIdx];
                  goLeft = () => setYearVariantIdx((prev) => ({ ...prev, [year]: Math.max(0, (prev[year] ?? 0) - 1) }));
                  goRight = () => setYearVariantIdx((prev) => ({ ...prev, [year]: Math.min(variants.length - 1, (prev[year] ?? 0) + 1) }));
                }
                const hasAlts = totalVariants > 1;
                return (
                  <div key={year} className="flex items-start gap-2">
                    <div className="flex shrink-0 flex-col items-center justify-start pt-3.5 gap-1" style={{ width: 32 }}>{hasAlts && (<><button type="button" disabled={variantIdx === 0} onClick={goLeft} className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-secondary disabled:opacity-25"><ChevronLeft className="h-4 w-4" /></button><div className="flex flex-col gap-0.5 mt-1">{Array.from({ length: dotCount }).map((_, i) => <button key={i} type="button" onClick={isElec ? () => handleBundleChange(i) : () => setYearVariantIdx((p) => ({ ...p, [year]: i }))} className={cn("h-1.5 w-1.5 rounded-full", i === dotActive ? "bg-foreground" : "bg-border")} />)}</div></>)}</div>
                    <div className="flex-1 min-w-0">
                      {isElec && hasAlts && <div className="mb-1.5 flex items-center gap-2 rounded-xl border border-border bg-secondary/30 px-3 py-2"><Layers className="h-3 w-3 text-muted-foreground" /><p className="text-[11px] text-muted-foreground flex-1 truncate"><span className="font-semibold text-foreground">{activeBundle.label}</span> — {activeBundle.description}</p><span className="text-[10px] font-bold text-muted-foreground">{safeBundle + 1}/{GEOE_ELECTIVE_BUNDLES.length}</span></div>}
                      <YearBox year={year} currentVariant={currentVariant} variantIdx={variantIdx} totalVariants={totalVariants} pinnedIds={pinnedIds} onTogglePin={handleTogglePin} onCapacityChange={handleCapacityChange} onAddPin={handleAddPin} onEject={handleEject} availableToPin={availableToPin} defaultOpen={idx === 0} />
                    </div>
                    <div className="flex shrink-0 flex-col items-center justify-start pt-3.5" style={{ width: 32 }}>{hasAlts && <button type="button" disabled={variantIdx >= totalVariants - 1} onClick={goRight} className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card shadow-sm hover:bg-secondary disabled:opacity-25"><ChevronRight className="h-4 w-4" /></button>}</div>
                  </div>
                );
              })}
              <CompCard />
              <div className="rounded-2xl border border-border bg-card px-5 py-4"><p className="text-xs font-semibold mb-1">Field Schools &amp; Program Notes</p><p className="text-xs text-muted-foreground">Geological Engineering has <strong>two mandatory field schools</strong>: EOSC 223 (end of Y2 Term 2) and EOSC 328/428 (end of Y3). Program is administered under the Dean of Applied Science with strong ties to both EOSC and CIVL departments. Contact the GEOE Program Director (Room 255, EOS-South) for advising.</p></div>
            </div>
          </div>
        </section>
      )}
      <p className="text-center text-xs text-muted-foreground pt-2">Course names inferred where not in source requirements. Always verify with the <a href="https://apsc.ubc.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">GEOE Program Director</a>.</p>
    </div>
  );
}
