import { NextResponse, type NextRequest } from "next/server";
import { isLocale, type Locale } from "@/lib/i18n/types";

const LOCALE_COOKIE = "NEXT_LOCALE";
const ONE_YEAR = 60 * 60 * 24 * 365;

// Detection priority:
// 1. Persisted cookie (a returning visitor's previous choice wins).
// 2. Geo header from the edge (SE → sv, anywhere else → en).
// 3. Accept-Language (`sv` token).
// 4. Default: en. Identione communicates in English by default; Swedish is
//    offered for the local (Skellefteå) market.
function detectLocale(req: NextRequest): Locale {
  const cookie = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  const country = (
    req.headers.get("x-vercel-ip-country") ??
    req.headers.get("cf-ipcountry") ??
    ""
  ).toUpperCase();
  if (country === "SE") return "sv";
  if (country) return "en";

  const accept = req.headers.get("accept-language") ?? "";
  if (/\bsv\b/i.test(accept)) return "sv";
  return "en";
}

function pathHasLocale(pathname: string): boolean {
  const first = pathname.split("/")[1];
  return !!first && isLocale(first);
}

export function proxy(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Belt-and-suspenders: never run locale logic on Next internals or
  // anything with a file extension. The matcher *should* exclude these,
  // but path-to-regexp v8 (Next 16) handles the negative lookahead
  // differently than v6 did, so we skip explicitly.
  if (pathname.startsWith("/_next/") || /\.[^/]+$/.test(pathname)) {
    return NextResponse.next();
  }

  if (pathHasLocale(pathname)) {
    // Already locale-prefixed. Refresh the cookie so the locale sticks for
    // future bare-root visits.
    const locale = pathname.split("/")[1] as Locale;
    const res = NextResponse.next();
    res.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: ONE_YEAR,
      sameSite: "lax",
    });
    return res;
  }

  // No locale prefix → redirect to the detected locale.
  const locale = detectLocale(req);
  const target = req.nextUrl.clone();
  target.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  target.search = search;
  const res = NextResponse.redirect(target);
  res.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
  });
  return res;
}

export const proxyConfig = {
  // Skip Next internals and any file with an extension (images, svg, etc.).
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
