import { Timeline } from "@/components/ui/timeline";
import { Briefcase } from "lucide-react";

export function ExperienceTimeline() {
  const data = [
    {
      title: "Ticking Minds",
      content: (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            June 2024 - June 2024 | Chennai
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            <li>
              Collaborated with QA engineers to perform manual testing of web applications and
              gained insights into test case design and bug reporting.
            </li>
            <li>
              Learned to approach development with quality and testability in mind throughout the
              software life cycle.
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1MriiksK4WWHOg3Nven6nwTVNpbRlEwjj/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
          >
            View Certificate
          </a>
        </div>
      ),
      icon: <Briefcase className="h-5 w-5 text-white" />,
      iconBg: "bg-indigo-500",
    },
    {
      title: "Linksus",
      content: (
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            July 2025 - September 2025 | Chennai
          </p>
          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            <li>
              Worked on creating an AI/ML-based application and building a scalable back-end for the
              AI/ML models.
            </li>
            <li>
              Worked on text and code embeddings and vector storage.
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1nHT5ubw-Tyq0peT4nnYh9qfAAIGDCc_t/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
          >
            View Certificate
          </a>
        </div>
      ),
      icon: <Briefcase className="h-5 w-5 text-white" />,
      iconBg: "bg-indigo-500",
    },
  ];

  return (
    <section className="py-6 px-6 bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 border-t border-gray-300/30 dark:border-gray-800">
      <h2 className="text-4xl font-bold text-center">Internship Experience</h2>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
}
