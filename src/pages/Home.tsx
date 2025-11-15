import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  AlertCircle,
  Eye,
  Droplets,
  Leaf,
  MapPin,
  FileText,
  BarChart3,
  Bell,
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const features = [
    {
      icon: AlertCircle,
      title: "Report Issues",
      description: "Upload photos, locations, and descriptions of sanitation problems with voice support",
      color: "text-primary",
    },
    {
      icon: Eye,
      title: "Track Progress",
      description: "Monitor your complaint status from submission to resolution in real-time",
      color: "text-secondary",
    },
    {
      icon: Droplets,
      title: "Water Quality Alerts",
      description: "Get instant notifications about water quality and safe usage guidelines",
      color: "text-info",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Practices",
      description: "Access bilingual guides on sustainable living and environmental protection",
      color: "text-success",
    },
  ];

  const stats = [
    { icon: FileText, value: "500+", label: "Issues Reported" },
    { icon: BarChart3, value: "85%", label: "Resolution Rate" },
    { icon: MapPin, value: "12", label: "Active Zones" },
    { icon: Bell, value: "1000+", label: "Active Users" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBanner}
            alt="Clean Uppalapadu Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Building a Cleaner, Healthier Uppalapadu
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Report sanitation issues, track water quality, and protect our environment and the
              precious Uppalapadu Bird Sanctuary together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                <Link to="/report">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Report an Issue
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Link to="/track">
                  <Eye className="mr-2 h-5 w-5" />
                  Track Complaints
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform connects community members with local authorities for faster issue
              resolution and environmental protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all hover:-translate-y-1 bg-gradient-to-br from-card to-muted/30"
              >
                <CardContent className="pt-6">
                  <feature.icon className={`h-12 w-12 mb-4 ${feature.color}`} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community Initiative
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Together, we can create a cleaner environment, ensure safe water, and protect the
            Uppalapadu Bird Sanctuary for future generations
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-lg"
          >
            <Link to="/report">
              Get Started Now
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
