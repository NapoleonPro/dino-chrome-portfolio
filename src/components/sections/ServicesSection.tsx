import { motion } from 'framer-motion';
import { Scene3D } from '../3d/Scene3D';
import { DinoModel } from '../3d/DinoModel';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building fast, responsive, and scalable web applications with modern technologies.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces that users love to interact with.',
  },
  {
    icon: Rocket,
    title: '3D Experiences',
    description: 'Crafting immersive 3D web experiences that stand out from the crowd.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing applications for speed and efficiency at every level.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* 3D Dino floating */}
      <div className="absolute top-1/2 right-0 w-48 h-64 pointer-events-none opacity-20 transform -translate-y-1/2">
        <Scene3D cameraPosition={[0, 2, 6]}>
          <DinoModel position={[0, 0, 0]} scale={0.4} color="#666666" />
        </Scene3D>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jump higher, run faster. Here's how I can help your project succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="dino-card text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 border-2 border-foreground flex items-center justify-center bg-background group-hover:bg-foreground group-hover:text-background transition-colors">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-lg font-bold mb-3 uppercase tracking-wide">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
