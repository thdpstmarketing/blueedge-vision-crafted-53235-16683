import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { ArrowRight, Award, Users, Target } from "lucide-react";
import aboutImage from "@/assets/about-macbook.png";
import { useRef } from "react";

const stats = [
  { number: "150+", label: "Projects Completed", icon: Award },
  { number: "100+", label: "Happy Clients", icon: Users },
  { number: "5★", label: "Rated Service", icon: Target },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-background" ref={sectionRef}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="BlueEdge Designs Creative Workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wide inline-block mb-3">
                About BlueEdge Designs
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                Design Is More Than <br />
                <span className="text-gradient">Visuals - It's An Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BlueEdge Designs is a modern creative agency built on the belief that design is more than visuals - it's an experience. We craft bold, meaningful, and timeless designs that help brands stand out with confidence.
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              From concept to creation, our passion lies in transforming ideas into visual stories that inspire connection, trust, and growth. At BlueEdge Designs, creativity meets purpose - giving your brand the professional edge it deserves.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button onClick={scrollToContact} variant="default" size="lg" className="rounded-full group mt-2">
                Start Your Project <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-muted/50 rounded-2xl p-8 text-center hover:bg-muted transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
