import { lexicalHTML } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload/types";

export const Product: CollectionConfig = {
  slug: "product",
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
      name: "Partner",
      type: "relationship",
      relationTo: "partner",
    },
    {
      name: "Title",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "About",
      type: "richText",
      localized: true,
    },
    lexicalHTML("About", {
      name: "About_html",
    }),
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
