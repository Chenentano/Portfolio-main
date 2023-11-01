"use client";

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { RxDiscordLogo, RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/lockmain.png"
            alt="logo"
            width={50}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Bastian B - Junior Developer
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex flex-row items-center gap-2 cursor-pointer"
          >
            <span className="text-gray-200">GitHub und Social</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-gray-200 transform transition-transform ${
                isDropdownOpen ? "-rotate-180" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute top-8 right-0 bg-[#0300145e] border border-[#7042f861] py-2 px-4 rounded-lg text-gray-200">
              <a
                href="https://github.com/chenentano"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-400"
              >
                <div className="flex flex-row items-center my-[15px] cursor-pointer">
                  <RxGithubLogo style={{ fontSize: "24px" }} />
                  <span className="text-[15px] ml-[6px]">GitHub</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/bastian-behrendt-92904b1b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-400"
              >
                <div className="flex flex-row items-center my-[15px] cursor-pointer">
                  <RxLinkedinLogo style={{ fontSize: "24px" }} />
                  <span className="text-[15px] ml-[6px]">LinkedIn</span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
