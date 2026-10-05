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
  { date: "2026-10-06", extras: [] },
  { date: "2026-10-14", extras: ["trash", "yard_waste"] },
  { date: "2026-10-21", extras: [] },
  { date: "2026-10-28", extras: ["trash"] },
  { date: "2026-11-04", extras: ["yard_waste"] },
  { date: "2026-11-11", extras: ["trash"] },
  { date: "2026-11-18", extras: [] },
  { date: "2026-11-25", extras: ["trash"] },
  { date: "2026-12-02", extras: ["yard_waste"] },
  { date: "2026-12-09", extras: ["trash"] },
  { date: "2026-12-16", extras: [] },
  { date: "2026-12-23", extras: ["trash"] },
  { date: "2026-12-31", extras: [] },
  // 2027
  { date: "2027-01-08", extras: ["trash"] },
  { date: "2027-01-15", extras: [] },
  { date: "2027-01-22", extras: ["trash"] },
  { date: "2027-01-29", extras: [] },
  { date: "2027-02-05", extras: ["trash"] },
  { date: "2027-02-12", extras: [] },
  { date: "2027-02-22", extras: ["trash"] },
  { date: "2027-03-01", extras: ["trash"] },
  { date: "2027-03-08", extras: [] },
  { date: "2027-03-15", extras: ["trash"] },
  { date: "2027-03-22", extras: [] },
  { date: "2027-03-30", extras: ["trash"] },
];
