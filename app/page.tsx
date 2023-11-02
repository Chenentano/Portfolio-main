import Hero from "@/components/main/Hero";
import Certificates from "@/components/main/Certificates";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Learning from "@/components/main/learning";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Learning/>
        <Certificates />
      </div>
    </main>
  );
}
