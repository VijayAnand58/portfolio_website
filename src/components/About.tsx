import myPhoto from "@/assets/my-photo.webp"; // replace with your image path

export default function About() {
  return (
    <section id= "About" className="py-20 px-6 bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 border-t border-gray-300/30 dark:border-gray-800">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

      {/* Content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={myPhoto}
            alt="Vijay Anand"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right: Intro Paragraph */}
        <div className="md:w-2/3 text-center md:text-justify">
          <p className="text-lg leading-relaxed mb-4">
            I’m Vijay Anand, a final year Computer Science student at SRM Institute of Science and Technology with a CGPA of 9.67. 
            I’m passionate about building end to end AI and backend systems that are practical, data driven, and production focused. 
            My experience spans FastAPI based application development, LLM integration using LangChain and Gemini, RAG pipelines, Dockerized machine learning systems, and cloud deployment.
          </p>
          <p className="text-lg leading-relaxed">
            I enjoy designing complete solutions, from data ingestion and preprocessing to model development, orchestration, and deployment. 
            My projects reflect a hands on approach and a strong understanding of how to combine AI with real engineering practices to solve meaningful problems.
          </p>
        </div>
      </div>
    </section>
  );
}
