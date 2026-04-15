import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { num: "01", title: "Requirement Understanding", desc: "We conduct a detailed assessment of your needs including product specifications, quality benchmarks, and timelines." },
  { num: "02", title: "Supplier Identification", desc: "We shortlist and present verified suppliers from our network that align with your requirements." },
  { num: "03", title: "Sampling & Validation", desc: "We facilitate product samples and ensure they meet your expectations before proceeding." },
  { num: "04", title: "Pricing & Agreement", desc: "We provide transparent pricing structures with clear cost breakdowns and no hidden charges." },
  { num: "05", title: "Production Oversight", desc: "We monitor production progress and ensure adherence to timelines and quality standards." },
  { num: "06", title: "Quality Inspection", desc: "Final inspection is conducted before shipment to ensure compliance with agreed standards." },
  { num: "07", title: "Export & Delivery", desc: "We handle shipping, documentation, and delivery coordination until the product reaches your destination." },
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

      <SectionWrapper>
        <SectionHeading title="Your Sourcing Journey" subtitle="From requirement to delivery — every step managed with precision." />
        <div className="max-w-3xl mx-auto space-y-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-border" />
              )}
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-heading font-bold text-sm">
                {s.num}
              </div>
              <h3 className="font-heading font-semibold text-lg pt-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mt-2">{s.desc}</p>
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
