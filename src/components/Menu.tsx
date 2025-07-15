import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlassWater, Coffee, Wine, Sparkles, UtensilsCrossed } from "lucide-react";

const menuImage = "/lovable-uploads/8812e16a-73fe-4c22-8f49-de67a358ad74.png";

const Menu = () => {
  const limos = [
    { name: "Limo Classic", price: "€5.90", size: "0.50L" },
    { name: "Limo Blueberry", price: "€5.90", size: "0.50L" },
    { name: "Limo Apfel", price: "€5.90", size: "0.50L" }
  ];

  const sodaMix = [
    { name: "Soda Erdbeere", price: "€4.20", size: "0.50L" },
    { name: "Soda Himbeere", price: "€4.20", size: "0.50L" },
    { name: "Soda Honigmelone", price: "€4.20", size: "0.50L" },
    { name: "Soda Wassermelone", price: "€4.20", size: "0.50L" },
    { name: "Soda Holunder", price: "€4.20", size: "0.50L" },
    { name: "Soda Mojito Mint", price: "€4.20", size: "0.50L" },
    { name: "Soda Apple", price: "€4.20", size: "0.50L" },
    { name: "Soda Maracuja", price: "€4.20", size: "0.50L" },
    { name: "Soda Kiwi", price: "€4.20", size: "0.50L" },
    { name: "Soda Karamel", price: "€4.20", size: "0.50L" }
  ];

  const milkshakes = [
    "Schoko", "Banane", "Erdbeere", "Kiwi", "Cocos"
  ];

  const cocktailsAlcoholic = [
    { name: "Pina Colada", price: "€9.90", ingredients: "Weißer Rum, Ananassaft, Milch, Cocossirup" },
    { name: "Strawberry Colada", price: "€9.90", ingredients: "Weißer Rum, Erdbeerlikör, Ananassaft, Milch, Cocossirup" },
    { name: "Banana Colada", price: "€9.90", ingredients: "Weißer Rum, Bananensirup, Ananassaft, Milch, Cocossirup" },
    { name: "Taxim Berrybomb", price: "€10.90", ingredients: "Weißer Rum, Vodka, Gin, Berrymix, Grenadine, gefrorene Waldbeerenfrüchte", special: true },
    { name: "Bahama Mama", price: "€9.90", ingredients: "Weißer Rum, Kokoslikör, brauner Rum, Ananassaft, Zitronensaft, Orangensaft, Grenadine" },
    { name: "Blue Hawaii", price: "€9.90", ingredients: "Vodka, Weißer Rum, Blue Curacao, Ananassaft, Limettensaft, Zuckersirup" },
    { name: "Mojito", price: "€9.90", ingredients: "Weißer Rum, Soda, Limette, brauner Zucker, Minze" },
    { name: "Cosmopolitan", price: "€9.90", ingredients: "Vodka, Cointreau, Cranberrysaft, Limettensaft" },
    { name: "Taxim Mojito Strawberry", price: "€10.90", ingredients: "Weißer Rum, Soda, Erdbeersaft, brauner Zucker, Minze, Limette", special: true },
    { name: "Long Island Ice Tea", price: "€10.90", ingredients: "Cointreau, Gin, Vodka, Weißer Rum, Tequila, Zitronensaft, Cola", special: true },
    { name: "Sex on the Beach", price: "€9.90", ingredients: "Vodka, Peachlikör, Orangensaft, Cranberrysaft, Grenadine" },
    { name: "Swimming Pool", price: "€9.90", ingredients: "Vodka, Ananassaft, Milch, Blue Curacao, Cocossirup" },
    { name: "Caipirinha", price: "€9.90", ingredients: "Cachacha, Soda, brauner Zucker, Limette" },
    { name: "Tequila Sunrise", price: "€9.90", ingredients: "Tequila, Orangensaft, Zitronensaft, Grenadine" },
    { name: "Cuba Libre", price: "€9.90", ingredients: "Weißer Rum, Cola, Limette, Limettensaft" },
    { name: "Margarita", price: "€9.90", ingredients: "Tequila, Cointreau, Limettensaft, Zuckersirup" },
    { name: "Daiquiri", price: "€9.90", ingredients: "Weißer Rum, Limettensaft, Zuckersirup" },
    { name: "Mai Tai", price: "€10.90", ingredients: "Brauner Rum, Weißer Rum, Cointreau, Zuckersirup, Mandelsirup, Zitronensaft, Zitrone", special: true },
    { name: "Zombie", price: "€10.90", ingredients: "Cointreau, Rum, Ananassaft, Zitronensaft, Orangensaft, Maracujasirup, Grenadine", special: true },
    { name: "Whiskey Sour", price: "€9.90", ingredients: "Whiskey, Zitronensaft, Zuckersirup" },
    { name: "Ipanema", price: "€7.90", ingredients: "Limette, Maracujasirup, Ginger Ale, brauner Zucker" }
  ];

  const cocktailsVirgin = [
    { name: "Virgin Strawberrykiss", price: "€7.90", ingredients: "Ananassaft, Milch, Erdbeersaft, Cocossirup, Grenadine" },
    { name: "Coconut Kiss", price: "€7.90", ingredients: "Ananassaft, Milch, Cocossirup, Grenadine" },
    { name: "Virgin Sunrise", price: "€7.90", ingredients: "Orangensaft, Ananassaft, Zitronensaft, Grenadine" },
    { name: "Florida", price: "€7.90", ingredients: "Orangensaft, Ananassaft, Zitronensaft, Maracujasirup, Grenadine" },
    { name: "Virgin Mojito", price: "€7.90", ingredients: "Ginger Ale, brauner Zucker, Minze, Limette, Mojitosirup" },
    { name: "Schoko Coco", price: "€8.90", ingredients: "Milch, Schokoladensauce, Kakao, Cocossirup" },
    { name: "Virgin Mojito Strawberry", price: "€8.90", ingredients: "Soda, Erdbeersaft, brauner Zucker, Limette, Minze, Mojitosirup" },
    { name: "Virgin Calpirinha", price: "€7.90", ingredients: "Ginger Ale, brauner Zucker, Limettensaft, Limette" },
    { name: "Virgin Swimming Pool", price: "€7.90", ingredients: "Ananassaft, Milch, Cocossirup, Blue Curacao" }
  ];

  const longdrinks = [
    { name: "Jacky Cola", price: "€5.50" },
    { name: "Jacky Bull", price: "€6.00" },
    { name: "Chivas Cola", price: "€5.50" },
    { name: "Chivas Bull", price: "€6.00" },
    { name: "Vodka Bull", price: "€5.50" },
    { name: "Vodka Lemon", price: "€5.50" },
    { name: "Vodka Orange", price: "€5.50" },
    { name: "Vodka Erdbeere", price: "€5.50" },
    { name: "Cola Rum", price: "€5.50" },
    { name: "Bacardi Cola", price: "€5.50" },
    { name: "Malibu Orange", price: "€5.50" },
    { name: "Gin Tonic", price: "€5.90" },
    { name: "Gin Lemon", price: "€5.90" },
    { name: "Raki", price: "€5.50" },
    { name: "Eristoff Ice", price: "€5.50" },
    { name: "Eristoff Fire", price: "€4.50" }
  ];

  const coffee = [
    { name: "Türkischer Kaffee", price: "€3.50" },
    { name: "Verlängerter", price: "€3.50" },
    { name: "Espresso", price: "€3.00" },
    { name: "Espresso Doppio", price: "€4.00" },
    { name: "Latte Macchiato", price: "€4.20" },
    { name: "Cappuccino", price: "€4.20" },
    { name: "Heiße Schokolade", price: "€4.20" }
  ];

  const shots = [
    "Tequila", "Jägermeister", "Klopfer", "Averna Zitrone", "Erdbeershot", "Sourz Apfel", "Sambuca", "Berliner Luft"
  ];

  const snacks = [
    { name: "Nachos mit Sauce (XXL)", price: "€7.90" },
    { name: "Popcorn", price: "€4.90" },
    { name: "Schoko-Brownie", price: "€6.90" },
    { name: "Obstteller klein", price: "€14.90" },
    { name: "VIP Obstteller", price: "€19.90" },
    { name: "Raki Meze", price: "€9.90" },
    { name: "Käsetoast", price: "€4.90" },
    { name: "Sucuktoast", price: "€5.90" },
    { name: "Pizza Margherita", price: "€9.90" },
    { name: "Portion Pommes", price: "€5.50" }
  ];

  const shishaFlavors = [
    "Black Nana (Bombe Traube Minze)", "Beach Vibes", "Red Light", "Zafari", "Sweet Cactus", "Hamburg",
    "Ello Raffa", "Mama Candy", "Pink Mellow", "Blue Devil", "Bruderherz", "Blut gegen Blut",
    "Handgemacht Illegal", "Sommer in Beirut", "Bonnie Clyde", "Blood Punch", "Yellow Punch",
    "Red Magic", "Blue Magic", "Nasty Girl", "African Queen", "Okolom", "Wild Bunch",
    "Ringle Rangle", "Lemon Chill", "Skittlez", "Mango Rose", "Huba Cola", "Komm Komm", "Melodien"
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Unsere Speisekarte
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Genießen Sie authentische Aromen, erfrischende Getränke und Premium-Shisha 
            in der Taxim Shisha Bar.
          </p>
          <div className="mt-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 text-lg py-2 px-4">
              Keine Karte - Nur Barzahlung
            </Badge>
          </div>
        </div>

        <div className="grid gap-16">
          {/* Limo's */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center gap-3">
              <GlassWater className="h-8 w-8" />
              Limo's
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="text-center mb-6">
                <p className="text-muted-foreground">0,50L je €5,90</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {limos.map((limo, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-card/50 rounded-lg border border-primary/10">
                    <div>
                      <span className="text-foreground font-medium">{limo.name}</span>
                      <div className="text-sm text-muted-foreground">{limo.size}</div>
                    </div>
                    <span className="text-primary font-semibold">{limo.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Soda Mix */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center gap-3">
              <GlassWater className="h-8 w-8" />
              Soda Mix
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="text-center mb-6">
                <p className="text-muted-foreground">0,50L je €4,20</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sodaMix.map((soda, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-card/50 rounded-lg border border-primary/10">
                    <span className="text-foreground">{soda.name}</span>
                    <span className="text-primary font-semibold">{soda.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Milkshakes */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center gap-3">
              <Coffee className="h-8 w-8" />
              Milkshake
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="text-center mb-6">
                <p className="text-muted-foreground">0,50L €5,90, mit Schlag + €0,50</p>
              </div>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {milkshakes.map((shake, index) => (
                  <div key={index} className="text-center py-3 px-4 bg-card/50 rounded-lg border border-primary/10">
                    <span className="text-foreground font-medium">{shake}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Alkoholische Cocktails */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center gap-3">
              <GlassWater className="h-8 w-8" />
              Alkoholische Cocktails
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="text-center mb-6">
                <p className="text-muted-foreground">€9,90 – €10,90</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {cocktailsAlcoholic.map((cocktail, index) => (
                  <div key={index} className="p-4 bg-card/50 rounded-lg border border-primary/10">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex flex-col">
                        <h4 className="font-semibold text-foreground">{cocktail.name}</h4>
                        {cocktail.special && (
                          <Badge className="w-fit mt-1 bg-primary text-primary-foreground text-xs">
                            Special
                          </Badge>
                        )}
                      </div>
                      <span className="text-primary font-bold">{cocktail.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{cocktail.ingredients}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Alkoholfreie Cocktails */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center gap-3">
              <GlassWater className="h-8 w-8" />
              Alkoholfreie Cocktails
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="text-center mb-6">
                <p className="text-muted-foreground">€7,90 – €8,90</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {cocktailsVirgin.map((cocktail, index) => (
                  <div key={index} className="p-4 bg-card/50 rounded-lg border border-primary/10">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{cocktail.name}</h4>
                      <span className="text-primary font-bold">{cocktail.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{cocktail.ingredients}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Longdrinks */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center gap-3">
              <Wine className="h-8 w-8" />
              Longdrinks
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="text-center mb-6">
                <p className="text-muted-foreground">€4,50 – €6,00</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {longdrinks.map((drink, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-card/50 rounded-lg border border-primary/10">
                    <span className="text-foreground">{drink.name}</span>
                    <span className="text-primary font-semibold">{drink.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Kaffee */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center gap-3">
              <Coffee className="h-8 w-8" />
              Kaffee
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {coffee.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-card/50 rounded-lg border border-primary/10">
                    <span className="text-foreground">{item.name}</span>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Shots */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center gap-3">
              <Wine className="h-8 w-8" />
              Shots
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="text-center mb-6">
                <p className="text-muted-foreground">€3,50</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {shots.map((shot, index) => (
                  <div key={index} className="text-center py-3 px-4 bg-card/50 rounded-lg border border-primary/10">
                    <span className="text-foreground">{shot}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Snacks & More */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center gap-3">
              <UtensilsCrossed className="h-8 w-8" />
              Snacks & More
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="grid md:grid-cols-2 gap-4">
                {snacks.map((snack, index) => (
                  <div key={index} className="flex justify-between items-center py-3 px-4 bg-card/50 rounded-lg border border-primary/10">
                    <span className="text-foreground">{snack.name}</span>
                    <span className="text-primary font-semibold">{snack.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Shisha Karte */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-center mb-8 text-primary flex items-center justify-center gap-3">
              <Sparkles className="h-8 w-8" />
              Shisha Karte
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="text-center mb-6">
                <p className="text-muted-foreground">je €20,00</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shishaFlavors.map((flavor, index) => (
                  <div key={index} className="text-center py-3 px-4 bg-card/50 rounded-lg border border-primary/10">
                    <span className="text-foreground">{flavor}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Images Section */}
        <div className="text-center mt-16">
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
              <div className="rounded-lg overflow-hidden shadow-glow">
                <img 
                  src={menuImage} 
                  alt="Premium Shisha und Getränke" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-glow">
                <img 
                  src="/lovable-uploads/bc4756bd-af6f-4209-ad77-3cb7ac6d39b6.png" 
                  alt="Erfrischende Getränke mit Taxim-Logo" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Alle Shisha-Sessions beinhalten kostenlosen Kohlewechsel und Expertenservice
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Premium-Qualität
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Nur Barzahlung
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Authentisches Erlebnis
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;