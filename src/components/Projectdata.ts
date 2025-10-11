export interface Project {
  title: string;
  shortDesc: string;
  detailedDesc: string;
  image: string;
  techStack: string[];
  githubLink?: string;
  ytLink?: string;
}
import Anomalydetection from "@/assets/Projects/Anomaly_Detection.webp";
import Cold_ReachAI from "@/assets/Projects/ColdReach_AI.webp";
import FileQuery from "@/assets/Projects/File_query.webp";
import FloatChat from "@/assets/Projects/Float_chat.webp";
import GPAlytics from "@/assets/Projects/GPAlytics.webp";
import EnergyAnalysis from "@/assets/Projects/Energy_Analysis.webp";
import Telebot from "@/assets/Projects/ScheduleAI.webp";

export const projects: Project[] = [
  {
    title: "Anomaly Detection in Dockerized Servers",
    shortDesc: "Predictive maintenance system using ML models to detect anomalies in Dockerized environments with real-time alerts.",
    detailedDesc:
      "Developed an end-to-end predictive maintenance system for Dockerized servers integrating Prometheus and Grafana for real-time monitoring. Used Random Forest and LSTM models for anomaly detection with chaos-engineered data generated via Pumba. Implemented Discord alerts and automated container recovery to ensure system reliability. Deployed and tested on Linux VM for production-like behavior.",
    image: Anomalydetection,
    techStack: [
      "Python",
      "Docker",
      "Prometheus",
      "Grafana",
      "TensorFlow",
      "Scikit-learn",
      "Discord API"
    ],
    githubLink: "https://github.com/VijayAnand58/Hydra",
    ytLink: ""
  },
  {
    title: "PDF Query",
    shortDesc: "Azure-deployed multi-modal RAG system for querying text and images from user-uploaded PDFs.",
    detailedDesc:
      "Built a secure FastAPI backend allowing users to upload and query PDFs. Extracted text and images using PyMuPDF, generated embeddings with HuggingFace and CLIP models, and stored them in ChromaDB for vector search. Used Gemini LLMs via LangChain for contextual answer generation. Deployed as a containerized service on Azure for scalability and multi-user support.",
    image: FileQuery,
    techStack: [
      "FastAPI",
      "LangChain",
      "HuggingFace",
      "ChromaDB",
      "CLIP",
      "Gemini LLM",
      "MongoDB",
      "Azure"
    ],
    githubLink: "https://github.com/VijayAnand58/PDF-query",
    ytLink: ""
  },
  {
    title: "Float Chat",
    shortDesc: "Conversational AI for oceanographic Argo float data using RAG pipeline and Streamlit interface.",
    detailedDesc:
      "Developed a full-stack AI system that makes complex scientific ocean data conversationally accessible. Implemented data ingestion from NOAA’s Argo float datasets, processed NetCDF files using xarray and pandas, and built a semantic RAG pipeline with ChromaDB and embeddings. Integrated a Streamlit front-end enabling natural language queries about temperature and salinity across global regions.",
    image: FloatChat,
    techStack: [
      "Python",
      "Streamlit",
      "xarray",
      "pandas",
      "ChromaDB",
      "LangChain",
      "Gemini LLM"
    ],
    githubLink: "https://github.com/VijayAnand58/SIRA",
    ytLink: ""
  },
  {
    title: "Cold Mailer",
    shortDesc: "Discord bot automating personalized cold emails via AI-driven workflows and Gmail API integration.",
    detailedDesc:
      "Engineered a LangGraph-based workflow that combines resume parsing, company web scraping (Playwright + Serper API), and LLM summarization to generate personalized cold emails. Integrated a Discord bot interface for command-based execution and used Gmail API to auto-save drafts. Demonstrates workflow automation and multi-service orchestration.",
    image: Cold_ReachAI,
    techStack: [
      "Python",
      "LangGraph",
      "Gemini LLM",
      "Discord API",
      "Playwright",
      "Serper API",
      "Gmail API"
    ],
    githubLink: "https://github.com/VijayAnand58/coldReach_AI",
    ytLink: ""
  },
  {
    title: "GPAlytics",
    shortDesc: "FastAPI backend for tracking and predicting student performance using regression and OCR.",
    detailedDesc:
      "Created a FastAPI + MongoDB backend for storing and analyzing academic performance. Implemented linear regression to predict GPA trends and integrated Google Gemini API for OCR-based result card parsing. Included secure authentication, motivational message generation, and ranking features for academic insights.",
    image: GPAlytics,
    techStack: [
      "FastAPI",
      "MongoDB",
      "Python",
      "Gemini API",
      "Linear Regression",
      "bcrypt"
    ],
    githubLink: "https://github.com/VijayAnand58/Gpalytics_backend",
    ytLink: ""
  },
  {
    title: "Schedule AI (Telegram Bot)",
    shortDesc: "AI-assisted Telegram bot integrating Google Calendar and Tasks for automated availability management.",
    detailedDesc:
      "Developed a personal assistant Telegram bot using Telethon and Gemini API to automate user availability management. Integrated Google Calendar for real-time event tracking and Google Tasks for task creation based on message intent detection. Implemented whitelisting and concurrency handling for efficient async operations.",
    image: Telebot,
    techStack: [
      "Python",
      "Telethon",
      "Google Calendar API",
      "Google Tasks API",
      "Gemini LLM",
      "AsyncIO"
    ],
    githubLink: "https://github.com/VijayAnand58/calender_telegram_tasks_bot",
    ytLink: ""
  },
  {
    title: "Energy Analysis (Time Series Forecasting)",
    shortDesc: "Time series analysis and forecasting of household energy consumption using Prophet and XGBoost.",
    detailedDesc:
      "Performed data cleaning, feature engineering, and exploratory data analysis on household power usage datasets combined with weather data. Built forecasting models using Facebook Prophet and XGBoost, evaluated performance using MAE/RMSE, and visualized energy trends across time-based features. Demonstrates end-to-end data science workflow.",
    image: EnergyAnalysis,
    techStack: [
      "Python",
      "Pandas",
      "Prophet",
      "XGBoost",
      "Matplotlib",
      "Seaborn",
      "NumPy"
    ],
    githubLink: "https://colab.research.google.com/drive/1pP5KSbpH7Isdhg_NpFzmp5DZMgjXAHhL?usp=sharing",
    ytLink: ""
  }
];
export interface Certificate {
  title: string;
  provider: string;
  description: string;
  image: string;
  link: string;
}
import nptel from "@/assets/logos/nptel.webp";
import scaler from "@/assets/logos/scaler.webp";

export const certificates: Certificate[] = [
  {
    title: "Python for Data Science",
    provider: "NPTEL",
    description:
      "Completed an NPTEL certification covering Python programming, data analysis, and visualization techniques used in data science applications.",
    image: nptel,
    link: "https://drive.google.com/file/d/1l74MQH-nM_7kojGTfjMUKyIP0UQPGbyz/view",
  },
  {
    title: "Database Management Systems (DBMS)",
    provider: "NPTEL",
    description:
      "Earned certification for understanding database design, SQL, normalization, and transaction management principles.",
    image: nptel,
    link: "https://drive.google.com/file/d/1QwgahJsnrR7Wq9y-316jGimvjsp73El8/view",
  },
  {
    title: "Node.js",
    provider: "Scaler Topics",
    description:
      "Completed certification in Node.js covering server-side JavaScript, Express.js, APIs, and backend application development.",
    image: scaler,
    link: "https://drive.google.com/file/d/10ZtEjXumtvHAPiZR3s7GqKnlbE3b7_sc/view",
  },
];
