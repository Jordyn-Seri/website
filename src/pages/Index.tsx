import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoIHelpSection from "@/components/WhoIHelpSection";
import ImpactSection from "@/components/ImpactSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CredentialsSection from "@/components/CredentialsSection";
import PersonalSection from "@/components/PersonalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhoIHelpSection />
      <ServicesSection />
      <ImpactSection />
      <TestimonialsSection />
      <CredentialsSection />
      <PersonalSection />
      <Footer />
    </div>
  );
};

export default Index;
