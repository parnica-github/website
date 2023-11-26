import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { isImageType } from '@/lib/isImageType';
import { Home } from '@/payload/types';

import { Button, Text, Title } from './ui';

interface SectionProps {
  reverse?: boolean;
  data: NonNullable<Home['sections']>[number];
}

const getLinkComponent = (linkUrl: string) => {
  if (linkUrl.startsWith('/')) {
    return (
      <Link href={linkUrl}>
        <Button label="Press Me" className="mt-10" />
      </Link>
    );
  }

  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <Button label="Press Me" className="mt-10" />
    </a>
  );
};

export function Section({ reverse, data }: SectionProps) {
  const { title, image, description, link } = data;

  return (
    <section
      className={classNames('flex flex-col gap-10', {
        'md:flex-row-reverse': reverse,
        'md:flex-row': !reverse,
      })}
    >
      {isImageType(image) && image.url && (
        <div className="relative aspect-video w-full flex-1 md:w-[570px]">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            objectFit="cover"
            className="rounded"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="h-full flex-1 flex-col md:py-10">
        <Title level={2} className="mb-10 text-sky-800 md:text-4xl">
          {title}
        </Title>
        <Text paragraph>{description}</Text>
        {link && getLinkComponent(link)}
      </div>
    </section>
  );
}
