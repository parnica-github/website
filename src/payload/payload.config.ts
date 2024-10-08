import path from "path";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { Image } from "./collections/Image";
import { Contact } from "./globals/Contact";
import { Footer } from "./globals/Footer";
import { Home } from "./globals/pages/Home";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import {
  HTMLConverterFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { GDPR } from "./globals/pages/GDPR";
import { About } from "./globals/pages/About";
import { Partner } from "./collections/Partner";
import { Product } from "./collections/Product";
import { Logo } from "@/app/(front)/[locale]/_components/layout/Logo";
import { Reference } from "./collections/Reference";

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.ACCESS_ID_AWS || "",
      secretAccessKey: process.env.SECRET_ACCESS_KEY_AWS || "",
    },
    region: process.env.REGION_AWS || "",
  },
  bucket: process.env.S3_BUCKET_AWS || "",
});

// @ts-ignore
export default buildConfig({
  admin: {
    meta: {
      titleSuffix: "- Parnica",
    },
    components: {
      graphics: {
        Logo,
      },
    },
  },
  collections: [Image, Partner, Product, Reference],
  globals: [Footer, Contact, Home, GDPR, About],
  plugins: [
    cloudStorage({
      collections: {
        image: {
          adapter,
        },
      },
    }),
  ],
  // @ts-ignore
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures.filter((feat) => feat.key !== "upload"),
      HTMLConverterFeature({}),
    ],
  }),
  db: mongooseAdapter({ url: process.env.MONGODB_URI || "" }),
  localization: {
    locales: [
      { label: "English", code: "en" },
      { label: "Türkce", code: "tr" },
    ],
    defaultLocale: "en",
    fallback: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "./types.ts"),
  },
});
