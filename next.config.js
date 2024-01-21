// next.config.js
const path = require("path");
const { withPayload } = require("@payloadcms/next-payload");

const withNextIntl = require("next-intl/plugin")();

module.exports = withPayload(
  withNextIntl({
    images: {
      remotePatterns: [
        {
          hostname: "parnica-website-bucket.s3.eu-central-1.amazonaws.com",
        },
      ],
    },
    env: {
      MONGODB_URI: process.env.MONGODB_URI,
      PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
      PAYLOAD_CONFIG_PATH: process.env.PAYLOAD_CONFIG_PATH,
      ACCESS_ID_AWS: process.env.ACCESS_ID_AWS,
      SECRET_ACCESS_KEY_AWS: process.env.SECRET_ACCESS_KEY_AWS,
      S3_BUCKET_AWS: process.env.S3_BUCKET_AWS,
      REGION_AWS: process.env.REGION_AWS,
      EMAIL_HOST: process.env.EMAIL_HOST,
      EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
      EMAIL_TO: process.env.EMAIL_TO,
      EMAIL_USER: process.env.EMAIL_USER,
    },
  }),
  {
    // The second argument to `withPayload`
    // allows you to specify paths to your Payload dependencies
    // and configure the admin route to your Payload CMS.

    // Point to your Payload config (Required)
    configPath: path.resolve(__dirname, "./src/payload/payload.config.ts"),

    // Point to your exported, initialized Payload instance (optional, default shown below`)
    payloadPath: path.resolve(process.cwd(), "./src/payload/payloadClient.ts"),

    // Set a custom Payload admin route (optional, default is `/admin`)
    // NOTE: Read the "Set a custom admin route" section in the payload/next-payload README.
    adminRoute: "/admin",
  }
);
