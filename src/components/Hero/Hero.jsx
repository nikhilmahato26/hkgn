import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { PHONE_DISPLAY, TEL_URL } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function useHeroParallax(reduce) {
  const ref = useRef(null);

  useEffect(() => {
    if (reduce || !ref.current) return;
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current.closest("section"),
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, [reduce]);

  return ref;
}

export function Hero() {
  const reduce = useReducedMotion();
  const imgRef = useHeroParallax(reduce);

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-navy-950 pt-24 pb-24 md:pb-32">
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src="https://picsum.photos/seed/hkgn-hero-innova-road/2000/1400"
          alt="Toyota Innova Crysta on a Bangalore highway at dusk"
          className="h-[112%] w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/10 to-transparent" />
      </div>

      <div className="container-page relative flex min-h-[calc(100dvh-6rem)] items-center md:min-h-[calc(100dvh-8rem)]">
        <div className="max-w-2xl">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl"
          >
            Reliable Travel. Comfortable Rides. Every Journey.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg text-base text-white/80 md:text-lg"
          >
            Airport Transfers, Outstation Trips, Hourly Rentals & Tour Packages from Bangalore.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button as={Link} to="/#booking" size="lg">
              Book Your Ride <ArrowRight size={18} />
            </Button>
            <Button as="a" href={TEL_URL} variant="outline" size="lg">
              <Phone size={18} /> Call Now
            </Button>
          </motion.div>

          <motion.a
            href={TEL_URL}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md font-mono text-sm tracking-wide text-white/70 hover:text-gold-300"
          >
            <Phone size={14} /> {PHONE_DISPLAY}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
