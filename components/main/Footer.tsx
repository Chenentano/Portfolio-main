import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo
} from "react-icons/rx";



const footer = () => {
  return (
    
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] text-center ">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Bastian B.</p>
        <p>Kontakt: bastian_behrendt@yahoo.de</p>
      </div>
    </div>
  )
}
export default footer