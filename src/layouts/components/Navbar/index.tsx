import { Popover, Transition } from "@headlessui/react";
import { FC, Fragment, lazy } from "react";

const WebNavbar = lazy(() => import("./Web"));
const MobileNavbar = lazy(() => import("./Mobile"));

const Navbar: FC = () => {
  return (
    <Popover className="bg-primary-900 sticky top-0 z-20">
      <WebNavbar />

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right p-2 transition md:hidden"
        >
          <MobileNavbar />
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Navbar;