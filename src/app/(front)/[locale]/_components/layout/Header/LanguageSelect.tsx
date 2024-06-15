"use client;";

import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useEffect } from "react";

export function LanguageSelect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const onLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (pathname) {
      router.push(pathname.replace(/\/(tr|en)/, `/${e.target.value}`));
    }
  };

  return (
    <select
      id="countries"
      className="text-4xl px-3 py-2 flex appearance-none focus:border-none focus:outline-none bg-transparent"
      onChange={(e) => onLanguageChange(e)}
    >
      <option value="tr" selected={pathname?.startsWith("/tr")}>
        🇹🇷
      </option>
      <option
        value="en"
        selected={pathname?.startsWith("/en") || pathname?.startsWith("/")}
      >
        🇬🇧
      </option>
    </select>
  );
}
