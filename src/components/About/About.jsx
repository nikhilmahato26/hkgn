import { Reveal } from "@/components/ui/Reveal";

const CHIPS = ["Airport Transfers", "Outstation Travel", "Hourly Rentals", "Tour Packages", "Car Rental"];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal className="order-2 md:order-1">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
            Your travel partner in Bangalore
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-grey-600">
            HKGN Tours & Travel provides convenient transportation and travel solutions from Bangalore, offering
            airport transfers, outstation travel, hourly rentals, tour packages and car rental services.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-navy-900/12 bg-navy-900/5 px-4 py-2 text-sm font-medium text-navy-800"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Vidhana_Soudha_LE.jpg/1920px-Vidhana_Soudha_LE.jpg"
              alt="Vidhana Soudha, Bangalore, HKGN Tours & Travel service area"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
