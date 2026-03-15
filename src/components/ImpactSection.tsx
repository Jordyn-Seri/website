import { motion } from "framer-motion";

const caseStudies = [
{
  tag: "Revenue Automation",
  problem: "Thousands of manual claims processed by hand each year, draining staff time and increasing error rates.",
  solution: "Designed an automated system to streamline claims processing end-to-end.",
  result: "Eliminated 3,500+ manual claims/year, reduced billing errors, increased on-time reimbursement, saved admin time, and improved staff satisfaction.",
  metric: "3,500+",
  metricLabel: "claims automated"
},
{
  tag: "Strategic Dashboards",
  problem: "Statewide partners lacked visibility into performance data and actionable insights.",
  solution: "Developed reporting dashboards with engineering team providing real-time, actionable data to stakeholders.",
  result: "Delivered actionable reporting on 20+ statewide partners to support their operations and the strategic goals of 8 ACOs and 1 MCO.",
  metric: "20+",
  metricLabel: "partners served"
},
{
  tag: "Medicaid Operations",
  problem: "Complex Medicaid documentation guidelines made valid claim submission a hassle.",
  solution: "Built standardized workflows and oversight systems for billing accuracy.",
  result: "Customer maintained a 98% avg billing success rate compared to the statewide avg of 80%, ensuring receipt of program sustaining payment.",
  metric: "98%",
  metricLabel: "billing accuracy"
}];


const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mt-3">
            Case Studies
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {caseStudies.map((cs) =>
          <motion.div
            key={cs.tag}
            variants={item}
            className="rounded-2xl border border-border bg-card p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
            
              <span className="inline-block self-start px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold tracking-wide mb-6">
                {cs.tag}
              </span>

              <div className="mb-6">
                <p className="text-5xl font-extrabold text-primary">{cs.metric}</p>
                <p className="text-sm text-muted-foreground mt-1">{cs.metricLabel}</p>
              </div>

              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Result</p>
                  <p className="text-sm text-secondary leading-relaxed font-sans font-normal">{cs.result}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default ImpactSection;