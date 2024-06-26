import { Image } from '@/payload/types';

export const isImageType = (image: string | Image): image is Image => {
  return (image as Image).url !== undefined;
};

export const isPartnerType = (image: string | Image): image is Image => {
  return (image as Image).url !== undefined;
};
