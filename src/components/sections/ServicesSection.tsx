import { motion } from 'framer-motion';
import { Code2, Palette, Layers, Zap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building performant, accessible, and scalable web applications using modern frameworks and best practices.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces and seamless user experiences that delight and convert.',
  },
  {
    icon: Layers,
    title: 'Creative Development',
    description: 'Crafting immersive digital experiences with animations, 3D graphics, and interactive elements.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Ensuring blazing-fast load times and smooth interactions for the best user experience.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="h-full relative z-10 flex items-center justify-center">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-mono text-muted-foreground mb-4 tracking-widest uppercase">
            Services
          </p>
          <h2 className="heading-lg max-w-2xl mx-auto">
            How I can help you
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="heading-md mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}