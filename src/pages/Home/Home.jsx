import { Hero } from "@/components/Hero/Hero";
import { BookingForm } from "@/components/BookingForm/BookingForm";
import { Services } from "@/components/Services/Services";
import { Fleet } from "@/components/Fleet/Fleet";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";
import { UseCases } from "@/components/UseCases/UseCases";
import { About } from "@/components/About/About";
import { CTA } from "@/components/CTA/CTA";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <BookingForm />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <UseCases />
      <About />
      <CTA />
      <Contact />
    </>
  );
}
