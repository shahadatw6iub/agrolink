import HeroText from "@/components/HeroText";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroText />
      <div>
        dev
      </div>
    </main>
  );
}
