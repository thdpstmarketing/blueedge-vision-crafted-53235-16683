import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Logo Design",
  "Business Card Design",
  "Letterhead Design",
  "Rebranding Package",
  "Brand Identity Design",
  "Digital Ads",
  "Email Newsletter Design",
  "Poster Design",
  "Flyer Design",
  "Menu Design",
  "Label Design",
  "Invitation & Card Design",
  "Other"
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+27 79 336 5471",
    link: "tel:+27793365471",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+27 79 336 5471",
    link: "https://wa.me/27793365471",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Blueedgedesigns@gmail.com",
    link: "mailto:Blueedgedesigns@gmail.com",
  },
];

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const selectedService = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Encode message for WhatsApp
      const whatsappMessage = encodeURIComponent(
        `*New Project Inquiry*\n\n` +
        `*Name:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Phone:* ${data.phone}\n` +
        `*Service:* ${data.service}\n\n` +
        `*Message:*\n${data.message}`
      );
      
      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/27793365471?text=${whatsappMessage}`, '_blank');
      
      toast.success("Opening WhatsApp with your message!");
      reset();
    } catch (error) {
      toast.error("Failed to open WhatsApp. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-accent/5 opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-8 border border-primary/20"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest">Contact Us</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Have A Project Idea <br />
            <span className="text-gradient">In Your Mind?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's bring your vision to life. Get in touch and let's discuss how we can help your brand stand out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-black mb-6">Get In Touch</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Ready to start your next project? We're here to help. Reach out through any of the channels below and let's create something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target={info.label === "WhatsApp" ? "_blank" : undefined}
                  rel={info.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-5 p-6 bg-card rounded-2xl border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <info.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-bold uppercase tracking-wide">{info.label}</div>
                    <div className="font-bold text-lg">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20"
            >
              <h4 className="font-black text-xl mb-3">Quick Response Time</h4>
              <p className="text-muted-foreground">
                We respond within an hour during business hours. For urgent inquiries, WhatsApp is the fastest way to reach us.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3 bg-card p-10 rounded-3xl border-2 border-border shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wide">Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your full name"
                    className="mt-2 h-12"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wide">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className="mt-2 h-12"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-sm font-bold uppercase tracking-wide">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+27 79 336 5471"
                    className="mt-2 h-12"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="service" className="text-sm font-bold uppercase tracking-wide">Service Required *</Label>
                  <Select onValueChange={(value) => setValue("service", value)}>
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-2 border-border max-h-[300px] z-50">
                      {services.map((service) => (
                        <SelectItem key={service} value={service} className="cursor-pointer">
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-sm text-destructive mt-1">{errors.service.message}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-bold uppercase tracking-wide">Message *</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Tell us about your project and vision..."
                  rows={6}
                  className="mt-2"
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full h-14 text-lg font-bold group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending to WhatsApp..." : "Send Message via WhatsApp"}
                <MessageCircle className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Your message will open in WhatsApp for secure, direct communication with our team.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
