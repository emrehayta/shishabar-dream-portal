import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
const heroImage = "/lovable-uploads/ae6800bb-9f06-4b32-8a1b-41a33c9b6341.png";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary/30 animate-float">
        <Sparkles className="h-16 w-16" />
      </div>
      <div className="absolute top-40 right-20 text-gold/40 animate-float" style={{ animationDelay: '1s' }}>
        <Star className="h-12 w-12" />
      </div>
      <div className="absolute bottom-40 left-20 text-teal/30 animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="h-20 w-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              TAXIM
            </span>
            <br />
            <span className="text-foreground">
              SHISHA BAR
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Willkommen in der Taxim Shisha Bar - wo authentische Aromen auf modernen Komfort treffen. 
            Genießen Sie Premium-Shisha, erfrischende Getränke und köstliche Leckereien in unserer einladenden Atmosphäre.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToMenu}
              className="text-lg px-8 py-4"
            >
              Speisekarte entdecken
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;