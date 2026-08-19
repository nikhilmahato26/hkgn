import { PageHeader } from "@/components/ui/PageHeader";
import { Contact as ContactSection } from "@/components/Contact/Contact";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's plan your ride"
        description="Send your trip details and the HKGN team will get back to confirm your booking."
        image="https://picsum.photos/seed/hkgn-contact-header/1800/700"
      />
      <ContactSection />
    </>
  );
}
