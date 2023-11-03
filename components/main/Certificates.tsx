"use client";
import React from "react";
import ProjectCard from "../sub/CertificatesCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Importieren Sie die Bilder und definieren Sie die gewünschten Abmessungen
import IHK_small from "../../public/IHK_small.png";
import full from "../../public/full.png";
import hacking from "../../public/hacking.png";

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Ändern Sie den Schwellenwert nach Bedarf
  });

  return (
    <div className="flex flex-col items-center justify-center py-20" id="certificates">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        Meine Zertifikate
      </h1>
      <div
        ref={ref}
        className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row gap-10 px-10 items-center"
      >
        {inView ? (
          <>
            <a href="google.de"> {/* Add your link URL inside the href attribute */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5 }}
              >
                <ProjectCard
                  src={full}
                  title="Full-Stack Engineer"
                  description="6-monatiges Zertifikat während der Elternzeit"
                />
              </motion.div>
            </a>
            <a href="your_link_url_here"> {/* Add your link URL inside the href attribute */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <ProjectCard
                  src={IHK_small}
                  title="FIA - IHK"
                  description="Bestandene Ausbildung"
                />
              </motion.div>
            </a>
            <a href="your_link_url_here"> {/* Add your link URL inside the href attribute */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <ProjectCard
                  src={hacking}
                  title="Ethical Hacking Basics"
                  description="Basiswissen über Sicherheitslücken und Hacking"
                />
              </motion.div>
            </a>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Certificates;