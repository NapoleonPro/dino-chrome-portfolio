import { motion } from 'framer-motion';
import { Scene3D } from '../3d/Scene3D';
import { BirdModel } from '../3d/BirdModel';

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Three.js', level: 85 },
  { name: 'Node.js', level: 88 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'CSS/Tailwind', level: 92 },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Floating bird 3D */}
      <div className="absolute top-10 right-10 w-48 h-32 pointer-events-none opacity-60">
        <Scene3D cameraPosition={[0, 0, 5]}>
          <BirdModel position={[0, 0, 0]} scale={0.3} speed={0.5} color="#555555" />
        </Scene3D>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-center">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="dino-card">
              <p className="text-lg mb-6 leading-relaxed">
                Like the legendary Chrome Dino, I've learned to navigate obstacles and keep running. 
                With <span className="font-bold">5+ years</span> of experience in web development, 
                I create experiences that are both functional and delightful.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When the internet goes down, the Dino game appears. When projects need a creative solution, 
                I appear. I specialize in building modern web applications with cutting-edge technologies 
                and a pixel-perfect attention to detail.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold uppercase text-sm tracking-wider">{skill.name}</span>
                  <span className="text-muted-foreground text-sm">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary border-2 border-foreground overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-foreground"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
