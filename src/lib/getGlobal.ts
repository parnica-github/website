import getPayloadClient from "@/payload/payloadClient";

export const getHome = async (locale: string) =>
  (await getPayloadClient()).findGlobal({ slug: "home", locale });

export const getGDPR = async (locale: string) =>
  (await getPayloadClient()).findGlobal({ slug: "gdpr", locale });

export const getAbout = async (locale: string) =>
  (await getPayloadClient()).findGlobal({ slug: "about", locale });

export const getContact = async () =>
  (await getPayloadClient()).findGlobal({ slug: "contact" });

export const getFooter = async (locale: string) =>
  (await getPayloadClient()).findGlobal({ slug: "footer", locale });
