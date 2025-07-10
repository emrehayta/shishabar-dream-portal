import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: "123 Mystique Street, City Center, 12345",
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email", 
      details: "info@loungemystique.com",
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Thu: 6PM-2AM\nFri-Sat: 6PM-3AM\nSun: 6PM-1AM",
      action: "View Schedule"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@loungemystique" },
    { icon: Facebook, name: "Facebook", handle: "Lounge Mystique" }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Visit Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the magic of Lounge Mystique. Reserve your table today and 
            immerse yourself in an evening of luxury and relaxation.
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
          <h3 className="text-3xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
            Make a Reservation
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Reserve your table in advance to guarantee the perfect spot for your evening. 
            Our premium seating areas offer the ultimate in comfort and atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="lg" className="text-lg">
              Reserve Online
            </Button>
            <Button variant="hero" size="lg" className="text-lg">
              Call to Reserve
            </Button>
          </div>
        </Card>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-teal">Follow Our Journey</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <Card 
                key={index}
                className="p-4 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <social.icon className="h-6 w-6 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{social.name}</p>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Notice */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <p className="text-muted-foreground">
              <span className="font-semibold text-primary">Age Restriction:</span> 18+ only. 
              Valid ID required for entry. We promote responsible enjoyment in a sophisticated environment.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;