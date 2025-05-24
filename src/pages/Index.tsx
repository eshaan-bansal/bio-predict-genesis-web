
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlatformSection from "@/components/PlatformSection";
import ScienceSection from "@/components/ScienceSection";
import SolutionsSection from "@/components/SolutionsSection";
import CompanySection from "@/components/CompanySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <HeroSection />
        <PlatformSection />
        <ScienceSection />
        <SolutionsSection />
        <CompanySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
