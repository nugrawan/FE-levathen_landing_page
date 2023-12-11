import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function rc(...inputs) {
  return twMerge(clsx(inputs));
}
