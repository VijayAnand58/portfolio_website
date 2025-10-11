import { useState } from "react";
import { projects } from "./Projectdata";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Github, Youtube } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="Projects" className="py-20  px-6 bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 border-t border-gray-300/30 dark:border-gray-800">
      <h2 className="text-4xl font-bold text-center mb-15">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white dark:bg-neutral-800 hover:scale-105 transform transition-all duration-300"
      >
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="font-bold text-lg mb-2">{project.title}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">{project.shortDesc}</p>
        </div>
      </div>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl rounded-xl bg-white dark:bg-neutral-800 p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <DialogDescription>
              <div className="mt-4">
                <img src={project.image} alt={project.title} className="w-full rounded-lg mb-4" />
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.detailedDesc}</p>
                <p className="mb-2 font-semibold">Tech Stack:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded bg-indigo-100 dark:bg-indigo-700 text-indigo-800 dark:text-indigo-200 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400"
                    >
                      <Github className="h-5 w-5" /> GitHub
                    </a>
                  )}
                  {project.ytLink && (
                    <a
                      href={project.ytLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-red-500"
                    >
                      <Youtube className="h-5 w-5" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
