// ─────────────────────────────────────────────────────────────────────────────
// Materials Engineering (MTRL) Degree Plan Data
// Source: UBC Bachelor of Applied Science — Materials Engineering Requirements
//
// Notes:
//  · Year 3 course names are inferred from the MTRL curriculum where not
//    explicitly listed in the source file (codes and credits ARE as published).
//  · Year 4 technical elective pool uses representative MTRL 4xx electives;
//    verify actual offerings with the MTRL department each year.
// ─────────────────────────────────────────────────────────────────────────────

import type { PlanCourse } from "./bme-courses";
export type { PlanCourse };

// ─── Year 1 — Standard Applied Science First Year ─────────────────────────

export const MTRL_Y1: PlanCourse[] = [
  { id: "mtrl_apsc100",  code: "APSC 100",  name: "Introduction to Engineering I",        credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "mtrl_chem154",  code: "CHEM 154",  name: "Chemistry for Engineering",             credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "mtrl_math100",  code: "MATH 100",  name: "Differential Calculus",                 credits: 3, minYear: 1, termPref: 1, category: "required", summerEligible: true },
  { id: "mtrl_phys157",  code: "PHYS 157",  name: "Introductory Physics I",                credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "mtrl_phys170",  code: "PHYS 170",  name: "Engineering Statics & Dynamics",        credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "mtrl_apsc160",  code: "APSC 160",  name: "Intro to Computation in Eng. Design",  credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "mtrl_wrds150",  code: "WRDS 150",  name: "Writing & Research in Disciplines",     credits: 3, minYear: 1, termPref: 0, category: "comp" },
  { id: "mtrl_apsc101",  code: "APSC 101",  name: "Introduction to Engineering II",        credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "mtrl_math101",  code: "MATH 101",  name: "Integral Calculus",                     credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "mtrl_math152",  code: "MATH 152",  name: "Linear Systems",                        credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "mtrl_phys158",  code: "PHYS 158",  name: "Introductory Physics II",               credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "mtrl_phys159",  code: "PHYS 159",  name: "Physics Lab",                           credits: 1, minYear: 1, termPref: 2, category: "required" },
];

// ─── Year 2 — MTRL 2nd Year Curriculum (39 credits) ──────────────────────

export const MTRL_Y2: PlanCourse[] = [
  // Core science & math
  { id: "mtrl_math253",  code: "MATH 253",  name: "Multivariable Calculus",                credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "mtrl_math255",  code: "MATH 255",  name: "Differential Equations",                credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "mtrl_mech260",  code: "MECH 260",  name: "Introduction to Mechanics of Materials",credits: 3, minYear: 2, termPref: 1, category: "required" },
  // APSC shared
  { id: "mtrl_apsc278",  code: "APSC 278",  name: "Mechanical Properties of Materials",    credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "mtrl_apsc279",  code: "APSC 279",  name: "Properties of Materials Laboratory",    credits: 1, minYear: 2, termPref: 1, category: "required" },
  // MTRL core
  { id: "mtrl201",       code: "MTRL 201",  name: "Introduction to Materials Process Eng.",credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "mtrl250",       code: "MTRL 250",  name: "Thermodynamics of Materials",           credits: 4, minYear: 2, termPref: 1, category: "required",
    note: "Foundational for all Y3 process courses" },
  { id: "mtrl251",       code: "MTRL 251",  name: "Transport Phenomena in Materials Processing", credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "mtrl263",       code: "MTRL 263",  name: "Phase Transformations in Materials",    credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "mtrl264",       code: "MTRL 264",  name: "Structure of Materials",                credits: 3, minYear: 2, termPref: 2, category: "required",
    note: "Foundational for Y3 characterization courses" },
  { id: "mtrl280",       code: "MTRL 280",  name: "Social, Economic & Environmental Impact of Materials", credits: 3, minYear: 2, termPref: 0, category: "comp" },
  // CS electives (Y2, 6 credits)
  { id: "mtrl_y2cs1",    code: "CS Elective", name: "Complementary Studies Elective 1",   credits: 3, minYear: 2, termPref: 0, category: "comp" },
  { id: "mtrl_y2cs2",    code: "CS Elective", name: "Complementary Studies Elective 2",   credits: 3, minYear: 2, termPref: 0, category: "comp" },
];

// ─── Year 3 — MTRL 3rd Year Curriculum (33 credits) ──────────────────────
// Course names inferred from the UBC MTRL curriculum where not in source file.

