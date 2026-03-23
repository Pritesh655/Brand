import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useProjects, useServices } from "@/hooks/use-portfolio";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const { data: projects = [] } = useProjects();
  const { data: services = [] } = useServices();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-noise min-h-screen w-full selection:bg-primary selection:text-primary-foreground">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-auto text-xl font-display font-bold tracking-tighter"
        >
          P.
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pointer-events-auto"
        >
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-semibold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel p-10 md:p-14 rounded-3xl text-center max-w-[400px] md:max-w-[440px] w-full relative z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-3 text-card-foreground"
          >
            Pritesh.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-xs md:text-sm uppercase tracking-[4px] font-semibold"
          >
            Brand Architect
          </motion.p>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="h-[1px] w-full bg-border my-8 origin-center"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-muted-foreground text-[15px] md:text-base leading-relaxed text-balance"
          >
            Building generational wealth. Crafting minimalist & moody digital experiences for high-ticket SaaS.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-10"
          >
            <Button onClick={() => scrollToSection('work')} className="w-full sm:w-auto">
              View Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <Section id="work">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground">
              Selected Work
            </h2>
            <p className="text-muted-foreground mt-4 text-lg max-w-md">
              A curated collection of digital experiences designed for market leaders.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-secondary/30 rounded-[3rem] my-20">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-16 text-center">
          Expertise
        </h2>
        
        <div className="max-w-4xl mx-auto flex flex-col">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-t border-border last:border-b transition-colors hover:border-muted-foreground/50"
            >
              <div className="text-muted-foreground font-display text-xl font-bold md:w-24 shrink-0">
                {service.number}
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed md:text-lg max-w-2xl">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="min-h-[70vh] flex flex-col justify-center items-center text-center pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-foreground mb-8 text-balance leading-tight">
            Ready to build something <span className="italic text-muted-foreground">iconic?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
            Available for select brand architecture and digital experience projects. Let's elevate your SaaS to the next level.
          </p>
          
          <Button size="lg" onClick={() => window.location.href = "mailto:priteshmohapatra63@gmail.com"} className="rounded-full shadow-2xl shadow-primary/20">
            <Mail className="mr-3 w-5 h-5" />
            Start a Conversation
          </Button>
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="w-full py-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">
          &copy; {new Date().getFullYear()} Pritesh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
