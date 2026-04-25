import { Link } from "react-router-dom";
import { Search, ShieldCheck, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Search,
    title: "Product Sourcing",
    desc: "We identify and onboard the most suitable suppliers based on your product requirements, volume expectations, and quality standards. Our supplier network is continuously evaluated to ensure reliability and scalability.",
    benefits: ["Access to verified supplier network", "Volume-appropriate matching", "Continuous supplier evaluation", "Market-competitive options"],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "We implement multi-stage quality checks, including pre-production validation, in-process inspections, and final quality checks before dispatch.",
    benefits: ["Pre-production validation", "In-process inspections", "Final quality checks", "Detailed reporting"],
  },
  {
    icon: Wrench,
    title: "Customization & Product Development",
    desc: "We work closely with suppliers to customize products based on your specifications, including design, materials, and packaging.",
    benefits: ["Custom design support", "Material specification", "Packaging customization", "Prototype development"],
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground max-w-3xl">Our Services</h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
            Comprehensive sourcing and export solutions designed to simplify global trade.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <SectionWrapper key={s.title} className={i % 2 !== 0 ? "bg-section-alt" : ""}>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <s.icon size={28} className="text-secondary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Key Benefits</h3>
              <ul className="space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-secondary flex-shrink-0" />
                    <span className="text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>
      ))}

      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">Need a tailored sourcing solution?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 rounded-lg bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
