import Hero from "@/components/tem-three/Hero";
import About from "@/components/tem-three/About";
import Services from "@/components/tem-three/Services";
import StickyFeatures from "@/components/tem-three/StickyFeatures";
import Contact from "@/components/tem-three/Contact";
import ScrollMarquee from "@/components/tem-three/ScrollMarquee";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen">
      <Hero />
      <About />
      
      {/* Scroll Marquee Section */}
      <ScrollMarquee />
      
      <Services />
      
      <StickyFeatures />
      <Contact />
    </main>
  );
}


