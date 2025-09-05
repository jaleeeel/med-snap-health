import { Shield, Truck, Clock, Users, Award, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const trustFeatures = [
  {
    icon: Shield,
    title: "100% Genuine Products",
    description: "All medicines sourced directly from licensed manufacturers",
    color: "primary"
  },
  {
    icon: Truck,
    title: "Fast & Free Delivery",
    description: "Free delivery on orders above ₱50, express delivery available",
    color: "secondary"
  },
  {
    icon: Clock,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance from licensed pharmacists",
    color: "trust-blue"
  },
  {
    icon: Users,
    title: "500K+ Happy Customers",
    description: "Trusted by families across the country for 10+ years",
    color: "wellness-green"
  },
  {
    icon: Award,
    title: "Licensed & Certified",
    description: "FDA approved pharmacy with all necessary certifications",
    color: "medical-blue"
  },
  {
    icon: Phone,
    title: "Online Consultation",
    description: "Consult with qualified doctors from the comfort of your home",
    color: "health-green"
  }
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose MediStore?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your health is our priority. We're committed to providing safe, genuine, and affordable healthcare solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-0 shadow-[var(--shadow-card)]"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${feature.color}/10 flex items-center justify-center`}>
                  <IconComponent size={32} className={`text-${feature.color}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-16 bg-white rounded-2xl shadow-[var(--shadow-card)] p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Products Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-trust-blue mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-wellness-green mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
