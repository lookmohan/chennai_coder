export interface CourseItem {
  id: string;
  title: string;
  description: string;
  priceTag: string;
  linkedinUrl: string;
}

export const coursesData: CourseItem[] = [
  {
    id: "python",
    title: "Python Programming",
    description: "Learn Python programming from core fundamentals to advanced concepts and develop coding skills through practical hands-on exercises.",
    priceTag: "Starting from ₹1500",
    linkedinUrl: "https://in.linkedin.com/in/moganraj"
  },
  {
    id: "sql",
    title: "SQL Programming",
    description: "Master relational database concepts, complex queries, data modeling, and joins required for software development and data analytics.",
    priceTag: "Starting from ₹700",
    linkedinUrl: "https://in.linkedin.com/in/moganraj"
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Learn modern web development concepts including HTML, CSS, JavaScript, and responsive design by building real-world web applications.",
    priceTag: "Starting from ₹1500",
    linkedinUrl: "https://in.linkedin.com/in/moganraj"
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Understand foundational AI & ML algorithms, data preprocessing, model building, and evaluation through practical project development.",
    priceTag: "Starting from ₹1500",
    linkedinUrl: "https://in.linkedin.com/in/moganraj"
  },
  {
    id: "computer-vision",
    title: "OpenCV & Computer Vision",
    description: "Explore computer vision techniques, image manipulation, object detection, and video analysis using OpenCV and Python.",
    priceTag: "Starting from ₹1500",
    linkedinUrl: "https://in.linkedin.com/in/moganraj"
  },
  {
    id: "fastapi",
    title: "FastAPI Development",
    description: "Build high-performance RESTful APIs, async backend services, authentication mechanisms, and database integrations with Python FastAPI.",
    priceTag: "Starting from ₹1500",
    linkedinUrl: "https://in.linkedin.com/in/moganraj"
  },
  {
    id: "llm-dev",
    title: "LLM Application Development",
    description: "Learn how to build cutting-edge AI applications utilizing Large Language Models, prompt design, vector databases, and RAG architectures.",
    priceTag: "Starting from ₹1500",
    linkedinUrl: "https://in.linkedin.com/in/moganraj"
  }
];
