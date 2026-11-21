import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { HOURS, R } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Visit Us",
  description: "Address, hours and reservations for Olive & Ember. Demo details for a fictional restaurant in Claremont, California.",
};

function MapPlaceholder() {
  return (
    <div role="img" aria-label="Map placeholder. A real map would go here." className="relative aspect-[4/3] overflow-hidden rounded-sm bg-sand">
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect width="400" height="300" fill="#ECE4D3" />
        <path d="M0 210 H400 M0 100 H400 M120 0 V300 M290 0 V300" stroke="#F6F1E7" strokeWidth="16" />
        <path d="M0 40 L400 270" stroke="#F6F1E7" strokeWidth="10" />
        <rect x="150" y="125" width="110" height="60" fill="#D8CDB3" />
        <rect x="20" y="120" width="80" height="70" fill="#C9D0A8" opacity="0.8" />
        <rect x="310" y="20" width="70" height="60" fill="#C9D0A8" opacity="0.8" />
        <g transform="translate(205 118)">
          <path d="M0 0 C-16 -22 -22 -34 -22 -44 A22 22 0 1 1 22 -44 C22 -34 16 -22 0 0 Z" fill="#A3482A" />
          <circle cx="0" cy="-44" r="8" fill="#F6F1E7" />
        </g>
      </svg>
      <p className="absolute bottom-3 left-3 rounded bg-cream/90 px-3 py-1 text-xs text-charcoal/80">Map placeholder</p>
    </div>
  );
}

export default function VisitPage() {
  return (
    <>
      <section className="container-page pb-6 pt-16 sm:pt-24">
        <p className="eyebrow">Visit us</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight sm:text-7xl">Find your seat by the fire.</h1>
      </section>

      <section className="container-page grid gap-12 py-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="space-y-10">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-olive" size={22} aria-hidden />
              <div>
                <h2 className="text-3xl">Address</h2>
                <address className="mt-2 text-lg not-italic leading-relaxed">
                  {R.address.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
                <p className="mt-2 inline-block rounded-full border border-charcoal/25 px-3 py-1 text-xs uppercase tracking-wider text-charcoal/75">
                  Demo content. Not a real address.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-olive" size={22} aria-hidden />
              <div className="w-full">
                <h2 className="text-3xl">Hours</h2>
                <dl className="mt-3 divide-y divide-charcoal/15 border-y border-charcoal/15">
                  {HOURS.map((h) => (
                    <div key={h.days} className="flex justify-between gap-6 py-3">
                      <dt className="text-charcoal/75">{h.days}</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-olive" size={22} aria-hidden />
              <div>
                <h2 className="text-3xl">Contact</h2>
                <p className="mt-2 text-lg">{R.phone}</p>
                <p className="break-all text-lg">{R.email}</p>
                <p className="mt-1 text-sm text-charcoal/65">Fictional contact details for demonstration.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <MapPlaceholder />
          <div id="reserve" className="mt-10 scroll-mt-28 rounded-sm bg-charcoal p-8 text-cream">
            <h2 className="text-3xl">Reserve a table</h2>
            <p className="mt-3 leading-relaxed text-cream/80">
              A booking link would go here. This is a placeholder, so no reservations can be made on this demo site.
            </p>
            <a href="#reserve" aria-disabled="true" className="btn mt-6 bg-cream text-charcoal hover:bg-white">
              Reservation link (placeholder)
            </a>
          </div>
        </Reveal>
      </section>
      <div className="pb-20" />
    </>
  );
}
