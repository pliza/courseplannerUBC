// ─────────────────────────────────────────────────────────────────────────────
// Civil Engineering Degree Plan Data
// Source: UBC Bachelor of Applied Science — Civil Engineering Requirements
// Credits are approximate — always verify with the CIVL department.
// ─────────────────────────────────────────────────────────────────────────────

import type { PlanCourse } from "./bme-courses";
export type { PlanCourse };

// ─── Year 1 — Standard Applied Science First Year ─────────────────────────
// Same structure across all BASc programs; Civil uses CHEM 154 + PHYS 159 lab.

const Y1_COURSES: PlanCourse[] = [
  // Term 1 fixed
  { id: "civl_apsc100",  code: "APSC 100",  name: "Introduction to Engineering I",      credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "civl_chem154",  code: "CHEM 154",  name: "Chemistry for Engineering",           credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "civl_math100",  code: "MATH 100",  name: "Differential Calculus",               credits: 3, minYear: 1, termPref: 1, category: "required", summerEligible: true },
  { id: "civl_phys157",  code: "PHYS 157",  name: "Introductory Physics I",              credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "civl_phys170",  code: "PHYS 170",  name: "Engineering Statics & Dynamics",      credits: 3, minYear: 1, termPref: 1, category: "required" },
  // Flexible Y1
  { id: "civl_apsc160",  code: "APSC 160",  name: "Intro to Computation in Eng. Design", credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "civl_wrds150",  code: "WRDS 150",  name: "Writing & Research in Disciplines",   credits: 3, minYear: 1, termPref: 0, category: "comp",
    note: "Required before most 3rd-year communication courses" },
  { id: "civl_y1cs1",    code: "CS Elective", name: "Complementary Studies Elective",    credits: 3, minYear: 1, termPref: 0, category: "comp" },
  // Term 2 fixed
  { id: "civl_apsc101",  code: "APSC 101",  name: "Introduction to Engineering II",      credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "civl_math101",  code: "MATH 101",  name: "Integral Calculus",                   credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "civl_math152",  code: "MATH 152",  name: "Linear Systems",                      credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "civl_phys158",  code: "PHYS 158",  name: "Introductory Physics II",             credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "civl_phys159",  code: "PHYS 159",  name: "Physics Lab",                         credits: 1, minYear: 1, termPref: 2, category: "required" },
];

// ─── Year 2 — Civil Engineering Core (45 credits) ─────────────────────────

const Y2_COURSES: PlanCourse[] = [
  // Term 1 fixed
  { id: "apsc278",   code: "APSC 278",  name: "Mechanical Properties of Materials",     credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "apsc279",   code: "APSC 279",  name: "Properties of Materials Laboratory",     credits: 1, minYear: 2, termPref: 1, category: "required" },
  { id: "civl201",   code: "CIVL 201",  name: "Introduction to Civil Engineering",       credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "civl203",   code: "CIVL 203",  name: "Civil Engineering Materials",             credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "civl210",   code: "CIVL 210",  name: "Soil Mechanics I",                        credits: 4, minYear: 2, termPref: 1, category: "required" },
  { id: "civl230",   code: "CIVL 230",  name: "Structural Mechanics",                    credits: 4, minYear: 2, termPref: 1, category: "required" },
  { id: "math253",   code: "MATH 253",  name: "Multivariable Calculus",                  credits: 3, minYear: 2, termPref: 1, category: "required" },
  // Term 2 fixed
  { id: "civl215",   code: "CIVL 215",  name: "Fluid Mechanics I",                       credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "civl231",   code: "CIVL 231",  name: "Structural Analysis I",                   credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "civl235",   code: "CIVL 235",  name: "Plane Surveying",                         credits: 4, minYear: 2, termPref: 2, category: "required",
    note: "Offered at end of Term 2" },
  { id: "math256",   code: "MATH 256",  name: "Differential Equations",                  credits: 3, minYear: 2, termPref: 2, category: "required" },
  // Flexible Y2
  { id: "civl204",   code: "CIVL 204",  name: "Engineering Economics",                   credits: 3, minYear: 2, termPref: 0, category: "required" },
  { id: "eosc210",   code: "EOSC 210",  name: "Earth Science for Engineers",             credits: 3, minYear: 2, termPref: 0, category: "required" },
  { id: "stat251",   code: "STAT 251",  name: "Elementary Statistics",                   credits: 3, minYear: 2, termPref: 0, category: "required", summerEligible: true },
];

// ─── Year 3 — Civil Engineering (40 credits) ──────────────────────────────

