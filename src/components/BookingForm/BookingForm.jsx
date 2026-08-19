import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { SendHorizonal, CheckCircle2 } from "lucide-react";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { vehicleOptions } from "@/data/vehicles";
import { tripTypes } from "@/data/services";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),
  pickupLocation: z.string().min(2, "Pickup location is required"),
  destination: z.string().min(2, "Destination is required"),
  travelDate: z.string().min(1, "Select a travel date"),
  pickupTime: z.string().min(1, "Select a pickup time"),
  vehicleType: z.string().min(1, "Select a vehicle"),
  tripType: z.string().min(1, "Select a trip type"),
  passengers: z.string().min(1, "Enter number of passengers"),
  message: z.string().optional(),
});

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    const lines = [
      "New booking enquiry from HKGN website:",
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Pickup: ${data.pickupLocation}`,
      `Destination: ${data.destination}`,
      `Date: ${data.travelDate}`,
      `Time: ${data.pickupTime}`,
      `Vehicle: ${data.vehicleType}`,
      `Trip Type: ${data.tripType}`,
      `Passengers: ${data.passengers}`,
      data.message ? `Message: ${data.message}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/916360920705?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
  };

  return (
    <section id="booking" className="relative z-10 scroll-mt-24 -mt-16 md:-mt-24">
      <div className="container-page">
        <Reveal
          className="rounded-2xl border border-white/10 bg-white/95 p-6 shadow-navy-lg backdrop-blur-md md:p-9"
        >
          <div className="mb-6 flex flex-col gap-1 md:mb-8">
            <h2 className="text-xl font-bold text-navy-900 md:text-2xl">Quick Booking Enquiry</h2>
            <p className="text-sm text-grey-600">Share your trip details and we will confirm availability.</p>
          </div>

          {submitted && (
            <div className="mb-6 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              <CheckCircle2 size={18} /> Enquiry ready. Continue on WhatsApp to confirm your booking.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Field label="Name" htmlFor="name" error={errors.name?.message}>
                <Input id="name" placeholder="Your full name" {...register("name")} />
              </Field>

              <Field label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
                <Input id="phone" type="tel" placeholder="98765 43210" {...register("phone")} />
              </Field>

              <Field label="Pickup Location" htmlFor="pickupLocation" error={errors.pickupLocation?.message}>
                <Input id="pickupLocation" placeholder="e.g. Koramangala" {...register("pickupLocation")} />
              </Field>

              <Field label="Destination" htmlFor="destination" error={errors.destination?.message}>
                <Input id="destination" placeholder="e.g. Kempegowda Airport" {...register("destination")} />
              </Field>

              <Field label="Travel Date" htmlFor="travelDate" error={errors.travelDate?.message}>
                <Input id="travelDate" type="date" {...register("travelDate")} />
              </Field>

              <Field label="Pickup Time" htmlFor="pickupTime" error={errors.pickupTime?.message}>
                <Input id="pickupTime" type="time" {...register("pickupTime")} />
              </Field>

              <Field label="Vehicle Type" htmlFor="vehicleType" error={errors.vehicleType?.message}>
                <Select id="vehicleType" defaultValue="" {...register("vehicleType")}>
                  <option value="" disabled>
                    Select a vehicle
                  </option>
                  {vehicleOptions.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Trip Type" htmlFor="tripType" error={errors.tripType?.message}>
                <Select id="tripType" defaultValue="" {...register("tripType")}>
                  <option value="" disabled>
                    Select trip type
                  </option>
                  {tripTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field label="Number of Passengers" htmlFor="passengers" error={errors.passengers?.message}>
                <Input id="passengers" type="number" min="1" placeholder="e.g. 4" {...register("passengers")} />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Message" htmlFor="message">
                <Textarea id="message" placeholder="Any additional details about your trip" {...register("message")} />
              </Field>
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="mt-6 w-full md:w-auto">
              <SendHorizonal size={18} /> Get A Quote
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
