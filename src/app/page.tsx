import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      {/* Overlay with lower opacity */}
      <div className="absolute inset-0 bg-white/90 opacity-40" />

      {/* Foreground Content */}
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
