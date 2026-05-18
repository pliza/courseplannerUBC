// ─────────────────────────────────────────────────────────────────────────────
// BME Degree Plan Data
// Source: UBC Applied Science & Biomedical Engineering Degree Requirements
// ─────────────────────────────────────────────────────────────────────────────

export type PlanCourse = {
  id: string;
  code: string;
  name: string;
  credits: number;
  minYear: 1 | 2 | 3 | 4;
  /** 1 = typically Term 1, 2 = typically Term 2, 0 = either */
  termPref: 0 | 1 | 2;
  category: "required" | "choice" | "elective" | "comp";
  note?: string;
  /** Whether this course is also available in a Summer session */
  summerEligible?: boolean;
};

export type SpecId =
  | "biomaterials"
  | "biomechanics"
  | "cellular"
  | "informatics"
  | "systems";

export const SPECIALIZATIONS: { id: SpecId; label: string }[] = [
  { id: "biomaterials", label: "Biomaterials" },
  { id: "biomechanics", label: "Biomechanics" },
  { id: "cellular",     label: "Cellular Bioengineering" },
  { id: "informatics",  label: "Biomedical Informatics" },
  { id: "systems",      label: "Biomedical Systems & Signals" },
];

// ─── Year 1 — Standard BME STT ───────────────────────────────────────────────

export const Y1_STT_COURSES: PlanCourse[] = [
  { id: "apsc100", code: "APSC 100", name: "Intro to Engineering I",             credits: 4, minYear: 1, termPref: 1, category: "required" },
  { id: "bmeg101", code: "BMEG 101", name: "Introduction to Biomedical Eng.",    credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "chem121", code: "CHEM 121", name: "Structure and Bonding",              credits: 4, minYear: 1, termPref: 1, category: "required" },
  { id: "math100", code: "MATH 100", name: "Differential Calculus",              credits: 3, minYear: 1, termPref: 1, category: "required", summerEligible: true },
  { id: "phys157", code: "PHYS 157", name: "Introductory Physics I",             credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "apsc101", code: "APSC 101", name: "Intro to Engineering II",            credits: 4, minYear: 1, termPref: 2, category: "required" },
  { id: "bmeg102", code: "BMEG 102", name: "Biomedical Engineering Lab",         credits: 2, minYear: 1, termPref: 2, category: "required" },
  { id: "chem123", code: "CHEM 123", name: "Physical & Organic Chemistry",       credits: 4, minYear: 1, termPref: 2, category: "required" },
  { id: "math101", code: "MATH 101", name: "Integral Calculus",                  credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "math152", code: "MATH 152", name: "Linear Systems",                     credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "phys158", code: "PHYS 158", name: "Introductory Physics II",            credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "phys170", code: "PHYS 170", name: "Mechanics I",                        credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "apsc160", code: "APSC 160", name: "Intro to Computation in Eng.",       credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "wrds150", code: "WRDS 150", name: "Strategies for University Writing",  credits: 3, minYear: 1, termPref: 0, category: "comp" },
];

// ─── Year 1 — Transfer ───────────────────────────────────────────────────────

export const Y1_TRANSFER_COURSES: PlanCourse[] = [
  { id: "apsc100t", code: "APSC 100", name: "Intro to Engineering I",            credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "apsc160t", code: "APSC 160", name: "Intro to Computation in Eng.",      credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "apsc201",  code: "APSC 201", name: "Technical Communication",           credits: 3, minYear: 1, termPref: 0, category: "comp" },
  { id: "math152t", code: "MATH 152", name: "Linear Systems",                    credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "math253t", code: "MATH 253", name: "Multivariable Calculus",            credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "math255",  code: "MATH 255", name: "Ordinary Differential Equations",   credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "phys170t", code: "PHYS 170", name: "Mechanics I",                       credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "stat251t", code: "STAT 251", name: "Elementary Statistics",             credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "cs1a",     code: "CS Elect.", name: "Complementary Studies Elective",   credits: 3, minYear: 1, termPref: 1, category: "comp" },
  { id: "cs1b",     code: "CS Elect.", name: "Complementary Studies Elective",   credits: 3, minYear: 1, termPref: 2, category: "comp" },
];

