// Course catalogue. Source of truth for every price and course detail on the
// site (Training page, home page, top banner). Edit numbers here only.
//
// Prices are in rupees. "liveHours" are 1-hour live sessions in total; the
// site advertises total live hours rather than a number of consecutive days.

export type Level = "Beginner" | "Beginner → Intermediate" | "Intermediate" | "Advanced";

export interface Course {
  id: string;
  name: string;
  // Short label used in bundle chips.
  short: string;
  level: Level;
  // "None", "Python" or "Python recommended".
  needs: string;
  liveHours: number;
  batch: number;
  oneToOne: number;
}

export interface CourseGroup {
  title: string;
  blurb: string;
  courses: Course[];
}

export interface Track {
  name: string;
  bestFor: string;
  // Course ids (see Course.id).
  courses: string[];
  // Batch price for the whole track.
  price: number;
}

export const courseGroups: CourseGroup[] = [
  {
    title: "Foundations",
    blurb: "The core skills every other course builds on.",
    courses: [
      {
        id: "python",
        name: "Python Programming",
        short: "Python",
        level: "Beginner",
        needs: "None",
        liveHours: 20,
        batch: 1499,
        oneToOne: 2499,
      },
      {
        id: "sql",
        name: "SQL & Databases",
        short: "SQL",
        level: "Beginner",
        needs: "None",
        liveHours: 10,
        batch: 699,
        oneToOne: 999,
      },
    ],
  },
  {
    title: "Problem Solving",
    blurb: "Sharpen your thinking for interviews and real projects.",
    courses: [
      {
        id: "dsa",
        name: "DSA with Python",
        short: "DSA",
        level: "Intermediate",
        needs: "Python",
        liveHours: 25,
        batch: 1499,
        oneToOne: 2499,
      },
    ],
  },
  {
    title: "Web & Backend",
    blurb: "Build websites and the APIs behind them.",
    courses: [
      {
        id: "web",
        name: "Web Development",
        short: "Web Development",
        level: "Beginner → Intermediate",
        needs: "Python recommended",
        liveHours: 35,
        batch: 2999,
        oneToOne: 4499,
      },
      {
        id: "fastapi",
        name: "FastAPI",
        short: "FastAPI",
        level: "Intermediate",
        needs: "Python",
        liveHours: 12,
        batch: 999,
        oneToOne: 1499,
      },
    ],
  },
  {
    title: "AI & Data",
    blurb: "Machine learning with Python.",
    courses: [
      {
        id: "ml",
        name: "Machine Learning with Python",
        short: "Machine Learning",
        level: "Intermediate",
        needs: "Python",
        liveHours: 30,
        batch: 2499,
        oneToOne: 3999,
      },
    ],
  },
  {
    title: "Specializations",
    blurb: "Focused topics for students who already know Python.",
    courses: [
      {
        id: "opencv",
        name: "Computer Vision with OpenCV",
        short: "OpenCV",
        level: "Intermediate",
        needs: "Python",
        liveHours: 20,
        batch: 1499,
        oneToOne: 2499,
      },
      {
        id: "llm",
        name: "LLM Application Development",
        short: "LLM Application Development",
        level: "Advanced",
        needs: "Python",
        liveHours: 20,
        batch: 2499,
        oneToOne: 3999,
      },
    ],
  },
];

export const tracks: Track[] = [
  {
    name: "Interview Ready",
    bestFor: "Coding interviews",
    courses: ["python", "dsa", "sql"],
    price: 3199,
  },
  {
    name: "Machine Learning",
    bestFor: "ML beginners",
    courses: ["python", "sql", "ml"],
    price: 3999,
  },
  {
    name: "AI Application Developer",
    bestFor: "Building AI apps",
    courses: ["python", "fastapi", "llm"],
    price: 4499,
  },
  {
    name: "Full-Stack Python Developer",
    bestFor: "Web development",
    courses: ["python", "sql", "fastapi", "web"],
    price: 4999,
  },
  {
    name: "Computer Vision",
    bestFor: "Vision applications",
    courses: ["python", "opencv", "ml"],
    price: 4999,
  },
];

export const courses: Course[] = courseGroups.flatMap((group) => group.courses);

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

// Lowest batch price across all courses, used in the top banner and home page.
export const startingPrice = formatPrice(Math.min(...courses.map((c) => c.batch)));

export function courseLabel(id: string): string {
  return courses.find((c) => c.id === id)?.short ?? id;
}

// How much cheaper a track is than buying its courses separately (batch prices).
export function trackSavings(track: Track): number {
  const separate = track.courses.reduce((sum, id) => {
    const course = courses.find((c) => c.id === id);
    return sum + (course ? course.batch : 0);
  }, 0);
  return Math.max(0, separate - track.price);
}
