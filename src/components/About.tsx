import { Card } from "@/components/ui/card";
import { Crown, Heart, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Crown,
      title: "Premium Experience",
      description: "Luxury atmosphere with the finest shisha and authentic Middle Eastern hospitality."
    },
    {
      icon: Heart,
      title: "Authentic Flavors",
      description: "Over 50 premium tobacco blends sourced from the finest producers worldwide."
    },
    {
      icon: Users,
      title: "Social Hub",
      description: "The perfect place to unwind with friends in a sophisticated, welcoming environment."
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open late to accommodate your schedule. Perfect for after-dinner relaxation."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Taxim
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Taxim Shisha Bar offers an authentic experience with premium shisha, delicious drinks, 
            and a warm, welcoming atmosphere where friends gather to relax and enjoy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-card border-primary/20 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                  Our Story
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Taxim Shisha Bar brings together the best of traditional shisha culture with modern hospitality. 
                  We pride ourselves on quality service, fresh flavors, and creating a space where everyone feels welcome. 
                  Whether you're here for a quick drink or a long evening with friends, our team ensures every visit is memorable.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Crown className="h-16 w-16 text-foreground" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;