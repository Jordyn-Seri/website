import { ContactFormProvider } from "@/contexts/ContactFormContext";
import ContactFormDialog from "@/components/ContactFormDialog";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhoIHelpSection from "@/components/WhoIHelpSection";
import ExperienceMapSection from "@/components/ExperienceMapSection";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CredentialsSection from "@/components/CredentialsSection";
import PersonalSection from "@/components/PersonalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ContactFormProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <WhoIHelpSection />
        <ExperienceMapSection />
        <ServicesSection />
        <ImpactSection />
        <TestimonialsSection />
        <CredentialsSection />
        <PersonalSection />
        <Footer />
        <ContactFormDialog />
      </div>
    </ContactFormProvider>
  );
};

export default Index;
