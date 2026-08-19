import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealItem } from "@/components/ui/Reveal";

export function ServiceCard({ service, variant = "flat", image, span = "" }) {
  const Icon = Icons[service.icon] ?? Icons.Car;

  if (variant === "image") {
    return (
      <RevealItem
        id={service.id}
        className={cn(
          "group relative flex min-h-[260px] scroll-mt-24 flex-col justify-end overflow-hidden rounded-2xl p-6 md:min-h-[300px] md:p-7",
          span
        )}
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/10" />
        <div className="relative">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500 text-navy-950">
            <Icon size={20} strokeWidth={1.75} />
          </span>
          <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
          <p className="mt-1.5 max-w-xs text-sm text-white/75">{service.description}</p>
        </div>
      </RevealItem>
    );
  }

  return (
    <RevealItem
      id={service.id}
      className={cn(
        "flex scroll-mt-24 flex-col rounded-2xl border border-grey-100 bg-white p-6 shadow-navy-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md md:p-7",
        span
      )}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900/5 text-navy-900">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <h3 className="mt-4 text-lg font-bold text-navy-900">{service.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-grey-600">{service.description}</p>
    </RevealItem>
  );
}
