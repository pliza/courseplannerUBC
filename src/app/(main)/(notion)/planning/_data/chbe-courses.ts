// ─────────────────────────────────────────────────────────────────────────────
// CHBE / CH Degree Plan Data
// Source: UBC Chemical and Biological Engineering Degree Requirements
// Credits are approximate — always verify with the CHBE department.
// ─────────────────────────────────────────────────────────────────────────────

import type { PlanCourse } from "./bme-courses";
export type { PlanCourse };

export type CHTrack = "chbe" | "ch";

// ─── Year 1 — Common Applied Science First Year ────────────────────────────

const Y1_COURSES: PlanCourse[] = [
  // Term 1
  { id: "math100",  code: "MATH 100",  name: "Differential Calculus",         credits: 3, minYear: 1, termPref: 1, category: "required", summerEligible: true },
  { id: "phys157",  code: "PHYS 157",  name: "Introductory Physics I",        credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "chem121",  code: "CHEM 121",  name: "Structural Chemistry",          credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "apsc100",  code: "APSC 100",  name: "Introduction to Engineering I", credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "wrds150",  code: "WRDS 150",  name: "Writing & Research in Disciplines", credits: 3, minYear: 1, termPref: 1, category: "comp",
    note: "Required before CHBE 201 — complete by end of Year 1" },
  // Term 2
  { id: "math101",  code: "MATH 101",  name: "Integral Calculus",             credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "phys158",  code: "PHYS 158",  name: "Introductory Physics II",       credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "chem123",  code: "CHEM 123",  name: "Physical & Organic Chemistry",  credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "apsc101",  code: "APSC 101",  name: "Introduction to Engineering II",credits: 4, minYear: 1, termPref: 2, category: "required" },
  { id: "math152",  code: "MATH 152",  name: "Linear Systems",                credits: 3, minYear: 1, termPref: 2, category: "required" },
];

// ─── Year 2 — Common to both CH and CHBE (39 credits) ─────────────────────

const Y2_COURSES: PlanCourse[] = [
  { id: "chbe201",  code: "CHBE 201",  name: "Integrated Technical Communications", credits: 3, minYear: 2, termPref: 0, category: "required",
    note: "Requires WRDS 150 — plan accordingly" },
  { id: "chbe220",  code: "CHBE 220",  name: "Fluid Mechanics",               credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "chbe221",  code: "CHBE 221",  name: "Chemical & Biological Eng. Thermodynamics", credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "chbe230",  code: "CHBE 230",  name: "Computational Methods in CHBE", credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "chbe241",  code: "CHBE 241",  name: "Material and Energy Balances",  credits: 4, minYear: 2, termPref: 1, category: "required" },
  { id: "chbe244",  code: "CHBE 244",  name: "Chemical and Biological Technology I", credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "chbe251",  code: "CHBE 251",  name: "Transport Phenomena I",         credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "chbe263",  code: "CHBE 263",  name: "CHBE Simulation Lab",           credits: 2, minYear: 2, termPref: 1, category: "required" },
  { id: "chbe264",  code: "CHBE 264",  name: "CHBE Laboratory",               credits: 2, minYear: 2, termPref: 2, category: "required" },
  { id: "chem250",  code: "CHEM 250",  name: "Inorganic Chemistry",           credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "chem260",  code: "CHEM 260",  name: "Physical Chemistry",            credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "math253",  code: "MATH 253",  name: "Multivariable Calculus",        credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "math256",  code: "MATH 256",  name: "Differential Equations",        credits: 3, minYear: 2, termPref: 2, category: "required" },
];

// ─── Year 3 — Common (29 credits approx.) ─────────────────────────────────

