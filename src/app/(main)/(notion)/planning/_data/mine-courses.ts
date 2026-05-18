// ─────────────────────────────────────────────────────────────────────────────
// Mining Engineering Degree Plan Data
// Source: UBC Bachelor of Applied Science — Mining Engineering Requirements
// Credits are approximate — always verify with the MINE department.
// ─────────────────────────────────────────────────────────────────────────────

import type { PlanCourse } from "./bme-courses";
export type { PlanCourse };

// ─── Year 1 — Standard Applied Science First Year ─────────────────────────

const Y1_COURSES: PlanCourse[] = [
  // Term 1 fixed
  { id: "mine_apsc100",  code: "APSC 100",  name: "Introduction to Engineering I",      credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "mine_chem154",  code: "CHEM 154",  name: "Chemistry for Engineering",           credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "mine_math100",  code: "MATH 100",  name: "Differential Calculus",               credits: 3, minYear: 1, termPref: 1, category: "required", summerEligible: true },
  { id: "mine_phys157",  code: "PHYS 157",  name: "Introductory Physics I",              credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "mine_phys170",  code: "PHYS 170",  name: "Engineering Statics & Dynamics",      credits: 3, minYear: 1, termPref: 1, category: "required" },
  // Flexible Y1
  { id: "mine_apsc160",  code: "APSC 160",  name: "Intro to Computation in Eng. Design", credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "mine_wrds150",  code: "WRDS 150",  name: "Writing & Research in Disciplines",   credits: 3, minYear: 1, termPref: 0, category: "comp" },
  // Term 2 fixed
  { id: "mine_apsc101",  code: "APSC 101",  name: "Introduction to Engineering II",      credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "mine_math101",  code: "MATH 101",  name: "Integral Calculus",                   credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "mine_math152",  code: "MATH 152",  name: "Linear Systems",                      credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "mine_phys158",  code: "PHYS 158",  name: "Introductory Physics II",             credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "mine_phys159",  code: "PHYS 159",  name: "Physics Lab",                         credits: 1, minYear: 1, termPref: 2, category: "required" },
];

// ─── Year 2 — Mining Engineering Core (39-40 credits) ─────────────────────

const Y2_COURSES: PlanCourse[] = [
  // Term 1 fixed
  { id: "civl210",   code: "CIVL 210",  name: "Soil Mechanics I",                        credits: 4, minYear: 2, termPref: 1, category: "required" },
  { id: "math253",   code: "MATH 253",  name: "Multivariable Calculus",                  credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "mech260",   code: "MECH 260",  name: "Introduction to Mechanics of Materials",  credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "mine200",   code: "MINE 200",  name: "Introduction to Mining",                  credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "mine202",   code: "MINE 202",  name: "Resource Estimation",                     credits: 4, minYear: 2, termPref: 1, category: "required" },
  // Term 2 fixed
  { id: "math256",   code: "MATH 256",  name: "Differential Equations",                  credits: 3, minYear: 2, termPref: 2, category: "required",
    note: "Alt: MATH 255" },
  { id: "mech280",   code: "MECH 280",  name: "Fluid Mechanics",                         credits: 3, minYear: 2, termPref: 2, category: "required",
    note: "Alt: CIVL 215 or CHBE 251" },
  { id: "mine201",   code: "MINE 201",  name: "Mine Technology",                         credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "mine293",   code: "MINE 293",  name: "Mining Methods",                          credits: 1, minYear: 2, termPref: 2, category: "required" },
  // Flexible Y2
  { id: "apsc201",   code: "APSC 201",  name: "Technical Communication",                 credits: 3, minYear: 2, termPref: 0, category: "comp",
    note: "Oral & Written Communication req." },
  { id: "eosc210",   code: "EOSC 210",  name: "Earth Science for Engineers",             credits: 3, minYear: 2, termPref: 0, category: "required" },
  { id: "stat251",   code: "STAT 251",  name: "Elementary Statistics",                   credits: 3, minYear: 2, termPref: 0, category: "required", summerEligible: true },
  { id: "mine_y2cs1", code: "CS Elective", name: "Complementary Studies Elective",       credits: 3, minYear: 2, termPref: 0, category: "comp" },
];

// ─── Year 3 — Mining Engineering (37 credits) ─────────────────────────────

