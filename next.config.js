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
