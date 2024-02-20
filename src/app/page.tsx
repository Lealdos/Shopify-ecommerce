import { Description } from "@/components/home/Description";
import { Hero } from "@/components/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center  "
    >
      <Hero/>

<Description/>
    </main>
  );
}
