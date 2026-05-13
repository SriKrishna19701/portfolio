import Hero from "@/components/sections/Hero";
import ProjectWorks from "@/components/sections/ProjectWorks";
import EngineeringCapabilities from "@/components/sections/EngineeringCapabilities";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <Hero />
      <ProjectWorks />
      <EngineeringCapabilities />
      <Experience />
      <Footer />
    </main>
  );
}