const Y3_COURSES: PlanCourse[] = [
  // Term 1
  { id: "civl300",   code: "CIVL 300",  name: "Construction Engineering & Management",  credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "civl301",   code: "CIVL 301",  name: "Modelling and Decision Analysis",         credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "civl311",   code: "CIVL 311",  name: "Soil Mechanics II",                       credits: 4, minYear: 3, termPref: 1, category: "required" },
  { id: "civl315",   code: "CIVL 315",  name: "Fluid Mechanics II",                      credits: 4, minYear: 3, termPref: 1, category: "required" },
  { id: "civl331",   code: "CIVL 331",  name: "Structural Analysis II",                  credits: 4, minYear: 3, termPref: 1, category: "required" },
  // Term 2
  { id: "civl303",   code: "CIVL 303",  name: "Sustainable Design",                      credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "civl305",   code: "CIVL 305",  name: "Introduction to Environmental Engineering",credits:4, minYear: 3, termPref: 2, category: "required" },
  { id: "civl316",   code: "CIVL 316",  name: "Hydrology and Open Channel Flow",         credits: 4, minYear: 3, termPref: 2, category: "required" },
  { id: "civl320",   code: "CIVL 320",  name: "Civil Engineering Design I",              credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "civl332",   code: "CIVL 332",  name: "Structural Design I",                     credits: 3, minYear: 3, termPref: 2, category: "required" },
  // Flexible Y3
  { id: "civl302",   code: "CIVL 302",  name: "Civil Engineering Communications",        credits: 3, minYear: 3, termPref: 0, category: "comp",
    note: "Counts toward Impact of Technology requirement — requires WRDS 150" },
  { id: "civl340",   code: "CIVL 340",  name: "Transport Engineering I",                 credits: 3, minYear: 3, termPref: 0, category: "required" },
];

// ─── Year 4 — Core courses (excl. tech electives) ─────────────────────────

const Y4_CORE: PlanCourse[] = [
  // Term 1
  { id: "civl403",   code: "CIVL 403",  name: "Engineering Economics & Project Mgmt",   credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "civl430",   code: "CIVL 430",  name: "Structural Design II",                    credits: 4, minYear: 4, termPref: 1, category: "required" },
  { id: "civl445",   code: "CIVL 445",  name: "Transport Engineering II",                credits: 3, minYear: 4, termPref: 1, category: "required" },
  // Term 2
  { id: "civl409",   code: "CIVL 409",  name: "Capstone Design Project",                 credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "civl446",   code: "CIVL 446",  name: "Engineering Design and Analysis",         credits: 2, minYear: 4, termPref: 2, category: "required" },
  // Flexible Y4
  { id: "civl402",   code: "CIVL 402",  name: "Professionalism and Law in Civil Eng.",   credits: 3, minYear: 4, termPref: 0, category: "comp",
    note: "Ethics & Law requirement" },
  { id: "civl_y4cs1", code: "CS Elective", name: "Complementary Studies Elective",      credits: 3, minYear: 4, termPref: 0, category: "comp" },
];

// ─── Technical Elective Pool ───────────────────────────────────────────────

