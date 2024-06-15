import classNames from "classnames";
import { useEffect } from "react";

import { NavItem } from "./NavItem";
import { useTranslations } from "next-intl";
import { LanguageSelect } from "./LanguageSelect";

interface DrawerProps {
  opened: boolean;
}

export function Drawer({ opened }: DrawerProps) {
  const t = useTranslations("Layout");

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [opened]);

  return (
    <aside
      className={classNames(
        "fixed right-0 top-24 z-50 flex h-screen w-screen flex-col gap-5 px-5 pt-5 transition-transform duration-200 ease-in-out lg:hidden",
        "bg-white",
        {
          "translate-x-0 transform": opened,
          "translate-x-full transform": !opened,
        }
      )}
    >
      <NavItem label={t("header.home")} href="/" isScrolled />
      <NavItem
        label={t("header.corporate")}
        href="/corporate"
        menu={[
          { label: t("header.about"), href: "/about" },
          {
            label: t("header.career"),
            href: "https://linkedin.com/company/parnica-healtcare-solutions",
            external: true,
          },
          { label: t("header.gdpr"), href: "/kvkk" },
        ]}
        isScrolled
      />
      <NavItem label={t("header.partnership")} href="/partnership" isScrolled />
      <NavItem label={t("header.products")} href="/products" isScrolled />
      <NavItem label={t("header.contact")} href="/contact" isScrolled />
      <LanguageSelect />
    </aside>
  );
}
