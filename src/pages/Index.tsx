
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PlatformSection from "@/components/PlatformSection";
import ScienceSection from "@/components/ScienceSection";
import MarketSection from "@/components/MarketSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ContentManager from "@/components/ContentManager";

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
        <AboutSection />
      </main>
      <Footer />
      <ContentManager />
    </div>
  );
};

export default Index;
