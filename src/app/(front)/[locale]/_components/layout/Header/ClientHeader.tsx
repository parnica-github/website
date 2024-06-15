"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { Logo } from "../Logo";
import { Drawer } from "./Drawer";
import { NavItem } from "./NavItem";
import { LanguageSelect } from "./LanguageSelect";
import Link from "next/link";

export function ClientHeader() {
  const t = useTranslations("Layout");

  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleResize = () => {
      setDrawerOpened(false);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setDrawerOpened(false);
  }, [pathname, searchParams]);

  return (
    <>
      <header
        className={classNames(
          "fixed z-50 flex w-full items-center justify-between transition-all",
          "px-5 sm:px-20",
          {
            "h-28 sm:h-40": !isScrolled || drawerOpened,
            "bg-white": drawerOpened,
            "h-14 bg-white bg-opacity-75 shadow backdrop-blur":
              isScrolled && !drawerOpened,
          }
        )}
      >
        <Link href="/">
          <Logo
            color={isScrolled || drawerOpened ? "black" : "white"}
            className={classNames("transition-all", {
              "w-56 sm:w-72": !isScrolled || drawerOpened,
              "w-32": isScrolled,
            })}
            turkish={false}
          />
        </Link>

        <nav className="hidden gap-3 lg:flex items-center">
          <NavItem label={t("header.home")} href="/" isScrolled={isScrolled} />
          <NavItem
            label={t("header.corporate")}
            href="/about"
            menu={[
              { label: t("header.about"), href: "/about" },
              {
                label: t("header.career"),
                href: "https://linkedin.com/company/parnica-healtcare-solutions",
                external: true,
              },
              { label: t("header.gdpr"), href: "/kvkk" },
            ]}
            isScrolled={isScrolled}
          />
          <NavItem
            label={t("header.partnership")}
            href="/partnership"
            isScrolled={isScrolled}
          />
          <NavItem
            label={t("header.products")}
            href="/products"
            isScrolled={isScrolled}
          />
          <NavItem
            label={t("header.contact")}
            href="/contact"
            isScrolled={isScrolled}
          />

          <LanguageSelect />
        </nav>

        <button
          onClick={() => setDrawerOpened(!drawerOpened)}
          className={classNames("lg:hidden", {
            "text-white": !isScrolled && !drawerOpened,
          })}
        >
          {drawerOpened ? <IconX size={30} /> : <IconMenu2 size={30} />}
        </button>
      </header>

      <Drawer opened={drawerOpened} />
    </>
  );
}
