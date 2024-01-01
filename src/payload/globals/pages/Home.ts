import { GlobalConfig } from "payload/types";

export const Home: GlobalConfig = {
  slug: "home",
  admin: {
    group: "Pages",
  },
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        {
          name: "image",
          type: "upload",
          required: true,
          relationTo: "image",
        },
        {
          name: "title",
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "about",
          type: "textarea",
          localized: true,
          required: true,
        },
      ],
    },
    {
      name: "sections",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "image",
          required: true,
        },
        {
          name: "title",
          type: "text",
          localized: true,
          required: true,
        },
        {
          name: "description",
          type: "textarea",
          localized: true,
          required: true,
        },
        {
          name: "link",
          type: "text",
        },
      ],
    },
  ],
};
