import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Code2, Workflow, GraduationCap } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "AI Development",
    description:
      "Practical AI-powered applications and intelligent software — from LLM-based agents to data-driven tools, built for real workflows rather than demos.",
    icon: BrainCircuit,
  },
  {
    title: "Software Development",
    description:
      "Reliable, maintainable software built around a business's actual requirements — web apps, backends and internal tools.",
    icon: Code2,
  },
  {
    title: "Automation",
    description:
      "Reducing repetitive manual work by automating the processes that eat up a team's time, using software rather than more headcount.",
    icon: Workflow,
  },
  {
    title: "Technical Training",
    description:
      "Hands-on training in Python, SQL, web development, AI/ML, DSA, OpenCV, FastAPI and LLM development — for students and working developers.",
    icon: GraduationCap,
  },
];
