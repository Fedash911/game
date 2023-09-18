import { Hello } from "@/components/Hello/Hello";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <Hello textTr={dict.home} />
    </main>
  );
}
