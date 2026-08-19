import { PageHeader } from "@/components/ui/PageHeader";
import { Services as ServicesSection } from "@/components/Services/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";
import { CTA } from "@/components/CTA/CTA";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Travel services for every trip"
        description="Airport runs, outstation drives, hourly rentals, tour packages and car rental, all from Bangalore."
        image="https://picsum.photos/seed/hkgn-services-header/1800/700"
      />
      <ServicesSection />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
