import { Search, ShoppingCart, User, Phone, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-primary to-trust-blue text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1">
                <Phone size={14} />
                24/7 Support: +63-939-PHARMACY
              </span>
              <span>Free Delivery on Orders 50+PHP</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Upload size={14} />
                Upload Prescription
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                Online Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DrugStore
            </h1>
            <span className="ml-2 text-sm text-muted-foreground">CornyBoiz Online Pharmacy</span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input 
                placeholder="Search medicines, health products..." 
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <User size={18} />
              Account
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart size={18} />
              Cart
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 py-3">
            <Button variant="ghost" size="sm">Prescription Medicines</Button>
            <Button variant="ghost" size="sm">Over-the-Counter</Button>
            <Button variant="ghost" size="sm">Wellness & Vitamins</Button>
            <Button variant="ghost" size="sm">Personal Care</Button>
            <Button variant="ghost" size="sm">Baby & Mother Care</Button>
            <Button variant="ghost" size="sm">Medical Devices</Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
