
import HeroSection from "@/components/ui/Hero-section";
import { Navbar } from "@/components/ui/navbar";// import Image from "next/image";
import SecondSection from "./services/page";
import ProjectsSection from "./work/page";

export default function Home() {
  return (
    <main>
      {/* navbar */}
      <Navbar />
      {/* hero-section */}
      <HeroSection />
      <SecondSection />
      <ProjectsSection/>
    </main>

  );
}

