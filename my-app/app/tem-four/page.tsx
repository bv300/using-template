import Header from '@/components/tem-four/Header';
import Hero from '@/components/tem-four/Hero';
import About from '@/components/tem-four/About';
import Services from '@/components/tem-four/Services';
import WhyChooseUs from '@/components/tem-four/WhyChooseUs';
import Contact from '@/components/tem-four/Contact';
import Footer from '@/components/tem-four/Footer';
import ScrollToTop from '@/components/tem-four/ScrollToTop';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

