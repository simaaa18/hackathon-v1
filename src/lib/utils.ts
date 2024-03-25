import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const URL_BACKEND =
  process.env.NODE_ENV === "production"
    ? "http://localhost:8000/api/v1/"
    : "http://localhost:8000/api/v1/";

export const URL_BE_BASE =
  process.env.NODE_ENV === "production"
    ? "http://localhost:8000"
    : "http://localhost:8000";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
