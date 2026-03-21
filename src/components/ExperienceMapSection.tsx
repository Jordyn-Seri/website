import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, BarChart3, Network, Rocket } from "lucide-react";

const vantagePoints = [
  {
    icon: Search,
    title: "The Consultant's View",
    bullets: ["Identifying inefficiencies and their solutions for healthcare clinics"],
    color: "primary",
  },
  {
    icon: Heart,
    title: "The Patient's World",
    bullets: [
      "Hands-on care navigation for Medicaid patients, meeting them where they are — shelters, clinics, community",
      "Coordinating with providers to holistically achieve healthier patient outcomes",
    ],
    color: "secondary",
  },
  {
    icon: BarChart3,
    title: "The Operator's Lens",
    bullets: ["Data systems, billing, and operations"],
    color: "accent",
  },
  {
    icon: Network,
    title: "The Systems View",
    bullets: [
      "Health plan & statewide medicaid program network oversight",
      "ACOs, MCOs, and community org coordination",
    ],
    color: "primary",
  },
  {
    icon: Rocket,
    title: "The Startup Seat",
    bullets: [
      "Connecting clinical workflows to technology",
      "Building from the ground up",
    ],
    color: "secondary",
  },
];

// Positions for 5 nodes around a circle (top, then clockwise)
const nodePositions = [
  { top: "2%", left: "50%", translate: "-50%" },   // top center
  { top: "28%", left: "93%", translate: "-50%" },   // top right
  { top: "78%", left: "80%", translate: "-50%" },   // bottom right
  { top: "78%", left: "20%", translate: "-50%" },   // bottom left
  { top: "28%", left: "7%", translate: "-50%" },    // top left
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  primary: { bg: "bg-primary/15", text: "text-primary", border: "border-primary/40" },
  secondary: { bg: "bg-secondary/15", text: "text-secondary", border: "border-secondary/40" },
  accent: { bg: "bg-accent/15", text: "text-accent", border: "border-accent/40" },
};

const ExperienceMapSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Healthcare from Every Angle
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Five vantage points. One through line: making healthcare work better.
          </p>
        </motion.div>

        {/* Desktop radial layout */}
        <div className="hidden lg:block">
          <div className="relative w-[540px] h-[540px] mx-auto">
            {/* Connection lines from center to each node */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 540 540"
            >
              {nodePositions.map((pos, i) => {
                const x = parseFloat(pos.left) / 100 * 540;
                const y = (parseFloat(pos.top) / 100 * 540) + 40;
                return (
                  <line
                    key={i}
                    x1="270"
                    y1="270"
                    x2={x}
                    y2={y}
                    stroke="hsl(var(--border))"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                  />
                );
              })}
            </svg>

            {/* Center label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-10">
              <span className="text-primary font-bold text-sm text-center leading-tight">
                5 Vantage<br />Points
              </span>
            </div>

            {/* Nodes */}
            {vantagePoints.map((vp, i) => {
              const pos = nodePositions[i];
              const colors = colorMap[vp.color];
              const isActive = activeIndex === i;

              return (
                <div
                  key={vp.title}
                  className="absolute z-20"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    transform: `translateX(${pos.translate})`,
                  }}
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div
                      className={`w-16 h-16 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center transition-all duration-300 ${
                        isActive ? "ring-2 ring-primary shadow-lg shadow-primary/20" : ""
                      }`}
                    >
                      <vp.icon className={colors.text} size={26} />
                    </div>
                    <span className="mt-2 text-sm font-semibold text-foreground text-center max-w-[130px] leading-tight">
                      {vp.title}
                    </span>
                  </motion.div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 rounded-xl border ${colors.border} bg-background/95 backdrop-blur-sm p-4 shadow-xl z-30`}
                      >
                        <ul className="space-y-2">
                          {vp.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                            >
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.bg} border ${colors.border} flex-shrink-0`} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="lg:hidden space-y-3 max-w-lg mx-auto">
          {vantagePoints.map((vp, i) => {
            const colors = colorMap[vp.color];
            const isActive = activeIndex === i;

            return (
              <motion.div
                key={vp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`rounded-xl border ${colors.border} bg-background/80 overflow-hidden`}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className="w-full flex items-center gap-4 p-4 text-left"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}
                  >
                    <vp.icon className={colors.text} size={22} />
                  </div>
                  <span className="font-semibold text-foreground">{vp.title}</span>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <ul className="px-4 pb-4 space-y-2">
                        {vp.bullets.map((b, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                          >
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.bg} border ${colors.border} flex-shrink-0`} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto italic"
        >
          That range is why I can spot what's broken, talk to whoever's in the room, and actually fix it.
        </motion.p>
      </div>
    </section>
  );
};

export default ExperienceMapSection;
