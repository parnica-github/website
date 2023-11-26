import { GlobalConfig } from 'payload/types';

export const Hero: GlobalConfig = {
  slug: 'hero',
  fields: [
    {
      name: 'heroimage',
      type: 'upload',
      required: true,
      relationTo: 'image',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'about',
      type: 'textarea',
      required: true,
    },
  ],
};
