import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Globe, BellRing, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";
import contactBg from "@/assets/contact-port.png";

type Mode = "importer" | "exporter";

const inputClass =
  "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
const labelClass = "block text-sm font-medium text-foreground mb-1.5";

export default function Contact() {
  const { toast } = useToast();
  const [mode, setMode] = useState<Mode>("importer");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Inquiry Submitted",
        description:
          mode === "importer"
            ? "We'll review your requirements and connect you with verified Indian exporters within 24 hours."
            : "Thanks for registering. Our team will be in touch with matching buyer opportunities.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${contactBg})` }} />
        <div className="absolute inset-0 bg-primary/40" />
        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground max-w-3xl">
            Let's Connect
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl leading-relaxed">
            Whether you're sourcing from India or exporting from it, share your details and our team
            will respond within 24 hours.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {/* Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-muted border border-border mb-8">
              <button
                type="button"
                onClick={() => setMode("importer")}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  mode === "importer"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I'm an Importer
              </button>
              <button
                type="button"
                onClick={() => setMode("exporter")}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  mode === "exporter"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I'm an Exporter
              </button>
            </div>

            {mode === "importer" ? (
              <ImporterForm onSubmit={handleSubmit} submitting={submitting} />
            ) : (
              <ExporterForm onSubmit={handleSubmit} submitting={submitting} />
            )}
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
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                      {label}
                    </p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-accent rounded-xl p-6 space-y-3">
              {mode === "importer" ? (
                <>
                  <Badge icon={ShieldCheck} text="Completely Private" />
                  <Badge icon={ShieldCheck} text="Secure Submissions" />
                  <Badge icon={BellRing} text="Instant Notifications" />
                </>
              ) : (
                <>
                  <Badge icon={ShieldCheck} text="Free Registration" />
                  <Badge icon={Globe} text="Access Global Buyers" />
                  <Badge icon={TrendingUp} text="Grow Your Business" />
                </>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

function Badge({ icon: Icon, text }: { icon: typeof ShieldCheck; text: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm text-foreground">
      <Icon size={16} className="text-secondary flex-shrink-0" />
      <span className="font-medium">{text}</span>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {children}
    </div>
  );
}

/* -------------------- IMPORTER FORM -------------------- */
function ImporterForm({
  onSubmit,
  submitting,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
}) {
  return (
    <>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Submit your import requirements privately. Our team will review and connect you with
        suitable Indian exporters within 24 hours.
      </p>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Your Name" required>
            <input name="name" required className={inputClass} />
          </Field>
          <Field label="Your Company" required>
            <input name="company" required className={inputClass} />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Your Email" required>
            <input type="email" name="email" required className={inputClass} />
          </Field>
          <Field label="Country" required>
            <input name="country" required className={inputClass} />
          </Field>
        </div>

        <Field label="Product Category" required>
          <input name="product_category" required className={inputClass} />
        </Field>

        <Field label="Detailed Product Description" required>
          <textarea name="description" required rows={4} className={inputClass} />
        </Field>

        <Field label="Product Images">
          <input type="file" name="images" multiple accept="image/*" className={inputClass} />
        </Field>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Expected Quantity" required>
            <input name="quantity" required className={inputClass} />
          </Field>
          <Field label="Budget Range (USD)" required>
            <select name="budget" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select budget</option>
              <option>Under $1,000</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000 - $25,000</option>
              <option>$25,000 - $50,000</option>
              <option>$50,000 - $100,000</option>
              <option>$100,000 - $500,000</option>
              <option>Above $500,000</option>
              <option>Prefer not to disclose</option>
            </select>
          </Field>
        </div>

        <Field label="Required Timeline" required>
          <select name="timeline" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select timeline</option>
            <option>ASAP (Within 2 weeks)</option>
            <option>Within 1 month</option>
            <option>Within 2-3 months</option>
            <option>Within 6 months</option>
            <option>Flexible timing</option>
          </select>
        </Field>

        <Field label="Additional Requirements / Notes">
          <textarea name="notes" rows={3} className={inputClass} />
        </Field>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Phone Number">
            <input name="phone" className={inputClass} />
          </Field>
          <Field label="Website / Online Store URL">
            <input name="website" className={inputClass} />
          </Field>
        </div>

        <Field label="Preferred Communication Method" required>
          <div className="flex flex-wrap gap-4 pt-1">
            {["Email", "WhatsApp", "Phone Call", "Any method"].map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="contact_method"
                  value={opt}
                  required
                  className="accent-primary"
                />
                {opt}
              </label>
            ))}
          </div>
        </Field>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Submit Import Request"}
        </button>
      </form>
    </>
  );
}

