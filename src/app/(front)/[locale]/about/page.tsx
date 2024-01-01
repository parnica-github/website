import { getAbout, getGDPR } from "@/lib/getGlobal";
import { DetailPageWrapper } from "../_components/DetailPageWrapper";
import parse from "html-react-parser";

export default async function GDPRPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { Content_html } = await getAbout(locale);

  return (
    <DetailPageWrapper title="About">
      <div className="prose mx-auto !max-w-none">
        {parse(Content_html || "")}
      </div>
    </DetailPageWrapper>
  );
}
