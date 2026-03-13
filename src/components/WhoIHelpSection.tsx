import { motion } from "framer-motion";
import { Building2, Stethoscope, Rocket } from "lucide-react";

const cards = [
{
  icon: Building2,
  title: "Health Systems",
  description:
  "Streamlining large-scale Medicaid initiatives and ensuring data integrity across complex partner networks."
},
{
  icon: Stethoscope,
  title: "Clinics",
  description:
  "Automating billing and claims to reduce errors and improve value-based payment performance."
},
{
  icon: Rocket,
  title: "Startups",
  description:
  "Building scalable workflows and dashboards to turn customer insights into better products."
}];


const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const WhoIHelpSection = () => {
  return (
    <section id="who-i-help" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          

          
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-primary">
            Who I Help
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {cards.map((card) =>
          <motion.div
            key={card.title}
            variants={item}
            className="group relative rounded-2xl border border-border bg-background p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default WhoIHelpSection;