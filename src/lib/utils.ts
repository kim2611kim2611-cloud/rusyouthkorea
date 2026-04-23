import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNextSaturday20KST(): Date {
  const now = new Date();
  const koreaOffset = 9 * 60;
  const localOffset = now.getTimezoneOffset();
  const koreaTime = new Date(now.getTime() + (koreaOffset + localOffset) * 60000);

  const dayOfWeek = koreaTime.getDay();
  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;

  const nextSat = new Date(koreaTime);
  nextSat.setDate(koreaTime.getDate() + (daysUntilSaturday === 0 && koreaTime.getHours() >= 20 ? 7 : daysUntilSaturday));
  nextSat.setHours(20, 0, 0, 0);

  const nextSatUTC = new Date(nextSat.getTime() - koreaOffset * 60000);
  return nextSatUTC;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match ? match[1] : null;
}

export function getYouTubeThumbnail(url: string): string {
  const id = getYouTubeId(url);
  if (!id) return "";
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}
