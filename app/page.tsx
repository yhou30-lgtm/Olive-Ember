import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { GALLERY, HOURS, R, SIGNATURES } from "@/lib/restaurant";

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[calc(100svh-4.25rem)] items-end overflow-hidden bg-charcoal text-cream">
        <Photo kind="fire" tone="dark" alt="Illustration of a hearth flame over a grill" className="absolute inset-y-0 right-0 -z-10 w-full md:w-[55%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent md:via-transparent" />
        <div className="container-page pb-16 pt-32 sm:pb-24">
          <p className="eyebrow !text-olive-soft">Claremont, California · Concept</p>
          <h1 className="mt-5 max-w-3xl text-6xl leading-[0.98] sm:text-7xl lg:text-8xl">
            A little fire.
            <br />
            <em className="font-normal italic text-ember-glow">A lot of flavor.</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/85">Modern American cooking over an open oak fire.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/menu/" className="btn bg-cream text-charcoal hover:bg-white">
              Explore the Menu
            </Link>
            <Link href="/visit/" className="btn border border-cream/60 text-cream hover:bg-cream hover:text-charcoal">
              Find Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Signature dishes</p>
            <h2 className="mt-3 max-w-xl text-4xl leading-tight sm:text-5xl">Cooked simply, finished over fire.</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {SIGNATURES.map((d, i) => (
              <Reveal key={d.name} delay={i * 100}>
                <article>
                  <Photo kind={d.art} tone={i === 1 ? "olive" : i === 2 ? "warm" : "dark"} alt={`Illustration for ${d.name}`} className="aspect-[4/5] rounded-sm" />
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl">{d.name}</h3>
                    <p className="font-serif text-xl">${d.price}</p>
                  </div>
                  <p className="mt-2 text-charcoal/75">{d.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link href="/menu/" className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-olive">
              See the full menu <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-page grid items-center gap-12 py-20 sm:py-28 md:grid-cols-2 md:gap-20">
          <Reveal>
            <Photo kind="olive" tone="olive" alt="Illustration of an olive branch" className="aspect-square rounded-sm" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Fire, olive oil, and a good table.</h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80">
              Olive &amp; Ember is a neighborhood restaurant built around one idea: cook good ingredients over a real fire, and keep everything else simple.
            </p>
            <Link href="/our-story/" className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-olive">
              Read our story <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">The room and the table</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {GALLERY.slice(0, 4).map((g, i) => (
              <Reveal key={i} delay={i * 70}>
                <Photo kind={g.art} tone={g.tone} alt={g.alt} src={g.src} className="aspect-[4/5] rounded-sm" />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link href="/gallery/" className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-olive">
              View the gallery <ArrowRight size={16} aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="container-page grid gap-12 py-20 sm:py-28 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow !text-olive-soft">Find us</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Come hungry.</h2>
            <address className="mt-6 text-lg not-italic leading-relaxed text-cream/85">
              {R.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="mt-2 text-sm text-cream/60">Demo address for a fictional restaurant.</p>
            <Link href="/visit/" className="btn mt-8 bg-cream text-charcoal hover:bg-white">
              Directions and reservations
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow !text-olive-soft">Opening hours</p>
            <dl className="mt-5 divide-y divide-cream/15 border-y border-cream/15">
              {HOURS.map((h) => (
                <div key={h.days} className="flex justify-between gap-6 py-4">
                  <dt className="text-cream/75">{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}
