import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";

const byId = Object.fromEntries(services.map((s) => [s.id, s]));

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
            Travel services built around your journey
          </h2>
          <p className="mt-3 text-base text-grey-600">
            From airport runs to multi-state road trips, HKGN Tours & Travel keeps every leg of the journey covered.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3">
          <ServiceCard
            service={byId["airport-transfers"]}
            variant="image"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Kempegowda_International_Airport%2C_Bengaluru_%28Ank_Kumar%2C_Infosys%29_02.jpg/1920px-Kempegowda_International_Airport%2C_Bengaluru_%28Ank_Kumar%2C_Infosys%29_02.jpg"
            span="md:col-span-2"
          />
          <ServiceCard service={byId["outstation-travel"]} variant="flat" />

          <ServiceCard service={byId["any-state-travel"]} variant="flat" />
          <ServiceCard service={byId["hourly-rental"]} variant="flat" />
          <ServiceCard service={byId["tour-packages"]} variant="flat" />

          <ServiceCard
            service={byId["car-rental"]}
            variant="image"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/An_urban_road_and_traffic_in_Bangalore_Karnataka_India_April_2014.jpg/1920px-An_urban_road_and_traffic_in_Bangalore_Karnataka_India_April_2014.jpg"
            span="md:col-span-3"
          />
        </RevealGroup>
      </div>
    </section>
  );
}
