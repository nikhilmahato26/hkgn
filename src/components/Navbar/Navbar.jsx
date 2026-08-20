import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PHONE_DISPLAY, TEL_URL } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Tour Packages", href: "/services#tour-packages" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled((prev) => {
      if (latest > 24 && !prev) return true;
      if (latest <= 24 && prev) return false;
      return prev;
    });
  });

  const solid = scrolled || location.pathname !== "/" || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-paper/95 shadow-navy-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-[72px]">
        <Link to="/" className="focus-ring flex items-center gap-2.5 rounded-lg" onClick={() => setOpen(false)}>
          <img src="/images/logo.jpg" alt="HKGN Logo" className="shrink-0 h-[72px] w-[72px] md:h-[52px] md:w-[52px] rounded-xl object-cover shadow-sm" />
          <span className={`text-xl font-black leading-tight md:text-base md:font-bold ${solid ? "text-navy-900" : "text-white"}`}>
            HKGN Tours <span className="text-gold-500">&</span> Travel
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`focus-ring rounded-md text-sm font-medium transition-colors ${
                  solid ? "text-navy-800 hover:text-gold-600" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={TEL_URL}
            className={`focus-ring flex items-center gap-1.5 rounded-md text-sm font-semibold ${
              solid ? "text-navy-900" : "text-white"
            }`}
          >
            <Phone size={16} strokeWidth={2} className="text-gold-500" />
            {PHONE_DISPLAY}
          </a>
          <Button as={Link} to="/#booking" size="default">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`focus-ring flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            solid ? "text-navy-900" : "text-white"
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-grey-100 bg-paper lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block rounded-lg px-3 py-3 text-base font-medium text-navy-900 active:bg-navy-900/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-3 px-3">
                <a href={TEL_URL} className="flex items-center gap-2 text-base font-semibold text-navy-900">
                  <Phone size={18} className="text-gold-500" /> {PHONE_DISPLAY}
                </a>
                <Button as={Link} to="/#booking" onClick={() => setOpen(false)} className="w-full">
                  Book Now
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
