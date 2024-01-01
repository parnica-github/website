import { GlobalConfig } from "payload/types";

export const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      name: "about",
      type: "textarea",
      localized: true,
      required: true,
    },
    {
      name: "socials",
      type: "array",
      fields: [
        {
          name: "name",
          type: "select",
          required: true,
          options: [
            { label: "Facebook", value: "facebook" },
            { label: "Linkedin", value: "linkedin" },
            { label: "Instagram", value: "instagram" },
            { label: "Youtube", value: "youtube" },
            { label: "Twitter", value: "twitter" },
          ],
        },
        {
          name: "url",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
