import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({ title: "Inquiry Submitted", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const inputClass = "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <>
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground max-w-3xl">Contact Us</h1>
          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
            Let's simplify your sourcing process. Share your requirements and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <SectionHeading title="Submit Your Inquiry" center={false} />
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input name="name" placeholder="Full Name *" required className={inputClass} />
                <input name="email" type="email" placeholder="Email Address *" required className={inputClass} />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input name="company" placeholder="Company Name" className={inputClass} />
                <input name="country" placeholder="Country" className={inputClass} />
              </div>
              <select name="inquiry_type" className={inputClass} defaultValue="">
                <option value="" disabled>Inquiry Type</option>
                <option>Product Sourcing</option>
                <option>Quality Assurance</option>
                <option>Export & Logistics</option>
                <option>Documentation & Compliance</option>
                <option>Custom Requirements</option>
                <option>General Inquiry</option>
              </select>
              <input name="product" placeholder="Product Requirement" className={inputClass} />
              <textarea name="message" placeholder="Tell us more about your requirements..." rows={5} className={inputClass} />
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <SectionHeading title="Get in Touch" center={false} />
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "info@shreysure.com" },
                { icon: Phone, label: "Phone", value: "+91-XXXX-XXXXXX" },
                { icon: MapPin, label: "Location", value: "India" },
                { icon: Clock, label: "Response Time", value: "Within 24 hours" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-accent rounded-xl p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you're exploring new suppliers or scaling your procurement, our team is ready to support you with a free consultation.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
