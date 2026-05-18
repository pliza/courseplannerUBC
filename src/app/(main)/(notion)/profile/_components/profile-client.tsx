"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/cn";
import {
  Check, ChevronDown, ArrowRight, BookOpen, GraduationCap, Building2, Save,
} from "lucide-react";
import { FACULTIES, FACULTY_ICONS } from "../_data/programs";

const LS_KEY = "ubc_profile";

type StoredProfile = {
  facultyId: string;
  program: string;
};

function loadProfile(): StoredProfile | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as StoredProfile) : null;
  } catch {
    return null;
  }
}

function saveProfile(p: StoredProfile) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_KEY, JSON.stringify(p));
}

// ─── Faculty card ─────────────────────────────────────────────────────────────

function FacultyCard({
  faculty, selected, onClick,
}: {
  faculty: (typeof FACULTIES)[number];
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full text-left rounded-2xl border px-4 py-3.5 transition-all",
        selected
          ? "border-foreground bg-foreground/5 ring-1 ring-foreground dark:bg-foreground/10"
          : "border-border bg-card hover:border-foreground/40 hover:bg-secondary/40"
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-xl leading-none">{FACULTY_ICONS[faculty.id] ?? "🎓"}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{faculty.shortLabel}</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">{faculty.programs.length} programs</p>
        </div>
        {selected && <Check className="h-4 w-4 shrink-0 text-foreground" />}
      </div>
    </button>
  );
}

// ─── Program select ───────────────────────────────────────────────────────────

