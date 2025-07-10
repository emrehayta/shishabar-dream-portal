import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

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
              LOUNGE
            </span>
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              MYSTIQUE
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the ultimate shisha lounge where luxury meets tradition. 
            Immerse yourself in exotic flavors and atmospheric elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToMenu}
              className="text-lg px-8 py-4"
            >
              Explore Menu
            </Button>
            <Button 
              variant="gold" 
              size="lg"
              className="text-lg px-8 py-4"
            >
              Reserve Now
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