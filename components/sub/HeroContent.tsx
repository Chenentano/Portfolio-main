"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight
} from "@/utils/motion";
import Image from "next/image";

const FloatingLink = () => {
  const floatingAnimation = {
    y: [0, 10, 0],
    transition: {
      duration: 3,
      repeat: Infinity, // Endlosschleife
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start(floatingAnimation);
  }, [controls]);

  return (
    <motion.a
      custom={1} // Benutzerdefinierter Wert, um die Animation zu steuern
      animate={controls}
      className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      href="https://docdro.id/BBK0A1c"
      target="_blank"
      variants={slideInFromLeft(0.5)}
    >
      Mein Lebenslauf
    </motion.a>
  );
};

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Bastian Behrendt
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Junior Developer{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] font-bold"
        >
Derzeit bin ich aktiv auf der Suche nach einer Junior-Position, die mir die Möglichkeit bietet, 
mich weiterzuentwickeln und meine Fähigkeiten in einem anspruchsvollen Umfeld unter Beweis zu stellen.
        </motion.p>

        <FloatingLink /> {/* Hier wird die FloatingLink-Komponente eingefügt */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;