import Link from "next/link";
import { HOURS, NAV, R } from "@/lib/restaurant";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/75">{R.tagline}.</p>
        </div>
        <div>
          <p className="eyebrow !text-olive-soft">Visit</p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-cream/85">
            {R.address.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            <span className="mt-3 block">{R.phone}</span>
            <span className="block break-all">{R.email}</span>
          </address>
        </div>
        <div>
          <p className="eyebrow !text-olive-soft">Hours</p>
          <dl className="mt-4 space-y-2 text-sm text-cream/85">
            {HOURS.map((h) => (
              <div key={h.days}>
                <dt className="text-cream/60">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow !text-olive-soft">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-cream/85 transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-cream/10">
        <p className="container-page py-5 text-xs leading-relaxed text-cream/65">
          Demo content. Olive &amp; Ember is a fictional restaurant concept. The address, phone number, email, menu and prices are invented for demonstration.
        </p>
      </div>
    </footer>
  );
}
