import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";
const socialImage = "/lovable-uploads/6cf47320-b3fe-4118-9cca-9e78edf8a4eb.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Standort",
      details: "Altstadt 3, 4600 Wels",
      action: "Route anzeigen"
    },
    {
      icon: Phone,
      title: "Telefon",
      details: "+43 676 5035644",
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
    { icon: Facebook, name: "Facebook", handle: "Taxim Shisha Bar", url: "https://www.facebook.com/taximyakamozcafelounge" }
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
            Besuchen Sie uns für einen unvergesslichen Abend mit Freunden.
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

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-primary">Folgen Sie unserer Reise</h3>
          
          {/* Social Atmosphere Image */}
          <div className="mb-8">
            <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-glow mb-4">
              <img 
                src={socialImage} 
                alt="Gemütliche Atmosphäre in der Taxim Lounge" 
                className="w-full h-48 object-cover"
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Erleben Sie die warme, einladende Atmosphäre unserer Lounge
            </p>
          </div>
          
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