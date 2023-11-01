import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Projekte</div>
            <a
              href="Github.com/chenentano"
              target="_blank"
              className="flex flex-row items-center my-[15px]"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px] ">Mein GitHub</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Kontaktiere mich!</div>
            <a
              href="Link zu Ihrem LinkedIn-Profil"
              target="_blank"
              className="flex flex-row items-center my-[15px] "
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;