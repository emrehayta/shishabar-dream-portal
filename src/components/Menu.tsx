import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlassWater, Coffee, IceCream, Droplets, Sparkles } from "lucide-react";

const Menu = () => {
  const limoFlavors = [
    {
      name: "Classic Limo",
      description: "Our signature refreshing lemonade",
      price: "€5.90",
      size: "0.50L",
      icon: GlassWater,
      popular: true
    },
    {
      name: "Blueberry-Limo",
      description: "Fresh lemonade with blueberry twist",
      price: "€5.90",
      size: "0.50L",
      icon: GlassWater
    },
    {
      name: "Apfel-Limo",
      description: "Apple lemonade for a crisp taste",
      price: "€5.90",
      size: "0.50L",
      icon: GlassWater
    }
  ];

  const milkshakes = [
    {
      name: "Schoko",
      description: "Rich chocolate milkshake",
      price: "€5.90",
      size: "0.50L"
    },
    {
      name: "Banane",
      description: "Creamy banana milkshake",
      price: "€5.90",
      size: "0.50L"
    },
    {
      name: "Erdbeere",
      description: "Fresh strawberry milkshake",
      price: "€5.90",
      size: "0.50L"
    },
    {
      name: "Kiwi",
      description: "Tropical kiwi milkshake",
      price: "€5.90",
      size: "0.50L"
    },
    {
      name: "Cocos",
      description: "Coconut milkshake paradise",
      price: "€5.90",
      size: "0.50L"
    }
  ];

  const sodaMix = [
    { name: "Soda Erdbeere", price: "€4.50", size: "0.50L" },
    { name: "Soda Himbeere", price: "€4.50", size: "0.50L" },
    { name: "Soda Honigmelone", price: "€4.50", size: "0.50L" },
    { name: "Soda Wassermelone", price: "€4.50", size: "0.50L" },
    { name: "Soda Holunder", price: "€4.50", size: "0.50L" },
    { name: "Soda Mojito Mint", price: "€4.50", size: "0.50L" }
  ];

  const shishaFlavors = [
    {
      name: "Double Apple",
      description: "Classic sweet and tart apple blend",
      price: "€25",
      category: "Classic",
      icon: Sparkles,
      popular: true
    },
    {
      name: "Mint Fresh",
      description: "Refreshing pure mint experience",
      price: "€22",
      category: "Fresh",
      icon: Sparkles
    },
    {
      name: "Tropical Mix",
      description: "Exotic fruit blend",
      price: "€28",
      category: "Tropical",
      icon: Sparkles
    },
    {
      name: "Berry Blast",
      description: "Mixed berry sensation",
      price: "€26",
      category: "Fruity",
      icon: Sparkles
    }
  ];

  return (
    <section id="menu" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Menu
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our selection of refreshing drinks, delicious milkshakes, 
            and premium shisha flavors at Taxim Shisha Bar.
          </p>
          <div className="mt-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 text-lg py-2 px-4">
              No Card - Cash Only
            </Badge>
          </div>
        </div>

        {/* Limo's Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Limo&apos;s
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {limoFlavors.map((limo, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-glow relative overflow-hidden"
              >
                {limo.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <limo.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-foreground">
                        {limo.name}
                      </h4>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">
                          {limo.price}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {limo.size}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {limo.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Milkshakes Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Milkshake
          </h3>
          <Card className="p-6 bg-gradient-card border-primary/20 mb-4">
            <div className="text-center mb-4">
              <IceCream className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">
                All milkshakes available in the following flavors:
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Mit Schlag +1,00€ (with whipped cream)
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {milkshakes.map((shake, index) => (
                <div key={index} className="flex justify-between items-center py-3 px-4 bg-card/50 rounded-lg border border-primary/10">
                  <div>
                    <span className="text-foreground font-medium">{shake.name}</span>
                    <div className="text-sm text-muted-foreground">{shake.size}</div>
                  </div>
                  <span className="text-primary font-semibold">{shake.price}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Soda Mix Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Soda Mix
          </h3>
          <Card className="p-6 bg-gradient-card border-primary/20">
            <div className="text-center mb-6">
              <Droplets className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">
                Refreshing soda flavors to quench your thirst
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sodaMix.map((soda, index) => (
                <div key={index} className="flex justify-between items-center py-3 px-4 bg-card/50 rounded-lg border border-primary/10">
                  <div>
                    <span className="text-foreground">{soda.name}</span>
                    <div className="text-sm text-muted-foreground">{soda.size}</div>
                  </div>
                  <span className="text-primary font-semibold">{soda.price}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Shisha Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Premium Shisha
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shishaFlavors.map((flavor, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-glow relative"
              >
                {flavor.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                
                <div className="text-center">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20 mb-4 inline-flex">
                    <flavor.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {flavor.name}
                  </h4>
                  <Badge variant="outline" className="mb-3 text-xs">
                    {flavor.category}
                  </Badge>
                  <p className="text-muted-foreground text-sm mb-4">
                    {flavor.description}
                  </p>
                  <div className="text-xl font-bold text-primary">
                    {flavor.price}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            All shisha sessions include complimentary coal replacement and expert service
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Premium Quality
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Expert Staff
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Authentic Experience
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;