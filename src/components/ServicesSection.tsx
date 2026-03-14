import { motion } from "framer-motion";
import { ClipboardCheck, UserCog, Settings } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description:
      "Traditional PM support for project implementations — planning, execution, and delivery.",
  },
  {
    icon: UserCog,
    title: "Chief of Staff",
    description:
      "Executive assistance, strategic partnership, and cross-functional project management.",
  },
  {
    icon: Settings,
    title: "Operational Support",
    description:
      "Workflow optimization, process automation, and systems design for efficiency.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-primary">
            What I Offer
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative rounded-2xl border border-border bg-background p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-bold text-secondary mb-3 text-2xl text-left">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
