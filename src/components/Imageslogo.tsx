import { motion } from "framer-motion";

export default function FloatingLogos({ logos }: { logos: { src: string; alt?: string }[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-10">
      {logos.map((logo, i) => (
        <motion.img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className="h-12 w-auto object-contain"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
