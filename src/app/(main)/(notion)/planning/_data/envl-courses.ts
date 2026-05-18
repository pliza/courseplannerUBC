// Environmental Engineering (ENVL) — combines CHBE + CIVL + ENVE
// Course names inferred where not in source file.
import type { PlanCourse } from "./bme-courses";
export type { PlanCourse };

export const ENVL_Y1: PlanCourse[] = [
  { id: "envl_apsc100", code: "APSC 100", name: "Introduction to Engineering I",        credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "envl_chem154", code: "CHEM 154", name: "Chemistry for Engineering",             credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "envl_math100", code: "MATH 100", name: "Differential Calculus",                 credits: 3, minYear: 1, termPref: 1, category: "required", summerEligible: true },
  { id: "envl_phys157", code: "PHYS 157", name: "Introductory Physics I",                credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "envl_phys170", code: "PHYS 170", name: "Engineering Statics & Dynamics",        credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "envl_apsc160", code: "APSC 160", name: "Intro to Computation in Eng. Design",  credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "envl_wrds150", code: "WRDS 150", name: "Writing & Research in Disciplines",     credits: 3, minYear: 1, termPref: 0, category: "comp" },
  { id: "envl_apsc101", code: "APSC 101", name: "Introduction to Engineering II",        credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "envl_math101", code: "MATH 101", name: "Integral Calculus",                     credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "envl_math152", code: "MATH 152", name: "Linear Systems",                        credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "envl_phys158", code: "PHYS 158", name: "Introductory Physics II",               credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "envl_phys159", code: "PHYS 159", name: "Physics Lab",                           credits: 1, minYear: 1, termPref: 2, category: "required" },
];

export const ENVL_Y2: PlanCourse[] = [
  { id: "envl_chbe230",  code: "CHBE 230",  name: "Material and Energy Balances",         credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "envl_chbe241",  code: "CHBE 241",  name: "Chemical Engineering Thermodynamics I",credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "envl_chbe244",  code: "CHBE 244",  name: "Numerical Methods",                    credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "envl_civl204",  code: "CIVL 204",  name: "Engineering Design & Communication",   credits: 3, minYear: 2, termPref: 1, category: "comp" },
  { id: "envl_civl215",  code: "CIVL 215",  name: "Fluid Mechanics I",                   credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "envl200",       code: "ENVE 200",  name: "Environmental Chemistry",              credits: 4, minYear: 2, termPref: 1, category: "required" },
  { id: "envl201",       code: "ENVE 201",  name: "Environmental Biology",               credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "envl202",       code: "ENVE 202",  name: "Environmental Physical Chemistry",    credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "envl203",       code: "ENVE 203",  name: "Environmental Engineering Fundamentals", credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "envl_math253",  code: "MATH 253",  name: "Multivariable Calculus",               credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "envl_math256",  code: "MATH 256",  name: "Differential Equations",               credits: 3, minYear: 2, termPref: 2, category: "required" },
];

export const ENVL_Y3: PlanCourse[] = [
  { id: "envl_chbe364",  code: "CHBE 364",  name: "Chemical Reaction Engineering I",     credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "envl_chbe370",  code: "CHBE 370",  name: "Process Dynamics and Control",        credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "envl_chbe373",  code: "CHBE 373",  name: "Chemical Engineering Laboratory",     credits: 4, minYear: 3, termPref: 1, category: "required" },
  { id: "envl_chbe485",  code: "CHBE 485",  name: "Environmental Biotechnology",         credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "envl_civl305",  code: "CIVL 305",  name: "Environmental Systems Engineering",   credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "envl_civl315",  code: "CIVL 315",  name: "Water Quality Engineering",           credits: 4, minYear: 3, termPref: 1, category: "required" },
  { id: "envl_civl316",  code: "CIVL 316",  name: "Water Resources Engineering",        credits: 4, minYear: 3, termPref: 2, category: "required" },
  { id: "envl301",       code: "ENVE 301",  name: "Water and Wastewater Treatment",      credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "envl_eosc210",  code: "EOSC 210",  name: "Earth Science for Engineers",         credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "envl_stat251",  code: "STAT 251",  name: "Elementary Statistics",               credits: 3, minYear: 3, termPref: 0, category: "required", summerEligible: true },
  { id: "envl_y3tech",   code: "Tech Elective", name: "Year 3 Technical Elective",       credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "envl_y3cs",     code: "CS Elective",   name: "Complementary Studies Elective",  credits: 3, minYear: 3, termPref: 0, category: "comp" },
];