const Y3_COURSES: PlanCourse[] = [
  // Term 1
  { id: "apsc278",   code: "APSC 278",  name: "Mechanical Properties of Materials",      credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "apsc279",   code: "APSC 279",  name: "Properties of Materials Laboratory",      credits: 1, minYear: 3, termPref: 1, category: "required" },
  { id: "elec203",   code: "ELEC 203",  name: "Basic Circuit Analysis",                  credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "mine302",   code: "MINE 302",  name: "Underground Mining",                      credits: 4, minYear: 3, termPref: 1, category: "required" },
  { id: "mine310",   code: "MINE 310",  name: "Mineral Processing I",                    credits: 4, minYear: 3, termPref: 1, category: "required" },
  { id: "mine350",   code: "MINE 350",  name: "Mine Economics & Project Evaluation",     credits: 3, minYear: 3, termPref: 1, category: "comp",
    note: "Satisfies Eng. Economics req." },
  // Term 2
  { id: "mine303",   code: "MINE 303",  name: "Surface Mining",                          credits: 4, minYear: 3, termPref: 2, category: "required" },
  { id: "mine331",   code: "MINE 331",  name: "Rock Mechanics",                          credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "mine333",   code: "MINE 333",  name: "Mine Health & Safety",                    credits: 3, minYear: 3, termPref: 2, category: "comp",
    note: "Satisfies Health & Safety req." },
  { id: "mine380",   code: "MINE 380",  name: "Mine Environment",                        credits: 3, minYear: 3, termPref: 2, category: "required" },
  // Flexible Y3
  { id: "mine396",   code: "MINE 396",  name: "Mining Engineering Practice",             credits: 3, minYear: 3, termPref: 0, category: "required" },
  { id: "mine_y3cs1", code: "CS Elective", name: "Complementary Studies Elective",       credits: 3, minYear: 3, termPref: 0, category: "comp" },
];

// ─── Year 4 — Core courses (excl. tech electives) ─────────────────────────

const Y4_CORE: PlanCourse[] = [
  // Term 1
  { id: "mine403",   code: "MINE 403",  name: "Mine Ventilation",                        credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "mine432",   code: "MINE 432",  name: "Rock Engineering",                        credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "mine447",   code: "MINE 447",  name: "Mineral Processing II",                   credits: 3, minYear: 4, termPref: 1, category: "required" },
  // Term 2
  { id: "mine402",   code: "MINE 402",  name: "Mine Waste Management",                   credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "mine444",   code: "MINE 444",  name: "Process Control",                         credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "mine465",   code: "MINE 465",  name: "Material Handling",                       credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "mine486",   code: "MINE 486",  name: "Mining and the Environment",              credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "mine491",   code: "MINE 491",  name: "Capstone Design Project",                 credits: 6, minYear: 4, termPref: 2, category: "required",
    note: "6-credit capstone — major term 2 commitment" },
  // Flexible Y4
  { id: "apsc450",   code: "APSC 450",  name: "Professional Engineering Practice",       credits: 2, minYear: 4, termPref: 0, category: "comp",
    note: "Ethics & Professionalism req." },
];

// ─── Technical Elective Pool (9 credits = 3 × 3cr) ────────────────────────

