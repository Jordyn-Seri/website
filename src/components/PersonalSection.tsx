import { motion } from "framer-motion";
import { Bike, Headphones, Scissors, Bird, BookOpen, Fingerprint, Mountain } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const PersonalSection = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative">
            
            <img

              alt="Personal photo"
              className="aspect-[4/5] rounded-2xl w-full border border-border object-scale-down" src="/lovable-uploads/94c544a8-8ba7-43ec-bc31-740af6bd1338.jpg" />
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl flex items-center justify-center shadow-lg bg-secondary">
              <Fingerprint className="text-accent-foreground w-[50px] h-[50px]" size={32} />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}>
            
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              ABOUT ME
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-3 mb-6">
              The Human Behind the Data
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">When I'm not optimizing workflows or developing dashboards, you'll find me rock climbing 5.fun+ level routes, overcoming my fears on a mountain bike, or doing some other adventurous hobby in the beauty of the outdoors.&nbsp;That is, unless I'm whittling down my queue of podcast episodes, working on a sewing project, or identifying a backyard bird.
              <br /><br />
              I believe the same discipline, focus, and problem-solving mindset that fuels my love of learning new hobbies is what makes me well-rounded in my professional life as well.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
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