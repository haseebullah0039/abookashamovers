import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AreasWeServe from "@/components/AreasWeServe";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WorldClass from "@/components/WorldClass";
import Team from "@/components/Team";
import QuoteSection from "@/components/QuoteSection";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileSocialBar from "@/components/MobileSocialBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AreasWeServe />
        <About />
        <Marquee
          items={["MOVERS", "FURNITURE MOVERS", "PACKING SERVICE", "DELIVERY SERVICE", "WAREHOUSING"]}
          outlined={[]}
        />
        <Services />
        <WorldClass />
        <Process />
        <Gallery />
        <Marquee
          items={["MOVERS", "FURNITURE MOVERS", "PACKING SERVICE", "DELIVERY SERVICE", "WAREHOUSING"]}
          outlined={[]}
        />
        <Testimonials />
        <Partners />
        <Team />
        <QuoteSection />
        <Blog />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileSocialBar />
    </>
  );
}
