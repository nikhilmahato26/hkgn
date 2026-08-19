import { PageHeader } from "@/components/ui/PageHeader";
import { Fleet as FleetSection } from "@/components/Fleet/Fleet";
import { CTA } from "@/components/CTA/CTA";

export default function FleetPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Fleet"
        title="A vehicle for every kind of journey"
        description="Sedans for the city, SUVs for the highway, and a Tempo Traveller for the whole group."
        image="https://picsum.photos/seed/hkgn-fleet-header/1800/700"
      />
      <FleetSection className="py-16 md:py-24" />
      <CTA />
    </>
  );
}
