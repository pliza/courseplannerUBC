// Geological Engineering (GEOE) — joint EOSC/CIVL/MINE interdisciplinary
// Course names inferred where not in source file.
import type { PlanCourse } from "./bme-courses";
export type { PlanCourse };

export const GEOE_Y1: PlanCourse[] = [
  { id: "geoe_apsc100", code: "APSC 100", name: "Introduction to Engineering I",        credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "geoe_chem154", code: "CHEM 154", name: "Chemistry for Engineering",             credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "geoe_math100", code: "MATH 100", name: "Differential Calculus",                 credits: 3, minYear: 1, termPref: 1, category: "required", summerEligible: true },
  { id: "geoe_phys157", code: "PHYS 157", name: "Introductory Physics I",                credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "geoe_phys170", code: "PHYS 170", name: "Engineering Statics & Dynamics",        credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "geoe_apsc160", code: "APSC 160", name: "Intro to Computation in Eng. Design",  credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "geoe_wrds150", code: "WRDS 150", name: "Writing & Research in Disciplines",     credits: 3, minYear: 1, termPref: 0, category: "comp" },
  { id: "geoe_apsc101", code: "APSC 101", name: "Introduction to Engineering II",        credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "geoe_math101", code: "MATH 101", name: "Integral Calculus",                     credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "geoe_math152", code: "MATH 152", name: "Linear Systems",                        credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "geoe_phys158", code: "PHYS 158", name: "Introductory Physics II",               credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "geoe_phys159", code: "PHYS 159", name: "Physics Lab",                           credits: 1, minYear: 1, termPref: 2, category: "required" },
];

export const GEOE_Y2: PlanCourse[] = [
  { id: "geoe_apsc201", code: "APSC 201", name: "Technical Communication",               credits: 3, minYear: 2, termPref: 1, category: "comp" },
  { id: "geoe_civl210", code: "CIVL 210", name: "Soil Mechanics I",                     credits: 4, minYear: 2, termPref: 1, category: "required" },
  { id: "geoe_civl215", code: "CIVL 215", name: "Fluid Mechanics I",                    credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "geoe_civl230", code: "CIVL 230", name: "Structural Analysis and Design",       credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "geoe_eosc210", code: "EOSC 210", name: "Earth Science for Engineers",           credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "geoe_eosc213", code: "EOSC 213", name: "Computer-Based Modelling in Earth Sci.",credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "geoe_eosc220", code: "EOSC 220", name: "Earth Materials (Mineralogy)",          credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "geoe_eosc221", code: "EOSC 221", name: "Earth History & Stratigraphy",          credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "geoe_eosc223", code: "EOSC 223", name: "Geological Field Methods",             credits: 3, minYear: 2, termPref: 2, category: "required",
    note: "Includes 1-week field school at end of Term 2" },
  { id: "geoe_eosc240", code: "EOSC 240", name: "Geological Mapping",                   credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "geoe_math253", code: "MATH 253", name: "Multivariable Calculus",                credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "geoe_stat251", code: "STAT 251", name: "Elementary Statistics",                 credits: 3, minYear: 2, termPref: 2, category: "required", summerEligible: true },
];

export const GEOE_Y3: PlanCourse[] = [
  { id: "geoe_civl311", code: "CIVL 311", name: "Foundation Engineering",                credits: 4, minYear: 3, termPref: 1, category: "required" },
  { id: "geoe_civl316", code: "CIVL 316", name: "Water Resources Engineering",          credits: 4, minYear: 3, termPref: 2, category: "required" },
  { id: "geoe_eosc323", code: "EOSC 323", name: "Structural Geology",                   credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "geoe_eosc328", code: "EOSC 328 / 428", name: "Geological Field School III",    credits: 3, minYear: 3, termPref: 2, category: "required",
    note: "Scheduled at end of Year 3; choose EOSC 328 or 428" },
  { id: "geoe_eosc329", code: "EOSC 329", name: "Groundwater Hydrology",                credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "geoe_eosc330", code: "EOSC 330", name: "Principles of Hydrogeology",           credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "geoe_eosc350", code: "EOSC 350", name: "Applied Geophysics",                   credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "geoe_mine303", code: "MINE 303", name: "Mining Engineering Fundamentals",       credits: 4, minYear: 3, termPref: 1, category: "required" },
  // EOSC elective (one of 320/321/322/331/332)
  { id: "geoe_eosc_elec", code: "EOSC Elective", name: "EOSC Applied Elective (EOSC 320/321/322/331/332)", credits: 3, minYear: 3, termPref: 0, category: "choice",
    note: "Choose one: EOSC 320, 321, 322, 331, or 332" },
  { id: "geoe_y3tech",   code: "Tech Elective", name: "Year 3 Technical Elective",       credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "geoe_y3cs1",    code: "CS Elective",   name: "Complementary Studies Elective 1",credits: 3, minYear: 3, termPref: 0, category: "comp" },
  { id: "geoe_y3cs2",    code: "CS Elective",   name: "Complementary Studies Elective 2",credits: 3, minYear: 3, termPref: 0, category: "comp" },
];

