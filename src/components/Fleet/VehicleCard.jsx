import { Users, MessageCircle } from "lucide-react";
import { RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function VehicleCard({ vehicle, featured = false }) {
  const enquireUrl = `https://wa.me/916360920705?text=${encodeURIComponent(
    `Hi HKGN Tours & Travel, I'd like to enquire about the ${vehicle.name} for an upcoming trip.`
  )}`;

  if (featured) {
    return (
      <RevealItem className="group grid overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900 shadow-navy-lg md:grid-cols-2">
        <div className="relative min-h-[240px] overflow-hidden md:min-h-full">
          <img
            src={vehicle.image}
            alt={`${vehicle.name}, HKGN Tours & Travel fleet vehicle`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy-950">
            Featured
          </span>
        </div>
        <div className="flex flex-col justify-center p-7 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-400">{vehicle.category}</span>
          <h3 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">{vehicle.name}</h3>
          {vehicle.seating && (
            <div className="mt-3 flex items-center gap-2 text-sm font-medium text-white/80">
              <Users size={16} className="text-gold-400" /> {vehicle.seating}
            </div>
          )}
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">{vehicle.useCases}</p>
          <a
            href={enquireUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-all hover:-translate-y-[1px] hover:bg-gold-400"
          >
            <MessageCircle size={16} /> Enquire Now
          </a>
        </div>
      </RevealItem>
    );
  }

  return (
    <RevealItem className="group flex flex-col overflow-hidden rounded-2xl border border-grey-100 bg-white shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={vehicle.image}
          alt={`${vehicle.name}, HKGN Tours & Travel fleet vehicle`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">{vehicle.category}</span>
        <h3 className="mt-1.5 text-lg font-bold text-navy-900">{vehicle.name}</h3>
        {vehicle.seating && (
          <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-grey-600">
            <Users size={15} className="text-gold-600" /> {vehicle.seating}
          </div>
        )}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-grey-600">{vehicle.useCases}</p>
        <a
          href={enquireUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "focus-ring mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-[1px] hover:bg-navy-900 hover:text-white"
          )}
        >
          <MessageCircle size={15} /> Enquire Now
        </a>
      </div>
    </RevealItem>
  );
}
