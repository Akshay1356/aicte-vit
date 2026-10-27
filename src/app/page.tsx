import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ResearchSection from "@/components/ResearchSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <IntroAnimation>
      <div className="relative min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <AboutSection />
          <FacilitiesSection />
          <ResearchSection />
          <LeadershipSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </IntroAnimation>
  );
}
