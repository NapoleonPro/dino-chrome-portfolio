import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/sections/Footer';
import { FloatingAssets } from '../components/3d/FloatingAssets';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating 3D Assets - background decoration */}
      <FloatingAssets />
      
      <Navigation />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
