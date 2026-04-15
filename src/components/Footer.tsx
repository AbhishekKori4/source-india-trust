import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <img src={logo} alt="ShreySure Global" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm opacity-80 leading-relaxed max-w-xs">
              Global sourcing and export facilitation from India, delivered with trust, transparency, and professional integrity.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-70">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2"><Mail size={16} /> info@shreysure.com</li>
              <li className="flex items-center gap-2"><Phone size={16} /> +91-XXXX-XXXXXX</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-xs opacity-60">
          © {new Date().getFullYear()} ShreySure Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
