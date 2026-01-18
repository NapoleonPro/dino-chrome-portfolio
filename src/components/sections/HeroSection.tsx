import { motion } from 'framer-motion';
import { Scene3D } from '../3d/Scene3D';
import { DinoModel } from '../3d/DinoModel';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ground-line">
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-4 uppercase tracking-widest text-sm"
            >
              Creative Developer
            </motion.p>
            
            <h1 className="pixel-text text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-foreground">DINO DEV</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0 font-mono">
              Building pixel-perfect experiences that jump over obstacles and run towards innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="dino-button inline-block text-center"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border-2 border-foreground bg-transparent text-foreground font-bold uppercase tracking-wider transition-all hover:bg-foreground hover:text-background text-center"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* 3D Dino */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[400px] lg:h-[500px]"
          >
            <Scene3D cameraPosition={[0, 2, 8]} enableControls>
              <DinoModel position={[0, -1, 0]} scale={0.8} color="#1a1a1a" />
            </Scene3D>
          </motion.div>
        </div>
      </div>

      {/* Animated ground line */}
      <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
        <div className="ground-scroll flex whitespace-nowrap">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-muted-foreground/40 text-xs mx-2">
              ▓░▒░▓░░▒▓░▒░▓░░▒▓░▒░▓░░▒
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
