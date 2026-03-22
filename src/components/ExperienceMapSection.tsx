import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, BarChart3, Network, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface VantagePoint {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}

interface Zone {
  label: string;
  subtitle: string;
  color: "primary" | "secondary" | "accent";
  points: VantagePoint[];
}

const zones: Zone[] = [
  {
    label: "Zoomed In",
    subtitle: "Up close — where care happens",
    color: "primary",
    points: [
      {
        icon: Heart,
        title: "The Patient's World",
        bullets: [
          "Hands-on care navigation for Medicaid patients, meeting them where they are — shelters, clinics, community",
          "Coordinating with providers to holistically achieve healthier patient outcomes",
        ],
      },
      {
        icon: Search,
        title: "The Consultant's View",
        bullets: [
          "Identifying inefficiencies and their solutions for healthcare clinics",
        ],
      },
    ],
  },
  {
    label: "Behind the Scenes",
    subtitle: "The machinery — how it runs and gets built",
    color: "secondary",
    points: [
      {
        icon: BarChart3,
        title: "The Operator's Lens",
        bullets: ["Data systems, billing, and operations"],
      },
      {
        icon: Rocket,
        title: "The Startup Seat",
        bullets: [
          "Connecting clinical workflows to technology",
          "Building from the ground up",
        ],
      },
    ],
  },
  {
    label: "Zoomed Out",
    subtitle: "The big picture — networks, plans, policy",
    color: "accent",
    points: [
      {
        icon: Network,
        title: "The Systems View",
        bullets: [
          "Health plan & statewide medicaid program network oversight",
          "ACOs, MCOs, and community org coordination",
        ],
      },
    ],
  },
];

const colorStyles = {
  primary: {
    badge: "bg-primary/15 text-primary border-primary/30",
    card: "border-primary/25 hover:border-primary/50",
    icon: "bg-primary/15 text-primary",
    line: "from-primary/60",
  },
  secondary: {
    badge: "bg-secondary/15 text-secondary border-secondary/30",
    card: "border-secondary/25 hover:border-secondary/50",
    icon: "bg-secondary/15 text-secondary",
    line: "via-secondary/60",
  },
  accent: {
    badge: "bg-accent/15 text-accent border-accent/30",
    card: "border-accent/25 hover:border-accent/50",
    icon: "bg-accent/15 text-accent",
    line: "to-accent/60",
  },
};

const ExpandableCard = ({
  point,
  color,
  index,
}: {
  point: VantagePoint;
  color: "primary" | "secondary" | "accent";
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);
  const styles = colorStyles[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`flex-1 min-w-0 rounded-xl border ${styles.card} bg-background/60 backdrop-blur-sm transition-all duration-300 cursor-pointer`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-5 flex items-start gap-4">
        <div
          className={`w-11 h-11 rounded-lg ${styles.icon} flex items-center justify-center flex-shrink-0`}
        >
          <point.icon size={22} />
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-foreground text-sm leading-tight">
            {point.title}
          </h4>
          <AnimatePresence>
            {expanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-3 space-y-2 overflow-hidden"
              >
                {point.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceMapSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Healthcare from Every Angle
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I've been the patient advocate, the operator, and the strategist.
            That's why I know where things break — and how to put them back
            together.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical gradient line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-accent/40 hidden lg:block" />

          <div className="space-y-12">
            {zones.map((zone, zi) => {
              const styles = colorStyles[zone.color];
              return (
                <motion.div
                  key={zone.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: zi * 0.15 }}
                >
                  {/* Zone label */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${styles.badge}`}
                    >
                      {zone.label}
                    </span>
                    <span className="text-sm text-muted-foreground italic">
                      {zone.subtitle}
                    </span>
                  </div>

                  {/* Cards */}
                  <div
                    className={`flex flex-col ${
                      zone.points.length > 1 ? "lg:flex-row" : ""
                    } gap-4`}
                  >
                    {zone.points.map((point, pi) => (
                      <ExpandableCard
                        key={point.title}
                        point={point}
                        color={zone.color}
                        index={zi * 2 + pi}
                      />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground mt-14 max-w-2xl mx-auto italic"
        >
          That range is why I can spot what's broken, talk to whoever's in the
          room, and actually fix it.
        </motion.p>
      </div>
    </section>
  );
};

export default ExperienceMapSection;