// ─── Year 2 — Required Base ──────────────────────────────────────────────────

export const Y2_BASE: PlanCourse[] = [
  { id: "bmeg201", code: "BMEG 201", name: "Technical Communication",            credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "bmeg210", code: "BMEG 210", name: "Thermodynamics",                     credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "bmeg245", code: "BMEG 245", name: "The Fundamental Units of Life",      credits: 4, minYear: 2, termPref: 1, category: "required" },
  { id: "bmeg220", code: "BMEG 220", name: "Circuits and Electromagnetics",      credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "bmeg230", code: "BMEG 230", name: "Biomechanics I",                     credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "bmeg250", code: "BMEG 250", name: "Cellular Physiology and Biophysics", credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "bmeg257", code: "BMEG 257", name: "Biomedical Engineering Design I",    credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "math256", code: "MATH 256", name: "Differential Equations",             credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "math264", code: "MATH 264", name: "Vector Calculus",                    credits: 1, minYear: 2, termPref: 2, category: "required" },
];

// ─── Year 2 — Choice courses (both options shown for "taken" selection) ───────

export const CPEN_CHOICES: PlanCourse[] = [
  { id: "cpen221", code: "CPEN 221", name: "Microcomputer Design",               credits: 4, minYear: 2, termPref: 0, category: "choice", note: "Choose one: CPEN 221 or CPEN 223" },
  { id: "cpen223", code: "CPEN 223", name: "Intro to Computation for ECE",       credits: 4, minYear: 2, termPref: 0, category: "choice", note: "Choose one: CPEN 221 or CPEN 223" },
];

export const MATH2_CHOICES: PlanCourse[] = [
  { id: "math253", code: "MATH 253", name: "Multivariable Calculus",             credits: 3, minYear: 2, termPref: 1, category: "choice", note: "Choose one: MATH 253 or MATH 226" },
  { id: "math226", code: "MATH 226", name: "Advanced Calculus I",                credits: 3, minYear: 2, termPref: 1, category: "choice", note: "Choose one: MATH 253 or MATH 226" },
];

// ─── Year 3 ───────────────────────────────────────────────────────────────────

export const Y3_BASE: PlanCourse[] = [
  { id: "bioc202", code: "BIOC 202", name: "Introductory Biochemistry",          credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "bmeg310", code: "BMEG 310", name: "Biomedical Signal Processing",       credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "chem233", code: "CHEM 233", name: "Organic Chemistry I",                credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "stat251", code: "STAT 251", name: "Elementary Statistics",              credits: 3, minYear: 3, termPref: 0, category: "required", summerEligible: true },
  { id: "bmeg321", code: "BMEG 321", name: "Biomechanics II",                    credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "bmeg350", code: "BMEG 350", name: "Biotransport Phenomena",             credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "bmeg357", code: "BMEG 357", name: "Biomedical Engineering Lab II",      credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "bmeg371", code: "BMEG 371", name: "Physiology for Engineers II",        credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "chem235", code: "CHEM 235", name: "Organic Chemistry Laboratory",       credits: 1, minYear: 3, termPref: 2, category: "required" },
  { id: "y3cs1",   code: "CS Elect.", name: "Complementary Studies Elective",    credits: 3, minYear: 3, termPref: 0, category: "comp" },
];

// ─── Year 4 ───────────────────────────────────────────────────────────────────

