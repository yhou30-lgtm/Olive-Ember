import type { MetadataRoute } from "next";
import { NAV, R } from "@/lib/restaurant";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((n) => ({ url: `${R.url}${n.href}` }));
}
