import { Droplets, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Droplets className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Clean Uppalapadu</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building a cleaner, healthier community through technology and collective action.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/report" className="text-muted-foreground hover:text-primary transition-colors">
                  Report Issue
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-muted-foreground hover:text-primary transition-colors">
                  Track Complaints
                </Link>
              </li>
              <li>
                <Link to="/water-quality" className="text-muted-foreground hover:text-primary transition-colors">
                  Water Quality
                </Link>
              </li>
              <li>
                <Link to="/awareness" className="text-muted-foreground hover:text-primary transition-colors">
                  Awareness
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@cleanuppalapadu.org</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Uppalapadu, Guntur District<br />Andhra Pradesh, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Languages</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md">
                English
              </button>
              <button className="px-3 py-1 text-sm border border-border rounded-md hover:bg-muted transition-colors">
                తెలుగు
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Clean Uppalapadu Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
