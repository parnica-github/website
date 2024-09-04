import { lexicalHTML } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload/types";

export const Reference: CollectionConfig = {
  slug: "reference",
  admin: {
    useAsTitle: "Title",
  },
  fields: [
    {
      name: "Image",
      type: "upload",
      relationTo: "image",
      required: true,
    },
    {
      name: "Title",
      type: "text",
      required: true,
    },
    {
      name: "About",
      type: "richText",
      localized: true,
    },
    lexicalHTML("About", {
      name: "About_html",
    }),
  ],
};
