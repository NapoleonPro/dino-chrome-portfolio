import { motion } from 'framer-motion';
import { Scene3D } from '../3d/Scene3D';
import { DinoModel } from '../3d/DinoModel';
import { CloudsModel } from '../3d/CloudsModel';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 bg-secondary/30 overflow-hidden">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Scene3D cameraPosition={[0, 0, 15]}>
          <CloudsModel position={[-5, 3, -5]} scale={0.004} speed={0.2} color="#888888" />
          <CloudsModel position={[6, 2, -8]} scale={0.003} speed={0.15} color="#aaaaaa" />
          <DinoModel position={[8, -2, -3]} scale={0.3} color="#555555" />
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
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's talk and make something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="dino-card">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm mb-1">Email</p>
                    <a href="mailto:hello@dinodev.com" className="text-muted-foreground hover:underline">
                      hello@dinodev.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm mb-1">Location</p>
                    <p className="text-muted-foreground">
                      The Internet (Remote)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small 3D Dino */}
            <div className="h-48 hidden lg:block">
              <Scene3D cameraPosition={[0, 1, 5]} enableControls>
                <DinoModel position={[0, -0.5, 0]} scale={0.5} color="#1a1a1a" />
              </Scene3D>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="dino-card">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-bold uppercase text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-bold uppercase text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-bold uppercase text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="dino-button w-full flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
