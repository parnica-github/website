"use client;";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { GB, TR } from "country-flag-icons/react/3x2";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

interface LanguageSelectProps {
  showLanguage?: boolean;
}

export function LanguageSelect({ showLanguage = true }: LanguageSelectProps) {
  const [showSelector, setShowSelector] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const onLanguageChange = (lang: string) => {
    if (pathname) {
      router.push(pathname.replace(/\/(tr|en)/, `/${lang}`));
    }
  };

  const getSelectedLanguageComponent = (
    lang: string,
    showLanguage: boolean
  ) => {
    switch (lang) {
      case "tr":
        return (
          <>
            <TR className="rounded-lg h-5" />
            {showLanguage && <span>Türkçe</span>}
          </>
        );
      case "en":
        return (
          <>
            <GB className="rounded-lg h-5" />
            {showLanguage && <span>English</span>}
          </>
        );
    }
  };

  return (
    <>
      <button
        className="relative px-5 p-2 flex rounded items-center gap-2"
        onClick={() => setShowSelector(!showSelector)}
        onBlur={() => setShowSelector(false)}
      >
        {getSelectedLanguageComponent(
          pathname?.split("/")[1] as "tr" | "en",
          showLanguage
        )}
        {showLanguage &&
          (showSelector ? <IconChevronUp /> : <IconChevronDown />)}
        {showSelector && (
          <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg border absolute top-14 left-0 p-2">
            <ul className="text-gray-700 flex flex-col w-full gap-2">
              <li
                className="w-full py-2 flex gap-2 items-center hover:bg-gray-200 rounded px-3"
                onClick={() => onLanguageChange("en")}
              >
                <GB className="rounded-lg h-5" />
                <span>English</span>
              </li>
              <li
                className="w-full py-2 flex gap-2 items-center hover:bg-gray-200 rounded px-3"
                onClick={() => onLanguageChange("tr")}
              >
                <TR className="rounded-lg h-5" />
                <span>Türkçe</span>
              </li>
            </ul>
          </div>
        )}
      </button>
    </>
  );
}
