import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Facilities from "@/components/Facilities";
import EquipmentShowcase from "@/components/EquipmentShowcase";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import MentorshipSection from "@/components/MentorshipSection";
import SafetySection from "@/components/SafetySection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <IntroAnimation>
      <div className="relative min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Facilities />
          <EquipmentShowcase />
          <ProjectsShowcase />
          <MentorshipSection />
          <SafetySection />
        </main>
        <Footer />
      </div>
    </IntroAnimation>
  );
}