export const CIVL_TECH_ELECTIVES_POOL: PlanCourse[] = [
  // Structural
  { id: "civl416",  code: "CIVL 416",  name: "Reinforced Concrete Design I",            credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl432",  code: "CIVL 432",  name: "Steel Structures",                         credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl433",  code: "CIVL 433",  name: "Prestressed & Precast Concrete",           credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl434",  code: "CIVL 434",  name: "Structural Dynamics",                      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl435",  code: "CIVL 435",  name: "Earthquake Engineering",                   credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // Geotechnical
  { id: "civl410",  code: "CIVL 410",  name: "Groundwater and Seepage",                  credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl411",  code: "CIVL 411",  name: "Advanced Soil Mechanics",                  credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl412",  code: "CIVL 412",  name: "Geotechnical Earthquake Engineering",      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl413",  code: "CIVL 413",  name: "Foundation Design",                        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl414",  code: "CIVL 414",  name: "Rock Mechanics",                           credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // Environmental / Water Resources
  { id: "civl417",  code: "CIVL 417",  name: "Stormwater Management",                    credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl418",  code: "CIVL 418",  name: "Environmental Engineering Design",         credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl419",  code: "CIVL 419",  name: "Water & Wastewater Treatment",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl462",  code: "CIVL 462",  name: "Air Quality & Noise Control",              credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl463",  code: "CIVL 463",  name: "Remediation of Contaminated Sites",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // Transportation
  { id: "civl447",  code: "CIVL 447",  name: "Traffic Engineering",                      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl449",  code: "CIVL 449",  name: "Transportation Demand Modelling",          credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl450",  code: "CIVL 450",  name: "Transit Planning & Design",                credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl451",  code: "CIVL 451",  name: "Pavement Analysis & Design",               credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // Construction Management
  { id: "civl460",  code: "CIVL 460",  name: "Construction Technology",                  credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "civl461",  code: "CIVL 461",  name: "Construction Project Management",          credits: 3, minYear: 4, termPref: 0, category: "elective" },
];

// ─── Pre-defined Tech Elective Bundles ────────────────────────────────────

export type CIVLElectiveBundle = {
  label: string;
  description: string;
  ids: string[];
};

export const CIVL_ELECTIVE_BUNDLES: CIVLElectiveBundle[] = [
  {
    label: "Structural Engineering",
    description: "Concrete, steel, dynamics, and earthquake-resistant design",
    ids: ["civl416", "civl432", "civl433", "civl434", "civl435"],
  },
  {
    label: "Geotechnical Engineering",
    description: "Soil mechanics, foundations, rock mechanics, and seismic geotechnics",
    ids: ["civl410", "civl411", "civl412", "civl413", "civl414"],
  },
  {
    label: "Environmental & Water Resources",
    description: "Stormwater, water treatment, environmental design, and air quality",
    ids: ["civl417", "civl418", "civl419", "civl462", "civl463"],
  },
  {
    label: "Transportation Engineering",
    description: "Traffic, transit planning, pavement design, and demand modelling",
    ids: ["civl447", "civl449", "civl450", "civl451", "civl416"],
  },
  {
    label: "Construction Management",
    description: "Construction technology, project management, structural design",
    ids: ["civl460", "civl461", "civl416", "civl432", "civl410"],
  },
];

// ─── Prerequisites ─────────────────────────────────────────────────────────

export const CIVL_PREREQUISITES: Record<string, string[]> = {
  // Year 1
  civl_math101:  ["civl_math100"],
  civl_phys158:  ["civl_phys157"],
  civl_math152:  ["civl_math100"],
  // Year 2
  apsc278:   ["civl_chem154"],
  apsc279:   ["apsc278"],
  civl201:   ["civl_apsc100"],
  civl210:   ["civl_chem154", "civl_phys157"],
  civl215:   ["civl_phys158", "civl_math101"],
  civl230:   ["civl_phys157", "civl_phys170", "civl_math101"],
  civl231:   ["civl230"],
  civl235:   ["civl_apsc101"],
  math253:   ["civl_math101", "civl_math152"],
  math256:   ["civl_math101", "civl_math152"],
  stat251:   ["civl_math101"],
  eosc210:   ["civl_apsc100"],
  // Year 3
  civl302:   ["civl_wrds150"],
  civl305:   ["civl215", "civl204"],
  civl311:   ["civl210"],
  civl315:   ["civl215"],
  civl316:   ["civl315"],
  civl320:   ["civl231", "civl210"],
  civl331:   ["civl231"],
  civl332:   ["civl331"],
  civl340:   ["civl_apsc101"],
  // Year 4
  civl430:   ["civl332"],
  civl403:   ["civl204"],
  civl409:   ["civl320", "civl332"],
  civl445:   ["civl340"],
  civl446:   ["civl320"],
  civl402:   ["civl_apsc101"],
  // Tech electives (typically require Y3 civil courses)
  civl416:   ["civl332"],
  civl432:   ["civl332"],
  civl433:   ["civl416"],
  civl434:   ["civl331"],
  civl435:   ["civl331"],
  civl410:   ["civl311"],
  civl411:   ["civl311"],
  civl412:   ["civl311"],
  civl413:   ["civl311"],
  civl414:   ["civl311"],
  civl417:   ["civl316"],
  civl418:   ["civl305"],
  civl419:   ["civl305"],
  civl462:   ["civl305"],
  civl463:   ["civl305"],
  civl447:   ["civl340"],
  civl449:   ["civl340"],
  civl450:   ["civl340"],
  civl451:   ["civl340"],
  civl460:   ["civl300"],
  civl461:   ["civl300"],
};

// ─── Builder functions ─────────────────────────────────────────────────────

/**
 * All courses visible in the "taken courses" selector for a given bundle.
 */
export function getAllCIVLCoursesForDisplay(bundleIdx: number): PlanCourse[] {
  const bundle = CIVL_ELECTIVE_BUNDLES[Math.min(bundleIdx, CIVL_ELECTIVE_BUNDLES.length - 1)];
  const techCourses = CIVL_TECH_ELECTIVES_POOL.filter((c) => bundle.ids.includes(c.id));
  return [...Y1_COURSES, ...Y2_COURSES, ...Y3_COURSES, ...Y4_CORE, ...techCourses];
}

/**
 * Courses to feed into the degree plan builder for a given bundle.
 */
export function getAllCIVLCourses(
  bundleIdx: number,
  _completedIds?: ReadonlySet<string>
): PlanCourse[] {
  return getAllCIVLCoursesForDisplay(bundleIdx);
}

export const CIVL_COMP_STUDIES_CATEGORIES = [
  { label: "Engineering Economics & Project Mgmt",  minCredits: 3, examples: ["CIVL 204 (3cr)", "CIVL 403 (3cr)"] },
  { label: "Humanities & Social Sciences",           minCredits: 6, examples: ["PHIL 220 (3cr)", "ECON 101 (3cr)", "GEOG 122 (3cr)"] },
  { label: "Oral & Written Communication",           minCredits: 6, examples: ["WRDS 150 (3cr)", "CIVL 302 (3cr)", "ENGL 301 (3cr)"] },
  { label: "Professionalism, Ethics & Law",          minCredits: 2, examples: ["CIVL 402 (3cr)"] },
  { label: "Technology Impact & Sustainability",     minCredits: 3, examples: ["CIVL 302 (3cr)", "CIVL 303 (3cr)", "ENVR 300 (3cr)"] },
];

export { Y1_COURSES as CIVL_Y1_COURSES, Y2_COURSES as CIVL_Y2_COURSES,
         Y3_COURSES as CIVL_Y3_COURSES, Y4_CORE as CIVL_Y4_CORE };
