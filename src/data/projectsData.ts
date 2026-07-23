export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
  codeSnippet: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "hr-geo-vis",
    title: "Industrial HR Geo Visualization",
    description: "A data visualization project focused on analyzing HR and industrial workforce distribution using geographic mapping techniques and spatial analytics.",
    technologies: ["Python", "Data Processing", "Data Visualization", "Maps Integration"],
    githubUrl: "https://github.com/lookmohan",
    category: "Data Analytics",
    codeSnippet: `import folium\nimport pandas as pd\n\n# Load Industrial HR Geo Data\ndf = pd.read_csv('industrial_hr_locations.csv')\nm = folium.Map(location=[13.0827, 80.2707], zoom_start=11)\nfor idx, row in df.iterrows():\n    folium.CircleMarker([row['lat'], row['lon']], radius=row['workforce_density']).add_to(m)`
  },
  {
    id: "simple-rag-assistant",
    title: "Simple RAG Assistant",
    description: "An AI-powered document retrieval assistant allowing users to query custom PDF/text files using natural language and context-aware LLM answers.",
    technologies: ["Python", "LangChain", "LLMs", "Embeddings", "Vector Database"],
    githubUrl: "https://github.com/lookmohan",
    category: "Generative AI",
    codeSnippet: `from langchain.chains import RetrievalQA\nfrom langchain.vectorstores import Chroma\nfrom langchain_openai import OpenAIEmbeddings, ChatOpenAI\n\nvectorstore = Chroma(persist_directory="./db", embedding_function=OpenAIEmbeddings())\nqa_chain = RetrievalQA.from_chain_type(llm=ChatOpenAI(model="gpt-4o-mini"), retriever=vectorstore.as_retriever())`
  },
  {
    id: "multi-agent-healthcare-rag",
    title: "Multi-Agent Healthcare RAG System",
    description: "A multi-agent AI system designed to retrieve medical research knowledge, validate source accuracy, and synthesize intelligent diagnostic context.",
    technologies: ["Python", "LangChain", "LLMs", "RAG", "AI Agents"],
    githubUrl: "https://github.com/lookmohan",
    category: "AI Agents",
    codeSnippet: `class HealthcareAgentWorkflow:\n    def __init__(self):\n        self.retriever_agent = Agent(role="Medical Retriever")\n        self.validator_agent = Agent(role="Clinical Validator")\n    \n    def run_query(self, patient_query):\n        docs = self.retriever_agent.fetch(patient_query)\n        return self.validator_agent.verify_and_summarize(docs)`
  },
  {
    id: "bengaluru-house-price",
    title: "Bengaluru House Price Prediction",
    description: "A machine learning predictive model that calculates residential property prices in Bengaluru based on square footage, location density, and amenities.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    githubUrl: "https://github.com/lookmohan",
    category: "Machine Learning",
    codeSnippet: `from sklearn.ensemble import GradientBoostingRegressor\nfrom sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel = GradientBoostingRegressor(n_estimators=200, learning_rate=0.1)\nmodel.fit(X_train, y_train)\nscore = model.score(X_test, y_test)`
  },
  {
    id: "space-invaders-game",
    title: "Space Invaders Python Game",
    description: "An arcade game built in Python using Pygame to demonstrate object-oriented programming fundamentals, collision detection, and game loops.",
    technologies: ["Python", "Pygame", "Object-Oriented Programming"],
    githubUrl: "https://github.com/lookmohan",
    category: "Python Development",
    codeSnippet: `import pygame\nclass Player(pygame.sprite.Sprite):\n    def __init__(self, x, y):\n        super().__init__()\n        self.image = pygame.Surface((50, 30))\n        self.rect = self.image.get_rect(center=(x, y))\n    def update(self):\n        keys = pygame.key.get_pressed()\n        if keys[pygame.K_LEFT]: self.rect.x -= 5`
  }
];
