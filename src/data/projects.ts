export type ProjectType = "Personal / Open-source";

export interface Project {
  name: string;
  type: ProjectType;
  description: string;
  tech: string[];
  github: string;
}

// Verified projects only. Do not add client names, results, statistics,
// or live-demo links that have not been confirmed.
export const projects: Project[] = [
  {
    name: "Neural Chat",
    type: "Personal / Open-source",
    description:
      "A real-time desktop chat application built with Python and PySide6 — private messaging, delivery and seen receipts, typing indicators, authentication and message history, all over a custom TCP/JSON protocol.",
    tech: ["Python", "PySide6", "TCP Sockets", "JSON Protocol", "SQLite"],
    github: "https://github.com/lookmohan/NeuralChat",
  },
  {
    name: "AI-Powered Workout Planner Agent",
    type: "Personal / Open-source",
    description:
      "An AI agent built in Langflow that generates personalized 7-day workout plans and nutrition guidance from a user's goals, weight, height and activity level, using conditional routing and tool-calling.",
    tech: ["Langflow", "Mistral LLM", "Python", "ToolCallingAgent"],
    github: "https://github.com/lookmohan/AI-Powered-Workout-Planner-Agent",
  },
  {
    name: "Industrial Human Resource Geo-Visualization",
    type: "Personal / Open-source",
    description:
      "A Streamlit dashboard analyzing industrial workforce distribution across Indian states — state-level filtering, workforce KPIs, rural vs. urban breakdowns and keyword-based NLP industry classification.",
    tech: ["Python", "Streamlit", "Plotly Express", "Pandas", "NLP"],
    github: "https://github.com/lookmohan/industrial-hr-geo-visualization",
  },
];
