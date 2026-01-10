import Header from "@/components/Header";
import Menu from "@/components/Menu";

const Speisekarte = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Menu />
      </div>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Taxim Shisha Bar. Alle Rechte vorbehalten. | 
            <span className="text-primary"> Authentische Aromen, einladende Atmosphäre</span>
          </p>
          <div className="mt-4 space-x-4">
            <a href="/agb" className="text-muted-foreground hover:text-primary underline">
              Allgemeine Geschäftsbedingungen
            </a>
            <span className="text-muted-foreground">|</span>
            <a href="/impressum" className="text-muted-foreground hover:text-primary underline">
              Impressum
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Speisekarte;
