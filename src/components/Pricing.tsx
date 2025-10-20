import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Sparkles } from "lucide-react";
import { useRef } from "react";

const pricingData = [
  {
    category: "Branding & Identity",
    services: [
      { name: "Logo Design", price: "R200" },
      { name: "Business Card Design", price: "R300" },
      { name: "Letterhead Design", price: "R150" },
      { name: "Rebranding Package", price: "R600" },
      { name: "Brand Identity Design (Full Package)", price: "R800" },
    ],
  },
  {
    category: "Digital & Marketing",
    services: [
      { name: "Digital Ads", price: "R250" },
      { name: "Email Newsletter Design", price: "R250" },
      { name: "Poster Design", price: "R250" },
      { name: "Flyer Design", price: "R250" },
      { name: "Menu Design", price: "R300" },
      { name: "Label Design", price: "R200" },
      { name: "Invitation & Card Design", price: "R200" },
    ],
  },
];

export const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="pricing" className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background shapes */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border border-primary/20"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest">Pricing</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight px-4">
            Premium Design <br />
            <span className="text-gradient">Fair Pricing</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Professional design services tailored to elevate your brand without breaking the bank
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {pricingData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border-2 border-border group-hover:border-primary/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary to-primary/60 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black">{category.category}</h3>
                </div>

                <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.05 }}
                      className="flex items-center justify-between py-3 sm:py-4 border-b border-border/50 last:border-0 group/item hover:pl-2 transition-all duration-300"
                    >
                      <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 flex-1">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/15 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary group-hover/item:text-primary-foreground transition-colors" />
                        </div>
                        <span className="text-foreground font-semibold text-sm sm:text-base lg:text-lg">
                          {service.name}
                        </span>
                      </div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-black text-gradient ml-3 sm:ml-4 lg:ml-6 group-hover/item:scale-110 transition-transform flex-shrink-0">
                        {service.price}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-12 lg:mt-16 text-center px-4"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-primary/10 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full border border-primary/20">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
            <p className="text-foreground font-bold text-xs sm:text-sm lg:text-base">
              All prices in South African Rand (ZAR) • Professional Quality Guaranteed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
