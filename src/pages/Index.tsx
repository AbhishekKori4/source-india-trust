import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Search, ShieldCheck, Wrench,
  CheckCircle2, Eye, Clock, Scale, Settings, Globe,
  Factory, ShoppingBag, Shirt, Gem, Package,
  ArrowRight, UserCheck, BookOpen, HeartHandshake, Lock,
  Building2, Star, User, Phone, Quote,
  AlertTriangle, TrendingDown, HelpCircle, MapPin, FileCheck, Truck
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const trustItems = [
  "End-to-End Ownership",
  "Verified Supplier Network",
  "Transparent Pricing",
  "Compliance-Driven Process",
  "On-Time Delivery Focus",
];

const services = [
  { icon: Search, title: "Product Sourcing", desc: "We identify and onboard the most suitable suppliers based on your product requirements, volume expectations, and quality standards." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Multi-stage quality checks including pre-production validation, in-process inspections, and final quality checks before dispatch." },
  { icon: Wrench, title: "Customization & Product Development", desc: "Close collaboration with suppliers to customize products based on your specifications, design, materials, and packaging." },
];

const whyUs = [
  { icon: CheckCircle2, title: "End-to-End Ownership", desc: "We manage the entire sourcing lifecycle, eliminating the need for multiple intermediaries." },
  { icon: Eye, title: "Transparent Pricing", desc: "Clear communication and pricing with no hidden costs." },
  { icon: Clock, title: "Reliable Execution", desc: "Strong supplier network and consistent execution ensure dependable outcomes." },
  { icon: Scale, title: "Compliance-Driven Approach", desc: "All processes align with international trade regulations and documentation requirements." },
  { icon: Settings, title: "Customized Solutions", desc: "Solutions tailored to your specific product and business needs." },
  { icon: Globe, title: "Global Standards, Local Expertise", desc: "On-ground supplier knowledge combined with international business expectations." },
];

const steps = [
  { num: "01", icon: Search, title: "Discover & Define", desc: "We deeply understand your product specs, quality benchmarks, and timelines, then identify verified suppliers from our network." },
  { num: "02", icon: FileCheck, title: "Sample & Agree", desc: "Samples are validated against your expectations, followed by transparent pricing and clear contractual agreements." },
  { num: "03", icon: Settings, title: "Produce & Oversee", desc: "Production progress is closely monitored to ensure timeline adherence and consistent quality standards." },
  { num: "04", icon: ShieldCheck, title: "Inspect & Approve", desc: "Multi-stage quality inspections before shipment ensure full compliance with your agreed specifications." },
  { num: "05", icon: Truck, title: "Export & Deliver", desc: "End-to-end shipping, documentation, and delivery coordination right to your destination." },
];

const industries = [
  { icon: Factory, title: "Manufacturing & Industrial Goods" },
  { icon: ShoppingBag, title: "Consumer Products" },
  { icon: Shirt, title: "Textiles & Apparel" },
  { icon: Gem, title: "Handicrafts & Specialty Goods" },
  { icon: Package, title: "Custom Product Requirements" },
];

function SupplierCounter() {
  const [count, setCount] = useState(235);
  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const duration = 2200;
    const from = 235;
    const to = 300;
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + (to - from) * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/15 rounded-3xl p-8 md:p-10 overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-secondary/10 blur-3xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          Live Network
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-7xl md:text-8xl font-heading font-bold text-primary-foreground tabular-nums leading-none">
            {count}
          </span>
          <span className="text-4xl md:text-5xl font-heading font-bold text-secondary">+</span>
        </div>
        <p className="mt-4 text-lg font-semibold text-primary-foreground">Verified Suppliers</p>
        <p className="text-sm text-primary-foreground/70 mt-1">Vetted across India — and growing every week.</p>

        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-primary-foreground/15">
          {[
            { value: "5+", label: "Countries" },
            { value: "12+", label: "Categories" },
            { value: "4.9★", label: "Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-xl font-heading font-bold text-primary-foreground">{stat.value}</div>
              <div className="text-xs text-primary-foreground/60 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
                Source with Confidence from India's Most Reliable Suppliers
              </h1>
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                End-to-end sourcing, quality assurance, and export solutions designed for reliability, transparency, and scale.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity"
                >
                  Source now <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
            <SupplierCounter />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-b border-border">
        <div className="container py-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CheckCircle2 size={18} className="text-secondary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Simplifying Cross-Border Sourcing with Trust and Accountability"
              center={false}
            />
            <p className="text-muted-foreground leading-relaxed">
              ShreySure Global is a specialized sourcing and export facilitation firm helping businesses worldwide access India's manufacturing strength with greater confidence and control. Our approach is built on trust, quality, and accountability, enabling buyers to source without the complexity and uncertainty that often come with international trade.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-primary font-semibold hover:gap-3 transition-all"
            >
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
          <div className="bg-accent rounded-2xl p-10 space-y-6">
            {[
              { icon: HeartHandshake, text: "Long-term partnership mindset" },
              { icon: ShieldCheck, text: "Governance-led execution" },
              { icon: Globe, text: "India's supply potential, global standards" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <p className="font-medium text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper className="bg-section-alt">
        <SectionHeading title="Our Services" subtitle="End-to-end sourcing and export solutions tailored to your business needs." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                <s.icon size={24} className="text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper>
        <SectionHeading title="Why Global Buyers Choose ShreySure Global" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUs.map((w) => (
            <div key={w.title} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <w.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold mb-1">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Founder / Trust */}
      <SectionWrapper className="bg-section-alt">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="Built on Governance, Compliance, and Professional Integrity"
              center={false}
            />
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our organization is led by a founder with a strong background in regulatory systems, governance, and compliance — bringing a unique trust advantage to every client engagement.
            </p>
            <ul className="space-y-4">
              {[
                { icon: UserCheck, text: "Strong due diligence mindset" },
                { icon: BookOpen, text: "Deep understanding of legal and documentation frameworks" },
                { icon: Lock, text: "High operational discipline" },
                { icon: HeartHandshake, text: "Commitment to ethical business practices" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon size={18} className="text-secondary flex-shrink-0" />
                  <span className="text-sm font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-2xl border border-border p-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <UserCheck size={40} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg">Leadership Rooted in Trust</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              In an industry where trust is a concern, our leadership ensures reliability, professionalism, and long-term partnership value.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper>
        <SectionHeading title="How It Works" subtitle="A structured, transparent process from requirement to delivery — in five seamless stages." />
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
              {/* Connector arrow (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background border border-border items-center justify-center">
                  <ArrowRight size={14} className="text-secondary" />
                </div>
              )}
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <s.icon size={20} className="text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <span className="text-2xl font-heading font-bold text-secondary/30">{s.num}</span>
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View Full Process <ArrowRight size={18} />
          </Link>
        </div>
      </SectionWrapper>

      {/* Stats & Testimonial */}
      <SectionWrapper>
        <SectionHeading
          title="The Freedom to Plan, the Power to Deliver"
          subtitle="We take care of sourcing, inspecting, and preparing your goods for export. From procurement to port delivery, we make the process smooth and hassle-free."
        />
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Testimonial */}
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10 flex flex-col justify-between">
            <div>
              <Quote size={36} className="text-secondary mb-4" />
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-base md:text-lg text-foreground leading-relaxed italic">
                "Working with ShreySure Global has been a game-changer. Their proactive communication and flawless execution saved us thousands on our last international shipment."
              </p>
            </div>
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-foreground">Rohan Sharma</p>
                <p className="text-sm text-muted-foreground">Import Manager, Apex Textiles</p>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Building2, value: "50+", title: "Partner Businesses", desc: "We build lasting relationships, not just process orders." },
              { icon: Star, value: "4.9/5", title: "Client Satisfaction Score", desc: "Based on feedback from our valued partners." },
              { icon: User, value: "1-to-1", title: "Dedicated Account Manager", desc: "A single point of contact for all your needs." },
              { icon: Phone, value: "Direct", title: "Founder Access", desc: "Our leadership is always available to ensure your success." },
            ].map((s) => (
              <div key={s.title} className="bg-card rounded-2xl border border-border p-6 text-center flex flex-col items-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon size={22} className="text-primary" />
                </div>
                <p className="text-3xl font-heading font-bold text-primary">{s.value}</p>
                <h3 className="font-heading font-semibold text-sm mt-2 text-foreground">{s.title}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <section className="bg-primary">
        <div className="container py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground max-w-2xl mx-auto">
            Ready to Source from India with Confidence?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
            Whether you are exploring new suppliers or scaling procurement, ShreySure Global helps you source with quality, transparency, and reliable execution.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-7 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