export const Y4_BASE: PlanCourse[] = [
  { id: "bmeg401", code: "BMEG 401", name: "Capstone Design Project I",          credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "stat300", code: "STAT 300", name: "Intermediate Statistics",            credits: 3, minYear: 4, termPref: 0, category: "required" },
  { id: "bmeg402", code: "BMEG 402", name: "Capstone Design Project II",         credits: 3, minYear: 4, termPref: 2, category: "required", note: "Required as of 2025W" },
  { id: "bmeg455", code: "BMEG 455", name: "Regulatory Affairs & Prof. Practice",credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "bmeg457", code: "BMEG 457", name: "Biomedical Engineering Lab III",     credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "apsc450", code: "APSC 450", name: "Professional Engineering Practice",  credits: 2, minYear: 4, termPref: 0, category: "comp", note: "Ethics & Law requirement" },
  { id: "y4cs1",   code: "CS Elect.", name: "Complementary Studies Elective",    credits: 3, minYear: 4, termPref: 1, category: "comp" },
  { id: "y4cs2",   code: "CS Elect.", name: "Complementary Studies Elective",    credits: 3, minYear: 4, termPref: 2, category: "comp" },
];

// ─── Tech Electives by Specialization ────────────────────────────────────────

const el = (id: string, code: string, name: string, credits: number, minYear: 3 | 4, termPref: 0 | 1 | 2): PlanCourse =>
  ({ id, code, name, credits, minYear, termPref, category: "elective" });

export const TECH_ELECTIVES: Record<SpecId, PlanCourse[]> = {
  biomaterials: [
    el("apsc278",  "APSC 278", "Engineering Materials",                   3, 3, 1),
    el("apsc279",  "APSC 279", "Engineering Materials Laboratory",         3, 3, 2),
    el("bmeg330",  "BMEG 330", "Biomaterials II",                          3, 4, 1),
    el("mech260",  "MECH 260", "Mechanics of Materials",                   3, 4, 1),
    el("mech325",  "MECH 325", "Mechanics of Materials II",                3, 4, 2),
    el("mech436",  "MECH 436", "Fundamentals of Injury Biomechanics",      3, 4, 2),
    el("bmeg420a", "BMEG 420", "Tissue Engineering",                       3, 4, 0),
  ],
  biomechanics: [
    el("apsc278b", "APSC 278", "Engineering Materials",                    3, 3, 1),
    el("mech260b", "MECH 260", "Mechanics of Materials",                   3, 3, 2),
    el("apsc279b", "APSC 279", "Engineering Materials Laboratory",         3, 4, 1),
    el("bmeg330b", "BMEG 330", "Biomaterials II",                          3, 4, 2),
    el("mech325b", "MECH 325", "Mechanics of Materials II",                3, 4, 2),
    el("mech436b", "MECH 436", "Fundamentals of Injury Biomechanics",      3, 4, 1),
    el("mech468",  "MECH 468", "Introduction to Biomechanics",             3, 4, 0),
  ],
  cellular: [
    el("bioc302",  "BIOC 302", "Biochemistry and Molecular Biology",       3, 3, 1),
    el("biol335",  "BIOL 335", "Cell Biology",                             3, 3, 0),
    el("bmeg374",  "BMEG 374", "Cellular Bioengineering",                  3, 4, 1),
    el("bmeg470",  "BMEG 470", "Advanced Cellular Bioengineering",         3, 4, 2),
    el("chbe381",  "CHBE 381", "Biochemical Engineering",                  3, 4, 1),
    el("bioc460",  "BIOC 460", "Advanced Biochemistry",                    3, 4, 2),
    el("bmeg440",  "BMEG 440", "Biosensors and Diagnostics",               3, 4, 0),
  ],
  informatics: [
    el("cpsc221",  "CPSC 221", "Basic Algorithms & Data Structures",       4, 3, 1),
    el("cpsc121",  "CPSC 121", "Models of Computation",                    4, 3, 1),
    el("cpsc340",  "CPSC 340", "Machine Learning and Data Mining",         3, 4, 1),
    el("cpsc322",  "CPSC 322", "Introduction to AI",                       3, 4, 0),
    el("cpsc304",  "CPSC 304", "Relational Databases",                     3, 4, 1),
    el("bmeg424",  "BMEG 424", "Medical Image Analysis",                   3, 4, 2),
    el("cpsc406",  "CPSC 406", "Computational Optimization",               3, 4, 2),
  ],
  systems: [
    el("bmeg320",  "BMEG 320", "Systems and Control",                      3, 3, 1),
    el("elec221",  "ELEC 221", "Signals and Systems",                      4, 3, 2),
    el("elec301",  "ELEC 301", "Electronic Circuits",                      3, 4, 1),
    el("elec311",  "ELEC 311", "Electromagnetic Fields and Waves",         3, 4, 2),
    el("elec421",  "ELEC 421", "Digital Signal Processing",                3, 4, 2),
    el("bmeg425",  "BMEG 425", "Advanced Biomedical Instrumentation",      3, 4, 1),
    el("bmeg410",  "BMEG 410", "Medical Device Design",                    3, 4, 0),
  ],
};

