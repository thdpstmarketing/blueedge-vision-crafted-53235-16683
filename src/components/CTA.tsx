import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-background" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-20 text-center bg-gradient-to-br from-primary via-primary-dark to-primary rounded-xl sm:rounded-2xl relative overflow-hidden shadow-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Let's Create Something <br className="hidden sm:block" />
            Amazing Together
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
            Transform your vision into reality with professional design solutions that captivate your audience and elevate your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full text-sm sm:text-base group w-full sm:w-auto"
            >
              Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://wa.me/27793365471" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full text-sm sm:text-base w-full">
                WhatsApp Us <MessageCircle className="ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
