import Image from 'next/image';

import { getHome } from '@/lib/getGlobal';
import { isImageType } from '@/lib/isImageType';

import { Text, Title } from './ui';

export async function Hero() {
  const {
    hero: { title, image, about },
  } = await getHome();

  return (
    <div className="absolute inset-x-0 h-full w-full">
      {isImageType(image) && image.url && (
        <Image src={image.url} alt="Medical" fill objectFit="cover" />
      )}

      <div className="absolute h-full w-full bg-gradient-to-r from-sky-600 from-35% to-sky-200/40" />

      <div className="absolute flex h-full flex-col justify-center gap-5 rounded-l-md p-5 sm:w-2/4 md:p-20">
        <Title className="text-5xl leading-snug text-white">{title}</Title>
        <Text className="font-medium leading-relaxed !text-gray-200">
          {about}
        </Text>
      </div>
    </div>
  );
}
