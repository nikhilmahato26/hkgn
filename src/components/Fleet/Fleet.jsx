import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "./VehicleCard";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";

export function Fleet({ eyebrow = false, className = "py-20 md:py-28" }) {
  const featured = vehicles.find((v) => v.featured);
  const rest = vehicles.filter((v) => !v.featured);

  return (
    <section id="fleet" className={`scroll-mt-20 ${className}`}>
      <div className="container-page">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">Our Fleet</h2>
          <p className="mt-3 text-base text-grey-600">
            A well-maintained lineup for every trip size, from a solo airport run to a full tour group.
          </p>
        </Reveal>

        {featured && (
          <Reveal className="mt-10 md:mt-12" delay={0.1}>
            <VehicleCard vehicle={featured} featured />
          </Reveal>
        )}

        <RevealGroup className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
