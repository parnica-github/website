import NextImage from "next/image";
import { Image } from "@/payload/types";
import { isImageType } from "@/lib/isImageType";
import { Link } from "@/lib/navigation";

interface PartnerCardProps {
  image: Image | string;
  title: string;
  brand: string;
  url: string;
}

export function ProductCard({ image, title, url, brand }: PartnerCardProps) {
  return (
    <Link href={url} className="w-full sm:w-72">
      <div className="rounded overflow-hidden border shadow-lg py-3 px-5 flex flex-col gap-5 min-h-full">
        <div className="relative h-72 w-full">
          {image && isImageType(image) && image.url && (
            <NextImage
              alt={image.alt}
              src={image.url}
              fill
              objectFit="contain"
            />
          )}
        </div>
        <h2 className="font-bold text-xl">{title}</h2>
        <span className="mb-5 text-sm text-gray-600">{brand}</span>
      </div>
    </Link>
  );
}
