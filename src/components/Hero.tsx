// import MemoizedPrism from './Prism';
import React, { Suspense } from "react";
import TypeComponent from './TypeAnimations'

const LazyPrism = React.lazy(() =>
  import("./Prism").then((module) => ({ default: module.default }))
);
export default function Hero() {
  const loopTexts = [
    "I love code",
    "I love AI",
    "I love web dev",
    "I love ML",
    "I love DevOps",
  ];

  return (
    
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        
      {/* Prism Animated Background */}
      <div className="absolute inset-0 -z-10">
        <Suspense fallback={null}>
          <LazyPrism />
        </Suspense>
      </div>

      {/* Content */}
      <div className="px-4 max-w-3xl">
        {/* Static intro */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white dark:text-gray-100">
          I am Vijay Anand
        </h1>

        {/* Animated loop */}
        <h2 className="text-xl sm:text-2xl text-white dark:text-gray-200">
          <TypeComponent values={loopTexts.flatMap(text => [text, 1500])} repeat_val={Infinity} />
        </h2>
      </div>
    </section>
  );
}
