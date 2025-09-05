import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MethStore
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              CornyBoiz online pharmacy providing genuine medicines and healthcare products 
              with the convenience of home delivery.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Linkedin size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Prescription Upload</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Online Consultation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Health Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Store Locator</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Connected</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>+63-939-PHARMACY</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>support@methstore.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Atbang ila Dr.Chicano, John Bosco District, Mangagoy, Bislig City, Surigao del Sur</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="text-sm" />
                <Button size="sm" variant="medical">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 MethStore. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <span>Licensed Pharmacy License #123456</span>
            <span>|</span>
            <span>FDA Approved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