export const GEOE_Y4_CORE: PlanCourse[] = [
  { id: "geoe_civl402",  code: "CIVL 402",  name: "Environmental Impact Assessment",    credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "geoe_civl410",  code: "CIVL 410",  name: "Rock Mechanics",                    credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "geoe_civl411",  code: "CIVL 411",  name: "Advanced Geotechnical Engineering",  credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "geoe_eosc429",  code: "EOSC 429",  name: "Groundwater Contamination",          credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "geoe_eosc433",  code: "EOSC 433",  name: "Geomechanics & Rock Engineering",   credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "geoe_eosc434",  code: "EOSC 434",  name: "Landslide Analysis and Risk",        credits: 3, minYear: 4, termPref: 2, category: "required" },
  { id: "geoe_eosc445",  code: "EOSC 445",  name: "Geological Engineering Design Project", credits: 6, minYear: 4, termPref: 0, category: "required",
    note: "Year-long capstone design project" },
  // Design Elective
  { id: "geoe_design",   code: "Design Elective", name: "Engineering Design Course (CHBE 459/CIVL 403/CPEN 481/ELEC 481/MTRL 455/MECH 431/MINE 396)", credits: 3, minYear: 4, termPref: 1, category: "choice",
    note: "Choose one: CHBE 459, CIVL 403, CPEN 481, ELEC 481, MTRL 455, MECH 431, or MINE 396" },
];

const GEOE_TECH_POOL: PlanCourse[] = [
  { id: "geoe_ta1", code: "GEOE Elective", name: "Advanced Geotechnical Monitoring",      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_ta2", code: "GEOE Elective", name: "Numerical Modelling in Geomechanics",   credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_ta3", code: "GEOE Elective", name: "Deep Foundation Systems",               credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_tb1", code: "GEOE Elective", name: "Contaminant Hydrogeology",              credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_tb2", code: "GEOE Elective", name: "Watershed Hydrology & Management",      credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_tb3", code: "GEOE Elective", name: "Coastal and Marine Geotechnics",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_tc1", code: "GEOE Elective", name: "Seismic Hazard Assessment",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_tc2", code: "GEOE Elective", name: "Remote Sensing & LiDAR Applications",  credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_tc3", code: "GEOE Elective", name: "Mine Rock Mechanics",                   credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_td1", code: "GEOE Elective", name: "Environmental Geotechnology",           credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_td2", code: "GEOE Elective", name: "Waste Rock and Tailings Management",   credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_td3", code: "GEOE Elective", name: "Geoenvironmental Assessment",           credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_te1", code: "GEOE Elective", name: "Engineering Geology (Advanced)",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_te2", code: "GEOE Elective", name: "Near-Surface Geophysics",               credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "geoe_te3", code: "GEOE Elective", name: "Natural Hazard Risk Management",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
];

export type GEOEElectiveBundle = { label: string; description: string; ids: string[] };

export const GEOE_ELECTIVE_BUNDLES: GEOEElectiveBundle[] = [
  { label: "Geotechnical Engineering",  description: "Advanced monitoring, numerical modelling, deep foundations",
    ids: ["geoe_ta1", "geoe_ta2", "geoe_ta3"] },
  { label: "Hydrogeology & Water",      description: "Contaminant hydrology, watershed management, coastal geotechnics",
    ids: ["geoe_tb1", "geoe_tb2", "geoe_tb3"] },
  { label: "Geohazards & Remote Sensing", description: "Seismic hazard, LiDAR/remote sensing, mine rock mechanics",
    ids: ["geoe_tc1", "geoe_tc2", "geoe_tc3"] },
  { label: "Environmental Geotechnology",description: "Environmental geotechnology, tailings management, geoenvironmental assessment",
    ids: ["geoe_td1", "geoe_td2", "geoe_td3"] },
  { label: "Engineering Geology",       description: "Advanced engineering geology, near-surface geophysics, natural hazards",
    ids: ["geoe_te1", "geoe_te2", "geoe_te3"] },
];

export const GEOE_PREREQUISITES: Record<string, string[]> = {
  geoe_math101: ["geoe_math100"], geoe_phys158: ["geoe_phys157"], geoe_math152: ["geoe_math100"],
  geoe_math253: ["geoe_math101", "geoe_math152"],
  geoe_civl215: ["geoe_phys170", "geoe_math101"],
  geoe_civl230: ["geoe_phys170"],
  geoe_eosc213: ["geoe_apsc160"],
  geoe_civl311: ["geoe_civl210"],
  geoe_eosc329: ["geoe_eosc213"],
  geoe_eosc330: ["geoe_eosc210"],
  geoe_mine303: ["geoe_civl210"],
  geoe_civl402: ["geoe_eosc210"],
  geoe_civl410: ["geoe_mine303"],
  geoe_civl411: ["geoe_civl311"],
  geoe_eosc429: ["geoe_eosc329"],
  geoe_eosc433: ["geoe_civl410"],
  geoe_eosc434: ["geoe_civl311"],
  geoe_eosc445: ["geoe_civl311", "geoe_eosc323"],
};

export function getAllGEOECoursesForDisplay(bundleIdx: number): PlanCourse[] {
  const bundle = GEOE_ELECTIVE_BUNDLES[Math.min(bundleIdx, GEOE_ELECTIVE_BUNDLES.length - 1)];
  const tech = GEOE_TECH_POOL.filter((c) => bundle.ids.includes(c.id));
  return [...GEOE_Y1, ...GEOE_Y2, ...GEOE_Y3, ...GEOE_Y4_CORE, ...tech];
}

export function getAllGEOECourses(bundleIdx: number, _?: ReadonlySet<string>): PlanCourse[] {
  return getAllGEOECoursesForDisplay(bundleIdx);
}

export const GEOE_COMP_STUDIES = [
  { label: "Technical Communication",  minCredits: 3, examples: ["WRDS 150 (3cr) ✓", "APSC 201 (3cr) ✓"] },
  { label: "Humanities & Social Sci.", minCredits: 6, examples: ["Y3 CS Elective 1 ✓", "Y3 CS Elective 2 ✓"] },
  { label: "Environmental Impact",     minCredits: 3, examples: ["CIVL 402 (3cr) ✓ — EIA course"] },
  { label: "Professionalism & Ethics", minCredits: 2, examples: ["APSC 450 or equivalent — confirm with GEOE advisor"] },
];
