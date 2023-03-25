import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Metadata } from "next";
import Link from "next/link";

import { Timeline } from "@/ui/components/Timeline";

export const metadata: Metadata = {
  title: "Linha do Tempo"
};

export default function TimelinePage() {
  return (
    <section>
      <Link
        href="/"
        className="group mb-5 inline-flex rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
      >
        <MdOutlineKeyboardBackspace className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
      </Link>
      <Timeline />
    </section>
  );
}
