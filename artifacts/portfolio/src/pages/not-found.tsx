import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background bg-noise text-foreground p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md glass-panel p-12 rounded-3xl"
      >
        <h1 className="text-7xl font-display font-bold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-muted-foreground">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The digital experience you are looking for does not exist in this architecture.
        </p>
        <Link href="/" className="inline-block">
          <Button variant="outline">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Return Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
