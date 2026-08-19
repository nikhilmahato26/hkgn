import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import * as Icons from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCases } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";

const IMAGE_SEEDS = [
  "hkgn-usecase-airport",
  "hkgn-usecase-business",
  "hkgn-usecase-family",
  "hkgn-usecase-outstation",
  "hkgn-usecase-weekend",
  "hkgn-usecase-sightseeing",
  "hkgn-usecase-group",
  "hkgn-usecase-hourly",
];

export function UseCases() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true, containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback((api) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">
              Wherever your trip takes you
            </h2>
            <p className="mt-3 text-base text-grey-600">A ride ready for every kind of journey across Bangalore and beyond.</p>
          </Reveal>

          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous"
              disabled={!canPrev}
              onClick={() => emblaApi?.scrollPrev()}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-colors hover:bg-navy-900 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy-900"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next"
              disabled={!canNext}
              onClick={() => emblaApi?.scrollNext()}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-colors hover:bg-navy-900 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-navy-900"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden md:mt-12" ref={emblaRef}>
          <div className="flex gap-4 px-0.5">
            {useCases.map((item, i) => {
              const Icon = Icons[item.icon] ?? Icons.MapPin;
              return (
                <div
                  key={item.title}
                  className="relative aspect-[3/4] w-[62vw] shrink-0 overflow-hidden rounded-2xl sm:w-[38vw] md:w-[24%] lg:w-[22%]"
                >
                  <img
                    src={`https://picsum.photos/seed/${IMAGE_SEEDS[i]}/700/900`}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-navy-950">
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-bold text-white">{item.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
