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
    custom={1}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0, transition: { delay: 1.5 } }}
    className="py-3 md:py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0"
    href="https://www.docdroid.net/scF3QFn"
    target="_blank"

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
          className="text-lg text-gray-100 my-5 max-w-[600px] font-bold"
        >
Derzeit bin ich aktiv auf der Suche nach einer Junior-Position, die mir die Möglichkeit bietet, 
mich weiterzuentwickeln und meine Fähigkeiten in einem anspruchsvollen Umfeld unter Beweis zu stellen.
        </motion.p>

        <FloatingLink />
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center hidden md:flex"
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