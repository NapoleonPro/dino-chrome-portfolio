import { ThemeProvider } from 'next-themes';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/sections/Footer';
import { FloatingAssets } from '../components/3d/FloatingAssets';
import { StarsBackground } from '../components/StarsBackground';

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Stars/dots background */}
        <StarsBackground />
        
        {/* Floating 3D Assets - background decoration */}
        <FloatingAssets />
        
        <Navigation />
        <main className="relative z-10">
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
