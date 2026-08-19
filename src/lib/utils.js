import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const PHONE_DISPLAY = "6360920705";
export const PHONE_TEL = "+916360920705";
export const EMAIL = "vassilsulthan@gmail.com";
export const WHATSAPP_URL = `https://wa.me/916360920705?text=${encodeURIComponent(
  "Hi HKGN Tours & Travel, I'd like to enquire about a booking."
)}`;
export const TEL_URL = `tel:${PHONE_TEL}`;
