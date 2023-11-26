import { GlobalConfig } from 'payload/types';

export const Contact: GlobalConfig = {
  slug: 'contact',
  fields: [
    {
      name: 'address',
      type: 'textarea',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'time',
      type: 'text',
    },
  ],
};
