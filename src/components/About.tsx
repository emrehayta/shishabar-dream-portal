import { Card } from "@/components/ui/card";
import { Crown, Heart, Users, Clock } from "lucide-react";
const aboutImage = "/lovable-uploads/57513139-ac20-4038-8474-3964a610c9c1.png";

const About = () => {
  const features = [
    {
      icon: Crown,
      title: "Premium-Erlebnis",
      description: "Luxuriöse Atmosphäre mit der besten Shisha und authentischer orientalischer Gastfreundschaft."
    },
    {
      icon: Heart,
      title: "Authentische Aromen",
      description: "Über 50 Premium-Tabakmischungen von den besten Herstellern weltweit."
    },
    {
      icon: Users,
      title: "Sozialer Treffpunkt",
      description: "Der perfekte Ort, um sich mit Freunden in einer gehobenen, einladenden Umgebung zu entspannen."
    },
    {
      icon: Clock,
      title: "Erweiterte Öffnungszeiten",
      description: "Lange geöffnet, um Ihrem Zeitplan gerecht zu werden. Perfekt für Entspannung nach dem Essen."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Über Taxim
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Die Taxim Shisha Bar bietet ein authentisches Erlebnis mit Premium-Shisha, köstlichen Getränken 
            und einer warmen, einladenden Atmosphäre, in der sich Freunde zum Entspannen und Genießen treffen.
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
                  Unsere Geschichte
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Die Taxim Shisha Bar vereint das Beste der traditionellen Shisha-Kultur mit moderner Gastfreundschaft. 
                  Wir sind stolz auf unseren Qualitätsservice, frische Aromen und schaffen einen Raum, in dem sich jeder willkommen fühlt. 
                  Ob Sie für einen schnellen Drink oder einen langen Abend mit Freunden hier sind, unser Team sorgt dafür, dass jeder Besuch unvergesslich wird.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-48 h-32 rounded-lg overflow-hidden shadow-glow">
                  <img 
                    src={aboutImage} 
                    alt="Taxim Lounge Interior" 
                    className="w-full h-full object-cover"
                  />
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