export const MTRL_Y3: PlanCourse[] = [
  { id: "mtrl320",  code: "MTRL 320",  name: "Materials Engineering Laboratory I",        credits: 2, minYear: 3, termPref: 1, category: "required" },
  { id: "mtrl340",  code: "MTRL 340",  name: "Polymers, Ceramics and Composites",          credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "mtrl358",  code: "MTRL 358",  name: "Materials Characterization",                 credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "mtrl359",  code: "MTRL 359",  name: "Materials Characterization Laboratory",      credits: 1, minYear: 3, termPref: 1, category: "required" },
  { id: "mtrl361",  code: "MTRL 361",  name: "Electronic, Optical and Magnetic Materials", credits: 4, minYear: 3, termPref: 2, category: "required" },
  { id: "mtrl363",  code: "MTRL 363",  name: "Extractive Metallurgy",                      credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "mtrl365",  code: "MTRL 365",  name: "Physical Metallurgy",                        credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "mtrl378",  code: "MTRL 378",  name: "Introduction to Biomaterials",               credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "mtrl381",  code: "MTRL 381",  name: "Technical Communication in Materials Eng.",  credits: 1, minYear: 3, termPref: 2, category: "comp" },
  { id: "mtrl394",  code: "MTRL 394",  name: "Engineering Design & Project Management",    credits: 4, minYear: 3, termPref: 0, category: "required" },
  { id: "stat251",  code: "STAT 251",  name: "Elementary Statistics",                      credits: 3, minYear: 3, termPref: 0, category: "required", summerEligible: true },
  // 1 tech elective in Y3
  { id: "mtrl_y3tech", code: "Tech Elective", name: "Year 3 Technical Elective",           credits: 3, minYear: 3, termPref: 0, category: "elective" },
];

// ─── Year 4 — Core Courses (17 credits) ───────────────────────────────────

export const MTRL_Y4_CORE: PlanCourse[] = [
  { id: "apsc450",   code: "APSC 450",  name: "Professional Engineering Practice",         credits: 2, minYear: 4, termPref: 1, category: "comp",
    note: "Ethics & professionalism requirement" },
  { id: "mtrl455",   code: "MTRL 455",  name: "Process Engineering Design",                credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "mtrl456",   code: "MTRL 456",  name: "Materials Design",                          credits: 3, minYear: 4, termPref: 2, category: "required",
    note: "Capstone design project" },
  { id: "mtrl460",   code: "MTRL 460",  name: "Hydrometallurgy and Corrosion",             credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "mtrl466",   code: "MTRL 466",  name: "Advanced Materials Processing",             credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "mtrl467",   code: "MTRL 467",  name: "Advanced Materials Engineering Topics",     credits: 3, minYear: 4, termPref: 0, category: "required" },
];

// ─── Technical Elective Pool ───────────────────────────────────────────────
// Representative MTRL 4xx electives — verify current offerings each year.

