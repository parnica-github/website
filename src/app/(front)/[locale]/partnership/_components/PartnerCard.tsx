import NextImage from "next/image";
import { Image } from "@/payload/types";
import { isImageType } from "@/lib/isImageType";
import { Link } from "@/lib/navigation";

interface PartnerCardProps {
  image: Image | string;
  url: string;
}

export function PartnerCard({ image, url }: PartnerCardProps) {
  return (
    <Link href={url}>
      <div className="size-72 rounded overflow-hidden shadow-lg p-3">
        <div className="relative h-full w-full">
          {image && isImageType(image) && image.url && (
            <NextImage
              alt={image.alt}
              src={image.url}
              fill
              objectFit="contain"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
