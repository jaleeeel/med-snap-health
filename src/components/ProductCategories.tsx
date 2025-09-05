import { Pill, Heart, Baby, Stethoscope, Flower2, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: Pill,
    title: "Prescription Medicines",
    description: "Upload prescription for genuine medicines",
    color: "primary",
    count: "500+ products"
  },
  {
    icon: Heart,
    title: "Wellness & Vitamins",
    description: "Boost your health naturally",
    color: "secondary",
    count: "300+ products"
  },
  {
    icon: Baby,
    title: "Baby & Mother Care",
    description: "Care for your little ones",
    color: "wellness-green",
    count: "200+ products"
  },
  {
    icon: Flower2,
    title: "Personal Care",
    description: "Beauty and hygiene essentials",
    color: "trust-blue",
    count: "400+ products"
  },
  {
    icon: Stethoscope,
    title: "Medical Devices",
    description: "Home healthcare equipment",
    color: "medical-blue",
    count: "150+ products"
  },
  {
    icon: Shield,
    title: "Health Supplements",
    description: "Nutritional support for better health",
    color: "health-green",
    count: "250+ products"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive range of healthcare products, from prescription medicines to wellness essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-[var(--shadow-hover)] transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors`}>
                    <IconComponent size={24} className={`text-${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {category.description}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {category.count}
                    </p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                >
                  Browse Category
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;