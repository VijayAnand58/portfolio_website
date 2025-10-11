import { Mail, Phone, Linkedin, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id ="Contact" className="bg-gray-100 dark:bg-neutral-950 text-gray-900 dark:text-gray-100 py-12 px-6 border-t border-gray-300/30 dark:border-gray-800">
      {/* Thank You Message */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2">Thanks for visiting!</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Feel free to reach out or connect with me below 👇
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-8 mb-10">
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <span className="text-base font-medium">+91 6380911763</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <a
            href="mailto:vjy7314@outlook.com"
            className="hover:underline text-base font-medium"
          >
            vjy7314@outlook.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Linkedin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <a
            href="https://www.linkedin.com/in/vijay-anand-99863a288/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-base font-medium"
          >
            Vijay Anand
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Github className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <a
            href="https://github.com/VijayAnand58"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-base font-medium"
          >
            FreeEagle53
          </a>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 px-4">
  <p className="flex flex-wrap justify-center items-center gap-1 leading-snug text-xs sm:text-sm">
    Made with <Heart className="h-4 w-4 text-red-500 inline" /> using{" "}
    <span className="font-medium text-indigo-600 dark:text-indigo-400">
      shadcn/ui
    </span>
    ,{" "}
    <span className="font-medium text-indigo-600 dark:text-indigo-400">
      Aceternity UI ,
    </span>
     React, and TypeScript by{" "}
    <span className="font-semibold text-indigo-600 dark:text-indigo-400">
      FreeEagle53
    </span>{" "}
    ✨
  </p>
</div>

    </footer>
  );
}
