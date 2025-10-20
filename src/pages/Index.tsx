import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
const Index = () => {
  return <main className="min-h-screen scroll-smooth">
      <Hero />
      
      <Services />
      <Pricing />
      
      <CTA />
      <Contact />
      <Footer />
    </main>;
};
export default Index;