// Manufacturing Engineering (MANU) — joint MECH/MTRL program
// Year 3 & 4 course names inferred where not in source file.
import type { PlanCourse } from "./bme-courses";
export type { PlanCourse };

export const MANU_Y1: PlanCourse[] = [
  { id: "manu_apsc100", code: "APSC 100", name: "Introduction to Engineering I",         credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "manu_chem154", code: "CHEM 154", name: "Chemistry for Engineering",              credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "manu_math100", code: "MATH 100", name: "Differential Calculus",                  credits: 3, minYear: 1, termPref: 1, category: "required", summerEligible: true },
  { id: "manu_phys157", code: "PHYS 157", name: "Introductory Physics I",                 credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "manu_phys170", code: "PHYS 170", name: "Engineering Statics & Dynamics",         credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "manu_apsc160", code: "APSC 160", name: "Intro to Computation in Eng. Design",   credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "manu_wrds150", code: "WRDS 150", name: "Writing & Research in Disciplines",      credits: 3, minYear: 1, termPref: 0, category: "comp" },
  { id: "manu_apsc101", code: "APSC 101", name: "Introduction to Engineering II",         credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "manu_math101", code: "MATH 101", name: "Integral Calculus",                      credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "manu_math152", code: "MATH 152", name: "Linear Systems",                         credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "manu_phys158", code: "PHYS 158", name: "Introductory Physics II",                credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "manu_phys159", code: "PHYS 159", name: "Physics Lab",                            credits: 1, minYear: 1, termPref: 2, category: "required" },
];

export const MANU_Y2: PlanCourse[] = [
  { id: "manu_apsc278", code: "APSC 278", name: "Mechanical Properties of Materials",    credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "manu_apsc279", code: "APSC 279", name: "Properties of Materials Laboratory",    credits: 1, minYear: 2, termPref: 1, category: "required" },
  { id: "manu_elec203", code: "ELEC 203", name: "Basic Circuit Analysis",                credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "manu201",      code: "MANU 201", name: "Introduction to Manufacturing Processes",credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "manu231",      code: "MANU 231", name: "Manufacturing Systems Design",          credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "manu280",      code: "MANU 280", name: "Design and Manufacturing Studio",       credits: 4, minYear: 2, termPref: 0, category: "required",
    note: "Multi-term design project" },
  { id: "manu261",      code: "MANU 261", name: "Thermodynamics for Manufacturing",      credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "manu265",      code: "MANU 265", name: "Materials Selection in Design",         credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "manu_math253", code: "MATH 253", name: "Multivariable Calculus",                credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "manu_math255", code: "MATH 255", name: "Differential Equations",                credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "manu_mech260", code: "MECH 260", name: "Introduction to Mechanics of Materials",credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "manu_mtrl263", code: "MTRL 263", name: "Phase Transformations in Materials",    credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "manu_mtrl264", code: "MTRL 264", name: "Structure of Materials",               credits: 3, minYear: 2, termPref: 2, category: "required" },
];

export const MANU_Y3: PlanCourse[] = [
  { id: "manu_cpen223", code: "CPEN 223", name: "Software Construction & Design",        credits: 4, minYear: 3, termPref: 1, category: "required" },
  { id: "manu_cpen333", code: "CPEN 333", name: "System Software Engineering",           credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "manu270",      code: "MANU 270", name: "Quality and Reliability Engineering",   credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "manu330",      code: "MANU 330", name: "Manufacturing Design Project I",        credits: 6, minYear: 3, termPref: 0, category: "required",
    note: "Year-long integrated design project" },
  { id: "manu378",      code: "MANU 378", name: "Manufacturing Data Analytics",          credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "manu380",      code: "MANU 380", name: "Manufacturing Process Design",          credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "manu386",      code: "MANU 386", name: "Surface Engineering and Tribology",     credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "manu_mech360", code: "MECH 360", name: "Mechanics of Materials",                credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "manu_mech368", code: "MECH 368", name: "Engineering Analysis",                  credits: 4, minYear: 3, termPref: 2, category: "required" },
  { id: "manu_stat251", code: "STAT 251", name: "Elementary Statistics",                 credits: 3, minYear: 3, termPref: 0, category: "required", summerEligible: true },
  { id: "manu_y3cs",    code: "CS Elective", name: "Complementary Studies Elective",     credits: 3, minYear: 3, termPref: 0, category: "comp" },
];

export const MANU_Y4_CORE: PlanCourse[] = [
  { id: "manu370",      code: "MANU 370", name: "Product Development Engineering",       credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "manu430",      code: "MANU 430", name: "Manufacturing Design Project II (Capstone)", credits: 6, minYear: 4, termPref: 0, category: "required",
    note: "Year-long capstone project" },
  { id: "manu480",      code: "MANU 480", name: "Advanced Manufacturing Technologies",   credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "manu481",      code: "MANU 481", name: "Manufacturing Systems Management",      credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "manu_mech400", code: "MECH 400", name: "Engineering Profession & Practice",     credits: 3, minYear: 4, termPref: 1, category: "comp",
    note: "Ethics & professionalism" },
  { id: "manu_mech463", code: "MECH 463", name: "Nanoscale Engineering",                 credits: 4, minYear: 4, termPref: 2, category: "required" },
  { id: "manu_mech491", code: "MECH 491", name: "Engineering Design & Communication",    credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "manu_mtrl455", code: "MTRL 455", name: "Process Engineering Design",            credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "manu_y4cs",    code: "CS Elective", name: "Complementary Studies Elective",     credits: 3, minYear: 4, termPref: 0, category: "comp" },
];

