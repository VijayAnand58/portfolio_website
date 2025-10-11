import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { certificates } from "./Projectdata";



export default function CertificatesSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 border-t border-gray-300/30 dark:border-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((cert, idx) => (
          <Card
            key={idx}
            className="rounded-xl shadow-md hover:shadow-xl transition-shadow flex flex-col"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-14 h-14 rounded-md object-contain bg-white p-1 shadow-sm"
              />
              <div>
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.provider}</p>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col justify-between">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                View Certificate
                <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
