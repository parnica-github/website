import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconLink,
} from '@tabler/icons-react';

import { Footer } from '@/payload/types';

type SocialNameType = NonNullable<Footer['socials']>[number]['name'];

const SIZE = 30;

export function getSocialIcon(name: SocialNameType) {
  switch (name) {
    case 'facebook':
      return <IconBrandFacebook size={SIZE} />;
    case 'linkedin':
      return <IconBrandLinkedin size={SIZE} />;
    case 'instagram':
      return <IconBrandInstagram size={SIZE} />;
    case 'youtube':
      return <IconBrandYoutube size={SIZE} />;
    case 'twitter':
      return <IconBrandTwitter size={SIZE} />;
    default:
      return <IconLink size={SIZE} />;
  }
}
