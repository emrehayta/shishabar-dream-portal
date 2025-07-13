import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Standort",
      details: "Ihr Standort im Stadtzentrum",
      action: "Route anzeigen"
    },
    {
      icon: Phone,
      title: "Telefon",
      details: "+49 (0) 123 456 789",
      action: "Jetzt anrufen"
    },
    {
      icon: Mail,
      title: "E-Mail", 
      details: "info@taximshishabar.com",
      action: "E-Mail senden"
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      details: "Mo-Do: 17:00-01:00\nFr-Sa: 17:00-02:00\nSo: 17:00-00:00",
      action: "Zeitplan anzeigen"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@taxim_lounge_wels", url: "https://www.instagram.com/taxim_lounge_wels/" },
    { icon: Facebook, name: "Facebook", handle: "Taxim Shisha Bar", url: "#" }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Besuchen Sie Taxim
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kommen Sie und erleben Sie die authentische Atmosphäre der Taxim Shisha Bar. 
            Reservieren Sie heute Ihren Tisch für einen unvergesslichen Abend mit Freunden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-glow text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <info.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {info.title}
              </h3>
              <p className="text-muted-foreground mb-4 whitespace-pre-line">
                {info.details}
              </p>
              <Button variant="outline" size="sm">
                {info.action}
              </Button>
            </Card>
          ))}
        </div>

        {/* Reservation Section */}
        <Card className="p-8 bg-gradient-card border-primary/20 text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Reservierung vornehmen
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Reservieren Sie Ihren Tisch im Voraus, um den perfekten Platz für Ihren Abend zu garantieren. 
            Kommen Sie und genießen Sie unsere einladende Atmosphäre mit Premium-Shisha und köstlichen Getränken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="red" size="lg" className="text-lg">
              Online reservieren
            </Button>
            <Button variant="hero" size="lg" className="text-lg">
              Anrufen zum Reservieren
            </Button>
          </div>
        </Card>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-primary">Folgen Sie unserer Reise</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-4 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <social.icon className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Special Notice */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <p className="text-muted-foreground">
              <span className="font-semibold text-primary">Altersbeschränkung:</span> Nur ab 18 Jahren. 
              Gültiger Ausweis erforderlich für den Einlass. Wir fördern verantwortlichen Genuss in gehobener Umgebung.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;