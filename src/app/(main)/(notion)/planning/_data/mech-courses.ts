// ─────────────────────────────────────────────────────────────────────────────
// Mechanical Engineering Degree Plan Data
// Source: UBC Bachelor of Applied Science — Mechanical Engineering Requirements
// Credit values for MECH 2xx integrated blocks are as published.
// Year 3/4 option-specific credits are estimated where not explicitly stated.
// ─────────────────────────────────────────────────────────────────────────────

import type { PlanCourse } from "./bme-courses";
export type { PlanCourse };

export type MECHOption = "general" | "aerospace" | "bio" | "energy" | "mechatronics" | "naval";

// ─── Year 1 — Standard Applied Science First Year ─────────────────────────
// Must complete APSC 160, MATH 100/101/152, PHYS 157/158/170,
// PHYS 159 (or BMEG 102), and WRDS 150 by August 1 before Year 2.

const Y1_COURSES: PlanCourse[] = [
  // Term 1 fixed
  { id: "mech_apsc100",  code: "APSC 100",  name: "Introduction to Engineering I",      credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "mech_chem154",  code: "CHEM 154",  name: "Chemistry for Engineering",           credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "mech_math100",  code: "MATH 100",  name: "Differential Calculus",               credits: 3, minYear: 1, termPref: 1, category: "required", summerEligible: true },
  { id: "mech_phys157",  code: "PHYS 157",  name: "Introductory Physics I",              credits: 3, minYear: 1, termPref: 1, category: "required" },
  { id: "mech_phys170",  code: "PHYS 170",  name: "Engineering Statics & Dynamics",      credits: 3, minYear: 1, termPref: 1, category: "required" },
  // Flexible Y1
  { id: "mech_apsc160",  code: "APSC 160",  name: "Intro to Computation in Eng. Design", credits: 3, minYear: 1, termPref: 0, category: "required" },
  { id: "mech_wrds150",  code: "WRDS 150",  name: "Writing & Research in Disciplines",   credits: 3, minYear: 1, termPref: 0, category: "comp",
    note: "Must complete by Aug 1 before Year 2" },
  // Term 2 fixed
  { id: "mech_apsc101",  code: "APSC 101",  name: "Introduction to Engineering II",      credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "mech_math101",  code: "MATH 101",  name: "Integral Calculus",                   credits: 3, minYear: 1, termPref: 2, category: "required", summerEligible: true },
  { id: "mech_math152",  code: "MATH 152",  name: "Linear Systems",                      credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "mech_phys158",  code: "PHYS 158",  name: "Introductory Physics II",             credits: 3, minYear: 1, termPref: 2, category: "required" },
  { id: "mech_phys159",  code: "PHYS 159",  name: "Physics Lab",                         credits: 1, minYear: 1, termPref: 2, category: "required" },
];

// ─── Year 2 — Common MECH 2 Curriculum (40-42 credits) ────────────────────
// This is UBC Mech's integrated second-year block. MECH 221/222/223 carry
// unusually high credit values because they represent multi-course bundles.
// MECH 220 is taken in the week BEFORE Term 1 (early arrival required).

const Y2_COURSES: PlanCourse[] = [
  { id: "mech220",  code: "MECH 220",  name: "Engineering Design & Communication",   credits: 4,  minYear: 2, termPref: 0, category: "required",
    note: "Taken in early-start week before Term 1" },
  { id: "mech221",  code: "MECH 221",  name: "Integrated Engineering — Term 1 Block", credits: 12, minYear: 2, termPref: 1, category: "required",
    note: "Multi-course integrated block" },
  { id: "mech222",  code: "MECH 222",  name: "Engineering Science Methods",           credits: 6,  minYear: 2, termPref: 1, category: "required",
    note: "Multi-course integrated block" },
  { id: "mech226",  code: "MECH 226",  name: "Engineering Communications (Winter)",   credits: 3,  minYear: 2, termPref: 1, category: "comp",
    note: "Alt: MECH 227 (5cr, summer)" },
  { id: "math254",  code: "MATH 254",  name: "Multivariable & Vector Calculus",       credits: 3,  minYear: 2, termPref: 1, category: "required" },
  { id: "mech223",  code: "MECH 223",  name: "Integrated Engineering — Term 2 Block", credits: 7,  minYear: 2, termPref: 2, category: "required",
    note: "Multi-course integrated block" },
  { id: "mech224",  code: "MECH 224",  name: "Technical Lab",                         credits: 1,  minYear: 2, termPref: 2, category: "required" },
  { id: "mech225",  code: "MECH 225",  name: "Engineering Design Project",            credits: 1,  minYear: 2, termPref: 2, category: "required" },
  { id: "math258",  code: "MATH 258",  name: "Differential Equations for Engineers",  credits: 3,  minYear: 2, termPref: 2, category: "required" },
];

