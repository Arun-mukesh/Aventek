import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Users, Brain, BarChart3, Shield, Clock, TrendingUp } from "lucide-react";
import vehicleCountingImage from "figma:asset/62188fb8ef136bb937bf573ba15b3086468281b3.png";

interface AutoPeopleCountingPageProps {
  onNavigate: (page: string) => void;
}

export function AutoPeopleCountingPage({ onNavigate }: AutoPeopleCountingPageProps) {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Analytics",
      description: "Advanced computer vision algorithms for accurate counting and behavior analysis"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Insights",
      description: "Live dashboards with occupancy levels, traffic patterns, and space utilization metrics"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy Compliant",
      description: "Edge-based processing ensures data privacy while maintaining accuracy"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Monitoring",
      description: "Continuous operation with automated alerts and comprehensive reporting"
    }
  ];

  const applications = [
    {
      title: "Retail Spaces",
      description: "Optimize store layouts, manage queue lengths, and improve customer experience",
      metrics: "Up to 95% accuracy in footfall counting"
    },
    {
      title: "Public Transportation",
      description: "Monitor passenger flow, optimize schedules, and enhance safety protocols",
      metrics: "Real-time capacity monitoring"
    },
    {
      title: "Smart Buildings",
      description: "Energy optimization, space planning, and compliance monitoring",
      metrics: "30% reduction in energy costs"
    },
    {
      title: "Event Venues",
      description: "Crowd control, safety management, and attendance analytics",
      metrics: "Instant occupancy alerts"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">IoT & AI Solutions</Badge>
          <h1 className="text-4xl md:text-6xl mb-6">Auto People Counting</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AI-powered analytics for accurate crowd counting and intelligent space utilization optimization
          </p>
        </div>

        {/* Hero Image & Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={vehicleCountingImage}
                alt="AI people counting technology"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-6">Intelligent Crowd Analytics</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our Auto People Counting system leverages cutting-edge computer vision and AI 
                  algorithms to provide accurate, real-time insights into foot traffic and space utilization.
                </p>
                <p>
                  From retail analytics to smart city management, our solution delivers actionable 
                  data while maintaining the highest standards of privacy and security.
                </p>
              </div>
              <div className="flex items-center mt-6 space-x-4">
                <div className="text-center">
                  <div className="text-2xl text-primary">95%+</div>
                  <div className="text-sm text-gray-600">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary">&lt;1s</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Applications & Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <div className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                    <span className="text-green-600">{app.metrics}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl text-center mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg mb-4">Hardware Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• IP camera with minimum 2MP resolution</li>
                <li>• Edge computing device or cloud connectivity</li>
                <li>• Network bandwidth: 5-10 Mbps</li>
                <li>• Power consumption: &lt;50W</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4">Performance Metrics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Accuracy: 95%+ in optimal conditions</li>
                <li>• Processing speed: Real-time (&lt;1s latency)</li>
                <li>• Coverage area: Up to 100 sq meters per camera</li>
                <li>• Concurrent tracking: 200+ individuals</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4">Integration & Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• REST API for third-party integration</li>
                <li>• Real-time dashboard and mobile app</li>
                <li>• 24/7 technical support</li>
                <li>• Customizable reporting and alerts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Ready to Optimize Your Space?</h2>
          <p className="text-xl mb-6 text-primary-foreground/80">
            Get started with our Auto People Counting solution and transform your space utilization insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => onNavigate('contact')}
            >
              Request Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => onNavigate('solutions')}
            >
              View All Solutions
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}