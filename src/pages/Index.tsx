import { useNavigate } from "react-router-dom";
import { Shield, ArrowRight, Eye, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Eye,
      title: "AI-Powered Detection",
      description: "Advanced Google ViT model for real-time crime detection with 98% accuracy",
    },
    {
      icon: Lock,
      title: "Secure Access",
      description: "Role-based authentication for users and authorities with end-to-end encryption",
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Real-time notifications and comprehensive alert management system",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Crime Detection System
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Next-generation AI-powered surveillance system using Google Vision Transformer technology 
              to detect and prevent criminal activities in real-time
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate("/login")}
              className="text-lg px-8"
            >
              Access System
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Advanced Security Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border-border">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to enhance your security?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the next generation of crime prevention technology
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/login")}
          >
            Get Started
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
