import React, { FC } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { Icons } from "../Icons";

interface SelectThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const bg = ["bg-emerald-400", "bg-sky-400", "bg-violet-400", "bg-rose-400"];

const hoverBg = [
  "hover:bg-emerald-500",
  "hover:bg-sky-500",
  "hover:bg-violet-500",
  "hover:bg-rose-500"
];

export const SelectTheme: FC<SelectThemeProps> = ({ setTheme, theme }) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button
        className="my-auto h-7 w-7 rounded-full border-2 border-white bg-primary-400 outline-none transition-all hover:border-zinc-200 hover:bg-primary-500"
        aria-label="Customise options"
      />
    </DropdownMenu.Trigger>

    <DropdownMenu.Content
      className="rounded-md bg-primary-700/60 p-2"
      sideOffset={5}
    >
      <DropdownMenu.RadioGroup
        value={theme}
        onValueChange={setTheme}
        className="flex gap-x-2"
      >
        {["emerald", "sky", "violet", "rose"].map((item, i) => (
          <DropdownMenu.RadioItem
            key={item}
            className="relative flex h-[25px] select-none items-center rounded-full outline-none data-[highlighted]:bg-primary-200/50"
            value={item}
          >
            <div
              className={`my-auto h-6 w-6 rounded-full border-2 border-white transition-all ${bg[i]} ${hoverBg[i]} hover:border-zinc-200`}
            >
              <DropdownMenu.ItemIndicator className="flex h-full w-full items-center justify-center">
                <Icons.Check />
              </DropdownMenu.ItemIndicator>
            </div>
          </DropdownMenu.RadioItem>
        ))}
      </DropdownMenu.RadioGroup>

      <DropdownMenu.Arrow className="fill-primary-700/60" />
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);
