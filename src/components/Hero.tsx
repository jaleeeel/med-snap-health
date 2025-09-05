import { Upload, Clock, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/pharmacy-hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                CornyBoiz
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
                  Online Pharmacy
                </span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Get genuine medicines delivered to your doorstep. Upload prescriptions, 
                consult with licensed pharmacists, and enjoy hassle-free healthcare shopping.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                <Upload size={20} />
                Upload Prescription
              </Button>
              <Button variant="wellness" size="xl">
                Shop Without Prescription
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
              <Card className="p-4 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <Shield className="mx-auto mb-2 text-primary" size={24} />
                <p className="text-sm font-medium">Licensed Pharmacy</p>
              </Card>
              <Card className="p-4 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <Truck className="mx-auto mb-2 text-secondary" size={24} />
                <p className="text-sm font-medium">Free Delivery</p>
              </Card>
              <Card className="p-4 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <Clock className="mx-auto mb-2 text-trust-blue" size={24} />
                <p className="text-sm font-medium">24/7 Support</p>
              </Card>
              <Card className="p-4 text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <Upload className="mx-auto mb-2 text-wellness-green" size={24} />
                <p className="text-sm font-medium">Easy Prescription</p>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional pharmacy with medicines and healthcare products"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
