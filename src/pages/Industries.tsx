import { Link } from "react-router-dom";
import { Factory, ShoppingBag, Shirt, Gem, Package, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const industries = [
  { icon: Factory, title: "Manufacturing & Industrial Goods", desc: "Sourcing raw materials, components, and finished goods from India's industrial manufacturing base." },
  { icon: ShoppingBag, title: "Consumer Products", desc: "From FMCG to lifestyle products, we help source consumer goods with quality consistency." },
  { icon: Shirt, title: "Textiles & Apparel", desc: "India's textile industry offers vast sourcing potential — fabrics, garments, and custom apparel." },
  { icon: Gem, title: "Handicrafts & Specialty Goods", desc: "Artisan products, home décor, and specialty goods sourced with authenticity and care." },
  { icon: Package, title: "Custom Product Requirements", desc: "Bespoke sourcing for unique product categories tailored to your exact specifications." },
];

export default function Industries() {
  return (
    <>
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground max-w-3xl">Industries We Serve</h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
            Our flexible sourcing model adapts to diverse industry needs across product types, quality requirements, and supply complexity.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <SectionHeading title="Sectors & Specializations" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div key={ind.title} className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <ind.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{ind.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Our model is flexible and adaptable — if your industry or product category isn't listed, we can still help. Reach out to discuss your requirements.
        </p>
      </SectionWrapper>

      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">Don't see your industry? Let's talk.</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 mt-8 rounded-lg bg-secondary px-7 py-3.5 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
