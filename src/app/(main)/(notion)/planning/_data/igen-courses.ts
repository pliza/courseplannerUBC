// Integrated Engineering (IGEN) — multi-disciplinary program
// Tech electives span Y3 (6cr) and Y4 (12cr). Bundle includes both.
// Course names inferred where not in source file.
import type { PlanCourse } from "./bme-courses";
export type { PlanCourse };

export const IGEN_Y1: PlanCourse[] = [
  { id: "igen_apsc100", code: "APSC 100", name: "Introduction to Engineering I",        credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "igen_chem154", code: "CHEM 154", name: "Chemistry for Engineering",             credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "igen_math100", code: "MATH 100", name: "Differential Calculus",                 credits: 3, minYear: 1, termPref: 1, category: "required", summerEligible: true },
  { id: "igen_phys157", code: "PHYS 157", name: "Introductory Physics I",                credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "igen_phys170", code: "PHYS 170", name: "Engineering Statics & Dynamics",        credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "igen_apsc160", code: "APSC 160", name: "Intro to Computation in Eng. Design",  credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "igen_wrds150", code: "WRDS 150", name: "Writing & Research in Disciplines",     credits: 3, minYear: 1, termPref: 0, category: "comp" },
  { id: "igen_apsc101", code: "APSC 101", name: "Introduction to Engineering II",        credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "igen_math101", code: "MATH 101", name: "Integral Calculus",                     credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "igen_math152", code: "MATH 152", name: "Linear Systems",                        credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "igen_phys158", code: "PHYS 158", name: "Introductory Physics II",               credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "igen_phys159", code: "PHYS 159", name: "Physics Lab",                           credits: 1, minYear: 1, termPref: 2, category: "required" },
];

export const IGEN_Y2: PlanCourse[] = [
  { id: "igen_apsc278", code: "APSC 278", name: "Mechanical Properties of Materials",   credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "igen_apsc279", code: "APSC 279", name: "Properties of Materials Laboratory",   credits: 1, minYear: 2, termPref: 1, category: "required" },
  { id: "igen_chbe241", code: "CHBE 241", name: "Chemical Engineering Thermodynamics I",credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "igen_chbe244", code: "CHBE 244", name: "Numerical Methods",                    credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "igen_civl215", code: "CIVL 215", name: "Fluid Mechanics I",                    credits: 4, minYear: 2, termPref: 2, category: "required" },
  { id: "igen_cpen312", code: "CPEN 312", name: "Digital Systems & Microcomputers",     credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "igen_elec204", code: "ELEC 204", name: "Linear Circuits I",                    credits: 4, minYear: 2, termPref: 1, category: "required" },
  { id: "igen_elec205", code: "ELEC 205", name: "Linear Circuits Lab",                  credits: 1, minYear: 2, termPref: 1, category: "required" },
  { id: "igen201",      code: "IGEN 201", name: "Professional Development & Communication",credits: 3, minYear: 2, termPref: 1, category: "comp",
    note: "If failed, must subsequently pass APSC 201" },
  { id: "igen230",      code: "IGEN 230", name: "Integrated Engineering Design Project I", credits: 6, minYear: 2, termPref: 0, category: "required",
    note: "Full-year team design project" },
  { id: "igen_math253", code: "MATH 253", name: "Multivariable Calculus",               credits: 3, minYear: 2, termPref: 1, category: "required" },
  { id: "igen_math255", code: "MATH 255", name: "Differential Equations",               credits: 3, minYear: 2, termPref: 2, category: "required" },
  { id: "igen_mech260", code: "MECH 260", name: "Introduction to Mechanics of Materials",credits: 3, minYear: 2, termPref: 2, category: "required" },
];

export const IGEN_Y3: PlanCourse[] = [
  { id: "igen_chbe344", code: "CHBE 344", name: "Separation Processes",                 credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "igen_comr280", code: "COMR 280", name: "Commerce for Engineers",               credits: 3, minYear: 3, termPref: 1, category: "comp" },
  { id: "igen_elec344", code: "ELEC 344", name: "Electronic Devices and Circuits",      credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "igen330",      code: "IGEN 330", name: "Integrated Engineering Design Project II", credits: 6, minYear: 3, termPref: 0, category: "required",
    note: "Full-year team design project" },
  { id: "igen_mech360", code: "MECH 360", name: "Mechanics of Materials",               credits: 3, minYear: 3, termPref: 1, category: "required" },
  { id: "igen_mech375", code: "MECH 375", name: "Control of Mechanical Systems",        credits: 3, minYear: 3, termPref: 2, category: "required" },
  { id: "igen_mtrl280", code: "MTRL 280", name: "Social, Economic & Environmental Impact", credits: 3, minYear: 3, termPref: 1, category: "comp" },
  { id: "igen_stat251", code: "STAT 251", name: "Elementary Statistics",                credits: 3, minYear: 3, termPref: 0, category: "required", summerEligible: true },
  // CHBE 356 or ELEC 341 choice
  { id: "igen_hmt",     code: "CHBE 356 / ELEC 341", name: "Heat & Mass Transfer or Signals & Systems", credits: 4, minYear: 3, termPref: 2, category: "choice",
    note: "Choose one: CHBE 356 or ELEC 341" },
  // Y3 technical electives (6cr = 2 courses, filled from bundle)
  { id: "igen_y3cs",    code: "CS Elective", name: "Complementary Studies Elective",    credits: 3, minYear: 3, termPref: 0, category: "comp" },
];

