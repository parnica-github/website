import { getReferences } from "@/lib/getCollection";
import { DetailPageWrapper } from "../_components/DetailPageWrapper";
import { ReferenceCard } from "./_components/ReferenceCard";
import { getTranslations } from "next-intl/server";

export default async function ReferencesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("References");

  const references = await getReferences(locale);

  console.log(references);

  return (
    <DetailPageWrapper title={t("title")}>
      <div className="flex gap-10 items-center justify-center flex-col">
        {references &&
          references.map((reference) => (
            <ReferenceCard
              key={reference.id}
              image={reference.Image}
              content={reference.About_html || ""}
              title={reference.Title}
            />
          ))}
      </div>
    </DetailPageWrapper>
  );
}
