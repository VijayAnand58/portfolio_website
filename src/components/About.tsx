import { motion } from "framer-motion";
import myPhoto from "@/assets/my-photo.webp";

export default function About() {
  return (
    <section
      id="About"
      className="py-20 px-6 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 border-t border-gray-300/30 dark:border-gray-800"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      {/* Content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <motion.div
          className="flex-shrink-0 w-full md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={myPhoto}
            alt="Vijay Anand"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Right: Intro Paragraph */}
        <motion.div
          className="md:w-2/3 text-center md:text-justify"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-lg leading-relaxed mb-4">
            I’m Vijay Anand, a final year Computer Science student at SRM Institute of Science and
            Technology with a CGPA of 9.67. I’m passionate about building end to end AI and backend
            systems that are practical, data driven, and production focused. My experience spans
            FastAPI based application development, LLM integration using LangChain and Gemini, RAG
            pipelines, Dockerized machine learning systems, and cloud deployment.
          </p>
          <p className="text-lg leading-relaxed">
            I enjoy designing complete solutions, from data ingestion and preprocessing to model
            development, orchestration, and deployment. My projects reflect a hands on approach and
            a strong understanding of how to combine AI with real engineering practices to solve
            meaningful problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
