import { Link } from "@/lib/navigation";
import { Menu, Transition } from "@headlessui/react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import classNames from "classnames";
import { Fragment } from "react";

export interface NavItemProps {
  href: string;
  label: string;
  menu?: { href: string; label: string; external?: boolean }[];
  isScrolled?: boolean;
}

export function NavItem({ href, label, menu, isScrolled }: NavItemProps) {
  if (menu)
    return (
      <Menu as="div">
        <Menu.Button
          className={classNames(
            "w-full rounded-md px-3 py-2 text-left font-medium transition-colors",
            {
              "hover:bg-gray-100/50": isScrolled,
              "hover:bg-gray-800/10": !isScrolled,
            }
          )}
        >
          {({ open }) => (
            <span
              className={classNames("flex items-center justify-between gap-1", {
                "text-white": !isScrolled,
                "text-sm": isScrolled,
              })}
            >
              {label}
              {open ? (
                <IconChevronUp size={20} />
              ) : (
                <IconChevronDown size={20} />
              )}
            </span>
          )}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 mt-2 flex w-56 flex-col gap-3 rounded-md bg-white p-3 shadow-lg ring-1 ring-black ring-opacity-5">
            {menu.map((item) => (
              <Menu.Item key={item.href}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="w-full rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    );

  return (
    <Link
      href={href}
      className={classNames(
        "rounded-md px-3 py-2 font-medium transition-colors",
        {
          "text-white hover:bg-gray-800/10": !isScrolled,
          "text-sm hover:bg-gray-100/50": isScrolled,
        }
      )}
    >
      {label}
    </Link>
  );
}
