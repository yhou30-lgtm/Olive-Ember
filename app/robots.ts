import type { MetadataRoute } from "next";
import { R } from "@/lib/restaurant";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${R.url}/sitemap.xml` };
}
