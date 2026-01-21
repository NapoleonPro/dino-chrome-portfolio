import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

export function HeroSection() {
  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-mono text-muted-foreground mb-6 tracking-widest uppercase">
              junior ai engineer, junior front end dev
            </p>
          </motion.div>
          
          <h1 className="heading-xl mb-8 min-h-[250px] md:min-h-[280px]">
            Hi,
            <br />
            <span className="text-muted-foreground">People call me</span>
            <br />
            <TypeAnimation
              sequence={[
                'Bar',
                2000,
                'Akbar',
                2000,
                'Akbar Permana',
                2000,
                'Konge',
                2000,
                'Urat',
                2000,
                'Ustad',
                2000,
                'Aslab',
                2000,
                'Dosen',
                2000,
                'Dosen, Aamiin',
                2000,
                'ban, ban apa yang basah?',
                2000,
                'banjir',
                2000,
                'ban jiiiiir (nada tuwir)',
                2000,
                'Ntah apa kubuat ni woi',
                2000,
                '',
              ]}
              speed={50}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed"
          >
            I am a student passionate about building web experiences and exploring the world of AI.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#work" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">gme
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-mono text-xs">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
