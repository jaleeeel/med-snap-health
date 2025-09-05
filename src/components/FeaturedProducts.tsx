import { ShoppingCart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    brand: "Generic",
    price: 12.99,
    originalPrice: 15.99,
    rating: 4.5,
    reviews: 124,
    image: "/placeholder.svg",
    prescription: false,
    inStock: true,
    discount: "20% OFF"
  },
  {
    id: 2,
    name: "Vitamin D3 1000 IU",
    brand: "Nature's Bounty",
    price: 24.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg",
    prescription: false,
    inStock: true,
    discount: null
  },
  {
    id: 3,
    name: "Omega-3 Fish Oil",
    brand: "Nordic Naturals",
    price: 35.99,
    originalPrice: 42.99,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg",
    prescription: false,
    inStock: true,
    discount: "15% OFF"
  },
  {
    id: 4,
    name: "Blood Pressure Monitor",
    brand: "Omron",
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.6,
    reviews: 67,
    image: "/placeholder.svg",
    prescription: false,
    inStock: true,
    discount: "18% OFF"
  },
  {
    id: 5,
    name: "Multivitamin Complex",
    brand: "Centrum",
    price: 19.99,
    originalPrice: null,
    rating: 4.4,
    reviews: 203,
    image: "/placeholder.svg",
    prescription: false,
    inStock: true,
    discount: null
  },
  {
    id: 6,
    name: "Hand Sanitizer 500ml",
    brand: "Purell",
    price: 8.99,
    originalPrice: 11.99,
    rating: 4.9,
    reviews: 312,
    image: "/placeholder.svg",
    prescription: false,
    inStock: true,
    discount: "25% OFF"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our best-selling health products, carefully selected for quality and effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount && (
                  <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
                    {product.discount}
                  </Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold">Out of Stock</span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
                <h3 className="font-medium text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-primary">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <Button 
                  size="sm" 
                  className="w-full" 
                  disabled={!product.inStock}
                  variant={product.inStock ? "medical" : "outline"}
                >
                  <ShoppingCart size={14} />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;