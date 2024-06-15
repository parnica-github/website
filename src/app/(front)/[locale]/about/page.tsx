import { getAbout, getGDPR } from "@/lib/getGlobal";
import { DetailPageWrapper } from "../_components/DetailPageWrapper";
import parse from "html-react-parser";
import { getTranslations } from "next-intl/server";

export default async function GDPRPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { Content_html } = await getAbout(locale);
  const t = await getTranslations("Layout");

  return (
    <DetailPageWrapper title={t("header.about")}>
      <div className="prose mx-auto !max-w-none">
        {parse(Content_html || "")}
      </div>
    </DetailPageWrapper>
  );
}
