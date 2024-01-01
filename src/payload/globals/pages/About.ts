import { GlobalConfig } from "payload/types";

import { lexicalHTML } from "@payloadcms/richtext-lexical";

export const About: GlobalConfig = {
  slug: "about",
  admin: {
    group: "Pages",
  },
  fields: [
    {
      name: "Content",
      type: "richText",
      localized: true,
    },
    lexicalHTML("Content", {
      name: "Content_html",
    }),
  ],
};
