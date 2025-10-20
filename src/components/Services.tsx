import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Palette, FileText, Mail, Image, MessageSquare, Tag, Menu, Gift, Megaphone, Layout } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "Unique, memorable logos that capture your brand essence and stand the test of time",
  },
  {
    icon: Tag,
    title: "Brand Identity Design",
    description: "Complete branding packages that define your visual presence across all touchpoints",
  },
  {
    icon: FileText,
    title: "Business Card & Letterhead",
    description: "Professional stationery that makes lasting impressions and reinforces your brand",
  },
  {
    icon: Megaphone,
    title: "Digital Ads & Marketing",
    description: "Eye-catching designs for online campaigns that drive engagement and conversions",
  },
  {
    icon: Mail,
    title: "Email Newsletter Design",
    description: "Engaging email templates that captivate subscribers and boost click-through rates",
  },
  {
    icon: Image,
    title: "Posters & Flyers",
    description: "Scroll-stopping print designs that communicate your message with impact",
  },
  {
    icon: Menu,
    title: "Menu Design",
    description: "Appetizing menu layouts for restaurants and cafés that enhance dining experiences",
  },
  {
    icon: Gift,
    title: "Invitation & Event Cards",
    description: "Beautiful custom invitations that set the perfect tone for your special occasions",
  },
  {
    icon: Layout,
    title: "Label Design",
    description: "Product labels that pop off shelves and communicate your brand values",
  },
];

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-32 bg-muted/30" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 leading-tight">
            What We <span className="text-gradient">Create</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            We specialize in a full range of creative services tailored to elevate your brand through clean, impactful, and strategic design solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
              }}
              whileHover={{ y: -4 }}
              className="bg-background p-6 sm:p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground font-medium">
            Plus: Rebranding packages, custom illustrations, and more creative solutions tailored to your needs
          </p>
        </motion.div>
      </div>
    </section>
  );
};
