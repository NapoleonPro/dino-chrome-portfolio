import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'A modern shopping experience with seamless checkout and real-time inventory.',
    year: '2024',
    link: '#',
  },
  {
    id: 2,
    title: 'AI Analytics Dashboard',
    category: 'UI/UX Design',
    description: 'Data visualization platform with machine learning insights and predictions.',
    year: '2024',
    link: '#',
  },
  {
    id: 3,
    title: 'Creative Agency Site',
    category: 'Web Development',
    description: 'Award-winning website featuring immersive 3D animations and interactions.',
    year: '2023',
    link: '#',
  },
  {
    id: 4,
    title: 'SaaS Product Landing',
    category: 'Design & Development',
    description: 'Conversion-focused landing page with elegant micro-interactions.',
    year: '2023',
    link: '#',
  },
];

export function ProjectsSection() {
  return (
    <section id="work" className="h-screen relative z-10 flex flex-col justify-center">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-mono text-muted-foreground mb-4 tracking-widest uppercase">
            Selected Work
          </p>
          <h2 className="heading-lg max-w-2xl">
            Projects I've worked on recently
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group block"
            >
              <div className="card-elevated flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-mono text-muted-foreground">
                      {project.category}
                    </span>
                    <span className="text-muted-foreground/30">•</span>
                    <span className="text-mono text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="heading-md mb-2 group-hover:text-muted-foreground transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
