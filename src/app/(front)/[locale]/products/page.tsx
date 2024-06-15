import { getProducts } from "@/lib/getCollection";
import { DetailPageWrapper } from "../_components/DetailPageWrapper";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ProductCard } from "./_components/ProductCard";
import slugify from "slugify";
import { Partner } from "@/payload/types";

export default async function ProductsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations("Products");

  const products = await getProducts(locale);

  return (
    <DetailPageWrapper title={t("title")}>
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.Image}
            title={product.Title}
            brand={(product.Partner as Partner).Title}
            url={`/products/${slugify(product.Title, { lower: true })}`}
          />
        ))}
      </div>
    </DetailPageWrapper>
  );
}
