import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Layers from "@/components/Layers";
import FocusAreas from "@/components/FocusAreas";
import Fde from "@/components/Fde";
import Approach from "@/components/Approach";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Metrics />
        <Layers />
        <FocusAreas />
        <Fde />
        <Approach />
        <Work />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