// ─── Year 3 — Common Core (all options) ───────────────────────────────────

const Y3_COMMON: PlanCourse[] = [
  { id: "mech305",  code: "MECH 305",  name: "Engineering Design Studio",             credits: 6,  minYear: 3, termPref: 0, category: "required",
    note: "Spans full year — integrated design" },
  { id: "mech325",  code: "MECH 325",  name: "Machine Analysis",                      credits: 4,  minYear: 3, termPref: 1, category: "required" },
  { id: "mech328",  code: "MECH 328",  name: "Engineering Materials",                 credits: 3,  minYear: 3, termPref: 1, category: "required" },
  { id: "mech368",  code: "MECH 368",  name: "Engineering Analysis",                  credits: 4,  minYear: 3, termPref: 1, category: "required" },
  { id: "mech360",  code: "MECH 360",  name: "Mechanics of Materials",                credits: 3,  minYear: 3, termPref: 2, category: "required" },
  { id: "mech375",  code: "MECH 375",  name: "Control of Mechanical Systems",         credits: 3,  minYear: 3, termPref: 2, category: "required" },
  { id: "mech466",  code: "MECH 466",  name: "Manufacturing Engineering",             credits: 4,  minYear: 3, termPref: 2, category: "required" },
  // CS electives (all options)
  { id: "mech_y3cs1", code: "CS Elective", name: "Complementary Studies Elective 1", credits: 3,  minYear: 3, termPref: 0, category: "comp" },
  { id: "mech_y3cs2", code: "CS Elective", name: "Complementary Studies Elective 2", credits: 3,  minYear: 3, termPref: 0, category: "comp" },
];

// ─── Year 3 — Option-Specific Courses ─────────────────────────────────────

export const Y3_GENERAL: PlanCourse[] = [
  { id: "mech_y3tech", code: "Tech Elective", name: "Year 3 Technical Elective",      credits: 3,  minYear: 3, termPref: 0, category: "elective" },
];

export const Y3_AEROSPACE: PlanCourse[] = [
  { id: "mech327",  code: "MECH 327",  name: "Aerodynamics",                          credits: 3,  minYear: 3, termPref: 1, category: "choice" },
  { id: "mech358",  code: "MECH 358",  name: "Aerospace Structures I",                credits: 3,  minYear: 3, termPref: 2, category: "choice" },
  { id: "mech380",  code: "MECH 380",  name: "Applied Fluid Mechanics",               credits: 3,  minYear: 3, termPref: 1, category: "choice" },
];

export const Y3_BIO: PlanCourse[] = [
  { id: "bmeg410",  code: "BMEG 410",  name: "Biomechanics",                          credits: 3,  minYear: 3, termPref: 1, category: "choice" },
  { id: "mech439",  code: "MECH 439",  name: "Mechanical Design",                     credits: 3,  minYear: 3, termPref: 2, category: "choice" },
];

export const Y3_ENERGY: PlanCourse[] = [
  { id: "mech327e", code: "MECH 327",  name: "Aerodynamics / Fluid Systems",          credits: 3,  minYear: 3, termPref: 1, category: "choice" },
  { id: "mech380e", code: "MECH 380",  name: "Applied Fluid Mechanics",               credits: 3,  minYear: 3, termPref: 2, category: "choice" },
];

export const Y3_MECHATRONICS: PlanCourse[] = [
  { id: "cpen312",  code: "CPEN 312",  name: "Digital Systems & Microcomputers",      credits: 3,  minYear: 3, termPref: 1, category: "choice" },
  { id: "cpsc259",  code: "CPSC 259",  name: "Data Structures for Mechatronics",      credits: 3,  minYear: 3, termPref: 1, category: "choice" },
  { id: "elec302",  code: "ELEC 302",  name: "Electronic Circuits",                   credits: 3,  minYear: 3, termPref: 2, category: "choice" },
  { id: "mech306",  code: "MECH 306",  name: "Introduction to Mechatronics",          credits: 3,  minYear: 3, termPref: 2, category: "choice" },
];

