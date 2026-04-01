import { motion } from "framer-motion";
import { Search, Building2, Cable, Crosshair, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Node {
  icon: LucideIcon;
  title: string;
  levelLabel: string;
  context: string;
}

const nodes: Node[] = [
  {
    icon: Search,
    title: "Front-Line Care Navigation",
    levelLabel: "The Personal",
    context:
      "Background in boots-on-the-ground healthcare navigation for Medicaid patients. Collaboration with clinicians to drive holistic outcomes.",
  },
  {
    icon: Building2,
    title: "Operations & Data Management",
    levelLabel: "The Machinery",
    context:
      "My time \"under the hood\" of healthcare. Managing billing systems, data workflows, and daily clinical operations.",
  },
  {
    icon: Cable,
    title: "The Technical-Clinical Bridge",
    levelLabel: "The Connector",
    context:
      "Working with startups and clinics to integrate technology into existing clinical workflows. Building solutions from the ground up.",
  },
  {
    icon: Crosshair,
    title: "Clinical Strategy",
    levelLabel: "The Architect",
    context:
      "Consulting to identify clinic-level inefficiencies and advising on practical solutions.",
  },
  {
    icon: Globe,
    title: "Statewide Systems & Networks",
    levelLabel: "The Big Picture",
    context:
      "High-level oversight. Managing MCO/ACO networks and statewide Medicaid program coordination.",
  },
];

// Colors for each segment between nodes (and node accent)
const nodeColors = [
  "hsl(var(--primary))",
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "hsl(var(--secondary))",
  "hsl(var(--accent))",
];

const nodeColorClasses = [
  { icon: "bg-primary/15 text-primary", label: "text-primary" },
  { icon: "bg-primary/15 text-primary", label: "text-primary" },
  { icon: "bg-secondary/15 text-secondary", label: "text-secondary" },
  { icon: "bg-secondary/15 text-secondary", label: "text-secondary" },
  { icon: "bg-accent/15 text-accent", label: "text-accent" },
];

// Desktop diagonal positions (percentage-based within the SVG viewBox)
const diagonalPositions = [
  { x: 120, y: 520 },
  { x: 300, y: 410 },
  { x: 480, y: 300 },
  { x: 660, y: 190 },
  { x: 840, y: 80 },
];

const DesktopDiagram = () => {
  const svgWidth = 960;
  const svgHeight = 600;
  const circleR = 26;

  return (
    <div className="hidden lg:block relative max-w-5xl mx-auto">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full h-auto"
        fill="none"
      >
        {/* Connector lines */}
        {diagonalPositions.slice(0, -1).map((pos, i) => {
          const next = diagonalPositions[i + 1];
          return (
            <line
              key={i}
              x1={pos.x}
              y1={pos.y}
              x2={next.x}
              y2={next.y}
              stroke={nodeColors[i]}
              strokeWidth={2.5}
              strokeLinecap="round"
              opacity={0.45}
            />
          );
        })}

        {/* Node circles */}
        {diagonalPositions.map((pos, i) => (
          <circle
            key={i}
            cx={pos.x}
            cy={pos.y}
            r={circleR}
            fill={nodeColors[i]}
            opacity={0.15}
            stroke={nodeColors[i]}
            strokeWidth={2}
          />
        ))}
      </svg>

      {/* Overlay: icons + text cards positioned absolutely */}
      <div className="absolute inset-0">
        {diagonalPositions.map((pos, i) => {
          const node = nodes[i];
          const colors = nodeColorClasses[i];
          // Convert SVG coords to percentages
          const leftPct = (pos.x / svgWidth) * 100;
          const topPct = (pos.y / svgHeight) * 100;
          // Alternate text placement: odd nodes text goes right+below, even nodes text goes left+above
          const textRight = i % 2 === 0;

          return (
            <motion.div
              key={node.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="absolute"
              style={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Icon circle */}
              <div
                className={`w-12 h-12 rounded-full ${colors.icon} flex items-center justify-center mx-auto`}
              >
                <node.icon size={22} />
              </div>

              {/* Text card */}
              <div
                className={`absolute w-52 ${
                  textRight ? "left-16 -top-3" : "right-16 -top-3"
                }`}
              >
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest ${colors.label} block mb-1`}
                >
                  {node.levelLabel}
                </span>
                <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">
                  {node.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {node.context}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const MobileTimeline = () => (
  <div className="lg:hidden relative max-w-md mx-auto pl-10">
    {/* Vertical gradient line */}
    <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />

    <div className="space-y-10">
      {nodes.map((node, i) => {
        const colors = nodeColorClasses[i];
        return (
          <motion.div
            key={node.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative"
          >
            {/* Circle on the line */}
            <div
              className={`absolute -left-10 top-0 w-10 h-10 rounded-full ${colors.icon} flex items-center justify-center`}
              style={{ transform: "translateX(-50%)" }}
            >
              <node.icon size={18} />
            </div>

            <div className="ml-2">
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${colors.label} block mb-1`}
              >
                {node.levelLabel}
              </span>
              <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">
                {node.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {node.context}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

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

        <DesktopDiagram />
        <MobileTimeline />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-muted-foreground mt-14 max-w-2xl mx-auto italic"
        >
          This range is why I can spot what's broken. And actually fix it.
        </motion.p>
      </div>
    </section>
  );
};

export default ExperienceMapSection;
