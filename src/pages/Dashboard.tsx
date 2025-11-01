import { useState } from "react";
import { Shield, Bell, AlertTriangle, Activity, TrendingUp, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AlertCard from "@/components/AlertCard";

const Dashboard = () => {
  const [alerts] = useState([
    {
      id: "1",
      type: "critical" as const,
      title: "Suspicious Activity Detected",
      location: "Main Street & 5th Ave",
      time: "2 minutes ago",
      description: "Multiple individuals detected in restricted area after hours. Potential security breach.",
      status: "pending" as const,
      confidence: 94,
    },
    {
      id: "2",
      type: "warning" as const,
      title: "Unattended Object Alert",
      location: "Central Station",
      time: "15 minutes ago",
      description: "Unattended bag detected in public area. Requires immediate attention.",
      status: "investigating" as const,
      confidence: 87,
    },
    {
      id: "3",
      type: "info" as const,
      title: "Crowd Density Warning",
      location: "Downtown Plaza",
      time: "1 hour ago",
      description: "High crowd density detected. Monitoring for potential incidents.",
      status: "resolved" as const,
      confidence: 78,
    },
  ]);

  const stats = [
    {
      title: "Active Alerts",
      value: "12",
      change: "+3",
      icon: Bell,
      color: "text-destructive",
    },
    {
      title: "Detection Rate",
      value: "98.5%",
      change: "+2.3%",
      icon: Activity,
      color: "text-success",
    },
    {
      title: "Monitored Areas",
      value: "45",
      change: "+5",
      icon: MapPin,
      color: "text-primary",
    },
    {
      title: "Accuracy Score",
      value: "92%",
      change: "+1.2%",
      icon: TrendingUp,
      color: "text-warning",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Crime Detection System</h1>
                <p className="text-sm text-muted-foreground">Real-time monitoring dashboard</p>
              </div>
            </div>
            <Button variant="outline">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 border-border">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-secondary ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-success">{stat.change}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Alerts Section */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-warning" />
              Active Alerts
            </h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
              <TabsTrigger value="warning">Warning</TabsTrigger>
              <TabsTrigger value="resolved">Resolved</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-4">
            {alerts.map((alert) => (
              <AlertCard key={alert.id} {...alert} />
            ))}
          </TabsContent>

          <TabsContent value="critical" className="space-y-4">
            {alerts
              .filter((a) => a.type === "critical")
              .map((alert) => (
                <AlertCard key={alert.id} {...alert} />
              ))}
          </TabsContent>

          <TabsContent value="warning" className="space-y-4">
            {alerts
              .filter((a) => a.type === "warning")
              .map((alert) => (
                <AlertCard key={alert.id} {...alert} />
              ))}
          </TabsContent>

          <TabsContent value="resolved" className="space-y-4">
            {alerts
              .filter((a) => a.status === "resolved")
              .map((alert) => (
                <AlertCard key={alert.id} {...alert} />
              ))}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
