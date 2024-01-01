import { GlobalConfig } from "payload/types";
import { lexicalHTML } from "@payloadcms/richtext-lexical";

export const GDPR: GlobalConfig = {
  slug: "gdpr",
  admin: {
    group: "Pages",
  },
  fields: [
    {
      name: "GDPR",
      type: "richText",
      localized: true,
    },
    lexicalHTML("GDPR", {
      name: "GDPR_html",
    }),
  ],
};