export const MINE_TECH_ELECTIVES_POOL: PlanCourse[] = [
  // Mine Design & Planning
  { id: "mine407",   code: "MINE 407",  name: "Open Pit Mine Design",                    credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mine408",   code: "MINE 408",  name: "Underground Mine Design",                 credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mine409",   code: "MINE 409",  name: "Advanced Mine Planning",                  credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // Geotechnics & Drilling
  { id: "mine420",   code: "MINE 420",  name: "Geotechnical Engineering in Mining",      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mine435",   code: "MINE 435",  name: "Blasting Engineering",                    credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // Mineral Processing & Resources
  { id: "mine410",   code: "MINE 410",  name: "Advanced Mineral Processing",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mine475",   code: "MINE 475",  name: "Resource Economics & Policy",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // Technology & Innovation
  { id: "mine440",   code: "MINE 440",  name: "Mine Automation & Robotics",              credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mine460",   code: "MINE 460",  name: "Remote Sensing in Mining",                credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "mine490",   code: "MINE 490",  name: "Special Topics in Mining Engineering",    credits: 3, minYear: 4, termPref: 0, category: "elective" },
];

// ─── Pre-defined Tech Elective Bundles (3 courses each) ───────────────────

export type MINEElectiveBundle = {
  label: string;
  description: string;
  ids: string[];
};

export const MINE_ELECTIVE_BUNDLES: MINEElectiveBundle[] = [
  {
    label: "Mine Design & Planning",
    description: "Open pit, underground design, and advanced mine planning",
    ids: ["mine407", "mine408", "mine409"],
  },
  {
    label: "Geotechnics & Blasting",
    description: "Geotechnical engineering, blasting, and advanced rock design",
    ids: ["mine420", "mine435", "mine408"],
  },
  {
    label: "Processing & Resources",
    description: "Advanced mineral processing, resource economics, and automation",
    ids: ["mine410", "mine475", "mine440"],
  },
  {
    label: "Technology & Innovation",
    description: "Mine automation, remote sensing, and special topics",
    ids: ["mine440", "mine460", "mine490"],
  },
  {
    label: "Broad Mining",
    description: "Balanced coverage — open pit design, processing, and blasting",
    ids: ["mine407", "mine410", "mine435"],
  },
];

// ─── Prerequisites ─────────────────────────────────────────────────────────

export const MINE_PREREQUISITES: Record<string, string[]> = {
  // Year 1
  mine_math101:  ["mine_math100"],
  mine_phys158:  ["mine_phys157"],
  mine_math152:  ["mine_math100"],
  // Year 2
  civl210:   ["mine_phys157", "mine_phys170"],
  math253:   ["mine_math101", "mine_math152"],
  math256:   ["mine_math101", "mine_math152"],
  mech260:   ["mine_phys157", "mine_phys170", "mine_math101"],
  mech280:   ["mine_phys158", "mine_math101"],
  mine200:   ["mine_apsc100"],
  mine202:   ["mine_apsc100"],
  mine293:   ["mine200"],
  stat251:   ["mine_math101"],
  // Year 3
  mine302:   ["mine200", "mine201"],
  mine303:   ["mine200"],
  mine310:   ["mine202"],
  mine331:   ["civl210", "mech260"],
  mine333:   ["mine200"],
  mine350:   ["mine202"],
  mine380:   ["eosc210"],
  mine396:   ["mine200"],
  // Year 4
  mine402:   ["mine380"],
  mine403:   ["mine302", "mech280"],
  mine432:   ["mine331"],
  mine444:   ["mine310"],
  mine447:   ["mine310"],
  mine465:   ["mine302"],
  mine486:   ["mine380", "mine402"],
  mine491:   ["mine302", "mine303", "mine310"],
  // Tech electives
  mine407:   ["mine303"],
  mine408:   ["mine302"],
  mine409:   ["mine302", "mine303"],
  mine420:   ["mine331"],
  mine435:   ["mine302"],
  mine410:   ["mine310"],
  mine475:   ["mine350"],
  mine440:   ["mine302"],
};

// ─── Builder functions ─────────────────────────────────────────────────────

export function getAllMINECoursesForDisplay(bundleIdx: number): PlanCourse[] {
  const bundle = MINE_ELECTIVE_BUNDLES[Math.min(bundleIdx, MINE_ELECTIVE_BUNDLES.length - 1)];
  const techCourses = MINE_TECH_ELECTIVES_POOL.filter((c) => bundle.ids.includes(c.id));
  return [...Y1_COURSES, ...Y2_COURSES, ...Y3_COURSES, ...Y4_CORE, ...techCourses];
}

export function getAllMINECourses(
  bundleIdx: number,
  _completedIds?: ReadonlySet<string>
): PlanCourse[] {
  return getAllMINECoursesForDisplay(bundleIdx);
}

export const MINE_COMP_STUDIES_CATEGORIES = [
  { label: "Engineering Economics & Project Mgmt",  minCredits: 3, examples: ["MINE 350 (3cr) ✓ (already required)"] },
  { label: "Humanities & Social Sciences",           minCredits: 6, examples: ["PHIL 220 (3cr)", "ECON 101 (3cr)", "GEOG 122 (3cr)"] },
  { label: "Oral & Written Communication",           minCredits: 6, examples: ["WRDS 150 (3cr) ✓", "APSC 201 (3cr) ✓", "ENGL 301 (3cr)"] },
  { label: "Health & Safety",                        minCredits: 0, examples: ["MINE 333 (3cr) ✓ (integrated into core)"] },
  { label: "Professionalism, Ethics & Law",          minCredits: 2, examples: ["APSC 450 (2cr) ✓ (already required)"] },
  { label: "Technology Impact & Sustainability",     minCredits: 3, examples: ["MINE 380 (3cr)", "MINE 486 (3cr)", "ENVR 300 (3cr)"] },
];

export { Y1_COURSES as MINE_Y1_COURSES, Y2_COURSES as MINE_Y2_COURSES,
         Y3_COURSES as MINE_Y3_COURSES, Y4_CORE as MINE_Y4_CORE };
