import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Shield, Camera, Lock, AlertTriangle, Smartphone, Eye, Network } from "lucide-react";
import securitySystemsImage from 'figma:asset/c3a6f6187b8b748418ac98167a9310326507b732.png';

interface SecuritySystemsPageProps {
  onNavigate: (page: string) => void;
}

export function SecuritySystemsPage({ onNavigate }: SecuritySystemsPageProps) {
  const features = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Advanced Surveillance",
      description: "AI-powered cameras with facial recognition and behavioral analysis"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Access Control",
      description: "Multi-factor authentication and intelligent access management systems"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Threat Detection",
      description: "Real-time monitoring with automated threat identification and alerts"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Integration",
      description: "Complete system control and monitoring through mobile applications"
    }
  ];

  const solutions = [
    {
      title: "Industrial Security",
      description: "Comprehensive security solutions for manufacturing facilities and industrial complexes",
      features: [
        "Perimeter protection systems",
        "Industrial-grade cameras",
        "Intrusion detection",
        "Emergency response integration"
      ]
    },
    {
      title: "Smart City Security",
      description: "Scalable security infrastructure for urban environments and public spaces",
      features: [
        "Traffic monitoring systems",
        "Public area surveillance",
        "Emergency communication",
        "Crowd management tools"
      ]
    },
    {
      title: "Commercial Security",
      description: "Tailored security solutions for offices, retail, and commercial buildings",
      features: [
        "Employee access control",
        "Visitor management",
        "Asset protection",
        "Integration with building systems"
      ]
    }
  ];

  const technologies = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced computer vision for intelligent threat detection and behavioral analysis",
      icon: <Eye className="w-8 h-8" />
    },
    {
      title: "IoT Integration",
      description: "Seamless connectivity with existing infrastructure and third-party systems",
      icon: <Network className="w-8 h-8" />
    },
    {
      title: "Cloud & Edge Computing",
      description: "Hybrid processing for real-time response and scalable data management",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Security & Smart Systems</Badge>
          <h1 className="text-4xl md:text-6xl mb-6">Security & Smart Systems</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industrial and city security hardware solutions for comprehensive protection and intelligent monitoring
          </p>
        </div>

        {/* Hero Image & Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={securitySystemsImage}
                alt="Security systems technology with digital network"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-6">Next-Generation Security Solutions</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our comprehensive security systems combine cutting-edge hardware with intelligent 
                  software to provide unparalleled protection for industrial facilities, smart cities, 
                  and commercial spaces.
                </p>
                <p>
                  From advanced surveillance systems to integrated access control, we deliver 
                  scalable security solutions that adapt to your specific requirements and threats.
                </p>
              </div>
              <div className="flex items-center mt-6 space-x-6">
                <div className="text-center">
                  <div className="text-2xl text-primary">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary">&lt;2s</div>
                  <div className="text-sm text-gray-600">Alert Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Core Features</h2>
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

        {/* Security Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Security Solutions</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div>
                    <h4 className="text-sm mb-3 text-gray-800">Key Components:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl text-center mb-12">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                  <div className="text-primary">{tech.icon}</div>
                </div>
                <h3 className="text-xl mb-3">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Applications & Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Applications & Use Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Manufacturing Plants",
              "Government Buildings",
              "Transportation Hubs",
              "Educational Institutions",
              "Healthcare Facilities",
              "Retail Centers",
              "Residential Complexes",
              "Critical Infrastructure"
            ].map((application, index) => (
              <div key={index} className="flex items-center p-4 bg-white border rounded-lg shadow-sm">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <span>{application}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-4">Hardware Specifications</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• IP66-rated outdoor cameras</li>
                  <li>• 4K resolution with night vision</li>
                  <li>• Industrial-grade processing units</li>
                  <li>• Redundant power and communication</li>
                  <li>• Temperature range: -40°C to +70°C</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-4">Software Features</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Real-time video analytics</li>
                  <li>• Multi-site management platform</li>
                  <li>• Mobile and web applications</li>
                  <li>• Integration APIs and SDKs</li>
                  <li>• Cloud and on-premise deployment</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-4">Compliance & Standards</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• ISO 27001 security standards</li>
                  <li>• GDPR compliance</li>
                  <li>• Industrial EMC standards</li>
                  <li>• CE and FCC certifications</li>
                  <li>• Local regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Secure Your Future Today</h2>
          <p className="text-xl mb-6 text-primary-foreground/80">
            Protect your assets and people with our advanced security solutions designed for the modern world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => onNavigate('contact')}
            >
              Security Assessment
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