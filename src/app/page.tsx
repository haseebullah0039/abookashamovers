import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AreasWeServe from "@/components/AreasWeServe";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WorldClass from "@/components/WorldClass";
import QuoteSection from "@/components/QuoteSection";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileSocialBar from "@/components/MobileSocialBar";
import { dictionaries } from "@/i18n/dictionaries";

export default function Home() {
  const en = dictionaries.en;
  const ar = dictionaries.ar;

  const marqueeItems = en.marquee.map((item, i) => `${item} / ${ar.marquee[i]}`);

  return (
    <>
      <Header en={en} ar={ar} />
      <main>
        <Hero en={en} ar={ar} />
        <AreasWeServe en={en} ar={ar} />
        <About en={en} ar={ar} />
        <Marquee items={marqueeItems} outlined={[]} />
        <Services en={en} ar={ar} />
        <WorldClass en={en} ar={ar} />
        <Process en={en} ar={ar} />
        <Gallery en={en} ar={ar} />
        <Marquee items={marqueeItems} outlined={[]} />
        <Testimonials en={en} ar={ar} />
        <Partners en={en} ar={ar} />
        <QuoteSection en={en} ar={ar} />
      </main>
      <Footer en={en} ar={ar} />
      <WhatsAppButton />
      <MobileSocialBar />
    </>
  );
}
