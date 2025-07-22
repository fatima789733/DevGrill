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
        src="/images/bg_images.jpg"
        alt="Background"
        fill
        className="object-cover"
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