// ─── Prerequisites ────────────────────────────────────────────────────────────
// Maps course id → list of prerequisite course ids that must be completed first.

export const PREREQUISITES: Record<string, string[]> = {
  // Year 2
  bmeg201: ["bmeg101"],
  bmeg210: ["phys157", "phys158"],
  bmeg220: ["math152", "phys158"],
  bmeg230: ["phys170", "math101"],
  bmeg245: ["chem121"],
  bmeg250: ["bmeg245"],
  bmeg257: ["bmeg101"],
  math256: ["math152"],
  math264: ["math101"],
  cpen221: ["apsc160", "math152"],
  cpen223: ["apsc160", "math152"],
  math253: ["math101"],
  math226: ["math101"],
  // Year 3
  bioc202: ["chem123"],
  bmeg310: ["bmeg210", "math256"],
  bmeg321: ["bmeg230"],
  bmeg350: ["bmeg245", "math256"],
  bmeg357: ["bmeg257"],
  bmeg371: ["bmeg250"],
  chem233: ["chem123"],
  chem235: ["chem233"],
  stat251: ["math101"],
  // Year 4
  bmeg401: ["bmeg310", "bmeg371"],
  bmeg402: ["bmeg401"],
  bmeg455: ["bmeg371"],
  bmeg457: ["bmeg357"],
  stat300: ["stat251"],
  // Tech electives
  bioc302: ["bioc202"],
  biol335: ["bioc202"],
  bmeg374: ["bmeg250"],
  bmeg470: ["bmeg374"],
  chbe381: ["chem123"],
  bmeg440: ["bioc202"],
  bmeg320: ["bmeg210"],
  elec221: ["math256"],
  elec301: ["elec221"],
  elec421: ["math256"],
  bmeg425: ["bmeg310"],
  bmeg410: ["bmeg350"],
  cpsc221: ["apsc160"],
  cpsc340: ["cpsc221"],
  bmeg424: ["bmeg310"],
  apsc278: ["chem121"],
  apsc278b: ["chem121"],
  apsc279: ["apsc278"],
  apsc279b: ["apsc278b"],
  mech260: ["phys170"],
  mech260b: ["phys170"],
  bmeg330: ["bmeg230"],
  bmeg330b: ["bmeg230"],
};

// ─── Complementary Studies reference ─────────────────────────────────────────

export const COMP_STUDIES_CATEGORIES = [
  { label: "Engineering Economics & Project Mgmt",  minCredits: 3, examples: ["APSC 261 (3cr)", "COMM 296 (3cr)"] },
  { label: "Humanities & Social Sciences",           minCredits: 6, examples: ["PHIL 220 (3cr)", "ECON 101 (3cr)", "SOCI 100 (3cr)"] },
  { label: "Oral & Written Communication",           minCredits: 6, examples: ["WRDS 150 (3cr)", "APSC 201 (3cr)", "ENGL 301 (3cr)"] },
  { label: "Professionalism, Ethics & Law",          minCredits: 2, examples: ["APSC 450 (2cr)"] },
  { label: "Technology Impact & Sustainability",     minCredits: 3, examples: ["APSC 261 (3cr)", "ENVR 300 (3cr)"] },
];