const Y3_COMMON: PlanCourse[] = [
  { id: "chbe345",  code: "CHBE 345",  name: "Heat Transfer",                 credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "chbe346",  code: "CHBE 346",  name: "Transport Phenomena II",        credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "chbe352",  code: "CHBE 352",  name: "Chemical Reaction Engineering I",credits:4, minYear: 3, termPref: 1, category: "required" },
  { id: "chbe355",  code: "CHBE 355",  name: "Process Dynamics and Control",  credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "chbe356",  code: "CHBE 356",  name: "Computer-Aided Design I",       credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "chbe362",  code: "CHBE 362",  name: "Applied Thermodynamics",        credits: 4, minYear: 3, termPref: 1, category: "required" },
  { id: "chbe370",  code: "CHBE 370",  name: "CHBE Laboratory II",            credits: 2, minYear: 3, termPref: 2, category: "required" },
  { id: "chbe376",  code: "CHBE 376",  name: "Environmental Engineering",     credits: 3, minYear: 3, termPref: 0, category: "required" },
  { id: "stat251",  code: "STAT 251",  name: "Elementary Statistics",         credits: 3, minYear: 3, termPref: 0, category: "required", summerEligible: true },
  { id: "y3cs1",    code: "CS Elective", name: "Complementary Studies Elective", credits: 3, minYear: 3, termPref: 0, category: "comp" },
];

// ─── Year 3 — Track-specific ───────────────────────────────────────────────

export const Y3_CHBE_SPECIFIC: PlanCourse[] = [
  { id: "chbe365",  code: "CHBE 365",  name: "Biochemical Engineering",       credits: 3, minYear: 3, termPref: 2, category: "choice",
    note: "CHBE track" },
  { id: "chbe381",  code: "CHBE 381",  name: "Cell Biology for Engineers",    credits: 3, minYear: 3, termPref: 1, category: "choice",
    note: "CHBE track" },
];

export const Y3_CH_SPECIFIC: PlanCourse[] = [
  { id: "apsc278",  code: "APSC 278",  name: "Engineering Materials",         credits: 3, minYear: 3, termPref: 1, category: "choice",
    note: "CH track" },
  { id: "chbe366",  code: "CHBE 366",  name: "Chemical Process Safety",       credits: 3, minYear: 3, termPref: 2, category: "choice",
    note: "CH track" },
];

// ─── Year 4 — Common (14 credits approx.) ─────────────────────────────────

const Y4_COMMON: PlanCourse[] = [
  { id: "apsc450",  code: "APSC 450",  name: "Professional Engineering Practice", credits: 3, minYear: 4, termPref: 0, category: "required" },
  { id: "chbe456",  code: "CHBE 456",  name: "Process Design I",              credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "chbe459",  code: "CHBE 459",  name: "Process Design II",             credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "chbe464",  code: "CHBE 464",  name: "Environmental Management",      credits: 3, minYear: 4, termPref: 0, category: "required" },
  { id: "y4cs1",    code: "CS Elective", name: "Complementary Studies Elective", credits: 3, minYear: 4, termPref: 0, category: "comp" },
];

// ─── Year 4 — Track-specific capstone + core ──────────────────────────────

export const Y4_CHBE_CORE: PlanCourse[] = [
  { id: "chbe453a", code: "CHBE 453", name: "Capstone Design (CHBE) — Part I",  credits: 4, minYear: 4, termPref: 1, category: "choice",
    note: "CHBE capstone (8 cr total)" },
  { id: "chbe453b", code: "CHBE 453", name: "Capstone Design (CHBE) — Part II", credits: 4, minYear: 4, termPref: 2, category: "choice",
    note: "CHBE capstone (8 cr total)" },
  { id: "chbe481",  code: "CHBE 481", name: "Special Topics in Bio-Engineering",credits: 4, minYear: 4, termPref: 2, category: "choice",
    note: "CHBE track" },
];

