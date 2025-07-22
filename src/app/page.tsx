import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: "url('/bg_image.jpg')" }}
      /> */}

      <Image
        src="/bg_image.jpg"
        alt="Background"
        width={100}
        height={100}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay with lower opacity */}
      <div className="absolute inset-0 bg-white/60 opacity-50" />

      {/* Foreground Content */}
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