export const IGEN_Y4_CORE: PlanCourse[] = [
  { id: "igen_apsc450", code: "APSC 450",  name: "Professional Engineering Practice",   credits: 2, minYear: 4, termPref: 1, category: "comp",
    note: "Ethics & professionalism" },
  { id: "igen_civl305", code: "CIVL 305",  name: "Environmental Systems Engineering",   credits: 3, minYear: 4, termPref: 1, category: "required" },
  { id: "igen430",      code: "IGEN 430",  name: "Integrated Engineering Design Project III", credits: 6, minYear: 4, termPref: 0, category: "required",
    note: "Full-year capstone project" },
  { id: "igen_mtrl340", code: "MTRL 340",  name: "Polymers, Ceramics and Composites",   credits: 3, minYear: 4, termPref: 2, category: "required" },
  // MINE elective choice
  { id: "igen_mine",    code: "MINE Elective", name: "Mining Engineering Elective (MINE 350/406/420/444/455/465)", credits: 3, minYear: 4, termPref: 1, category: "choice",
    note: "Choose one: MINE 350, 406, 420, 444, 455, or 465" },
  // Engineering Design elective
  { id: "igen_engdes",  code: "Eng. Design Elective", name: "Engineering Design Elective (CHBE 459/CIVL 403/ELEC 481/MECH 431/MINE 396/MTRL 455)", credits: 3, minYear: 4, termPref: 2, category: "choice",
    note: "Choose one design course from: CHBE 459, CIVL 403, ELEC 481, MECH 431, MINE 396, MTRL 455" },
  { id: "igen_y4cs",    code: "CS Elective", name: "Complementary Studies Elective",    credits: 3, minYear: 4, termPref: 0, category: "comp" },
];