/* -------------------- EXPORTER FORM -------------------- */
function ExporterForm({
  onSubmit,
  submitting,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  submitting: boolean;
}) {
  return (
    <>
      <p className="text-muted-foreground mb-8 leading-relaxed">
        Register your export capabilities and get connected with international buyers. We match you
        with genuine buyers looking for your products.
      </p>
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Email" required>
            <input type="email" name="email" required className={inputClass} />
          </Field>
          <Field label="Contact Person Name" required>
            <input name="contact_name" required className={inputClass} />
          </Field>
        </div>

        <Field label="Company / Business Name" required>
          <input name="company" required className={inputClass} />
        </Field>

        <Field label="Business Type" required>
          <select name="business_type" required defaultValue="" className={inputClass}>
            <option value="" disabled>Select business type</option>
            <option>Manufacturer</option>
            <option>Exporter / Trader</option>
            <option>Manufacturer + Exporter</option>
            <option>Agricultural Producer</option>
            <option>Handicrafts Producer</option>
            <option>Service Provider</option>
            <option>Other</option>
          </select>
          <p className="text-xs text-muted-foreground mt-1.5">
            If you selected "Other", please specify in Additional Notes below.
          </p>
        </Field>

        <Field label="State & City" required>
          <input name="location" required className={inputClass} />
        </Field>

        <Field label="Product Categories You Export" required>
          <input name="product_categories" required className={inputClass} />
        </Field>

        <Field label="Detailed Product Description" required>
          <textarea name="description" required rows={4} className={inputClass} />
        </Field>

        <Field label="Product Images">
          <input type="file" name="images" multiple accept="image/*" className={inputClass} />
        </Field>

        <Field label="Production / Supply Capacity (per month)" required>
          <input name="capacity" required className={inputClass} />
        </Field>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Years of Experience in Export" required>
            <select name="export_experience" required defaultValue="" className={inputClass}>
              <option value="" disabled>Select</option>
              <option>Less than 1 year</option>
              <option>1-3 years</option>
              <option>3-5 years</option>
              <option>5-10 years</option>
              <option>10-20 years</option>
              <option>More than 20 years</option>
            </select>
          </Field>
          <Field label="Years of Experience in Manufacturing">
            <select name="mfg_experience" defaultValue="" className={inputClass}>
              <option value="" disabled>Select (if applicable)</option>
              <option>Less than 1 year</option>
              <option>1-3 years</option>
              <option>3-5 years</option>
              <option>5-10 years</option>
              <option>10-20 years</option>
              <option>More than 20 years</option>
            </select>
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Countries You Currently Export To">
            <input name="current_countries" className={inputClass} />
          </Field>
          <Field label="Target Export Countries / Regions" required>
            <input name="target_countries" required className={inputClass} />
          </Field>
        </div>

        <Field label="Certifications You Have">
          <input name="certifications" className={inputClass} placeholder="ISO, FDA, GOTS, etc." />
        </Field>

        <Field label="Minimum Order Quantity (MOQ)" required>
          <input name="moq" required className={inputClass} />
        </Field>

        <Field label="Company Strengths & Competitive Advantages" required>
          <textarea name="strengths" required rows={3} className={inputClass} />
        </Field>

        <Field label="Additional Requirements / Notes">
          <textarea name="notes" rows={3} className={inputClass} />
        </Field>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Phone Number">
            <input name="phone" className={inputClass} />
          </Field>
          <Field label="Website / Online Store URL">
            <input name="website" className={inputClass} />
          </Field>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {submitting ? "Submitting..." : "Register as Exporter"}
        </button>
      </form>
    </>
  );
}
