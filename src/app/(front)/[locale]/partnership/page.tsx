import { getPartners } from "@/lib/getCollection";
import { DetailPageWrapper } from "../_components/DetailPageWrapper";
import { PartnerCard } from "./_components/PartnerCard";
import { getTranslations } from "next-intl/server";
import slugify from "slugify";

export default async function Partnership({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("Partnership");

  const partners = await getPartners(locale);

  return (
    <DetailPageWrapper title={t("title")}>
      <div className="flex gap-10 items-center justify-center flex-col sm:flex-row">
        {partners &&
          partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              image={partner.Image}
              url={`/partnership/${slugify(partner.Title, { lower: true })}`}
            />
          ))}
      </div>
    </DetailPageWrapper>
  );
}
