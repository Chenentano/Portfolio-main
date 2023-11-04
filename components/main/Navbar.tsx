"use client";

import { Socials } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const linkVariants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      color: "#FFF9", // Ändern Sie die Farbe nach Ihren Wünschen
    },
  };
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#home"
          className="h-auto w-auto flex flex-row items-center"
        >
          <div className="my-rotation">
          <Image
            src="/LockMain.png"
            alt="logo"
            width={50}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          </div>
          <div className="typewriter">
            <h1>Bastian Behrendt</h1>
          </div>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
      <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[20px] rounded-full text-gray-200">
        <motion.a
          href="#home"
          className="cursor-pointer"
          variants={linkVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          Home
        </motion.a>
        <motion.a
          href="#skills"
          className="cursor-pointer"
          variants={linkVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          Skills
        </motion.a>
        <motion.a
          href="#learning"
          className="cursor-pointer"
          variants={linkVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          Lernprojekte
        </motion.a>
        <motion.a
          href="#certificates"
          className="cursor-pointer"
          variants={linkVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          Zertifikate
        </motion.a>
      </div>
    </div>
        <div className="flex flex-row gap-5">
      {Socials.map((social) => (
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          key={social.name}
        >
          <motion.img
            src={social.src}
            alt={social.name}
            width={35}
            height={24}
            className={social.name === "LinkedIn" ? "linkedin-logo" : ""}
            whileHover={{ scale: 1.4, transition: { duration: 0.5 } }} // Beispiel-Animation für Hover
          />
        </a>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Navbar;