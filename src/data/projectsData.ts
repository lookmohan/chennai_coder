export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
  codeSnippet?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "industrial-hr-geo-visualization",
    title: "Industrial HR Geo-Visualization",
    description:
      "An interactive data analytics dashboard for exploring industrial workforce distribution across Indian states. The project combines data processing, geographic visualization, NLP-based analysis, and interactive charts to make workforce data easier to understand.",
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "NLP",
      "Data Visualization"
    ],
    githubUrl:
      "https://github.com/lookmohan/industrial-hr-geo-visualization",
    category: "Data Analytics"
  },

  {
    id: "multi-agent-healthcare-rag",
    title: "Multi-Agent Healthcare RAG System",
    description:
      "A confidence-aware multi-agent Retrieval-Augmented Generation system for healthcare-related queries. The project uses specialized AI agents to retrieve relevant knowledge, process information, and collaborate through a LangGraph-based workflow.",
    technologies: [
      "Python",
      "LangGraph",
      "LangChain",
      "RAG",
      "FAISS",
      "LLMs",
      "AI Agents"
    ],
    githubUrl:
      "https://github.com/lookmohan/multi-agent-healthcare-rag-langgraph",
    category: "Generative AI"
  },

  {
    id: "neuralchat",
    title: "NeuralChat",
    description:
      "A modern desktop chat application developed with Python and PySide6. NeuralChat provides real-time messaging, private conversations, and online user management using socket-based communication and SQLite for local data management.",
    technologies: [
      "Python",
      "PySide6",
      "SQLite",
      "Socket Programming",
      "GUI Development"
    ],
    githubUrl: "https://github.com/lookmohan/NeuralChat",
    category: "Python Development"
  },

  {
    id: "imdb-2024-data-scraping",
    title: "IMDb 2024 Data Scraping & Visualization",
    description:
      "An end-to-end data analytics project that collects IMDb 2024 movie information, cleans and processes the dataset, stores structured data in SQLite, and presents interactive visualizations through a Streamlit dashboard.",
    technologies: [
      "Python",
      "Selenium",
      "Pandas",
      "SQLite",
      "SQLAlchemy",
      "Streamlit",
      "Plotly"
    ],
    githubUrl:
      "https://github.com/lookmohan/IMDb-2024-Data-Scraping-Visualization",
    category: "Data Analytics"
  },

  {
    id: "ai-workout-planner-agent",
    title: "AI-Powered Workout Planner Agent",
    description:
      "An AI-powered workout planning application built with Langflow and a Mistral-based language model. The system generates personalized workout plans and nutrition recommendations based on a user's fitness goals and requirements.",
    technologies: [
      "Python",
      "Langflow",
      "Mistral LLM",
      "AI Agents",
      "Prompt Engineering"
    ],
    githubUrl:
      "https://github.com/lookmohan/AI-Powered-Workout-Planner-Agent",
    category: "AI Agents"
  },

  {
    id: "employee-management-system",
    title: "Employee Management System",
    description:
      "A desktop employee management application built with Python, Tkinter, and SQLite. It provides a simple interface for adding, updating, deleting, and viewing employee records while demonstrating GUI development and database integration.",
    technologies: [
      "Python",
      "Tkinter",
      "SQLite",
      "CRUD Operations",
      "Database Management"
    ],
    githubUrl:
      "https://github.com/lookmohan/Employee-Management-System",
    category: "Python Development"
  }
];