export const Y3_NAVAL: PlanCourse[] = [
  { id: "mech359",  code: "MECH 359",  name: "Naval Architecture I",                  credits: 3,  minYear: 3, termPref: 1, category: "choice" },
  { id: "mech380n", code: "MECH 380",  name: "Applied Fluid Mechanics",               credits: 3,  minYear: 3, termPref: 2, category: "choice" },
];

// ─── Year 4 — Common Core (all options) ───────────────────────────────────

const Y4_CORE: PlanCourse[] = [
  { id: "mech400",  code: "MECH 400",  name: "Engineering Profession & Practice",     credits: 3,  minYear: 4, termPref: 1, category: "comp",
    note: "Ethics & Professionalism requirement" },
  { id: "mech431",  code: "MECH 431",  name: "Computer-Aided Design & Manufacturing", credits: 3,  minYear: 4, termPref: 1, category: "required" },
  { id: "mech463",  code: "MECH 463",  name: "Nanoscale Engineering",                 credits: 4,  minYear: 4, termPref: 2, category: "required" },
];

// ─── Year 4 — Option Capstones ─────────────────────────────────────────────

const CAPSTONE: Record<MECHOption, PlanCourse> = {
  general:      { id: "mech457",  code: "MECH 457",  name: "Capstone Design Project",              credits: 6, minYear: 4, termPref: 2, category: "required" },
  aerospace:    { id: "mech453",  code: "MECH 453",  name: "Aerospace Capstone Design",            credits: 6, minYear: 4, termPref: 2, category: "choice" },
  bio:          { id: "mech459",  code: "MECH 459",  name: "Biomechanics Capstone Design",         credits: 6, minYear: 4, termPref: 2, category: "choice" },
  energy:       { id: "mech456",  code: "MECH 456",  name: "Energy Systems Capstone Design",       credits: 6, minYear: 4, termPref: 2, category: "choice" },
  mechatronics: { id: "mech458",  code: "MECH 458",  name: "Mechatronics Capstone Design",         credits: 6, minYear: 4, termPref: 2, category: "choice" },
  naval:        { id: "mech455",  code: "MECH 455",  name: "Naval Architecture Capstone",          credits: 6, minYear: 4, termPref: 2, category: "choice" },
};

// ─── Technical Elective Pool by Option ────────────────────────────────────

