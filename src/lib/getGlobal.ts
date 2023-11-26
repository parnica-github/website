import getPayloadClient from '@/payload/payloadClient';

export const getHome = async () =>
  (await getPayloadClient()).findGlobal({ slug: 'home' });
export const getContact = async () =>
  (await getPayloadClient()).findGlobal({ slug: 'contact' });
export const getFooter = async () =>
  (await getPayloadClient()).findGlobal({ slug: 'footer' });
