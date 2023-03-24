import { Menu } from "@headlessui/react"
import Link from "next/link"

export default function MobileNav() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </Link>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
