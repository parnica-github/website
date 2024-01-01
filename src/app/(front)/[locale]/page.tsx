import { getHome } from "@/lib/getGlobal";

import { Hero } from "./_components/Hero";
import { Section } from "./_components/Section";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { sections } = await getHome(locale);

  return (
    <>
      <div className="h-screen">
        <Hero />
      </div>

      {sections && (
        <div className="flex flex-col gap-40 py-40">
          {sections.map((section, index) => (
            <Section
              key={section.id}
              data={section}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      )}
    </>
  );
}
