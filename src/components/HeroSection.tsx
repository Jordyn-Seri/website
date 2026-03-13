import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-primary/10" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>
            
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-sm font-semibold mb-6 tracking-wide text-olive">
              Healthcare Project Manager
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-secondary tracking-tight">
            
            I Remove Administrative Obstacles.{" "}
            <span className="text-olive">You Deliver Better Outcomes.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            
            Project Manager for Health Systems and Startups. I leverage AI, automation, and data systems to buy back time for your company.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4">
            
            <Button asChild size="lg" className="rounded-full px-8 text-base gap-2">
              <a href="mailto:jordynseri@gmail.com" className="bg-olive">
                Schedule a Consult <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base border-secondary/20">
              <a href="#impact">See My Impact</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;