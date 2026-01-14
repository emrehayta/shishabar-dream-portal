import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (sectionId: string) => {
    setIsMenuOpen(false);

    // Use hash-based navigation so it also works from other routes
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    // Same-page scroll
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback: set hash so the home page effect can handle it
      window.location.hash = sectionId;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => handleNav("hero")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img 
            src="/lovable-uploads/307a05a7-a5ac-4293-b708-1d61df5b9890.png" 
            alt="Taxim Logo" 
            className="h-16 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => handleNav("hero")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Startseite
          </button>
          <button
            onClick={() => handleNav("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Über uns
          </button>
          <a
            href="/speisekarte.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Speisekarte
          </a>
          <button
            onClick={() => handleNav("contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Besuchen Sie uns
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => handleNav("hero")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Startseite
            </button>
            <button
              onClick={() => handleNav("about")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Über uns
            </button>
            <a
              href="/speisekarte.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Speisekarte
            </a>
            <button
              onClick={() => handleNav("contact")}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              Besuchen Sie uns
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;