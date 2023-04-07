import { useRouter } from "next/router";

import { Icons } from "../Icons";

export function GoBackButton() {
  const router = useRouter();

  return (
    <button
      className="group inline-flex w-fit rounded bg-zinc-900 p-2 transition-colors duration-100 ease-linear hover:bg-zinc-900/70"
      onClick={router.back}
      type="button"
    >
      <Icons.GoBack className="text-zinc-400 transition-colors duration-100 ease-linear group-hover:text-gray-100" />
    </button>
  );
}
