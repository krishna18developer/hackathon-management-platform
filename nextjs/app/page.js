import Image from "next/image";
import Hero from "./hero/page";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[95vw] flex-col items-center justify-between p-24">
      <Hero className="w-full" />
    </main>
  );
}