export const MECH_TECH_POOL: Record<MECHOption, PlanCourse[]> = {
  general: [
    { id: "mech410",  code: "MECH 410",  name: "Advanced Thermodynamics",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech416",  code: "MECH 416",  name: "Vibrations",                          credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech420",  code: "MECH 420",  name: "Mechatronics Systems",                credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech435",  code: "MECH 435",  name: "Finite Element Analysis",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech440",  code: "MECH 440",  name: "Renewable Energy Systems",            credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech441",  code: "MECH 441",  name: "Advanced Structural Analysis",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech448",  code: "MECH 448",  name: "Heat Transfer Applications",          credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech460",  code: "MECH 460",  name: "Engineering Design Optimization",     credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech470",  code: "MECH 470",  name: "Robotics",                            credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech480",  code: "MECH 480",  name: "Advanced Manufacturing",              credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech490",  code: "MECH 490",  name: "Special Topics in Mech. Eng.",        credits: 3, minYear: 4, termPref: 0, category: "elective" },
  ],
  aerospace: [
    { id: "mech426",  code: "MECH 426",  name: "Gas Dynamics",                        credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "mech462",  code: "MECH 462",  name: "Aerospace Structures II",             credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "mech479",  code: "MECH 479",  name: "Combustion & Propulsion",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech481",  code: "MECH 481",  name: "Flight Dynamics & Control",           credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "mech489a", code: "MECH 489",  name: "Advanced Aerospace Topics",           credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mtrl484",  code: "MTRL 484",  name: "Aerospace Materials",                 credits: 3, minYear: 4, termPref: 0, category: "elective" },
  ],
  bio: [
    { id: "bmeg456",  code: "BMEG 456",  name: "Biomedical Devices",                  credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "mtrl495",  code: "MTRL 495",  name: "Biomaterials",                        credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech439b", code: "MECH 439",  name: "Advanced Mechanical Design",          credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "mech416b", code: "MECH 416",  name: "Vibrations & Dynamics",               credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech435b", code: "MECH 435",  name: "Finite Element Analysis",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
  ],
  energy: [
    { id: "mech489e", code: "MECH 489",  name: "Advanced Energy Topics",              credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech440e", code: "MECH 440",  name: "Renewable Energy Systems",            credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech448e", code: "MECH 448",  name: "Advanced Heat Transfer",              credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "mech410e", code: "MECH 410",  name: "Advanced Thermodynamics",             credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "mech460e", code: "MECH 460",  name: "Building Energy Systems",             credits: 3, minYear: 4, termPref: 0, category: "elective" },
  ],
  mechatronics: [
    { id: "cpen333",  code: "CPEN 333",  name: "System Software Engineering",         credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "elec343",  code: "ELEC 343",  name: "Power Electronics",                   credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "mech392",  code: "MECH 392",  name: "Machine Vision",                      credits: 3, minYear: 4, termPref: 2, category: "elective" },
    { id: "mech421",  code: "MECH 421",  name: "Industrial Robotics",                 credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "mech423",  code: "MECH 423",  name: "Sensors & Actuators",                 credits: 3, minYear: 4, termPref: 2, category: "elective" },
    { id: "mech467",  code: "MECH 467",  name: "Autonomous Vehicles",                 credits: 3, minYear: 4, termPref: 0, category: "elective" },
  ],
  naval: [
    { id: "mech486",  code: "MECH 486",  name: "Ship Structural Design",              credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "mech488",  code: "MECH 488",  name: "Marine Propulsion Systems",           credits: 3, minYear: 4, termPref: 1, category: "elective" },
    { id: "civl435",  code: "CIVL 435",  name: "Earthquake Engineering (Marine)",     credits: 3, minYear: 4, termPref: 0, category: "elective" },
    { id: "mech380n4",code: "MECH 380",  name: "Advanced Fluid Mechanics",            credits: 3, minYear: 4, termPref: 2, category: "elective" },
    { id: "mech416n", code: "MECH 416",  name: "Structural Vibrations",               credits: 3, minYear: 4, termPref: 0, category: "elective" },
  ],
};

// ─── Elective Bundles per Option ───────────────────────────────────────────

export type MECHElectiveBundle = {
  label: string;
  description: string;
  ids: string[];
};

export const MECH_ELECTIVE_BUNDLES: Record<MECHOption, MECHElectiveBundle[]> = {
  general: [
    { label: "Dynamics & Structures",  description: "Vibrations, FEA, structural analysis, and advanced design",
      ids: ["mech416", "mech435", "mech441", "mech460", "mech490"] },
    { label: "Thermal-Fluids",         description: "Thermodynamics, heat transfer, and energy systems",
      ids: ["mech410", "mech440", "mech448", "mech460", "mech490"] },
    { label: "Robotics & Automation",  description: "Mechatronics, robotics, advanced manufacturing",
      ids: ["mech420", "mech470", "mech480", "mech435", "mech490"] },
    { label: "Broad Engineering",      description: "Balanced selection across MECH disciplines",
      ids: ["mech410", "mech416", "mech435", "mech470", "mech490"] },
  ],
  aerospace: [
    { label: "Structures & Dynamics",  description: "Gas dynamics, structures, flight dynamics, and combustion",
      ids: ["mech426", "mech462", "mech479", "mech481", "mech489a"] },
    { label: "Propulsion Focus",       description: "Gas dynamics, combustion, advanced aero topics, materials",
      ids: ["mech426", "mech479", "mech481", "mech489a", "mtrl484"] },
    { label: "Structures Focus",       description: "Structures, flight dynamics, materials, advanced topics",
      ids: ["mech462", "mech481", "mtrl484", "mech426", "mech489a"] },
    { label: "Broad Aerospace",        description: "Comprehensive aerospace engineering coverage",
      ids: ["mech426", "mech462", "mech479", "mtrl484", "mech489a"] },
  ],
  bio: [
    { label: "Devices & Biomaterials", description: "Biomedical devices, biomaterials, advanced design",
      ids: ["bmeg456", "mtrl495", "mech439b", "mech416b", "mech435b"] },
    { label: "Mechanics & Design",     description: "Biomechanics, FEA, vibrations, and advanced design",
      ids: ["mech439b", "mech416b", "mech435b", "bmeg456", "mtrl495"] },
    { label: "Clinical Focus",         description: "Biomedical devices, biomaterials, and analysis",
      ids: ["bmeg456", "mtrl495", "mech435b", "mech416b", "mech439b"] },
    { label: "Broad Biomechanics",     description: "All core bio-option courses",
      ids: ["bmeg456", "mtrl495", "mech439b", "mech435b", "mech416b"] },
  ],
  energy: [
    { label: "Renewables & Buildings", description: "Renewable energy, building systems, heat transfer",
      ids: ["mech489e", "mech440e", "mech448e", "mech460e", "mech410e"] },
    { label: "Thermal Systems",        description: "Advanced thermodynamics, heat transfer, propulsion",
      ids: ["mech410e", "mech448e", "mech489e", "mech440e", "mech460e"] },
    { label: "Green Energy",           description: "Renewables, building energy, advanced topics",
      ids: ["mech440e", "mech460e", "mech489e", "mech410e", "mech448e"] },
    { label: "Broad Energy",           description: "Full energy & environment course complement",
      ids: ["mech489e", "mech440e", "mech448e", "mech410e", "mech460e"] },
  ],
  mechatronics: [
    { label: "Robotics & Control",     description: "Robotics, sensors, machine vision, and autonomous vehicles",
      ids: ["mech421", "mech423", "mech392", "mech467", "cpen333"] },
    { label: "Electronics & Software", description: "Power electronics, system software, sensing, robotics",
      ids: ["elec343", "cpen333", "mech423", "mech421", "mech392"] },
    { label: "Autonomous Systems",     description: "Autonomous vehicles, robotics, machine vision, sensors",
      ids: ["mech467", "mech421", "mech392", "mech423", "elec343"] },
    { label: "Full Mechatronics",      description: "All core mechatronics option electives",
      ids: ["cpen333", "elec343", "mech392", "mech421", "mech423"] },
  ],
  naval: [
    { label: "Structures & Propulsion",description: "Ship structural design, marine propulsion, and hydrodynamics",
      ids: ["mech486", "mech488", "mech380n4", "mech416n", "civl435"] },
    { label: "Marine Systems",         description: "Propulsion, structural design, earthquake eng., fluids",
      ids: ["mech488", "mech486", "civl435", "mech380n4", "mech416n"] },
    { label: "Hydrodynamics Focus",    description: "Fluid mechanics, structural vibrations, propulsion, design",
      ids: ["mech380n4", "mech416n", "mech488", "mech486", "civl435"] },
    { label: "Broad Naval Architecture",description: "All core naval architecture option electives",
      ids: ["mech486", "mech488", "civl435", "mech380n4", "mech416n"] },
  ],
};

// ─── Prerequisites ─────────────────────────────────────────────────────────

export const MECH_PREREQUISITES: Record<string, string[]> = {
  // Year 1
  mech_math101:  ["mech_math100"],
  mech_phys158:  ["mech_phys157"],
  mech_math152:  ["mech_math100"],
  // Year 2 prereqs (must be done by Aug 1)
  mech220:   ["mech_apsc160", "mech_math100"],
  mech221:   ["mech_phys157", "mech_phys158", "mech_phys170", "mech_math100", "mech_math101", "mech_math152"],
  mech222:   ["mech221"],
  mech223:   ["mech221"],
  mech224:   ["mech221"],
  mech225:   ["mech221"],
  mech226:   ["mech221"],
  math254:   ["mech_math101", "mech_math152"],
  math258:   ["mech_math101", "mech_math152"],
  // Year 3
  mech305:   ["mech221", "mech222"],
  mech325:   ["mech221", "mech222"],
  mech328:   ["mech_chem154", "mech221"],
  mech360:   ["mech221", "mech222"],
  mech368:   ["math254", "math258"],
  mech375:   ["math258"],
  mech466:   ["mech221"],
  // Option-specific Y3
  mech327:   ["mech222"],
  mech327e:  ["mech222"],
  mech358:   ["mech325"],
  mech380:   ["mech222"],
  mech380e:  ["mech222"],
  mech380n:  ["mech222"],
  bmeg410:   ["mech325"],
  mech439:   ["mech325"],
  cpen312:   ["mech_apsc160"],
  cpsc259:   ["mech_apsc160"],
  elec302:   ["mech221"],
  mech306:   ["mech375"],
  mech359:   ["mech325"],
  // Year 4
  mech400:   ["mech221"],
  mech431:   ["mech466"],
  mech463:   ["mech328"],
  // Capstones
  mech453:   ["mech327", "mech358", "mech380"],
  mech455:   ["mech359", "mech380n"],
  mech456:   ["mech380e"],
  mech457:   ["mech305"],
  mech458:   ["mech306", "cpen312"],
  mech459:   ["bmeg410"],
  // Y4 tech electives
  mech426:   ["mech327"],
  mech462:   ["mech358"],
  mech421:   ["mech306"],
  mech423:   ["mech306"],
  mech392:   ["mech306"],
  mech467:   ["mech306"],
  elec343:   ["elec302"],
  mech486:   ["mech359"],
  mech488:   ["mech380n"],
};

// ─── Builder functions ─────────────────────────────────────────────────────

function getY3Option(option: MECHOption): PlanCourse[] {
  switch (option) {
    case "aerospace":    return Y3_AEROSPACE;
    case "bio":          return Y3_BIO;
    case "energy":       return Y3_ENERGY;
    case "mechatronics": return Y3_MECHATRONICS;
    case "naval":        return Y3_NAVAL;
    default:             return Y3_GENERAL;
  }
}

export function getAllMECHCoursesForDisplay(option: MECHOption, bundleIdx: number): PlanCourse[] {
  const bundles = MECH_ELECTIVE_BUNDLES[option];
  const bundle = bundles[Math.min(bundleIdx, bundles.length - 1)];
  const pool = MECH_TECH_POOL[option];
  const techCourses = pool.filter((c) => bundle.ids.includes(c.id));
  return [
    ...Y1_COURSES,
    ...Y2_COURSES,
    ...Y3_COMMON,
    ...getY3Option(option),
    ...Y4_CORE,
    CAPSTONE[option],
    ...techCourses,
  ];
}

export function getAllMECHCourses(
  option: MECHOption,
  bundleIdx: number,
  _completedIds?: ReadonlySet<string>
): PlanCourse[] {
  return getAllMECHCoursesForDisplay(option, bundleIdx);
}

export const MECH_COMP_STUDIES_CATEGORIES = [
  { label: "Engineering Economics & Project Mgmt",  minCredits: 3, examples: ["MECH 226 (3cr) ✓", "COMM 296 (3cr)"] },
  { label: "Humanities & Social Sciences",           minCredits: 6, examples: ["PHIL 220 (3cr)", "ECON 101 (3cr)", "SOCI 100 (3cr)"] },
  { label: "Oral & Written Communication",           minCredits: 6, examples: ["WRDS 150 (3cr) ✓", "MECH 226 (3cr) ✓", "ENGL 301 (3cr)"] },
  { label: "Professionalism, Ethics & Law",          minCredits: 2, examples: ["MECH 400 (3cr) ✓"] },
  { label: "Technology Impact & Sustainability",     minCredits: 3, examples: ["MECH 486 (if naval)", "ENVR 300 (3cr)", "APSC 261 (3cr)"] },
];

export const OPTION_LABELS: Record<MECHOption, string> = {
  general:      "General (No Option)",
  aerospace:    "Aerospace",
  bio:          "Biomechanics & Medical Devices",
  energy:       "Energy & Environment",
  mechatronics: "Mechatronics",
  naval:        "Naval Architecture & Marine Eng.",
};

export { Y1_COURSES as MECH_Y1, Y2_COURSES as MECH_Y2, Y3_COMMON as MECH_Y3_COMMON, Y4_CORE as MECH_Y4_CORE };
