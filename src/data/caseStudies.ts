// Client case studies. Every statement here comes from the projects' own
// READMEs on GitHub — no invented results or metrics. Add new entries at the
// top of the array as you deliver more work.

export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  github: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "industrial-workforce-dashboard",
    category: "Client project · Data analytics dashboard",
    title: "Industrial Workforce Geo-Visualization",
    summary:
      "An interactive dashboard that shows how India's industrial workforce is distributed across states and sectors.",
    challenge:
      "Workforce data classified by sex, industry section, division and class was hard to read and out of date, which made it difficult to use for policy and employment planning.",
    solution:
      "Cleaned and merged state-wise datasets, grouped industries into clear sectors with keyword-based text classification, and presented everything in a Streamlit dashboard with filters and charts.",
    features: [
      "State selector with total, male and female worker counts",
      "Ranked list of top industries per state",
      "Workers by industry sector, gender split and rural vs urban charts",
      "Covers 7 states and union territories",
    ],
    stack: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy"],
    github: "https://github.com/lookmohan/industrial-hr-geo-visualization",
  },
  {
    slug: "imdb-2024-analytics",
    category: "Client project · Data pipeline and analytics",
    title: "IMDb 2024 Data Scraping and Visualization",
    summary:
      "An end-to-end pipeline that collects IMDb's 2024 film data, stores it in a database and explores it through an interactive dashboard.",
    challenge:
      "Film data for 2024 was spread across web pages with no structured, analysable form, so there was no easy way to compare genres, ratings, votes and runtimes.",
    solution:
      "Built the full pipeline: automated collection, data cleaning (runtimes, vote counts, duplicates), a portable SQLite database, and a Streamlit dashboard for exploring the results.",
    features: [
      "11 interactive visualizations, from rating leaders to genre heatmaps",
      "Combinable filters for rating, votes, duration and genre",
      "Genre-wise raw and cleaned datasets",
      "Database can be switched to PostgreSQL or MySQL",
    ],
    stack: ["Python", "Selenium", "Pandas", "SQLAlchemy", "SQLite", "Streamlit", "Seaborn"],
    github: "https://github.com/lookmohan/IMDb-2024-Data-Scraping-Visualization",
  },
];
