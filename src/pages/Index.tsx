
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PlatformSection from "@/components/PlatformSection";
import ScienceSection from "@/components/ScienceSection";
import PrivacySection from "@/components/PrivacySection";
import PilotSection from "@/components/PilotSection";
import MarketSection from "@/components/MarketSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <PlatformSection />
        <ScienceSection />
        <MarketSection />
        <PrivacySection />
        <PilotSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