const MTRL_TECH_POOL: PlanCourse[] = [
  // Process & Metallurgy
  { id: "mtrl471",  code: "MTRL 471",  name: "Ironmaking",                                 credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl472",  code: "MTRL 472",  name: "Steelmaking",                                credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl473",  code: "MTRL 473",  name: "Non-Ferrous Extraction",                     credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl476",  code: "MTRL 476",  name: "Advanced Composites",                        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl477",  code: "MTRL 477",  name: "Polymer Engineering",                        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // Biomaterials
  { id: "mtrl484",  code: "MTRL 484",  name: "Biomaterials for Medical Devices",           credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl485",  code: "MTRL 485",  name: "Tissue Engineering",                        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl495",  code: "MTRL 495",  name: "Advanced Biomaterials",                     credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // Electronic & Structural
  { id: "mtrl490",  code: "MTRL 490",  name: "Semiconductor Materials & Processing",      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl491",  code: "MTRL 491",  name: "Thin Films and Coatings",                   credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl492",  code: "MTRL 492",  name: "Nanomaterials and Nanotechnology",          credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl478",  code: "MTRL 478",  name: "Ceramic Engineering",                       credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl480",  code: "MTRL 480",  name: "Corrosion Engineering",                     credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mtrl493",  code: "MTRL 493",  name: "Computational Materials Science",           credits: 3, minYear: 4, termPref: 0, category: "elective" },
];

// ─── Tech Elective Bundles (4 per bundle = 21 credits via 7 × 3cr) ────────

export type MTRLElectiveBundle = {
  label: string;
  description: string;
  ids: string[];
};

export const MTRL_ELECTIVE_BUNDLES: MTRLElectiveBundle[] = [
  {
    label: "Process & Extractive Metallurgy",
    description: "Iron/steelmaking, non-ferrous extraction, corrosion, and advanced processing",
    ids: ["mtrl471", "mtrl472", "mtrl473", "mtrl480", "mtrl476", "mtrl477", "mtrl493"],
  },
  {
    label: "Biomaterials & Biomedical",
    description: "Medical devices, tissue engineering, advanced biomaterials, and composites",
    ids: ["mtrl484", "mtrl485", "mtrl495", "mtrl476", "mtrl478", "mtrl480", "mtrl493"],
  },
  {
    label: "Electronic & Advanced Materials",
    description: "Semiconductors, thin films, nanomaterials, ceramics, and computational methods",
    ids: ["mtrl490", "mtrl491", "mtrl492", "mtrl478", "mtrl493", "mtrl484", "mtrl476"],
  },
  {
    label: "Composites & Structural",
    description: "Advanced composites, polymer engineering, ceramics, corrosion, and non-ferrous",
    ids: ["mtrl476", "mtrl477", "mtrl478", "mtrl480", "mtrl473", "mtrl492", "mtrl493"],
  },
  {
    label: "Broad Exploration",
    description: "A wide-ranging selection spanning all MTRL disciplines",
    ids: ["mtrl471", "mtrl484", "mtrl490", "mtrl476", "mtrl492", "mtrl480", "mtrl493"],
  },
];

// ─── Prerequisites ─────────────────────────────────────────────────────────

export const MTRL_PREREQUISITES: Record<string, string[]> = {
  // Year 1 chains
  mtrl_math101:  ["mtrl_math100"],
  mtrl_phys158:  ["mtrl_phys157"],
  mtrl_math152:  ["mtrl_math100"],
  // Year 2
  mtrl_math253:  ["mtrl_math101", "mtrl_math152"],
  mtrl_math255:  ["mtrl_math101", "mtrl_math152"],
  mtrl_mech260:  ["mtrl_phys170", "mtrl_math101"],
  mtrl_apsc278:  ["mtrl_chem154", "mtrl_phys157"],
  mtrl_apsc279:  ["mtrl_apsc278"],
  mtrl201:       ["mtrl_chem154"],
  mtrl250:       ["mtrl_math101", "mtrl_chem154"],
  mtrl251:       ["mtrl250", "mtrl_math253"],
  mtrl263:       ["mtrl250"],
  mtrl264:       ["mtrl_apsc278"],
  mtrl280:       [],
  // Year 3
  mtrl320:       ["mtrl264", "mtrl263"],
  mtrl340:       ["mtrl264"],
  mtrl358:       ["mtrl264"],
  mtrl359:       ["mtrl358"],
  mtrl361:       ["mtrl264"],
  mtrl363:       ["mtrl250", "mtrl251"],
  mtrl365:       ["mtrl263", "mtrl264"],
  mtrl378:       ["mtrl264"],
  mtrl381:       [],
  mtrl394:       ["mtrl201"],
  stat251:       ["mtrl_math101"],
  // Year 4 core
  apsc450:       ["mtrl394"],
  mtrl455:       ["mtrl363", "mtrl251"],
  mtrl456:       ["mtrl394"],
  mtrl460:       ["mtrl363", "mtrl250"],
  mtrl466:       ["mtrl365"],
  mtrl467:       ["mtrl361"],
  // Tech electives
  mtrl471:       ["mtrl363"],
  mtrl472:       ["mtrl363"],
  mtrl473:       ["mtrl363"],
  mtrl476:       ["mtrl340"],
  mtrl477:       ["mtrl340"],
  mtrl478:       ["mtrl340"],
  mtrl480:       ["mtrl460"],
  mtrl484:       ["mtrl378"],
  mtrl485:       ["mtrl378"],
  mtrl495:       ["mtrl378"],
  mtrl490:       ["mtrl361"],
  mtrl491:       ["mtrl361"],
  mtrl492:       ["mtrl361"],
  mtrl493:       ["mtrl_math255"],
};

// ─── Builder ───────────────────────────────────────────────────────────────

export function getAllMTRLCoursesForDisplay(bundleIdx: number): PlanCourse[] {
  const bundle = MTRL_ELECTIVE_BUNDLES[Math.min(bundleIdx, MTRL_ELECTIVE_BUNDLES.length - 1)];
  const techCourses = MTRL_TECH_POOL.filter((c) => bundle.ids.includes(c.id));
  return [
    ...MTRL_Y1,
    ...MTRL_Y2,
    ...MTRL_Y3,
    ...MTRL_Y4_CORE,
    ...techCourses,
  ];
}

export function getAllMTRLCourses(
  bundleIdx: number,
  _completedIds?: ReadonlySet<string>
): PlanCourse[] {
  return getAllMTRLCoursesForDisplay(bundleIdx);
}

export const MTRL_COMP_STUDIES_CATEGORIES = [
  { label: "Engineering Economics & Impact",  minCredits: 3, examples: ["MTRL 280 (3cr) ✓", "COMM 296 (3cr)"] },
  { label: "Humanities & Social Sciences",    minCredits: 6, examples: ["Y2 CS Elective 1 (3cr) ✓", "Y2 CS Elective 2 (3cr) ✓"] },
  { label: "Oral & Written Communication",    minCredits: 3, examples: ["WRDS 150 (3cr) ✓", "MTRL 381 (1cr) ✓"] },
  { label: "Professionalism & Ethics",        minCredits: 2, examples: ["APSC 450 (2cr) ✓"] },
  { label: "Technology & Society",            minCredits: 3, examples: ["APSC 261 (3cr)", "ENVR 300 (3cr)", "MTRL 280 covers this ✓"] },
];
