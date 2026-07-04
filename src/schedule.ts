/**
 * Trash pickup schedule.
 *
 * Recycling and compost are picked up every listed date.
 * `extras` holds anything additional for that date: "trash" and/or "yard_waste".
 *
 * Update this list whenever your municipality publishes a new schedule —
 * the script will warn (and skip sending) once it runs out of future dates.
 */

export type Extra = "trash" | "yard_waste";

export interface Pickup {
  /** ISO date string, YYYY-MM-DD */
  date: string;
  extras: Extra[];
}

export const PICKUPS: Pickup[] = [
  { date: "2026-05-12", extras: ["trash", "yard_waste"] },
  { date: "2026-05-20", extras: [] },
  { date: "2026-05-27", extras: ["trash"] },
  { date: "2026-06-03", extras: ["yard_waste"] },
  { date: "2026-06-10", extras: ["trash"] },
  { date: "2026-06-17", extras: [] },
  { date: "2026-06-24", extras: ["trash"] },
  { date: "2026-07-02", extras: [] },
  { date: "2026-07-09", extras: ["trash", "yard_waste"] },
  { date: "2026-07-16", extras: [] },
  { date: "2026-07-23", extras: ["trash"] },
  { date: "2026-07-30", extras: [] },
  { date: "2026-08-07", extras: ["trash"] },
  { date: "2026-08-14", extras: ["yard_waste"] },
  { date: "2026-08-21", extras: ["trash"] },
  { date: "2026-08-28", extras: [] },
  { date: "2026-09-04", extras: ["trash"] },
  { date: "2026-09-14", extras: ["trash", "yard_waste"] },
  { date: "2026-09-21", extras: [] },
  { date: "2026-09-28", extras: ["trash"] },
];
