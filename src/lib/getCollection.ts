import getPayloadClient from "@/payload/payloadClient";
import slugify from "slugify";

export const getPartners = async (locale: string) =>
  (
    await (
      await getPayloadClient()
    ).find({ collection: "partner", locale, pagination: false })
  ).docs;

export const getPartnerBySlug = async (slug: string, locale: string) => {
  const products = await (
    await getPayloadClient()
  ).find({
    collection: "partner",
    locale,
    pagination: false,
  });

  return products.docs.find(
    (doc) => slugify(doc.Title, { lower: true }) === slug
  );
};

export const getProducts = async (locale: string) =>
  (
    await (
      await getPayloadClient()
    ).find({
      collection: "product",
      locale,
      pagination: false,
    })
  ).docs;

export const getProductBySlug = async (slug: string, locale: string) => {
  const products = await (
    await getPayloadClient()
  ).find({
    collection: "product",
    locale,
    pagination: false,
  });

  return products.docs.find(
    (doc) => slugify(doc.Title, { lower: true }) === slug
  );
};

export const getReferences = async (locale: string) =>
  (
    await (
      await getPayloadClient()
    ).find({ collection: "reference", locale, pagination: false })
  ).docs;
