import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { PHONE_DISPLAY, TEL_URL } from "@/lib/utils";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
      <div className="pointer-events-none absolute -right-24 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="container-page relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Planning your next journey?
          </h2>
          <p className="mt-4 text-base text-white/75">
            Book a comfortable ride from Bangalore for airport transfers, local travel, outstation journeys and tour
            packages.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-shrink-0 flex-wrap gap-4">
          <Button as={Link} to="/#booking" size="lg">
            Book Now <ArrowRight size={18} />
          </Button>
          <Button as="a" href={TEL_URL} variant="outline" size="lg">
            <Phone size={18} /> Call {PHONE_DISPLAY}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
