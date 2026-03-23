import { useQuery } from "@tanstack/react-query";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
}

// Static mock data since there's no backend
const projects: Project[] = [
  {
    id: "luminary",
    title: "Luminary SaaS",
    description: "Intelligent financial dashboards for modern wealth managers. High-contrast data visualization.",
    tags: ["SaaS", "UI/UX", "FinTech"],
    imageUrl: `${import.meta.env.BASE_URL}images/project-1.png`,
  },
  {
    id: "noirbrand",
    title: "NoirBrand Co.",
    description: "Immersive e-commerce experience for luxury streetwear, focusing on spatial composition.",
    tags: ["E-Commerce", "Branding", "Web GL"],
    imageUrl: `${import.meta.env.BASE_URL}images/project-2.png`,
  },
  {
    id: "axiom",
    title: "Axiom Labs",
    description: "AI-driven analytics platform with a dark-mode first design system and complex filtering.",
    tags: ["Product Design", "AI", "Design System"],
    imageUrl: `${import.meta.env.BASE_URL}images/project-3.png`,
  }
];

const services: Service[] = [
  {
    id: "s1",
    number: "01",
    title: "Brand Identity Design",
    description: "Crafting iconic, memorable visual identities that position your business at the premium end of the market."
  },
  {
    id: "s2",
    number: "02",
    title: "SaaS Product Branding",
    description: "Translating complex software into intuitive, beautiful digital experiences that users love to engage with."
  },
  {
    id: "s3",
    number: "03",
    title: "Digital Experience Strategy",
    description: "End-to-end user journey mapping to ensure every touchpoint reflects high-ticket value and precision."
  }
];

export function useProjects() {
  return useQuery({
    queryKey: ["portfolio-projects"],
    queryFn: () => projects,
    staleTime: Infinity,
  });
}

export function useServices() {
  return useQuery({
    queryKey: ["portfolio-services"],
    queryFn: () => services,
    staleTime: Infinity,
  });
}
