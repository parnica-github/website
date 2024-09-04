import NextImage from "next/image";
import { Image } from "@/payload/types";
import { isImageType } from "@/lib/isImageType";
import parser from "html-react-parser";

interface PartnerCardProps {
  image: Image | string;
  title: string;
  content: string;
}

export function ReferenceCard({ image, content, title }: PartnerCardProps) {
  return (
    <div className="rounded overflow-hidden shadow-lg border flex gap-10 items-center w-full md:w-[56rem] p-5">
      <div className="relative h-60 w-full">
        {image && isImageType(image) && image.url && (
          <NextImage alt={image.alt} src={image.url} fill objectFit="contain" />
        )}
      </div>

      <div>
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="prose !max-w-none">{parser(content)}</div>
      </div>
    </div>
  );
}
