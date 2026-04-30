import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, ShieldCheck, Globe, Target, Users, Award } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-port-wide.png";

const values = [
  { icon: HeartHandshake, title: "Trust", desc: "We prioritize long-term relationships through transparency and ethical practices." },
  { icon: ShieldCheck, title: "Quality", desc: "Every product goes through structured validation processes." },
  { icon: Target, title: "Accountability", desc: "We take ownership of the entire sourcing lifecycle." },
  { icon: Globe, title: "Global Standards", desc: "Local expertise combined with international business expectations." },
  { icon: Users, title: "Partnership", desc: "Whether small or enterprise-scale, we enable confident sourcing." },
  { icon: Award, title: "Governance", desc: "Led by expertise in regulatory systems, compliance, and governance." },
];

export default function About() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground max-w-3xl">About ShreySure Global</h1>
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl leading-relaxed">
            Simplifying global sourcing from India through trust, quality, and professional accountability.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading title="Who We Are" center={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>We are a specialized global sourcing and export facilitation firm focused on simplifying cross-border trade for businesses worldwide.</p>
              <p>India is one of the world's largest manufacturing hubs, but navigating its fragmented supplier ecosystem can be complex. We bridge this gap by combining local expertise with global execution standards.</p>
              <p>Whether you are a small business or a large enterprise, we enable you to access India's supply capabilities with confidence and control.</p>
            </div>
          </div>
          <div>
            <SectionHeading title="Our Principles" center={false} />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Trust:</strong> We prioritize long-term relationships through transparency and ethical practices.</p>
              <p><strong className="text-foreground">Quality:</strong> Every product goes through structured validation processes.</p>
              <p><strong className="text-foreground">Accountability:</strong> We take ownership of the entire sourcing lifecycle.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-section-alt">
        <SectionHeading title="Our Values" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <v.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">Ready to work with a sourcing partner you can trust?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 rounded-lg bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
