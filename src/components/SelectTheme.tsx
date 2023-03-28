import React, { FC } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { Icons } from "./Icons";

interface SelectThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const SelectTheme: FC<SelectThemeProps> = ({ setTheme, theme }) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button
        className="rounded-full w-7 h-7 my-auto inline-flex items-center justify-center text-violet11 bg-primary-400 hover:bg-primary-500"
        aria-label="Customise options"
      />
    </DropdownMenu.Trigger>

    <DropdownMenu.Content
      className="bg-primary-400/40 p-2 rounded-lg"
      sideOffset={5}
    >
      <DropdownMenu.RadioGroup
        value={theme}
        onValueChange={setTheme}
      >
        {["sky", "violet", "rose"].map((item) => (
          <DropdownMenu.RadioItem
            key={item}
            className="text-primary-50 rounded-lg flex items-center h-[25px] pr-1 pl-6 relative select-none outline-none data-[highlighted]:bg-primary-200/50 data-[highlighted]:text-primary-100"
            value={item}
          >
            <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
              <Icons.Check />
            </DropdownMenu.ItemIndicator>
            {item}
          </DropdownMenu.RadioItem>
        ))}
      </DropdownMenu.RadioGroup>

      <DropdownMenu.Arrow className="fill-primary-400/40" />
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);
