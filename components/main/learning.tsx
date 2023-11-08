"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Goal {
  title: string;
  progress: number;
}

const goals: Goal[] = [
  { title: "C#/.NET Kurs (freeCodeCamp)", progress: 80 },
  { title: "Docker (freeCodeCamp)", progress: 10 },
  { title: "Clean Code von Robert C. Martin (Buch)", progress: 50 },
];

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto py-8" id="learning">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 py-20 text-center">Aktuelle Lernziele</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {goals.map((goal, index) => (
          <PortfolioItem key={index} goal={goal} />
        ))}
      </div>
    </div>
  );
};

const PortfolioItem: React.FC<{ goal: Goal }> = ({ goal }) => {
  const { title, progress } = goal;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, x: -50 }}
      animate={inView ? { opacity: 1, scale: 1, x: 0 } : {}}
      transition={{ duration: 2 }}
      className="bg-white rounded-lg shadow-md p-4"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between text-xs">
          <span className="text-sm font-semibold mb-2">Fortschritt:</span>
          <span className="text-gray-600">{inView ? `${progress}% erreicht` : ""}</span>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
          <motion.div
            style={{ width: "0%" }}
            animate={inView ? { width: `${progress}%` } : {}}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
          ></motion.div>
        </div>
      </div>
      
    </motion.div>
    
  );
};

export default Portfolio;