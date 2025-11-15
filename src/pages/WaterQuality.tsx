import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Droplets, AlertTriangle, CheckCircle2, Info, ThermometerSun } from "lucide-react";
import waterQualityIcon from "@/assets/water-quality-icon.png";

const WaterQuality = () => {
  const waterSources = [
    {
      name: "Main Village Well",
      status: "safe",
      ph: "7.2",
      lastTested: "2024-01-14",
      quality: "Good",
    },
    {
      name: "Community Pond",
      status: "warning",
      ph: "6.8",
      lastTested: "2024-01-13",
      quality: "Needs Treatment",
    },
    {
      name: "Bird Sanctuary Water",
      status: "safe",
      ph: "7.5",
      lastTested: "2024-01-15",
      quality: "Excellent",
    },
  ];

  const guidelines = [
    {
      title: "Boil Water Before Drinking",
      description: "Always boil water for at least 5 minutes before consumption",
      icon: ThermometerSun,
    },
    {
      title: "Check Water Color",
      description: "Avoid using water that appears cloudy, discolored, or has unusual odor",
      icon: Droplets,
    },
    {
      title: "Regular Testing",
      description: "Report any changes in water quality immediately to authorities",
      icon: AlertTriangle,
    },
    {
      title: "Storage Guidelines",
      description: "Store drinking water in clean, covered containers away from sunlight",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-6xl px-4">
          <div className="mb-8 text-center">
            <img
              src={waterQualityIcon}
              alt="Water Quality"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h1 className="text-4xl font-bold mb-3">Water Quality Monitoring</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time water quality information and safety guidelines for our community
            </p>
          </div>

          {/* Current Alert */}
          <Alert className="mb-8 border-warning bg-warning/10">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <AlertTitle className="text-warning">Seasonal Advisory</AlertTitle>
            <AlertDescription>
              During monsoon season, extra caution is advised. Boil all water before consumption
              and avoid using stagnant water sources.
            </AlertDescription>
          </Alert>

          {/* Water Sources Status */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Water Sources Status</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {waterSources.map((source, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-md transition-shadow ${
                    source.status === "warning" ? "border-warning" : "border-success"
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{source.name}</CardTitle>
                      {source.status === "safe" ? (
                        <CheckCircle2 className="h-6 w-6 text-success" />
                      ) : (
                        <AlertTriangle className="h-6 w-6 text-warning" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Badge
                        className={
                          source.status === "safe"
                            ? "bg-success text-white"
                            : "bg-warning text-white"
                        }
                      >
                        {source.quality}
                      </Badge>
                      <div className="space-y-1 text-sm">
                        <p>
                          <strong>pH Level:</strong> {source.ph}
                        </p>
                        <p className="text-muted-foreground">
                          Last tested: {new Date(source.lastTested).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Safety Guidelines */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Water Safety Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guidelines.map((guideline, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <guideline.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{guideline.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {guideline.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-primary mt-1" />
                <div>
                  <CardTitle>Important Information</CardTitle>
                  <CardDescription className="mt-2">
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>
                        Water testing is conducted weekly by municipal health officials
                      </li>
                      <li>
                        SMS alerts are sent immediately if any water source quality deteriorates
                      </li>
                      <li>
                        Report any waterborne illness cases to help track potential contamination
                      </li>
                      <li>
                        Avoid bathing or washing in stagnant water to prevent mosquito-borne
                        diseases
                      </li>
                      <li>
                        Use water purification tablets when boiling is not possible
                      </li>
                    </ul>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Language Toggle Info */}
          <Card className="mt-6 bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-sm text-center text-muted-foreground">
                All water quality alerts and guidelines are available in Telugu (తెలుగు) and
                English. Switch language using the footer options.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WaterQuality;
