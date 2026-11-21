import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The idea behind Olive & Ember: good ingredients, a real fire and a simple table. A fictional restaurant concept.",
};

const BELIEFS = [
  ["Fire first", "The hearth is the center of the kitchen. Most of the menu touches it."],
  ["Olive oil, not fuss", "Good oil, salt, herbs and citrus. We let a few things do the work."],
  ["A table for everyone", "Dishes made to share, a room that feels easy, and time to stay."],
];

export default function StoryPage() {
  return (
    <>
      <section className="container-page pb-6 pt-16 sm:pt-24">
        <p className="eyebrow">Our story</p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-tight sm:text-7xl">Fire, olive oil, and a good table.</h1>
        <p className="mt-6 text-sm text-charcoal/65">Olive &amp; Ember is a fictional concept. This story is written for demonstration.</p>
      </section>

      <section className="container-page grid items-start gap-12 py-14 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <div className="space-y-6 text-lg leading-relaxed text-charcoal/85">
          <Reveal>
            <p>
              Olive &amp; Ember began as a simple idea for a neighborhood restaurant in Claremont: cook good ingredients over a real fire, and keep everything else quiet.
            </p>
          </Reveal>
          <Reveal>
            <p>
              The name says it. Olive stands for the table: oil, herbs, bread and things shared. Ember stands for the cooking: oak smoke, a hot grate and a little char at the edges.
            </p>
          </Reveal>
          <Reveal>
            <p>
              The menu is modern American, meaning familiar dishes cooked with care. Vegetables get as much attention as the steak, and dessert is never an afterthought.
            </p>
          </Reveal>
          <Reveal>
            <Link href="/menu/" className="inline-block text-sm font-medium underline underline-offset-4 hover:text-olive">
              See what is on the menu
            </Link>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <Photo kind="interior" tone="warm" alt="Illustration of the dining room with arched windows and pendant lamps" className="aspect-[4/5] rounded-sm" />
        </Reveal>
      </section>

      <section className="bg-sand">
        <div className="container-page grid gap-10 py-20 sm:py-24 md:grid-cols-3">
          {BELIEFS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 90}>
              <div className="border-t border-charcoal/25 pt-6">
                <h2 className="text-3xl">{t}</h2>
                <p className="mt-3 leading-relaxed text-charcoal/80">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