export const ENVL_Y4_CORE: PlanCourse[] = [
  { id: "envl_chbe459",  code: "CHBE 459",  name: "Process Engineering Design",          credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "envl_chbe483",  code: "CHBE 483",  name: "Air Pollution Control Engineering",   credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "envl_chbe486",  code: "CHBE 486",  name: "Waste Management Engineering",        credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "envl_civl402",  code: "CIVL 402",  name: "Environmental Impact Assessment",     credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "envl_civl409",  code: "CIVL 409",  name: "Solid Waste Engineering",             credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "envl_civl416",  code: "CIVL 416",  name: "Air Quality Engineering",             credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "envl_civl418",  code: "CIVL 418",  name: "Environmental Risk Assessment",       credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "envl401",       code: "ENVE 401",  name: "Capstone Design Project",             credits: 8, minYear: 4, termPref: 0, category: "required",
    note: "Year-long multi-disciplinary capstone" },
  { id: "envl_eosc329",  code: "EOSC 329",  name: "Groundwater Hydrology",               credits: 3, minYear: 4, termPref: 2, category: "required" },
];

const ENVL_TECH_POOL: PlanCourse[] = [
  { id: "envl_ta1", code: "ENVL Elective", name: "Constructed Wetlands & Ecosystem Restoration", credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "envl_ta2", code: "ENVL Elective", name: "Climate Change Adaptation Engineering",          credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "envl_tb1", code: "ENVL Elective", name: "Drinking Water Treatment & Distribution",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "envl_tb2", code: "ENVL Elective", name: "Industrial Wastewater Treatment",                credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "envl_tc1", code: "ENVL Elective", name: "Contaminated Site Remediation",                  credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "envl_tc2", code: "ENVL Elective", name: "Environmental Monitoring & Sensing",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "envl_td1", code: "ENVL Elective", name: "Sustainable Energy Systems",                     credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "envl_td2", code: "ENVL Elective", name: "Life Cycle Assessment",                          credits: 3, minYear: 4, termPref: 0, category: "elective" },
];

export type ENVLElectiveBundle = { label: string; description: string; ids: string[] };

export const ENVL_ELECTIVE_BUNDLES: ENVLElectiveBundle[] = [
  { label: "Water & Ecosystems",  description: "Water treatment, wetland restoration, and climate adaptation",
    ids: ["envl_ta1", "envl_ta2"] },
  { label: "Water Treatment",     description: "Drinking water, industrial wastewater treatment technologies",
    ids: ["envl_tb1", "envl_tb2"] },
  { label: "Soil & Remediation",  description: "Contaminated site remediation and environmental monitoring",
    ids: ["envl_tc1", "envl_tc2"] },
  { label: "Sustainable Systems", description: "Sustainable energy and life cycle assessment",
    ids: ["envl_td1", "envl_td2"] },
];

export const ENVL_PREREQUISITES: Record<string, string[]> = {
  envl_math101: ["envl_math100"], envl_phys158: ["envl_phys157"], envl_math152: ["envl_math100"],
  envl_chbe230: ["envl_chem154"],
  envl_chbe241: ["envl_chbe230", "envl_math101"],
  envl_chbe244: ["envl_math101"],
  envl_civl215: ["envl_phys170", "envl_math101"],
  envl200:      ["envl_chem154"],
  envl202:      ["envl200"],
  envl203:      ["envl_chbe230"],
  envl_math253: ["envl_math101", "envl_math152"],
  envl_math256: ["envl_math101"],
  envl_chbe364: ["envl_chbe241"],
  envl_chbe370: ["envl_chbe241", "envl_math256"],
  envl_chbe373: ["envl_chbe241"],
  envl_chbe485: ["envl201"],
  envl_civl315: ["envl203"],
  envl_civl316: ["envl_civl215"],
  envl301:      ["envl203", "envl201"],
  envl_chbe459: ["envl_chbe364", "envl_chbe370"],
  envl_chbe483: ["envl_chbe370"],
  envl_chbe486: ["envl_chbe364"],
  envl_civl402: ["envl_civl305"],
  envl401:      ["envl_civl315", "envl_chbe364"],
};

export function getAllENVLCoursesForDisplay(bundleIdx: number): PlanCourse[] {
  const bundle = ENVL_ELECTIVE_BUNDLES[Math.min(bundleIdx, ENVL_ELECTIVE_BUNDLES.length - 1)];
  const tech = ENVL_TECH_POOL.filter((c) => bundle.ids.includes(c.id));
  return [...ENVL_Y1, ...ENVL_Y2, ...ENVL_Y3, ...ENVL_Y4_CORE, ...tech];
}

export function getAllENVLCourses(bundleIdx: number, _?: ReadonlySet<string>): PlanCourse[] {
  return getAllENVLCoursesForDisplay(bundleIdx);
}

export const ENVL_COMP_STUDIES = [
  { label: "Technical Communication",   minCredits: 3, examples: ["WRDS 150 (3cr) ✓", "CIVL 204 (3cr) ✓"] },
  { label: "Humanities & Social Sci.",  minCredits: 3, examples: ["Y3 CS Elective ✓"] },
  { label: "Environmental Impact",      minCredits: 3, examples: ["CIVL 402 ✓ (covers this)", "ENVE 401 (capstone includes impact assessment) ✓"] },
  { label: "Professionalism & Ethics",  minCredits: 2, examples: ["APSC 450 or equivalent — confirm with advisor"] },
];
