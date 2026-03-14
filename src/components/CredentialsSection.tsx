import { motion } from "framer-motion";
import { Award, BarChart3, Calendar, Zap } from "lucide-react";

const certifications = [
{ label: "PMP", icon: Award },
{ label: "Monday.com Training Certificate", icon: Calendar }];


const skills = [
"AI Automation & Strategy",
"Healthcare Industry Compliance",
"Continuous Improvement",
"Dashboard Building",
"Stakeholder Management",
"Data Systems Design"];


const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-3">
            Credentials & Tools
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left: Certs & Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <h3 className="text-lg font-bold text-secondary mb-6">Certifications</h3>
            <div className="flex flex-wrap gap-3 mb-10">
              {certifications.map((cert) =>
              <div
                key={cert.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-olive/20 bg-olive/5">
                
                  <cert.icon size={18} className="text-primary" />
                  <span className="text-sm font-semibold text-secondary">{cert.label}</span>
                </div>
              )}
            </div>

            <h3 className="text-lg font-bold text-secondary mb-6">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) =>
              <span
                key={skill}
                className="px-4 py-2 rounded-lg text-accent-foreground text-sm font-medium bg-accent">
                
                  {skill}
                </span>
              )}
            </div>
          </motion.div>

          {/* Right: YouTube Video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            
            <h3 className="text-lg font-bold text-secondary mb-6">Featured Video</h3>
            <div className="aspect-video rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/wVxn60tBu4c"
                title="Jordyn Seri - Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full" />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default CredentialsSection;