const MANU_TECH_POOL: PlanCourse[] = [
  { id: "manu_t1a", code: "MANU Elective", name: "Additive Manufacturing & Rapid Prototyping", credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t1b", code: "MANU Elective", name: "Industrial Robotics & Automation",            credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t1c", code: "MANU Elective", name: "Advanced CNC and Precision Machining",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t2a", code: "MANU Elective", name: "Polymer Processing and Composites Mfg.",      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t2b", code: "MTRL Elective", name: "Advanced Composites",                         credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t2c", code: "MTRL Elective", name: "Surface Coatings and Thin Films",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t3a", code: "MANU Elective", name: "Lean Manufacturing and Six Sigma",            credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t3b", code: "MANU Elective", name: "Supply Chain and Operations Management",      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t3c", code: "MANU Elective", name: "Digital Manufacturing & Industry 4.0",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t4a", code: "MECH Elective", name: "Finite Element Analysis",                     credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t4b", code: "MECH Elective", name: "Design for Manufacture and Assembly",         credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "manu_t4c", code: "MANU Elective", name: "Failure Analysis and Prevention",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
];

export type MANUElectiveBundle = { label: string; description: string; ids: string[] };

export const MANU_ELECTIVE_BUNDLES: MANUElectiveBundle[] = [
  { label: "Advanced Manufacturing",   description: "Additive manufacturing, robotics, and advanced CNC",
    ids: ["manu_t1a", "manu_t1b", "manu_t1c"] },
  { label: "Materials & Surfaces",     description: "Composites, polymer processing, and surface coatings",
    ids: ["manu_t2a", "manu_t2b", "manu_t2c"] },
  { label: "Systems & Management",     description: "Lean manufacturing, supply chain, and digital factory",
    ids: ["manu_t3a", "manu_t3b", "manu_t3c"] },
  { label: "Design & Analysis",        description: "FEA, design for manufacture, and failure analysis",
    ids: ["manu_t4a", "manu_t4b", "manu_t4c"] },
];

export const MANU_PREREQUISITES: Record<string, string[]> = {
  manu_math101:  ["manu_math100"],
  manu_phys158:  ["manu_phys157"],
  manu_math152:  ["manu_math100"],
  manu_math253:  ["manu_math101", "manu_math152"],
  manu_math255:  ["manu_math101"],
  manu_mech260:  ["manu_phys170", "manu_math101"],
  manu280:       ["manu201"],
  manu261:       ["manu_math101"],
  manu265:       ["manu_apsc278"],
  manu_mtrl263:  ["manu261"],
  manu_mtrl264:  ["manu_apsc278"],
  manu_cpen223:  ["manu_apsc160"],
  manu_cpen333:  ["manu_cpen223"],
  manu330:       ["manu280"],
  manu380:       ["manu231", "manu_mtrl264"],
  manu378:       ["manu_stat251"],
  manu386:       ["manu_mtrl264"],
  manu_mech360:  ["manu_mech260"],
  manu_mech368:  ["manu_math253", "manu_math255"],
  manu370:       ["manu280"],
  manu430:       ["manu330"],
  manu480:       ["manu380"],
  manu481:       ["manu330"],
  manu_mech400:  ["manu330"],
  manu_mech491:  ["manu330"],
  manu_mtrl455:  ["manu380", "manu261"],
};

export function getAllMANUCoursesForDisplay(bundleIdx: number): PlanCourse[] {
  const bundle = MANU_ELECTIVE_BUNDLES[Math.min(bundleIdx, MANU_ELECTIVE_BUNDLES.length - 1)];
  const tech = MANU_TECH_POOL.filter((c) => bundle.ids.includes(c.id));
  return [...MANU_Y1, ...MANU_Y2, ...MANU_Y3, ...MANU_Y4_CORE, ...tech];
}

export function getAllMANUCourses(bundleIdx: number, _?: ReadonlySet<string>): PlanCourse[] {
  return getAllMANUCoursesForDisplay(bundleIdx);
}

export const MANU_COMP_STUDIES = [
  { label: "Engineering Economics",       minCredits: 3, examples: ["COMM 296 (3cr)", "MANU 481 (management focus)"] },
  { label: "Humanities & Social Sciences", minCredits: 3, examples: ["Y3 CS Elective ✓", "Y4 CS Elective ✓"] },
  { label: "Communication",               minCredits: 3, examples: ["WRDS 150 (3cr) ✓", "MECH 491 (writing focus)"] },
  { label: "Professionalism & Ethics",    minCredits: 3, examples: ["MECH 400 (3cr) ✓"] },
];
