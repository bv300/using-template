import Navbar from "@/components/tem-seven/layout/Navbar";
import Footer from "@/components/tem-seven/layout/Footer";
import Hero from "@/components/tem-seven/section/Hero";
import About from "@/components/tem-seven/section/About";
import Services from "@/components/tem-seven/section/Services";
import Projects from "@/components/tem-seven/section/Projects";
import WhyChooseUs from "@/components/tem-seven/section/WhyChooseUs";
import CTA from "@/components/tem-seven/section/CTA";
import Contact from "@/components/tem-seven/section/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
