import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Search, ShieldCheck, Wrench,
  CheckCircle2, Eye, Clock, Scale, Settings, Globe,
  Factory, ShoppingBag, Shirt, Gem, Package,
  ArrowRight, UserCheck, BookOpen, HeartHandshake, Lock,
  Building2, Star, User, Phone, Quote,
  AlertTriangle, TrendingDown, HelpCircle, MapPin, FileCheck, Truck,
  ClipboardEdit, ClipboardCheck, Handshake, MessageCircle, Trophy
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
  { num: "01", icon: ClipboardEdit, title: "Importer Fills Request Form", desc: "Share your product requirements, target specifications, volumes, and timelines through a simple structured form." },
  { num: "02", icon: ClipboardCheck, title: "SGE Team Reviews & Qualifies", desc: "Our team reviews your request, qualifies feasibility, and aligns on commercials, quality benchmarks, and scope." },
  { num: "03", icon: Handshake, title: "Match With Verified Exporter", desc: "We match you with the right verified supplier from our network — chosen for quality, capacity, and reliability." },
  { num: "04", icon: Truck, title: "Coordination & Delivery", desc: "We coordinate production oversight, quality inspections, documentation, shipping, and delivery to your destination." },
  { num: "05", icon: MessageCircle, title: "Post-Trade Support", desc: "Continued support after delivery — resolution, reorders, and long-term partnership for predictable sourcing." },
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
        <SectionHeading title="Why import from us?" />
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
              title="Focus on Quality, Compliance and Professional Integrity"
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

      {/* Pain Points */}
      <SectionWrapper className="bg-section-alt">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Sourcing Shouldn't Feel Like a Gamble
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            What starts as a "great deal" often turns into costly setbacks — leaving you asking, <span className="italic">"Can I really trust this process?"</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {[
            { icon: AlertTriangle, title: "Off-Sample Products", desc: "Products that don't match approved samples." },
            { icon: ShieldCheck, title: "Inconsistent Quality", desc: "Quality you can't reliably sell to your customers." },
            { icon: Clock, title: "Disruptive Delays", desc: "Missed timelines that throw your operations off track." },
            { icon: TrendingDown, title: "Hidden Costs", desc: "Surprise charges that quietly erode your margins." },
          ].map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                <p.icon size={20} className="text-destructive" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-10 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
              <HelpCircle size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg">You're trying to grow your business, not manage uncertainty.</h3>
              <p className="text-sm text-muted-foreground mt-1">Yet most buyers are forced to navigate:</p>
            </div>
          </div>
          <ul className="space-y-3 pl-1">
            {[
              "A fragmented supplier landscape",
              "Limited visibility into quality control",
              "No assurance of what you'll actually receive",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper>
        <SectionHeading title="Simplified Global Trading" subtitle="Five seamless stages — from request to delivery and beyond — designed to make global sourcing effortless." />
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

      {/* Customer Stories */}
      <SectionWrapper>
        <SectionHeading
          title="Customer Stories"
          subtitle="Real outcomes from buyers who trusted ShreySure Global to manage their sourcing end-to-end."
        />
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              quote: "ShreySure Global transformed how we source from India. Their proactive communication and flawless execution saved us thousands on our last shipment.",
              name: "Rohan Sharma",
              role: "Import Manager, Apex Textiles",
            },
            {
              quote: "We struggled with quality issues for years. With ShreySure, every batch arrives matching our approved sample — no surprises, no rejects.",
              name: "Linh Nguyen",
              role: "Procurement Lead, Saigon Home Goods",
            },
            {
              quote: "Their compliance and documentation are flawless. Customs clearance has never been smoother. Truly an extension of our own team.",
              name: "Marcus Weber",
              role: "Operations Director, Berlin Imports GmbH",
            },
          ].map((t) => (
            <div key={t.name} className="bg-card rounded-2xl border border-border p-7 flex flex-col hover:shadow-lg transition-shadow">
              <Quote size={28} className="text-secondary mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed italic flex-1">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bridging header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider mb-5">
            <Trophy size={14} />
            Proof in Numbers
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Trusted by Buyers. Backed by Results.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A growing network, a global footprint, and a satisfaction score that reflects our commitment to every partnership.
          </p>
        </div>

        {/* 3 metric boxes */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Building2,
              value: "300+",
              title: "Verified Suppliers",
              desc: "A vetted network across India, continuously evaluated for reliability and scale.",
            },
            {
              icon: Globe,
              value: "5+",
              title: "Countries Served",
              desc: "Trusted by buyers in Europe, Australia, Vietnam, Thailand, and Sri Lanka.",
            },
            {
              icon: Star,
              value: "4.9/5",
              title: "Client Satisfaction Score",
              desc: "Based on feedback from our valued partners.",
            },
          ].map((m) => (
            <div key={m.title} className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <m.icon size={26} className="text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-heading font-bold text-primary">{m.value}</p>
              <h3 className="font-heading font-semibold text-base mt-3 text-foreground">{m.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
            </div>
          ))}
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
              Source now
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
