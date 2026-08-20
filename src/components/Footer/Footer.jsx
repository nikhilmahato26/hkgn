import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE_DISPLAY, EMAIL, TEL_URL } from "@/lib/utils";

const SERVICES = ["Airport Transfers", "Outstation Travel", "Hourly Rental", "Tour Packages", "Car Rental"];
const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 pt-16 text-white/70">
      <div className="container-page grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/images/logo.jpg" alt="HKGN Logo" className="h-8 w-8 rounded-lg object-cover" />
            <span className="text-base font-bold text-white">HKGN Tours & Travel</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Convenient transportation and travel solutions from Bangalore, for city and outstation journeys alike.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Services</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {SERVICES.map((s) => (
              <li key={s}>
                <Link to="/services" className="focus-ring text-sm transition-colors hover:text-gold-400">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className="focus-ring text-sm transition-colors hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-gold-400" />
              <a href={TEL_URL} className="focus-ring">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-gold-400" />
              <a href={`mailto:${EMAIL}`} className="focus-ring break-all">
                {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} className="text-gold-400" /> Bangalore
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-page text-center text-xs text-white/50">
          © {new Date().getFullYear()} HKGN Tours & Travel. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
