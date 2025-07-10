import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Flame, Leaf, Apple } from "lucide-react";

const Menu = () => {
  const shishaFlavors = [
    {
      name: "Double Apple",
      description: "Classic sweet and tart apple blend with a hint of anise",
      price: "€25",
      category: "Classic",
      icon: Apple,
      popular: true
    },
    {
      name: "Mint Chill",
      description: "Refreshing pure mint leaves for the ultimate cooling experience",
      price: "€22",
      category: "Fresh",
      icon: Leaf
    },
    {
      name: "Mystic Mango",
      description: "Exotic tropical mango with subtle citrus undertones",
      price: "€28",
      category: "Tropical",
      icon: Star
    },
    {
      name: "Spiced Chai",
      description: "Warming blend of cinnamon, cardamom, and black tea",
      price: "€26",
      category: "Spiced",
      icon: Flame
    },
    {
      name: "Rose Garden",
      description: "Delicate rose petals with a touch of Turkish delight",
      price: "€30",
      category: "Floral",
      icon: Star,
      premium: true
    },
    {
      name: "Blue Mist",
      description: "Mysterious blueberry blend with cooling mint finish",
      price: "€27",
      category: "Berry",
      icon: Star
    }
  ];

  const beverages = [
    { name: "Moroccan Mint Tea", price: "€8" },
    { name: "Turkish Coffee", price: "€6" },
    { name: "Fresh Lemonade", price: "€7" },
    { name: "Pomegranate Juice", price: "€9" },
    { name: "Arabic Coffee", price: "€7" },
    { name: "Iced Tea Selection", price: "€6" }
  ];

  const snacks = [
    { name: "Mixed Nuts & Dates", price: "€12" },
    { name: "Hummus & Pita Platter", price: "€15" },
    { name: "Baklava Selection", price: "€18" },
    { name: "Fresh Fruit Bowl", price: "€14" },
    { name: "Turkish Delight", price: "€10" },
    { name: "Cheese & Olives", price: "€16" }
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Our Menu
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium shisha flavors, 
            authentic beverages, and delicious Middle Eastern delicacies.
          </p>
        </div>

        {/* Shisha Flavors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Premium Shisha Flavors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shishaFlavors.map((flavor, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-glow relative overflow-hidden"
              >
                {flavor.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                {flavor.premium && (
                  <Badge className="absolute top-4 right-4 bg-gradient-gold text-background">
                    Premium
                  </Badge>
                )}
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <flavor.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-foreground">
                        {flavor.name}
                      </h4>
                      <span className="text-lg font-bold text-gold">
                        {flavor.price}
                      </span>
                    </div>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {flavor.category}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      {flavor.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Beverages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-teal">
              Traditional Beverages
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="space-y-4">
                {beverages.map((beverage, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                    <span className="text-foreground">{beverage.name}</span>
                    <span className="text-gold font-semibold">{beverage.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Snacks */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-teal">
              Authentic Delicacies
            </h3>
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="space-y-4">
                {snacks.map((snack, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                    <span className="text-foreground">{snack.name}</span>
                    <span className="text-gold font-semibold">{snack.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            All shisha sessions include complimentary coal replacement and premium service
          </p>
          <div className="flex justify-center gap-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Premium Tobacco Only
            </Badge>
            <Badge className="bg-gold/10 text-gold border-gold/20">
              Expert Staff
            </Badge>
            <Badge className="bg-teal/10 text-teal border-teal/20">
              Authentic Experience
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;