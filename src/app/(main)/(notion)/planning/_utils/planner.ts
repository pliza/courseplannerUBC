import {
  Y1_STT_COURSES, Y1_TRANSFER_COURSES,
  Y2_BASE, CPEN_CHOICES, MATH2_CHOICES,
  Y3_BASE, Y4_BASE, TECH_ELECTIVES, PREREQUISITES,
  type PlanCourse, type SpecId,
} from "../_data/bme-courses";

// ─── Types ────────────────────────────────────────────────────────────────────

export type TermSlot = {
  label: string;        // "Y2·T1"
  displayLabel: string; // "Term 1"
  academicYear: number;
  term: 1 | 2;
  courses: PlanCourse[];
  totalCredits: number;
  capacity: number;
  overCapacity: boolean;
};

export type PrereqError = {
  courseCode: string;
  courseName: string;
  missing: { code: string; name: string }[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function sumCredits(cs: PlanCourse[]) {
  return cs.reduce((s, c) => s + c.credits, 0);
}

export function makeSlotKey(y: number, t: 1 | 2) {
  return `Y${y}·T${t}`;
}

function effectiveMinYear(minYear: number, targetYears: number): number {
  if (targetYears >= 4) return minYear;
  const ratio = (minYear - 1) / 3;
  return Math.max(1, Math.floor(ratio * (targetYears - 1)) + 1);
}

// ─── Course Pool ──────────────────────────────────────────────────────────────

/**
 * Returns the full ordered course list for the plan.
 * Resolves CPEN / MATH choice automatically from completedIds
 * (if neither is completed, defaults to 221 / 253).
 */
export function getAllCourses(
  track: "stt" | "transfer",
  spec: SpecId,
  completedIds: ReadonlySet<string> = new Set()
): PlanCourse[] {
  const y1 = track === "stt" ? Y1_STT_COURSES : Y1_TRANSFER_COURSES;

  // Auto-resolve CPEN choice
  const cpen = completedIds.has("cpen223")
    ? CPEN_CHOICES[1]   // cpen223
    : CPEN_CHOICES[0];  // cpen221 (default)

  // Auto-resolve MATH choice
  const math2 = completedIds.has("math226")
    ? MATH2_CHOICES[1]  // math226
    : MATH2_CHOICES[0]; // math253 (default)

  return [
    ...y1,
    ...Y2_BASE, cpen, math2,
    ...Y3_BASE,
    ...TECH_ELECTIVES[spec],
    ...Y4_BASE,
  ];
}

/**
 * Returns all courses for the "taken courses" display panel, grouped by year.
 * Includes BOTH CPEN options and BOTH MATH options so the user can indicate which they took.
 */
export function getAllCoursesForDisplay(
  track: "stt" | "transfer",
  spec: SpecId
): PlanCourse[] {
  const y1 = track === "stt" ? Y1_STT_COURSES : Y1_TRANSFER_COURSES;
  return [
    ...y1,
    ...Y2_BASE, ...CPEN_CHOICES, ...MATH2_CHOICES,
    ...Y3_BASE,
    ...TECH_ELECTIVES[spec],
    ...Y4_BASE,
  ];
}

// ─── Prerequisite Validation ─────────────────────────────────────────────────

/**
 * Validates that every course in completedIds has its prerequisites also satisfied.
 * Returns an array of errors (empty = all good).
 */
export function validatePrerequisites(
  completedIds: ReadonlySet<string>,
  allDisplayCourses: PlanCourse[],
  /** Custom prerequisite map — defaults to the BME PREREQUISITES object */
  prereqMap?: Record<string, string[]>
): PrereqError[] {
  const map = prereqMap ?? PREREQUISITES;
  const codeMap: Record<string, { code: string; name: string }> = {};
  allDisplayCourses.forEach((c) => { codeMap[c.id] = { code: c.code, name: c.name }; });

  const errors: PrereqError[] = [];

  completedIds.forEach((id) => {
    const prereqs = map[id] ?? [];
    const missing = prereqs.filter((p) => !completedIds.has(p));
    if (missing.length > 0) {
      const course = codeMap[id];
      errors.push({
        courseCode: course?.code ?? id,
        courseName: course?.name ?? id,
        missing: missing.map((p) => codeMap[p] ?? { code: p, name: p }),
      });
    }
  });

  return errors;
}

// ─── Plan Builder ─────────────────────────────────────────────────────────────

export type CoursePin = {
  courseId: string;
  year: number;
  term: 1 | 2;
};

export type TermExclusion = {
  /** Course that must NOT go into this term */
  courseId: string;
  term: 1 | 2;
};

export interface BuildPlanParams {
  allCourses: PlanCourse[];
  completedIds: ReadonlySet<string>;
  /** Academic year to start from (e.g. 2 if in Year 2) */
  startYear: number;
  /** 1 or 2 */
  startTerm: 1 | 2;
  defaultCoursesPerTerm: number;
  /** Per-slot capacity overrides keyed by makeSlotKey() */
  termCapacities: Record<string, number>;
  /** Total degree years (e.g. 4 means plan ends at Year 4) */
  totalDegreeYears: number;
  /** Courses manually pinned to specific year+term slots */
  pinnedCourses?: CoursePin[];
  /** Courses ejected from a specific term — will be re-scheduled elsewhere */
  termExclusions?: TermExclusion[];
}

export function buildDegreePlan({
  allCourses,
  completedIds,
  startYear,
  startTerm,
  defaultCoursesPerTerm,
  termCapacities,
  totalDegreeYears,
  pinnedCourses = [],
  termExclusions = [],
}: BuildPlanParams): TermSlot[] {
  const endYear = totalDegreeYears;
  const targetYears = endYear - startYear + 1;

  const slots: TermSlot[] = [];
  for (let y = startYear; y <= endYear; y++) {
    for (let t = 1; t <= 2; t++) {
      if (y === startYear && t < startTerm) continue;
      const termNum = t as 1 | 2;
      const key = makeSlotKey(y, termNum);
      slots.push({
        label: key,
        displayLabel: `Term ${termNum}`,
        academicYear: y,
        term: termNum,
        courses: [],
        totalCredits: 0,
        capacity: termCapacities[key] ?? defaultCoursesPerTerm,
        overCapacity: false,
      });
    }
  }

  if (slots.length === 0) return [];

  // Place pinned courses first into their designated slots
  const pinnedIds = new Set<string>();
  for (const pin of pinnedCourses) {
    const course = allCourses.find((c) => c.id === pin.courseId);
    if (!course || completedIds.has(course.id)) continue;
    const key = makeSlotKey(pin.year, pin.term);
    const slot = slots.find((s) => s.label === key);
    if (slot) {
      slot.courses.push(course);
      slot.totalCredits += course.credits;
      pinnedIds.add(course.id);
    }
  }

  // Remaining = not completed, not pinned
  const remaining = allCourses.filter((c) => !completedIds.has(c.id) && !pinnedIds.has(c.id));

  // Sort: term-locked first, then flexible; within each by effectiveMinYear
  const sorted = [...remaining].sort((a, b) => {
    const aLocked = a.termPref !== 0 ? 0 : 1;
    const bLocked = b.termPref !== 0 ? 0 : 1;
    if (aLocked !== bLocked) return aLocked - bLocked;
    return effectiveMinYear(a.minYear, targetYears) - effectiveMinYear(b.minYear, targetYears);
  });

  for (const course of sorted) {
    const eff = effectiveMinYear(course.minYear, targetYears);
    // Map program year to actual academic year
    const absMinYear = startYear + (eff - 1);

    for (const slot of slots) {
      if (slot.academicYear < absMinYear) continue;
      if (course.termPref !== 0 && course.termPref !== slot.term) continue;
      if (slot.courses.length >= slot.capacity) continue;
      // Skip slots that this course has been explicitly ejected from
      if (termExclusions.some((ex) => ex.courseId === course.id && ex.term === slot.term)) continue;
      slot.courses.push(course);
      slot.totalCredits += course.credits;
      break;
    }
  }

  slots.forEach((s) => { s.overCapacity = s.courses.length > s.capacity; });
  return slots;
}

// ─── Year Variants ────────────────────────────────────────────────────────────

export type YearVariant = {
  label: string;
  slots: TermSlot[];
};

/**
 * Given the two (or one) TermSlots for a single academic year, generates
 * 2-4 alternative arrangements by shifting flexible courses between T1 / T2
 * and optionally offering a Summer session.
 */
export function computeYearVariants(
  yearSlots: TermSlot[],
  defaultCap: number
): YearVariant[] {
  const t1 = yearSlots.find((s) => s.term === 1);
  const t2 = yearSlots.find((s) => s.term === 2);

  // Need both terms to produce alternatives
  if (!t1 || !t2) return [{ label: "Standard", slots: yearSlots }];

  const allCourses = [...t1.courses, ...t2.courses];
  const t1Fixed = allCourses.filter((c) => c.termPref === 1);
  const t2Fixed = allCourses.filter((c) => c.termPref === 2);
  const flexible = allCourses.filter((c) => c.termPref === 0);

  const makeSlots = (
    t1Courses: PlanCourse[],
    t2Courses: PlanCourse[],
    summerCourses?: PlanCourse[]
  ): TermSlot[] => {
    const result: TermSlot[] = [
      { ...t1, courses: t1Courses, totalCredits: sumCredits(t1Courses), overCapacity: t1Courses.length > t1.capacity },
      { ...t2, courses: t2Courses, totalCredits: sumCredits(t2Courses), overCapacity: t2Courses.length > t2.capacity },
    ];
    if (summerCourses && summerCourses.length > 0) {
      result.push({
        label: `Y${t1.academicYear}·Summer`,
        displayLabel: "Summer (Optional)",
        academicYear: t1.academicYear,
        term: 1 as const,
        courses: summerCourses,
        totalCredits: sumCredits(summerCourses),
        capacity: defaultCap,
        overCapacity: false,
      });
    }
    return result;
  };

  const t1Space = Math.max(0, (t1.capacity) - t1Fixed.length);

  // Builds a human-readable label describing where flexible courses land
  const makeLabel = (
    flexInT1: PlanCourse[],
    flexInT2: PlanCourse[],
    summerCourses?: PlanCourse[]
  ): string => {
    if (summerCourses && summerCourses.length > 0) {
      const names = summerCourses.map((c) => c.code).join(" + ");
      return `☀ ${names} in Summer`;
    }
    const totalFlex = flexInT1.length + flexInT2.length;
    if (totalFlex === 0) return "Standard";
    // All flex in T1
    if (flexInT2.length === 0) {
      return totalFlex === 1
        ? `${flexInT1[0].code} → T1`
        : `${flexInT1.map((c) => c.code).join(" + ")} → T1`;
    }
    // All flex in T2
    if (flexInT1.length === 0) {
      return totalFlex === 1
        ? `${flexInT2[0].code} → T2 (lighter T1)`
        : `${flexInT2.map((c) => c.code).join(" + ")} → T2 (lighter T1)`;
    }
    // Mixed: describe the T2 side (shorter to read)
    const t2Names = flexInT2.map((c) => c.code).join(" + ");
    return `${t2Names} → T2`;
  };

  const variants: YearVariant[] = [];

  // V1 — fill T1 first with flexible
  const v1FlexT1 = flexible.slice(0, t1Space);
  const v1FlexT2 = flexible.slice(t1Space);
  variants.push({
    label: makeLabel(v1FlexT1, v1FlexT2),
    slots: makeSlots([...t1Fixed, ...v1FlexT1], [...t2Fixed, ...v1FlexT2]),
  });

  // V2 — keep all flexible in T2 (lighter T1), if V1 put any in T1
  if (flexible.length > 0 && v1FlexT1.length > 0) {
    variants.push({
      label: makeLabel([], flexible),
      slots: makeSlots([...t1Fixed], [...t2Fixed, ...flexible]),
    });
  }

  // V3 — Balanced: split flexible evenly, only if it produces a new arrangement
  if (flexible.length >= 2) {
    const half = Math.ceil(flexible.length / 2);
    const v3FlexT1 = flexible.slice(0, half);
    const v3FlexT2 = flexible.slice(half);
    const v3T1 = [...t1Fixed, ...v3FlexT1];
    const v3T2 = [...t2Fixed, ...v3FlexT2];
    const v3Key = JSON.stringify([v3T1.map((c) => c.id), v3T2.map((c) => c.id)]);
    const alreadyHave = variants.some(
      (v) => JSON.stringify([v.slots[0].courses.map((c) => c.id), v.slots[1].courses.map((c) => c.id)]) === v3Key
    );
    if (!alreadyHave) {
      variants.push({ label: makeLabel(v3FlexT1, v3FlexT2), slots: makeSlots(v3T1, v3T2) });
    }
  }

  // V4 — Summer: move summer-eligible flexible courses to a summer term
  const summerEligible = flexible.filter((c) => c.summerEligible);
  if (summerEligible.length > 0) {
    const summerPick = summerEligible.slice(0, 2);
    const remainFlex = flexible.filter((c) => !summerPick.some((s) => s.id === c.id));
    const v4T1Space = Math.max(0, t1.capacity - t1Fixed.length);
    const v4T1Flex = remainFlex.slice(0, v4T1Space);
    const v4T2Flex = remainFlex.slice(v4T1Space);
    const v4T1 = [...t1Fixed, ...v4T1Flex];
    const v4T2 = [...t2Fixed, ...v4T2Flex];
    variants.push({ label: makeLabel(v4T1Flex, v4T2Flex, summerPick), slots: makeSlots(v4T1, v4T2, summerPick) });
  }

  return variants;
}

// ─── Feasibility ──────────────────────────────────────────────────────────────

export function checkFeasibility(
  allCourses: PlanCourse[],
  completedIds: ReadonlySet<string>,
  defaultCoursesPerTerm: number,
  startYear: number,
  startTerm: 1 | 2,
  totalDegreeYears: number
): { ok: boolean; message: string } {
  const completedTerms = (startYear - 1) * 2 + (startTerm - 1);
  const totalTerms = totalDegreeYears * 2;
  const remainingTerms = Math.max(0, totalTerms - completedTerms);
  const remaining = allCourses.filter((c) => !completedIds.has(c.id)).length;
  const capacity = remainingTerms * defaultCoursesPerTerm;

  if (capacity < remaining) {
    return {
      ok: false,
      message: `${remaining} remaining courses need to fit into ${remainingTerms} terms × ${defaultCoursesPerTerm} courses = ${capacity} slots. Try increasing your courses/term or adding more years.`,
    };
  }
  return { ok: true, message: "" };
}
