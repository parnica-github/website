import { getGDPR } from "@/lib/getGlobal";
import { DetailPageWrapper } from "../_components/DetailPageWrapper";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function GDPRPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { GDPR_html } = await getGDPR(locale);

  return (
    <DetailPageWrapper title={t("GDPR.title")}>
      <div
        dangerouslySetInnerHTML={{ __html: GDPR_html || "" }}
        className="prose mx-auto !max-w-none"
      />
    </DetailPageWrapper>
  );
}
