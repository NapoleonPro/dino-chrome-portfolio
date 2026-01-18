import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t-2 border-foreground bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pixel-text text-lg"
          >
            DINO DEV
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} All rights reserved.
          </p>
        </div>

        {/* Easter egg ground */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground/30 text-xs tracking-widest">
            ▓░▒░▓░░▒▓░▒░▓ GAME OVER ▓░▒░▓░░▒▓░▒░▓
          </p>
        </div>
      </div>
    </footer>
  );
}
