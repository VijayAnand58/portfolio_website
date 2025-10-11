import { Timeline } from "@/components/ui/timeline";
import { School } from "lucide-react";

export function EducationTimeline() {
  const data = [
    {
      title: "Secondary Education (CBSE)",
      content: (
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            The Hindu Senior Secondary School, Chennai
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            10th Grade, 2019 - 2020
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Percentage: 93.33%
          </p>
        </div>
      ),
      icon: <School className="h-5 w-5 text-white" />,
      iconBg: "bg-indigo-500",
    },
    {
      title: "Higher Secondary Education (CBSE)",
      content: (
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            The Chettinad Vidyashram, Chennai
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            12th Grade, 2021 - 2022
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Percentage: 81%
          </p>
        </div>
      ),
      icon: <School className="h-5 w-5 text-white" />,
      iconBg: "bg-indigo-500",
    },
    {
      title: "Undergraduate Education (B.Tech)",
      content: (
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            SRM Institute of Science and Technology, Chennai
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            currently in 4th Year (2022 - Present)
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            CGPA: 9.67
          </p>
        </div>
      ),
      icon: <School className="h-5 w-5 text-white" />,
      iconBg: "bg-indigo-500",
    },
  ];

  return (
    <section id= "Edu"className="py-6 px-6 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 border-t border-gray-300/30 dark:border-gray-800">
      <h2 className="text-4xl font-bold text-center ">Education</h2>
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
}
