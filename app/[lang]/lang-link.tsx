"use client"

import Link from "next/link"

// survives the client navigation between locales (the page remounts, this module doesn't)
let switched = false

// switching locale is a client navigation; keep the reader's place and don't replay the load motion
export function LangLink({ href, hrefLang, children }: { href: string; hrefLang: string; children: React.ReactNode }) {
  return (
    <Link href={href} hrefLang={hrefLang} scroll={false} className="lang" onClick={() => (switched = true)}>
      {children}
    </Link>
  )
}

export function MotionGate() {
  return switched ? <style>{".sheet ::before, .sheet ::after { animation: none !important; }"}</style> : null
}
