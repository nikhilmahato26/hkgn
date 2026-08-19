import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Phone, Mail, MapPin, SendHorizonal, CheckCircle2 } from "lucide-react";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { serviceOptions } from "@/data/services";
import { PHONE_DISPLAY, EMAIL, TEL_URL } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  serviceRequired: z.string().min(1, "Select a service"),
  pickupLocation: z.string().min(2, "Pickup location is required"),
  destination: z.string().min(2, "Destination is required"),
  message: z.string().optional(),
});

export function Contact({ className = "py-20 md:py-28" }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    const lines = [
      "New enquiry from HKGN website contact form:",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      data.email ? `Email: ${data.email}` : null,
      `Service Required: ${data.serviceRequired}`,
      `Pickup: ${data.pickupLocation}`,
      `Destination: ${data.destination}`,
      data.message ? `Message: ${data.message}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/916360920705?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className={`scroll-mt-20 ${className}`}>
      <div className="container-page grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col justify-between rounded-2xl bg-navy-900 p-8 text-white md:p-10">
            <div>
              <h2 className="text-2xl font-extrabold md:text-3xl">HKGN Tours & Travel</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Reach out for airport transfers, outstation trips, hourly rentals, tour packages and car rental
                across Bangalore.
              </p>
            </div>

            <ul className="mt-10 flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-400">
                  <Phone size={17} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-white/50">Phone</p>
                  <a href={TEL_URL} className="focus-ring font-mono text-base font-medium text-white">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-400">
                  <Mail size={17} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-white/50">Email</p>
                  <a href={`mailto:${EMAIL}`} className="focus-ring break-all text-base font-medium text-white">
                    {EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-400">
                  <MapPin size={17} />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-white/50">Location</p>
                  <p className="text-base font-medium text-white">Bangalore</p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="h-full rounded-2xl border border-grey-100 bg-white p-6 shadow-navy-sm md:p-8">
            {submitted && (
              <div className="mb-6 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                <CheckCircle2 size={18} /> Enquiry ready. Continue on WhatsApp to reach our team.
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Name" htmlFor="c-name" error={errors.name?.message}>
                <Input id="c-name" placeholder="Your full name" {...register("name")} />
              </Field>
              <Field label="Phone" htmlFor="c-phone" error={errors.phone?.message}>
                <Input id="c-phone" type="tel" placeholder="98765 43210" {...register("phone")} />
              </Field>
              <Field label="Email" htmlFor="c-email" error={errors.email?.message}>
                <Input id="c-email" type="email" placeholder="you@example.com" {...register("email")} />
              </Field>
              <Field label="Service Required" htmlFor="c-service" error={errors.serviceRequired?.message}>
                <Select id="c-service" defaultValue="" {...register("serviceRequired")}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Pickup Location" htmlFor="c-pickup" error={errors.pickupLocation?.message}>
                <Input id="c-pickup" placeholder="e.g. Indiranagar" {...register("pickupLocation")} />
              </Field>
              <Field label="Destination" htmlFor="c-destination" error={errors.destination?.message}>
                <Input id="c-destination" placeholder="e.g. Mysuru" {...register("destination")} />
              </Field>
              <div className="md:col-span-2">
                <Field label="Message" htmlFor="c-message">
                  <Textarea id="c-message" placeholder="Tell us more about your trip" {...register("message")} />
                </Field>
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting} className="md:col-span-2 md:w-fit">
                <SendHorizonal size={18} /> Submit Enquiry
              </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
