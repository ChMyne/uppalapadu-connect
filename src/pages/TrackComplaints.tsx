import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Clock, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

const TrackComplaints = () => {
  const [searchId, setSearchId] = useState("");

  // Mock complaint data
  const complaints = [
    {
      id: "CU-2024-001",
      type: "Stagnant Drainage",
      location: "Near Main Market",
      status: "resolved",
      submittedDate: "2024-01-10",
      resolvedDate: "2024-01-15",
      priority: "high",
    },
    {
      id: "CU-2024-002",
      type: "Waste Management",
      location: "Village Square",
      status: "in-progress",
      submittedDate: "2024-01-12",
      priority: "medium",
    },
    {
      id: "CU-2024-003",
      type: "Plastic Pollution",
      location: "Near Bird Sanctuary",
      status: "submitted",
      submittedDate: "2024-01-14",
      priority: "high",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "bg-info text-white";
      case "in-progress":
        return "bg-warning text-white";
      case "resolved":
        return "bg-success text-white";
      default:
        return "bg-muted";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <Clock className="h-4 w-4" />;
      case "in-progress":
        return <AlertCircle className="h-4 w-4" />;
      case "resolved":
        return <CheckCircle2 className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-destructive";
      case "medium":
        return "border-l-warning";
      case "low":
        return "border-l-muted-foreground";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container max-w-5xl px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-3">Track Complaints</h1>
            <p className="text-muted-foreground">
              Monitor the status of reported issues from submission to resolution
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search by Complaint ID</CardTitle>
              <CardDescription>
                Enter your complaint ID (e.g., CU-2024-001) to track specific issue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter Complaint ID"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="flex-1"
                />
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Status Legend */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-info" />
                  <span className="text-sm">Submitted</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-warning" />
                  <span className="text-sm">In Progress</span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  <span className="text-sm">Resolved</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Complaints List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Recent Complaints</h2>
            {complaints.map((complaint) => (
              <Card
                key={complaint.id}
                className={`border-l-4 ${getPriorityColor(complaint.priority)} hover:shadow-md transition-shadow`}
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-semibold text-lg">{complaint.id}</span>
                        <Badge className={getStatusColor(complaint.status)}>
                          {getStatusIcon(complaint.status)}
                          <span className="ml-1 capitalize">{complaint.status.replace("-", " ")}</span>
                        </Badge>
                        <Badge variant="outline" className="capitalize">
                          {complaint.priority} Priority
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <strong>Type:</strong> {complaint.type}
                        </p>
                        <p className="text-sm">
                          <strong>Location:</strong> {complaint.location}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Submitted: {new Date(complaint.submittedDate).toLocaleDateString()}
                        </p>
                        {complaint.resolvedDate && (
                          <p className="text-sm text-success">
                            Resolved: {new Date(complaint.resolvedDate).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Progress Timeline */}
                    <div className="flex flex-col gap-2 md:w-48">
                      <div
                        className={`h-2 rounded-full ${
                          complaint.status === "submitted"
                            ? "bg-info"
                            : "bg-muted"
                        }`}
                      />
                      <div
                        className={`h-2 rounded-full ${
                          complaint.status === "in-progress" || complaint.status === "resolved"
                            ? "bg-warning"
                            : "bg-muted"
                        }`}
                      />
                      <div
                        className={`h-2 rounded-full ${
                          complaint.status === "resolved" ? "bg-success" : "bg-muted"
                        }`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-muted/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong>Priority System:</strong> Areas with multiple complaints receive higher
                priority. You'll receive SMS notifications at each status change. Estimated
                resolution time varies based on issue complexity and current workload.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TrackComplaints;
