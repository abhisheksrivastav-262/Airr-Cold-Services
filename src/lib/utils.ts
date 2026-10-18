import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateBookingRef(): string {
  const prefix = "ACS";
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${ts}-${rand}`;
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateTime(date: Date | string): string {
  return new Date(date).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function whatsappUrl(message: string, phone = "917666697586"): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function telUrl(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
