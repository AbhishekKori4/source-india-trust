import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardEdit, ClipboardCheck, Handshake, Truck, MessageCircle, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    num: "01",
    icon: ClipboardEdit,
    title: "Importer Fills Request Form",
    desc: "You begin by sharing your sourcing needs through a structured request form — product specifications, target volumes, quality benchmarks, and timelines.",
    points: ["Simple structured intake", "Clear requirement capture", "Confidential & secure"],
  },
  {
    num: "02",
    icon: ClipboardCheck,
    title: "SGE Team Reviews & Qualifies",
    desc: "Our team reviews your request, qualifies feasibility, and aligns with you on commercials, quality benchmarks, and the overall scope of engagement.",
    points: ["Feasibility assessment", "Commercials alignment", "Scope finalization"],
  },
  {
    num: "03",
    icon: Handshake,
    title: "Match With Verified Exporter",
    desc: "We match you with the right verified exporter from our network — selected for quality, capacity, compliance posture, and reliability of delivery.",
    points: ["Verified supplier shortlist", "Capability & capacity check", "Sample validation"],
  },
  {
    num: "04",
    icon: Truck,
    title: "Coordination & Delivery",
    desc: "We coordinate production oversight, multi-stage quality inspections, export documentation, freight, and delivery — right up to your destination.",
    points: ["Production oversight", "Pre-shipment inspection", "Documentation & logistics"],
  },
  {
    num: "05",
    icon: MessageCircle,
    title: "Post-Trade Support",
    desc: "Our involvement doesn't end at delivery. We stay engaged for issue resolution, reorders, and building a predictable, long-term sourcing partnership.",
    points: ["Issue resolution", "Reorder facilitation", "Long-term partnership"],
  },
];

export default function Process() {
  return (
    <>
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground max-w-3xl">How It Works</h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
            A structured, transparent sourcing process designed to reduce complexity and build confidence at every step.
          </p>
        </div>
      </section>

      {/* Visual 5-step flow */}
      <SectionWrapper>
        <SectionHeading
          title="Your Sourcing Journey in 5 Stages"
          subtitle="From first conversation to final delivery — every step managed with precision and accountability."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background border border-border items-center justify-center">
                  <ArrowRight size={14} className="text-secondary" />
                </div>
              )}
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <s.icon size={20} className="text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <span className="text-2xl font-heading font-bold text-secondary/30">{s.num}</span>
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Detailed breakdown */}
      <SectionWrapper className="bg-section-alt">
        <SectionHeading
          title="A Closer Look at Each Stage"
          subtitle="Every stage is built to remove uncertainty and keep you informed."
        />
        <div className="max-w-5xl mx-auto space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 grid md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-10 items-start"
            >
              <div className="flex md:flex-col items-center md:items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon size={24} className="text-primary" />
                </div>
                <span className="text-3xl font-heading font-bold text-secondary/40">{s.num}</span>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>
              <ul className="space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <ShieldCheck size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">Ready to start your sourcing journey?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 rounded-lg bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
