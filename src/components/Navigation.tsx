import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Medicare Pharmaceuticals
          </Link>
          <div className="flex space-x-4">
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
              variant={isActive("/employees") ? "secondary" : "ghost"} 
              asChild
            >
              <Link to="/employees">Employees</Link>
            </Button>
            <Button 
              variant={isActive("/research") ? "secondary" : "ghost"} 
              asChild
            >
              <Link to="/research">Research & Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;