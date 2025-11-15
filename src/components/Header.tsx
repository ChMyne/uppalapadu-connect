import { Button } from "@/components/ui/button";
import { Menu, Droplets, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Report Issue", path: "/report" },
    { name: "Track Complaints", path: "/track" },
    { name: "Water Quality", path: "/water-quality" },
    { name: "Awareness", path: "/awareness" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Droplets className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Clean Uppalapadu
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Link to="/report">
              <AlertCircle className="mr-2 h-4 w-4" />
              Report Now
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-gradient-to-r from-primary to-secondary">
                <Link to="/report">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Report Now
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
