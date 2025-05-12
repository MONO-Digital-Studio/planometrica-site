import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutPlatform from "@/components/AboutPlatform";
import TargetAudience from "@/components/TargetAudience";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import TechnologySection from "@/components/TechnologySection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { generateStructuredData, measurePageLoad } from "@/utils/seoUtils";

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  useEffect(() => {
    const websiteSchema = generateStructuredData("WebSite");
    const organizationSchema = generateStructuredData("Organization");
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(websiteSchema);
    document.head.appendChild(script1);
    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script2);
    const performanceMetrics = measurePageLoad();
    if (performanceMetrics) {
      console.log("Page Performance:", performanceMetrics);
    }
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutPlatform />
        <TargetAudience />
        <div id="capabilities">
          <CapabilitiesSection />
        </div>
        <TechnologySection />
        <AdvantagesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
