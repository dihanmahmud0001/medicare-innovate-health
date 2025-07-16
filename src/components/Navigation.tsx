import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xs sm:text-xl font-bold">
            Medicare Pharmaceuticals
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Button 
              variant={isActive("/") ? "secondary" : "ghost"} 
              asChild
            >
              <Link to="/">Home</Link>
            </Button>
            <Button 
              variant={isActive("/medicines") ? "secondary" : "ghost"} 
              asChild
            >
              <Link to="/medicines">Medicines</Link>
            </Button>
            <Button 
              variant={isActive("/about") ? "secondary" : "ghost"} 
              asChild
            >
              <Link to="/about">About Us</Link>
            </Button>
            <Button 
              variant={isActive("/research") ? "secondary" : "ghost"} 
              asChild
            >
              <Link to="/research">Research & Projects</Link>
            </Button>
            <Button 
              variant={isActive("/join-research") ? "secondary" : "ghost"} 
              asChild
            >
              <Link to="/join-research">Join our research</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/20">
            <div className="py-2 space-y-1">
              <Button 
                variant={isActive("/") ? "secondary" : "ghost"} 
                asChild
                className="w-full justify-start"
                onClick={toggleMenu}
              >
                <Link to="/">Home</Link>
              </Button>
              <Button 
                variant={isActive("/medicines") ? "secondary" : "ghost"} 
                asChild
                className="w-full justify-start"
                onClick={toggleMenu}
              >
                <Link to="/medicines">Medicines</Link>
              </Button>
              <Button 
                variant={isActive("/about") ? "secondary" : "ghost"} 
                asChild
                className="w-full justify-start"
                onClick={toggleMenu}
              >
                <Link to="/about">About Us</Link>
              </Button>
              <Button 
                variant={isActive("/research") ? "secondary" : "ghost"} 
                asChild
                className="w-full justify-start"
                onClick={toggleMenu}
              >
                <Link to="/research">Research & Projects</Link>
              </Button>
              <Button 
                variant={isActive("/join-research") ? "secondary" : "ghost"} 
                asChild
                className="w-full justify-start"
                onClick={toggleMenu}
              >
                <Link to="/join-research">Join our research</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;