import { PICKUPS, type Pickup } from "./schedule.js";

const WEBHOOK_URL = process.env.TRMNL_WEBHOOK_URL;

function parseISODate(iso: string): Date {
  // Parse as a local calendar date (no time-of-day, no timezone surprises).
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function humanDate(d: Date): string {
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function summarize(extras: Pickup["extras"]): string {
  const parts = ["Recycling", "Compost"];
  if (extras.includes("trash")) parts.splice(1, 0, "Trash");
  if (extras.includes("yard_waste")) parts.push("Yard Waste");
  return parts.join(" + ");
}

function findUpcomingPickup(today: Date): Pickup | undefined {
  return PICKUPS.filter((p) => parseISODate(p.date).getTime() >= today.getTime()).sort(
    (a, b) => parseISODate(a.date).getTime() - parseISODate(b.date).getTime()
  )[0];
}

async function main() {
  if (!WEBHOOK_URL) {
    throw new Error("Missing TRMNL_WEBHOOK_URL environment variable.");
  }

  const today = startOfToday();
  const next = findUpcomingPickup(today);

  if (!next) {
    console.warn(
      "No upcoming pickup dates found in schedule.ts — it likely needs to be extended. Skipping send."
    );
    return;
  }

  const pickupDate = parseISODate(next.date);
  const daysUntil = Math.round(
    (pickupDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const payload = {
    merge_variables: {
      pickup_date: next.date,
      pickup_date_human: humanDate(pickupDate),
      days_until: daysUntil,
      recycling: true,
      compost: true,
      trash: next.extras.includes("trash"),
      yard_waste: next.extras.includes("yard_waste"),
      items_summary: summarize(next.extras),
      updated_at: new Date().toISOString(),
    },
  };

  console.log("Sending payload to TRMNL:", JSON.stringify(payload, null, 2));

  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`TRMNL webhook returned ${res.status}: ${body}`);
  }

  console.log(`Sent successfully (${res.status}).`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
