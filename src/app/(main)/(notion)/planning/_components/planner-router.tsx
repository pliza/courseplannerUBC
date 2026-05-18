"use client";

import { useEffect, useState } from "react";
import CoursePlanner from "./course-planner";
import CHBEPlanner from "./chbe-planner";
import CIVLPlanner from "./civl-planner";
import MINEPlanner from "./mine-planner";
import MECHPlanner from "./mech-planner";
import MTRLPlanner from "./mtrl-planner";
import MANUPlanner from "./manu-planner";
import ENVLPlanner from "./envl-planner";
import IGENPlanner from "./igen-planner";
import GEOEPlanner from "./geoe-planner";

const LS_KEY = "ubc_profile";

type StoredProfile = { facultyId: string; program: string } | null;

function loadProfile(): StoredProfile {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export default function PlannerRouter() {
  const [profile, setProfile] = useState<StoredProfile>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProfile(loadProfile());
    setReady(true);
  }, []);

  if (!ready) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-border border-t-foreground" />
      </div>
    );
  }

  const program = profile?.program ?? "";

  if (program === "Biomedical Engineering") {
    return <CoursePlanner />;
  }

  if (program === "Chemical and Biological Engineering" || program === "Chemical Engineering") {
    return <CHBEPlanner />;
  }

  if (program === "Civil Engineering (Vancouver & Okanagan)" || program === "Civil Engineering") {
    return <CIVLPlanner />;
  }

  if (program === "Mining Engineering") {
    return <MINEPlanner />;
  }

  if (program === "Mechanical Engineering (Vancouver & Okanagan)" || program === "Mechanical Engineering") {
    return <MECHPlanner />;
  }

  if (program === "Materials Engineering") {
    return <MTRLPlanner />;
  }

  if (program === "Manufacturing Engineering (Vancouver & Okanagan)" || program === "Manufacturing Engineering") {
    return <MANUPlanner />;
  }

  if (program === "Environmental Engineering") {
    return <ENVLPlanner />;
  }

  if (program === "Integrated Engineering") {
    return <IGENPlanner />;
  }

  if (program === "Geological Engineering") {
    return <GEOEPlanner />;
  }

  // No profile or unrecognised program — show a friendly gate
  return (
    <div className="mx-auto max-w-xl space-y-6 px-4 py-16 text-center sm:px-6">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-border bg-card">
        <span className="text-3xl">🎓</span>
      </div>
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground">Degree Planner</h1>
        {program ? (
          <>
            <p className="mt-2 text-sm text-muted-foreground">
              A full interactive planner for <strong>{program}</strong> is coming soon.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Currently supported: Biomedical, Chemical &amp; Biological, Chemical, Civil, Mining, Mechanical, Materials, Manufacturing, Environmental, Integrated, and Geological Engineering.
            </p>
          </>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            Select your faculty and program in your Profile first, then come back here.
          </p>
        )}
      </div>
      <a
        href="/profile"
        className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-bold text-background transition-opacity hover:opacity-80"
      >
        {program ? "Update Profile" : "Set Up Profile"} →
      </a>
    </div>
  );
}
