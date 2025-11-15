import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Leaf,
  Recycle,
  Droplets,
  TreePine,
  Bird,
  Trash2,
  Wind,
  Users,
  AlertTriangle,
} from "lucide-react";
import ecoPracticesIcon from "@/assets/eco-practices-icon.png";

const Awareness = () => {
  const ecoTopics = [
    {
      icon: Recycle,
      title: "Waste Segregation",
      description: "Separate wet and dry waste. Use separate bins for biodegradable and non-biodegradable items.",
      tips: [
        "Green bin for organic/wet waste",
        "Blue bin for recyclable materials",
        "Red bin for hazardous waste",
      ],
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Save water to ensure availability for future generations and reduce contamination.",
      tips: [
        "Fix leaking taps immediately",
        "Reuse water for gardening",
        "Harvest rainwater when possible",
      ],
    },
    {
      icon: TreePine,
      title: "Tree Plantation",
      description: "Plant native trees to improve air quality and provide habitat for wildlife.",
      tips: [
        "Choose indigenous species",
        "Plant during monsoon season",
        "Maintain planted saplings",
      ],
    },
    {
      icon: Trash2,
      title: "Plastic Reduction",
      description: "Minimize plastic use to protect our environment and the Bird Sanctuary.",
      tips: [
        "Use cloth bags for shopping",
        "Avoid single-use plastics",
        "Properly dispose plastic waste",
      ],
    },
  ];

  const sanctuaryInfo = [
    {
      icon: Bird,
      title: "Uppalapadu Bird Sanctuary",
      description: "Home to thousands of migratory birds including pelicans, painted storks, and herons.",
    },
    {
      icon: Wind,
      title: "Environmental Impact",
      description: "Our waste management directly affects the sanctuary's ecosystem and bird health.",
    },
    {
      icon: Users,
      title: "Community Role",
      description: "Every resident's action contributes to protecting this precious natural heritage.",
    },
  ];

  const healthTips = [
    "Eliminate standing water to prevent mosquito breeding",
    "Maintain proper drainage around your home",
    "Use mosquito nets and repellents during peak seasons",
    "Ensure proper ventilation in living spaces",
    "Keep surroundings clean and free from garbage",
    "Wash hands regularly with soap and clean water",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-6xl px-4">
          <div className="mb-8 text-center">
            <img
              src={ecoPracticesIcon}
              alt="Eco Practices"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold mb-3">Environmental Awareness</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn eco-friendly practices to build a sustainable and healthy community
            </p>
          </div>

          <Tabs defaultValue="eco-practices" className="mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="eco-practices">Eco Practices</TabsTrigger>
              <TabsTrigger value="bird-sanctuary">Bird Sanctuary</TabsTrigger>
              <TabsTrigger value="health-hygiene">Health & Hygiene</TabsTrigger>
            </TabsList>

            <TabsContent value="eco-practices" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {ecoTopics.map((topic, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <topic.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{topic.title}</CardTitle>
                          <CardDescription className="mt-2">
                            {topic.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {topic.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2 text-sm">
                            <Leaf className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bird-sanctuary" className="space-y-6">
              <Card className="bg-gradient-to-br from-secondary/10 to-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Protecting Our Natural Heritage
                  </CardTitle>
                  <CardDescription className="text-base">
                    The Uppalapadu Bird Sanctuary is a vital ecological treasure that requires our
                    collective protection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {sanctuaryInfo.map((info, index) => (
                      <div key={index} className="space-y-3">
                        <div className="p-3 bg-background rounded-lg w-fit">
                          <info.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How You Can Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded">
                        <Trash2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <strong className="block">Proper Waste Disposal</strong>
                        <span className="text-sm text-muted-foreground">
                          Keep plastic and garbage away from sanctuary areas
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded">
                        <Droplets className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <strong className="block">Water Quality</strong>
                        <span className="text-sm text-muted-foreground">
                          Prevent contamination of water bodies near sanctuary
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded">
                        <Wind className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <strong className="block">Minimize Disturbance</strong>
                        <span className="text-sm text-muted-foreground">
                          Avoid loud noises and maintain peaceful environment
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <strong className="block">Spread Awareness</strong>
                        <span className="text-sm text-muted-foreground">
                          Educate visitors and tourists about conservation
                        </span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="health-hygiene" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Health & Hygiene Practices</CardTitle>
                  <CardDescription>
                    Essential practices to prevent waterborne and mosquito-borne diseases
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {healthTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                        <div className="p-1.5 bg-primary/10 rounded-full flex-shrink-0">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <p className="text-sm">{tip}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-warning/10 border-warning">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    Disease Prevention
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Stagnant water is the primary breeding ground for mosquitoes that cause malaria
                    and dengue. Report any stagnant drainage or water accumulation immediately.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">5 mins</div>
                      <div className="text-xs text-muted-foreground">
                        Boil water before drinking
                      </div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">Daily</div>
                      <div className="text-xs text-muted-foreground">
                        Check for standing water
                      </div>
                    </div>
                    <div className="text-center p-4 bg-background rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">Weekly</div>
                      <div className="text-xs text-muted-foreground">
                        Clean drainage systems
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Language Support Info */}
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-sm text-center text-muted-foreground">
                <strong>భాషా మద్దతు (Language Support):</strong> All awareness materials are
                available in Telugu and English. Access educational resources, videos, and guides
                through our QR code system placed throughout the village.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Awareness;
