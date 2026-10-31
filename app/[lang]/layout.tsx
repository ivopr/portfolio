import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Martian_Mono } from "next/font/google"
import localFont from "next/font/local"
import "../globals.css"
import { cn } from "@/lib/utils"
import { hasLocale, locales, ui } from "./content"

// Google's own latin build; next/font/google's re-subset of Host Grotesk loses spacing after "t" ("Lat tes")
const sans = localFont({ src: "../fonts/host-grotesk-latin.woff2", weight: "300 800", variable: "--font-host" })
const mono = Martian_Mono({ subsets: ["latin"], axes: ["wdth"], variable: "--font-martian" })

export const generateStaticParams = () => locales.map((lang) => ({ lang }))

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const t = ui[lang]
  return {
    title: t.title,
    description: t.description,
    alternates: { languages: { en: "/en", pt: "/pt" } },
    openGraph: { title: t.title, description: t.description, locale: lang === "pt" ? "pt_BR" : "en_US", type: "profile" },
  }
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return (
    <html lang={lang === "pt" ? "pt-BR" : "en"} className={cn("antialiased", sans.variable, mono.variable)}>
      <body>{children}</body>
    </html>
  )
}
