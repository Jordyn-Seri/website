import { motion } from "framer-motion";
import { Mountain, Bike, Headphones, Scissors, Bird, BookOpen } from "lucide-react";

const PersonalSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative">
            
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-olive/20 via-accent/30 to-olive/20 flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <Mountain className="mx-auto mb-4 text-primary" size={48} />
                <p className="text-muted-foreground text-sm">Personal photo placeholder</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent flex items-center justify-center shadow-lg">
              <TreePine className="text-accent-foreground" size={32} />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}>
            
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              Beyond the Data
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-3 mb-6">
              The Human Behind the Data
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">When I'm not optimizing workflows or building dashboards, you'll find me rock climbing 5.fun level routes, overcoming my fears on a mountain bike, or doing some other adventurous hobby in the beauty of the outdoors. That is, unless I'm whittling down my queue of podcast episodes, working on a sewing project, or identifying a backyard bird. I believe the same discipline, focus, and problem-solving mindset that fuels my love of learning new things is what makes me effective as a project manager.





            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I bring that same energy to every engagement — a bias toward action, a love
              for solving complex problems, and a commitment to delivering results that matter.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
              { icon: Mountain, label: "Rock Climbing" },
              { icon: Bike, label: "Mountain Biking" },
              { icon: Headphones, label: "Podcasts" },
              { icon: Scissors, label: "Sewing" },
              { icon: Bird, label: "Birding" },
              { icon: BookOpen, label: "Learning" }].
              map((item) =>
              <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon size={18} className="text-primary" />
                  {item.label}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default PersonalSection;