import { Card } from "@/components/ui/card";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Impressum
            </span>
          </h1>
        </div>

        <Card className="p-8 bg-gradient-card border-primary/20">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-primary mb-2">Angaben gemäß § 5 ECG</h2>
              <p className="text-muted-foreground">
                Informationen nach der Dienstleistungs-Informationsverordnung
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Firmenwortlaut:</h3>
                  <p className="text-muted-foreground">Dogan Okan</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">Unternehmensgegenstand:</h3>
                  <p className="text-muted-foreground">Bar</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">Firmenbuchgericht:</h3>
                  <p className="text-muted-foreground">Landesgericht Wels</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Firmensitz:</h3>
                  <p className="text-muted-foreground">Altstadt 3, 4600 Wels, Österreich</p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">Kontaktdaten:</h3>
                  <p className="text-muted-foreground">Tel: +43 676 5035644</p>
                  <p className="text-muted-foreground">
                    E-Mail:{" "}
                    <a href="mailto:okan.dogan90@icloud.com" className="hover:text-primary transition-colors">
                      okan.dogan90@icloud.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Informationen nach der Dienstleistungs-Informationsverordnung gemäß §§ (1) ECG, § 25 MedienG, § 63
                GeWO und § 14 UGB
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Impressum;