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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32">
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
          className="max-w-3xl mx-auto divide-y divide-border"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="flex items-start gap-6 py-8 first:pt-0 last:pb-0"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <service.icon className="text-primary" size={22} />
              </div>
              <div>
                <h3 className="font-bold text-secondary text-xl mb-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
