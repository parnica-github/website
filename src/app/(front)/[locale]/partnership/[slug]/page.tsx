import NextImage from "next/image";
import { DetailPageWrapper } from "../../_components/DetailPageWrapper";
import { notFound } from "next/navigation";
import { isImageType } from "@/lib/isImageType";
import parser from "html-react-parser";
import { getPartnerBySlug } from "@/lib/getCollection";

export default async function Partner({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const partner = await getPartnerBySlug(slug, locale);

  if (!partner) return notFound();

  const image = partner.Image;

  return (
    <DetailPageWrapper title={partner.Title}>
      <div className="flex flex-col">
        <div className="flex-col md:flex-row flex justify-center items-center gap-10">
          <div className="relative min-w-96 h-96">
            {image && isImageType(image) && image.url && (
              <NextImage
                alt={image.alt}
                src={image.url}
                fill
                objectFit="contain"
              />
            )}
          </div>

          <div className="prose !max-w-none">
            {parser(partner.About_html || "")}
          </div>
        </div>

        <div>
          <div className="prose !max-w-none">
            {parser(partner.Content_html || "")}
          </div>
        </div>
      </div>
    </DetailPageWrapper>
  );
}
