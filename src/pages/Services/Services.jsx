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
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/An_urban_road_and_traffic_in_Bangalore_Karnataka_India_April_2014.jpg/1920px-An_urban_road_and_traffic_in_Bangalore_Karnataka_India_April_2014.jpg"
      />
      <ServicesSection />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
