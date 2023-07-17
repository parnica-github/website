import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex justify-center items-center flex-col gap-3">
      <Image
        src="/parnica.jpeg"
        alt="Parnica Healthcare Solutions"
        width={540}
        height={205}
      />
      <span className="text-5xl">Healthcare Solutions</span>
      <span>
        Contact:{" "}
        <a href="mailto:info@parnica.com.tr" className="text-blue-500">
          info@parnica.com.tr
        </a>
      </span>
      <span>We are preparing the best content for you.</span>
    </div>
  );
}
