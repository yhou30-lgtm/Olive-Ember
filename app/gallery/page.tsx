import type { Metadata } from "next";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { GALLERY } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Gallery",
  description: "The room, the fire and the food at Olive & Ember. Placeholder illustrations for a fictional restaurant concept.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="container-page pb-8 pt-16 sm:pt-24">
        <p className="eyebrow">Gallery</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight sm:text-7xl">The room, the fire, the table.</h1>
        <p className="mt-6 text-sm text-charcoal/65">Placeholder illustrations. Real photography would replace these.</p>
      </section>
      <section className="container-page pb-24 pt-6">
        <div className="grid auto-rows-[16rem] grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:auto-rows-[18rem] md:grid-cols-4">
          {GALLERY.map((g, i) => (
            <Reveal key={i} className={g.span ?? ""} delay={(i % 4) * 70}>
              <Photo kind={g.art} tone={g.tone} alt={g.alt} src={g.src} className="h-full w-full rounded-sm" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
