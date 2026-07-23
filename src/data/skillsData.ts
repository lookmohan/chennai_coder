export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Scala", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Generative AI",
      "Large Language Models (LLMs)",
      "Retrieval Augmented Generation (RAG)",
      "AI Agents"
    ]
  },
  {
    title: "Python Development",
    skills: ["FastAPI", "Flask", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow"]
  },
  {
    title: "AI Frameworks & Tools",
    skills: ["LangChain", "OpenAI API", "Hugging Face", "Vector Databases", "Prompt Engineering"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code"]
  }
];
