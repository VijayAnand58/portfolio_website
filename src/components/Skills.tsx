import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillLogos } from "./Projectdata";
import FloatingLogos from "./Imageslogo";
const skillsData = [
  {
    title: "Core Languages & Markup",
    skills: ["Python", "SQL", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      "LangChain",
      "TensorFlow",
      "FastAPI",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Playwright",
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "FAISS",
      "ChromaDB",
    ],
  },
  {
    title:"Devops",
    skills:[
    "Prometheus (Python API)",
    "Grafana",
    "Docker",]

  },
  {
    title: "Tools & APIs",
    skills: ["Git", "Postman", "Discord API", "Telegram API", "Google APIs (Calendar, Tasks, Gmail)"],
  },
  {
    title: "Cloud & Deployment",
    skills: ["Azure", "Render"],
  },
  {
    title: "Concepts & Skills",
    skills: ["Machine Learning (Random Forest, LSTM, XGBoost)", "RAG", "RESTful API Design"],
  },
];

export default function SkillsSection() {
  return (
    <section id="Skills" className="py-20 px-6 bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 border-t border-gray-300/30 dark:border-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skillsData.map((skillCategory, idx) => (
          <Card key={idx} className="rounded-xl shadow-lg hover:shadow-xl  hover:scale-105 transform transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-bold">{skillCategory.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {skillCategory.skills.map((skill, sidx) => (
                  <li key={sidx}>{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12">
        <FloatingLogos logos={skillLogos} />
      </div>
    </section>
  );
}