export const Y4_CH_CORE: PlanCourse[] = [
  { id: "chbe454a", code: "CHBE 454", name: "Capstone Design (CH) — Part I",    credits: 4, minYear: 4, termPref: 1, category: "choice",
    note: "CH capstone (8 cr total)" },
  { id: "chbe454b", code: "CHBE 454", name: "Capstone Design (CH) — Part II",   credits: 4, minYear: 4, termPref: 2, category: "choice",
    note: "CH capstone (8 cr total)" },
  { id: "chbe471",  code: "CHBE 471", name: "Advanced Chemical Reaction Eng.",  credits: 4, minYear: 4, termPref: 1, category: "choice",
    note: "CH track" },
];

// ─── Technical Electives pool (all minYear: 4 to stay in final year) ─────────

export const CHBE_TECH_ELECTIVES_POOL: PlanCourse[] = [
  // Shared / general
  { id: "chbe457",  code: "CHBE 457",  name: "Process Control",               credits: 3, minYear: 4, termPref: 2, category: "elective" },
  { id: "chbe474",  code: "CHBE 474",  name: "Polymer Science and Engineering",credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "chbe480",  code: "CHBE 480",  name: "Nanomaterials Engineering",      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "chbe491",  code: "CHBE 491",  name: "Selected Topics in CHBE",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // CHBE-oriented
  { id: "chbe478",  code: "CHBE 478",  name: "Biochemical Engineering II",     credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "bioc302",  code: "BIOC 302",  name: "Intermediate Biochemistry",      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "micb306",  code: "MICB 306",  name: "Medical Microbiology",           credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // CH-oriented
  { id: "chbe465",  code: "CHBE 465",  name: "Particle Technology",            credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "chbe467",  code: "CHBE 467",  name: "Petroleum Refining Technology",  credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "elec221",  code: "ELEC 221",  name: "Signals and Systems",            credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "chbe460",  code: "CHBE 460",  name: "Advanced Heat Transfer",         credits: 3, minYear: 4, termPref: 0, category: "elective" },
];

// ─── Pre-defined Tech Elective Bundles ────────────────────────────────────
// 4 curated combinations per track — shown as ← → options in Year 4.

export type CHElectiveBundle = {
  label: string;
  description: string;
  ids: string[];
};

export const CHBE_ELECTIVE_BUNDLES: Record<CHTrack, CHElectiveBundle[]> = {
  chbe: [
    {
      label: "Biology & Med Eng",
      description: "Biochemistry, microbiology, and bio-process engineering",
      ids: ["chbe457", "chbe478", "bioc302", "micb306"],
    },
    {
      label: "Biotech & Materials",
      description: "Biotech processes, nanomaterials, and polymer science",
      ids: ["chbe457", "chbe478", "chbe474", "chbe480"],
    },
    {
      label: "Research Track",
      description: "Bio-sciences, nano-engineering, and electrical systems",
      ids: ["bioc302", "micb306", "chbe480", "elec221"],
    },
    {
      label: "Broad CHBE",
      description: "General coverage across chemical and biological eng.",
      ids: ["chbe457", "chbe474", "chbe480", "chbe491"],
    },
  ],
  ch: [
    {
      label: "Process Engineering",
      description: "Particle tech, advanced heat transfer, and petroleum refining",
      ids: ["chbe457", "chbe465", "chbe467", "chbe460"],
    },
    {
      label: "Materials & Polymers",
      description: "Polymer science, nanomaterials, and particle technology",
      ids: ["chbe457", "chbe474", "chbe465", "chbe480"],
    },
    {
      label: "Energy & Environment",
      description: "Heat transfer, particle tech, and electrical systems",
      ids: ["chbe457", "chbe460", "chbe465", "elec221"],
    },
    {
      label: "Broad CH",
      description: "General coverage across chemical engineering topics",
      ids: ["chbe457", "chbe474", "chbe480", "chbe491"],
    },
  ],
};

// ─── Prerequisites ─────────────────────────────────────────────────────────

export const CHBE_PREREQUISITES: Record<string, string[]> = {
  // Year 2
  chbe201:  ["wrds150"],
  chbe220:  ["phys158", "math101"],
  chbe221:  ["chbe220", "chem260"],
  chbe230:  ["math152"],
  chbe241:  ["chem123", "math101"],
  chbe244:  ["chbe241"],
  chbe251:  ["chbe220", "math256"],
  chbe263:  ["chbe230"],
  chbe264:  ["chbe263"],
  chem250:  ["chem121"],
  chem260:  ["chem123", "phys157"],
  math253:  ["math101", "math152"],
  math256:  ["math101", "math152"],
  // Year 3
  chbe345:  ["chbe220", "chbe251"],
  chbe346:  ["chbe251", "math256"],
  chbe352:  ["chbe221", "chbe241"],
  chbe355:  ["chbe230", "math256"],
  chbe356:  ["chbe230", "chbe241"],
  chbe362:  ["chbe221"],
  chbe370:  ["chbe264"],
  chbe376:  ["chbe241"],
  stat251:  ["math101"],
  chbe365:  ["chbe244", "chbe241"],
  chbe381:  ["chbe244"],
  apsc278:  ["chem123"],
  chbe366:  ["chbe241"],
  // Year 4
  chbe456:  ["chbe352", "chbe355", "chbe362"],
  chbe459:  ["chbe456"],
  chbe464:  ["chbe376"],
  chbe453a: ["chbe352", "chbe356"],
  chbe453b: ["chbe453a"],
  chbe454a: ["chbe352", "chbe356"],
  chbe454b: ["chbe454a"],
  chbe481:  ["chbe365", "chbe381"],
  chbe471:  ["chbe352"],
  chbe457:  ["chbe355"],
  chbe478:  ["chbe365"],
  bioc302:  ["chbe381"],
  chbe460:  ["chbe345"],
  chbe465:  ["chbe345"],
};

// ─── Main builder ──────────────────────────────────────────────────────────

/**
 * Returns all courses for the given track and elective bundle index.
 * bundleIdx 0-3 corresponds to the 4 pre-defined elective combinations.
 */
export function getAllCHBECoursesForDisplay(
  track: CHTrack,
  bundleIdx: number
): PlanCourse[] {
  const bundles = CHBE_ELECTIVE_BUNDLES[track];
  const bundle = bundles[Math.min(bundleIdx, bundles.length - 1)];
  const techCourses = CHBE_TECH_ELECTIVES_POOL.filter((c) => bundle.ids.includes(c.id));
  const y4Core = track === "chbe" ? Y4_CHBE_CORE : Y4_CH_CORE;
  const y3Track = track === "chbe" ? Y3_CHBE_SPECIFIC : Y3_CH_SPECIFIC;
  return [...Y1_COURSES, ...Y2_COURSES, ...Y3_COMMON, ...y3Track, ...Y4_COMMON, ...y4Core, ...techCourses];
}

export function getAllCHBECourses(
  track: CHTrack,
  bundleIdx: number,
  _completedIds?: ReadonlySet<string>
): PlanCourse[] {
  return getAllCHBECoursesForDisplay(track, bundleIdx);
}

export const CHBE_COMP_STUDIES_CATEGORIES = [
  { label: "Engineering Economics & Project Mgmt",  minCredits: 3, examples: ["APSC 261 (3cr)", "COMM 296 (3cr)"] },
  { label: "Humanities & Social Sciences",           minCredits: 6, examples: ["PHIL 220 (3cr)", "ECON 101 (3cr)", "SOCI 100 (3cr)"] },
  { label: "Oral & Written Communication",           minCredits: 6, examples: ["WRDS 150 (3cr)", "APSC 201 (3cr)", "ENGL 301 (3cr)"] },
  { label: "Professionalism, Ethics & Law",          minCredits: 2, examples: ["APSC 450 (2cr)"] },
  { label: "Technology Impact & Sustainability",     minCredits: 3, examples: ["APSC 261 (3cr)", "ENVR 300 (3cr)"] },
];

export { Y1_COURSES, Y2_COURSES, Y3_COMMON, Y4_COMMON };
