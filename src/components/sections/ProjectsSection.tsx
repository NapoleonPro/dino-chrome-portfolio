import { motion } from 'framer-motion';
import { Scene3D } from '../3d/Scene3D';
import { CactusModel } from '../3d/CactusModel';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and seamless checkout experience.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'AI Dashboard',
    description: 'Analytics dashboard with machine learning predictions and beautiful data visualizations.',
    tags: ['TypeScript', 'Python', 'D3.js'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: '3D Portfolio',
    description: 'Interactive 3D portfolio website with immersive animations and creative interactions.',
    tags: ['Three.js', 'React', 'GSAP'],
    link: '#',
    github: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 bg-secondary/30 overflow-hidden ground-line">
      {/* Single 3D Cactus decoration */}
      <div className="absolute bottom-0 right-10 w-32 h-48 pointer-events-none">
        <Scene3D cameraPosition={[0, 2, 5]}>
          <CactusModel position={[0, -1, 0]} scale={0.8} color="#2a2a2a" />
        </Scene3D>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each project is a new obstacle conquered. Here are some of my favorite jumps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="dino-card group"
            >
              {/* Project thumbnail placeholder */}
              <div className="aspect-video bg-accent mb-4 border-2 border-foreground flex items-center justify-center overflow-hidden">
                <div className="text-4xl opacity-20">🦖</div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-foreground text-background font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="flex items-center gap-1 text-sm font-bold hover:underline"
                >
                  <ExternalLink size={14} />
                  Live
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-1 text-sm font-bold hover:underline"
                >
                  <Github size={14} />
                  Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
