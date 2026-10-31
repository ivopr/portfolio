import { NextResponse, type NextRequest } from "next/server"
import { locales } from "./app/[lang]/content"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return

  const lang = request.headers.get("accept-language")?.toLowerCase().startsWith("pt") ? "pt" : "en"
  request.nextUrl.pathname = `/${lang}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
}
