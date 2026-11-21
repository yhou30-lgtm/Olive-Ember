import type { Metadata } from "next";
import { MENU } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Menu",
  description: "The Olive & Ember menu: starters, dishes from the fire, sides, sweets and drinks. Demo menu for a fictional restaurant.",
};

export default function MenuPage() {
  return (
    <>
      <section className="container-page pb-8 pt-16 sm:pt-24">
        <p className="eyebrow">Menu</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight sm:text-7xl">Made to share, built around the fire.</h1>
        <p className="mt-6 text-sm text-charcoal/65">Demo menu. Dishes and prices are invented for this concept.</p>
      </section>

      <nav aria-label="Menu sections" className="sticky top-[4.25rem] z-30 border-y border-charcoal/10 bg-cream/95 backdrop-blur">
        <ul className="container-page flex gap-6 overflow-x-auto py-3 text-sm [scrollbar-width:none]">
          {MENU.map((c) => (
            <li key={c.id} className="shrink-0">
              <a href={`#${c.id}`} className="text-charcoal/80 transition-colors hover:text-olive">
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-page max-w-4xl pb-24">
        {MENU.map((c) => (
          <section key={c.id} id={c.id} className="scroll-mt-32 pt-14 sm:pt-20">
            <h2 className="text-4xl sm:text-5xl">{c.title}</h2>
            {c.note && <p className="mt-2 italic text-charcoal/70">{c.note}</p>}
            <ul className="mt-8 divide-y divide-charcoal/15 border-y border-charcoal/15">
              {c.dishes.map((d) => (
                <li key={d.name} className="py-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl leading-snug">{d.name}</h3>
                    <p className="shrink-0 font-serif text-xl">${d.price}</p>
                  </div>
                  <p className="mt-1.5 max-w-xl text-charcoal/75">{d.desc}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <p className="mt-14 text-sm leading-relaxed text-charcoal/65">
          Please tell your server about any allergies. Allergen details are not included in this demo menu.
        </p>
      </div>
    </>
  );
}
