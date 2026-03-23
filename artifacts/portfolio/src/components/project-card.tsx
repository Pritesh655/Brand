import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/hooks/use-portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group block w-full relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-500 hover:border-muted-foreground/30 hover:shadow-2xl hover:shadow-black/50"
    >
      <div className="relative h-[280px] md:h-[340px] w-full overflow-hidden bg-secondary">
        {/* Hover overlay wash */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Floating action button */}
        <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <div className="p-6 md:p-8 relative z-20 bg-gradient-to-b from-card to-background">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-muted-foreground bg-secondary px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-display">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.a>
  );
}
