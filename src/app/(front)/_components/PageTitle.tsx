import Image from 'next/image';

import { getHome } from '@/lib/getGlobal';
import { isImageType } from '@/lib/isImageType';

import { Title } from './ui';

interface PageTitleProps {
  title: string;
}

export async function PageTitle({ title }: PageTitleProps) {
  const {
    hero: { image },
  } = await getHome();

  return (
    <div className="absolute inset-x-0 h-96">
      {isImageType(image) && image.url && (
        <Image src={image.url} alt="Medical" fill objectFit="cover" />
      )}

      <div className="absolute h-full w-full bg-gradient-to-r from-sky-600 from-35% to-sky-200/40" />

      <div className="absolute flex h-full w-full items-end px-5 pb-20 sm:w-2/4 md:px-24">
        <Title className="text-5xl text-white">{title}</Title>
      </div>
    </div>
  );
}
