import { IconClock, IconMail, IconMap2, IconPhone } from "@tabler/icons-react";
import classNames from "classnames";

import { getContact, getFooter } from "@/lib/getGlobal";

import { getSocialIcon } from "../getSocialIcon";
import { Text, Title } from "../ui";
import { Logo } from "./Logo";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/lib/navigation";
import slugify from "slugify";
import { getPartners } from "@/lib/getCollection";

export async function Footer() {
  const { about, socials } = await getFooter();
  const { address, email, phone, time } = await getContact();

  const locale = await getLocale();

  const partners = await getPartners(locale);

  const t = await getTranslations();

  return (
    <footer className="font-medium text-white">
      <div
        className={classNames(
          "flex flex-col gap-20 bg-sky-600 sm:flex-row",
          "px-3 py-10 sm:px-5 lg:px-40 xl:px-80"
        )}
      >
        <div className="flex flex-col gap-5 sm:flex-1">
          <Logo color="white" turkish={false} className="w-40" />

          <Text className="text-sm leading-relaxed text-white">{about}</Text>

          {socials && (
            <div className="flex gap-3">
              {socials.map(({ id, name, url }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(name)}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="sm:flex-1">
          <Title level={3} className="mb-5 text-white">
            {t("Layout.footer.brands")}
          </Title>
          <div className="flex flex-col gap-3 text-sm">
            {partners &&
              partners.map((partner) => (
                <Link
                  key={partner.id}
                  href={`/partnership/${slugify(partner.Title, {
                    lower: true,
                  })}`}
                >
                  {partner.Title}
                </Link>
              ))}
          </div>
        </div>

        <div className="sm:flex-1">
          <Title level={3} className="mb-5 text-white">
            {t("Layout.footer.contact")}
          </Title>

          <div className="flex flex-col gap-5">
            {address && (
              <div className="flex items-center gap-3">
                <IconMap2 size={30} />
                <Text className="text-sm text-white">{address}</Text>
              </div>
            )}

            {phone && (
              <div className="flex items-center gap-3">
                <IconPhone size={30} />
                <Text className="text-sm text-white">
                  <a href={`tel:${phone}`}>{phone}</a>
                </Text>
              </div>
            )}

            {email && (
              <div className="flex items-center gap-3">
                <IconMail size={30} />
                <Text className="text-sm text-white">
                  <a href={`mailto:${email}`}>{email}</a>
                </Text>
              </div>
            )}

            {time && (
              <div className="flex items-center gap-3">
                <IconClock size={30} />
                <Text className="text-sm text-white">{time}</Text>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-sky-600 p-5 text-center text-sm">
        <span>
          © {new Date().getFullYear()} {t("Layout.footer.copyright")}
        </span>
      </div>
    </footer>
  );
}
