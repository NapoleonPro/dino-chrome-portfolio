import { motion } from 'framer-motion';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary/50 relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-mono text-muted-foreground mb-4 tracking-widest uppercase">
              About Me
            </p>
            <h2 className="heading-lg mb-8">
              A developer who cares about craft
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm a creative developer based in the digital realm, passionate about building beautiful and functional web experiences that make a difference.
              </p>
              <p>
                With expertise in modern web technologies and a keen eye for design, I bridge the gap between aesthetics and functionality. Every project is an opportunity to create something meaningful.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open source, or probably playing the Chrome Dino game offline.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="card-elevated text-center md:text-left"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-mono">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
