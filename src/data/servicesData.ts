export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions & Automation",
    description: "AI-powered applications, RAG systems, LLM integrations, computer vision projects, and intelligent automation to streamline your business workflows.",
    iconName: "BrainCircuit"
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom websites, web applications, backend APIs, and scalable software solutions built with modern technologies for startups and businesses.",
    iconName: "Code"
  },
  {
    id: "programming-training",
    title: "Programming Training",
    description: "Hands-on online courses in Python, SQL, Web Development, AI/ML, FastAPI, and LLM development designed for beginners and aspiring developers.",
    iconName: "GraduationCap"
  }
];