// Tech elective pool: 2 Y3 courses + 4 Y4 courses per bundle (18cr total)
// Discipline-focus bundles (must have 9cr in one discipline, 6cr in another)
const IGEN_TECH_POOL: PlanCourse[] = [
  // MECH stream
  { id: "igen_m3a", code: "MECH Elective", name: "Mechanical Design & Analysis (Y3)",     credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "igen_m3b", code: "MECH Elective", name: "Thermofluids Applications (Y3)",          credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "igen_m4a", code: "MECH Elective", name: "Advanced Mechanical Systems",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_m4b", code: "MECH Elective", name: "Robotics & Mechatronics",                 credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_m4c", code: "MECH Elective", name: "Finite Element Analysis",                 credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_m4d", code: "ELEC Elective", name: "Control Systems (breadth)",               credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // ELEC stream
  { id: "igen_e3a", code: "ELEC Elective", name: "Signals and Communications (Y3)",         credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "igen_e3b", code: "ELEC Elective", name: "Power Systems I (Y3)",                    credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "igen_e4a", code: "ELEC Elective", name: "Electromechanical Energy Conversion",     credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_e4b", code: "ELEC Elective", name: "Power Electronics",                       credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_e4c", code: "ELEC Elective", name: "Embedded Systems Design",                 credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_e4d", code: "MECH Elective", name: "Mechatronics Sensors (breadth)",          credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // CHBE stream
  { id: "igen_c3a", code: "CHBE Elective", name: "Process Control Applications (Y3)",       credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "igen_c3b", code: "CHBE Elective", name: "Reaction Engineering Applications (Y3)",  credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "igen_c4a", code: "CHBE Elective", name: "Advanced Process Design",                 credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_c4b", code: "CHBE Elective", name: "Biochemical Engineering",                 credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_c4c", code: "CHBE Elective", name: "Environmental Process Engineering",       credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_c4d", code: "CIVL Elective", name: "Environmental Systems (breadth)",         credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // CIVL/MINE stream
  { id: "igen_v3a", code: "CIVL Elective", name: "Structural Analysis (Y3)",               credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "igen_v3b", code: "CIVL Elective", name: "Geotechnical Fundamentals (Y3)",          credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "igen_v4a", code: "CIVL Elective", name: "Infrastructure Design",                   credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_v4b", code: "CIVL Elective", name: "Transportation Engineering",              credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_v4c", code: "CIVL Elective", name: "Water Resources Management",              credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_v4d", code: "MECH Elective", name: "Fluid Dynamics (breadth)",                credits: 3, minYear: 4, termPref: 0, category: "elective" },
  // Broad/mixed stream
  { id: "igen_b3a", code: "Eng. Elective", name: "Data Science for Engineers (Y3)",         credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "igen_b3b", code: "Eng. Elective", name: "Sustainability & Systems Thinking (Y3)",  credits: 3, minYear: 3, termPref: 0, category: "elective" },
  { id: "igen_b4a", code: "Eng. Elective", name: "Technology Entrepreneurship",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_b4b", code: "Eng. Elective", name: "Human Factors Engineering",               credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_b4c", code: "Eng. Elective", name: "Energy Systems Engineering",              credits: 3, minYear: 4, termPref: 0, category: "elective" },
  { id: "igen_b4d", code: "Eng. Elective", name: "Global Engineering & Development",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
];

export type IGENElectiveBundle = { label: string; description: string; ids: string[] };

export const IGEN_ELECTIVE_BUNDLES: IGENElectiveBundle[] = [
  { label: "MECH-primary stream",    description: "9cr MECH depth (Y3+4) + 6cr ELEC breadth — mechanical systems & robotics",
    ids: ["igen_m3a", "igen_m3b", "igen_m4a", "igen_m4b", "igen_m4c", "igen_m4d"] },
  { label: "ELEC-primary stream",    description: "9cr ELEC depth (Y3+4) + 6cr MECH breadth — power systems & embedded",
    ids: ["igen_e3a", "igen_e3b", "igen_e4a", "igen_e4b", "igen_e4c", "igen_e4d"] },
  { label: "CHBE-primary stream",    description: "9cr CHBE depth (Y3+4) + 6cr CIVL breadth — process engineering",
    ids: ["igen_c3a", "igen_c3b", "igen_c4a", "igen_c4b", "igen_c4c", "igen_c4d"] },
  { label: "CIVL-primary stream",    description: "9cr CIVL depth (Y3+4) + 6cr MECH breadth — infrastructure & resources",
    ids: ["igen_v3a", "igen_v3b", "igen_v4a", "igen_v4b", "igen_v4c", "igen_v4d"] },
  { label: "Broad / Innovation",     description: "Mixed disciplines — data science, sustainability, entrepreneurship",
    ids: ["igen_b3a", "igen_b3b", "igen_b4a", "igen_b4b", "igen_b4c", "igen_b4d"] },
];

export const IGEN_PREREQUISITES: Record<string, string[]> = {
  igen_math101: ["igen_math100"], igen_phys158: ["igen_phys157"], igen_math152: ["igen_math100"],
  igen_chbe241: ["igen_chem154", "igen_math101"],
  igen_chbe244: ["igen_math101"],
  igen_civl215: ["igen_phys170", "igen_math101"],
  igen_cpen312: ["igen_apsc160"],
  igen_elec204: ["igen_phys158"],
  igen_math253: ["igen_math101", "igen_math152"],
  igen_math255: ["igen_math101"],
  igen_mech260: ["igen_phys170", "igen_math101"],
  igen230:      ["igen201"],
  igen_mech360: ["igen_mech260"],
  igen_mech375: ["igen_math255"],
  igen330:      ["igen230"],
  igen430:      ["igen330"],
};

export function getAllIGENCoursesForDisplay(bundleIdx: number): PlanCourse[] {
  const bundle = IGEN_ELECTIVE_BUNDLES[Math.min(bundleIdx, IGEN_ELECTIVE_BUNDLES.length - 1)];
  const tech = IGEN_TECH_POOL.filter((c) => bundle.ids.includes(c.id));
  return [...IGEN_Y1, ...IGEN_Y2, ...IGEN_Y3, ...IGEN_Y4_CORE, ...tech];
}

export function getAllIGENCourses(bundleIdx: number, _?: ReadonlySet<string>): PlanCourse[] {
  return getAllIGENCoursesForDisplay(bundleIdx);
}

export const IGEN_COMP_STUDIES = [
  { label: "Communication",            minCredits: 3, examples: ["WRDS 150 (3cr) ✓", "IGEN 201 (3cr) ✓"] },
  { label: "Social Impact & Commerce", minCredits: 3, examples: ["COMR 280 (3cr) ✓", "MTRL 280 (3cr) ✓"] },
  { label: "Humanities / Social Sci.", minCredits: 3, examples: ["Y3 CS Elective ✓", "Y4 CS Elective ✓"] },
  { label: "Professionalism & Ethics", minCredits: 2, examples: ["APSC 450 (2cr) ✓"] },
];
