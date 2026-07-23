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
    description: "Build intelligent automation systems, AI assistants, data-driven applications, and custom machine learning solutions to improve business workflows.",
    iconName: "BrainCircuit"
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Building secure APIs, backend systems, database-driven applications, and scalable software solutions for startups and businesses.",
    iconName: "Server"
  },
  {
    id: "computer-vision",
    title: "Computer Vision Development",
    description: "Building image and video-based AI applications utilizing state-of-the-art computer vision models, automated video analytics, and object recognition.",
    iconName: "Eye"
  },
  {
    id: "gen-ai",
    title: "Generative AI Applications",
    description: "Developing modern AI-powered applications leveraging Large Language Models, prompt engineering, custom vector embeddings, and autonomous AI agents.",
    iconName: "Sparkles"
  },
  {
    id: "training",
    title: "Online Programming Training",
    description: "Structured online training designed to help beginners and aspiring developers build strong programming foundations with practical hands-on guidance.",
    iconName: "GraduationCap"
  }
];
