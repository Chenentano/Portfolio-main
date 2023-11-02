import React from "react";
import ProjectCard from "../sub/CertificatesCard";

// Importieren Sie die Bilder und definieren Sie die gewünschten Abmessungen
import IHK_small from "../../public/IHK_small.png";
import full from "../../public/full.png";
import hacking from "../../public/hacking.png";

const Certificates = () => {
  return (
<div className="flex flex-col items-center justify-center py-20" id="certificates">
  <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
    Meine Zertifikate
  </h1>
  <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 px-10 items-center">
    <ProjectCard
      src={full}
      title="Full-Stack Engineer"
      description="6-monatiges Zertifikat während der Elternzeit"
    />
    <ProjectCard
      src={IHK_small}
      title="FIA - IHK"
      description="Bestandene Ausbildung"
    />
    <ProjectCard
      src={hacking}
      title="Ethical Hacking Basics"
      description="Basiswissen über Sicherheitslücken und Hacking"
    />
  </div>
</div>
  );
};

export default Certificates;