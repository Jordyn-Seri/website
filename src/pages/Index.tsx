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
        <div className="h-12 bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--card))]" />
        <WhoIHelpSection />
        <CredentialsSection />
        <div className="h-12 bg-gradient-to-b from-[hsl(var(--card))] to-[hsl(var(--background))]" />
        <ServicesSection />
        <div className="h-12 bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--card))]" />
        <ExperienceMapSection />
        <div className="h-12 bg-gradient-to-b from-[hsl(var(--card))] to-[hsl(var(--background))]" />
        <ImpactSection />
        <div className="h-12 bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--secondary))]" />
        <TestimonialsSection />
        <div className="h-12 bg-gradient-to-b from-[hsl(var(--secondary))] to-[hsl(var(--background))]" />
        <PersonalSection />
        <Footer />
        <ContactFormDialog />
      </div>
    </ContactFormProvider>
  );
};

export default Index;
