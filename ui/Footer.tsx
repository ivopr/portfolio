"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="mx-auto bg-black max-w-4xl py-3 text-gray-one/70">
      <div className="flex items-center justify-center">
        <p className="group flex items-center text-xs">
          Criado por
          <Link
            href="https://github.com/ivopr"
            rel="noreferrer"
            target="_blank"
            className="inline-block ml-1 font-bold text-gray-one transition-colors duration-100 ease-linear group-hover:text-white"
          >
            Ivo Vieira
          </Link>
        </p>
        <span className="mx-2 inline-block h-1 w-1 rounded-full bg-gray-one/70" />
        <p className="group flex items-center text-xs">
          <Link
            href="https://github.com/ivopr/portfolio"
            rel="noreferrer"
            target="_blank"
            className="inline-block font-bold text-gray-one/70 transition-colors duration-100 ease-linear group-hover:text-white"
          >
            Código Fonte
          </Link>
        </p>
      </div>
    </footer>
  )
}
