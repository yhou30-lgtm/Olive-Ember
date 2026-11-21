import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl">This page is not on the menu.</h1>
      <Link href="/" className="btn mt-8 bg-charcoal text-cream hover:bg-olive">
        Back to home
      </Link>
    </section>
  );
}