function ProgramSelect({
  programs, value, onChange,
}: {
  programs: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-2xl border border-border bg-card px-4 py-3 pr-10 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 dark:bg-card"
      >
        <option value="">Select your program…</option>
        {programs.map((p) => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}

// ─── Main client component ────────────────────────────────────────────────────

export default function ProfileClient({
  email,
  userId,
}: {
  email: string;
  userId: string;
}) {
  const router = useRouter();

  const [selectedFacultyId, setSelectedFacultyId] = useState<string>("");
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [saved, setSaved] = useState(false);
  const [justSaved, setJustSaved] = useState(false);

  // Load persisted profile on mount
  useEffect(() => {
    const stored = loadProfile();
    if (stored) {
      setSelectedFacultyId(stored.facultyId);
      setSelectedProgram(stored.program);
      setSaved(true);
    }
  }, []);

  const selectedFaculty = FACULTIES.find((f) => f.id === selectedFacultyId) ?? null;

  const handleFacultySelect = (id: string) => {
    setSelectedFacultyId(id);
    setSelectedProgram("");
    setSaved(false);
  };

  const handleSave = () => {
    if (!selectedFacultyId || !selectedProgram) return;
    saveProfile({ facultyId: selectedFacultyId, program: selectedProgram });
    setSaved(true);
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const initials = email.slice(0, 2).toUpperCase();

  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-10 sm:px-6">

      {/* Header */}
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your Account</p>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Profile</h1>
        <p className="mt-1 text-sm text-muted-foreground">Set your faculty and program to personalise your degree planner.</p>
      </div>

      {/* Account info card */}
      <div className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-extrabold text-background">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{email}</p>
          <p className="text-xs text-muted-foreground">
            {saved && selectedFaculty
              ? `${selectedFaculty.shortLabel} · ${selectedProgram}`
              : "No program selected yet"}
          </p>
        </div>
        {saved && selectedProgram && (
          <span className="shrink-0 flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
            <Check className="h-3 w-3" /> Saved
          </span>
        )}
      </div>

      {/* Step 1 — Pick faculty */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-extrabold text-background">1</span>
          <div>
            <p className="text-sm font-bold text-foreground">Select your Faculty</p>
            <p className="text-xs text-muted-foreground">Choose the faculty that offers your program.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {FACULTIES.map((f) => (
            <FacultyCard
              key={f.id}
              faculty={f}
              selected={selectedFacultyId === f.id}
              onClick={() => handleFacultySelect(f.id)}
            />
          ))}
        </div>
      </section>

      {/* Step 2 — Pick program (conditional) */}
      {selectedFaculty && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-extrabold text-background">2</span>
            <div>
              <p className="text-sm font-bold text-foreground">Select your Program</p>
              <p className="text-xs text-muted-foreground">
                {selectedFaculty.programs.length} programs available in {selectedFaculty.shortLabel}.
              </p>
            </div>
          </div>
          <ProgramSelect
            programs={selectedFaculty.programs}
            value={selectedProgram}
            onChange={(v) => { setSelectedProgram(v); setSaved(false); }}
          />

          {/* Supported program badge */}
          {(selectedProgram === "Biomedical Engineering" ||
            selectedProgram === "Chemical and Biological Engineering" ||
            selectedProgram === "Chemical Engineering" ||
            selectedProgram === "Civil Engineering (Vancouver & Okanagan)" ||
            selectedProgram === "Civil Engineering" ||
            selectedProgram === "Mining Engineering" ||
            selectedProgram === "Mechanical Engineering (Vancouver & Okanagan)" ||
            selectedProgram === "Mechanical Engineering" ||
            selectedProgram === "Materials Engineering" ||
            selectedProgram === "Manufacturing Engineering (Vancouver & Okanagan)" ||
            selectedProgram === "Manufacturing Engineering" ||
            selectedProgram === "Environmental Engineering" ||
            selectedProgram === "Integrated Engineering" ||
            selectedProgram === "Geological Engineering") && (
            <div className="flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 dark:border-blue-800 dark:bg-blue-950/30">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
              <p className="text-xs text-blue-800 dark:text-blue-300">
                <strong>Great choice!</strong> The Degree Planner has a full interactive planner built specifically
                for <strong>{selectedProgram}</strong> — including course requirements, prerequisites, and all year-by-year scheduling.
              </p>
            </div>
          )}

          {/* Save button */}
          {selectedProgram && (
            <button
              type="button"
              onClick={handleSave}
              className={cn(
                "flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold transition-all",
                justSaved
                  ? "bg-emerald-600 text-white"
                  : "bg-foreground text-background hover:opacity-80"
              )}
            >
              {justSaved ? (
                <><Check className="h-4 w-4" /> Profile Saved!</>
              ) : (
                <><Save className="h-4 w-4" /> Save Profile</>
              )}
            </button>
          )}
        </section>
      )}

      {/* Step 3 — Go to planner */}
      {saved && selectedProgram && (
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-extrabold text-background">3</span>
            <p className="text-sm font-bold text-foreground">Start Planning</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 space-y-3">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 h-5 w-5 text-muted-foreground shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">{selectedProgram}</p>
                <p className="text-xs text-muted-foreground">{selectedFaculty?.label}</p>
              </div>
            </div>
            {(selectedProgram === "Biomedical Engineering" ||
              selectedProgram === "Chemical and Biological Engineering" ||
              selectedProgram === "Chemical Engineering" ||
              selectedProgram === "Civil Engineering (Vancouver & Okanagan)" ||
              selectedProgram === "Civil Engineering" ||
              selectedProgram === "Mining Engineering" ||
              selectedProgram === "Mechanical Engineering (Vancouver & Okanagan)" ||
              selectedProgram === "Mechanical Engineering" ||
              selectedProgram === "Materials Engineering" ||
              selectedProgram === "Manufacturing Engineering (Vancouver & Okanagan)" ||
              selectedProgram === "Manufacturing Engineering" ||
              selectedProgram === "Environmental Engineering" ||
              selectedProgram === "Integrated Engineering" ||
              selectedProgram === "Geological Engineering") ? (
              <button
                type="button"
                onClick={() => router.push("/planning")}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-bold text-background transition-opacity hover:opacity-80"
              >
                Open Degree Planner <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800 dark:bg-amber-950/20">
                <p className="text-xs text-amber-800 dark:text-amber-300">
                  <strong>Coming soon:</strong> Full degree planning for {selectedProgram} is under development.
                  Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer note */}
      <p className="text-center text-xs text-muted-foreground pt-2">
        Profile data is saved locally in your browser. Always verify requirements with your academic advisor.
      </p>
    </div>
  );
}
