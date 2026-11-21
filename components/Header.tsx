"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, R } from "@/lib/restaurant";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/92 backdrop-blur">
      <div className="container-page flex h-[4.25rem] items-center justify-between">
        <Link href="/" aria-label="Olive & Ember, home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={`text-sm transition-colors hover:text-olive ${isActive(n.href) ? "text-olive underline underline-offset-[10px]" : "text-charcoal/80"}`}
            >
              {n.label}
            </Link>
          ))}
          <Link href={R.reserveHref} className="rounded-full border border-charcoal px-5 py-2 text-sm transition-colors hover:bg-charcoal hover:text-cream">
            Reserve
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-charcoal/10 bg-cream md:hidden">
          <ul className="container-page py-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={`block py-3 font-serif text-3xl ${isActive(n.href) ? "text-olive" : ""}`}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
