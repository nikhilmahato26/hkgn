import * as Icons from "lucide-react";
import { whyChooseUs } from "@/data/services";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function WhyChooseUs() {
  return (
    <section className="bg-navy-950 py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Why travel with HKGN</h2>
          <p className="mt-3 text-base text-white/70">
            Practical choices that make booking a ride straightforward, from pickup to drop.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-16 md:grid-cols-4 md:gap-y-12">
          {whyChooseUs.map((item) => {
            const Icon = Icons[item.icon] ?? Icons.Check;
            return (
              <RevealItem key={item.title} className="flex flex-col items-start gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/30 text-gold-400">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold leading-snug text-white md:text-base">{item.title}</span>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
