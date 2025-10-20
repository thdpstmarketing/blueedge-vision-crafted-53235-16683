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
    <section className="py-20 lg:py-32 bg-background" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-20 text-center bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl relative overflow-hidden shadow-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Let's Create Something <br />
            Amazing Together
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Transform your vision into reality with professional design solutions that captivate your audience and elevate your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full text-base group"
            >
              Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="https://wa.me/27793365471" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full text-base">
                WhatsApp Us <MessageCircle className="ml-2" />
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
