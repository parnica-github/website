import path from "path";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { Image } from "./collections/Image";
import { Contact } from "./globals/Contact";
import { Footer } from "./globals/Footer";
import { Hero } from "./globals/Hero";
import { Home } from "./globals/pages/Home";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY || "",
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
    region: process.env.AWS_REGION || "",
  },
  bucket: process.env.AWS_S3_BUCKET || "",
});

// @ts-ignore
export default buildConfig({
  collections: [Image],
  globals: [Hero, Footer, Contact, Home],
  plugins: [
    cloudStorage({
      collections: {
        image: {
          adapter,
        },
      },
    }),
  ],
  editor: lexicalEditor({}),
  db: mongooseAdapter({ url: process.env.MONGODB_URI || "" }),
  typescript: {
    outputFile: path.resolve(__dirname, "./types.ts"),
  },
});
