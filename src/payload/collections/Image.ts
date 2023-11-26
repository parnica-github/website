import { CollectionConfig } from 'payload/types';

export const Image: CollectionConfig = {
  slug: 'image',
  upload: {
    mimeTypes: ['image/png', 'image/jpeg'],
    staticURL: 'https://parnica-website-bucket.s3.eu-central-1.amazonaws.com',
  },
  admin: {
    group: 'Uploads',
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
};
