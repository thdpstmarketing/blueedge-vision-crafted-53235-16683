import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does BlueEdge Designs offer?",
    answer: "We offer a comprehensive range of creative services including logo design, brand identity development, business cards, letterheads, digital ads, social media content, poster design, flyer/brochure design, menu design, label design, invitation & event cards, email newsletters, and rebranding services.",
  },
  {
    question: "How can BlueEdge Designs help my business?",
    answer: "We help businesses stand out through professional, strategic design solutions that strengthen brand presence, captivate audiences, and drive growth. Whether you're launching a new business or refreshing your current image, we provide designs that inspire connection and trust.",
  },
  {
    question: "What is your design process?",
    answer: "Our process begins with understanding your vision and brand goals. We then develop concepts, refine based on your feedback, and deliver polished, professional designs. We believe in collaboration and ensure your vision is at the heart of every creation.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A logo design might take 1-2 weeks, while a full brand identity package could take 3-4 weeks. We'll provide a specific timeline during our initial consultation.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! We include revision rounds in our packages to ensure you're completely satisfied with the final design. Your feedback is essential to creating work that perfectly represents your brand.",
  },
];

export const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border border-border rounded-xl px-4 sm:px-6 data-[state=open]:border-primary/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-bold hover:text-primary py-4 sm:py-5 text-sm sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 sm:pb-5 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
