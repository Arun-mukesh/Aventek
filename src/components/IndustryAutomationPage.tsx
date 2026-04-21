import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Factory, Settings, Zap, Shield, Cpu, Database, Network, CheckCircle, ArrowRight } from "lucide-react";

interface IndustryAutomationPageProps {
  onNavigate: (page: string) => void;
}

export function IndustryAutomationPage({ onNavigate }: IndustryAutomationPageProps) {
  const keyFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom PLC Programming",
      description: "Tailored automation solutions with advanced PLC programming for specific industrial requirements."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "SCADA Development",
      description: "Comprehensive supervisory control and data acquisition systems for real-time monitoring."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Industrial Communication",
      description: "Multi-protocol communication systems including Modbus, Profinet, EtherNet/IP, and more."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Process Control",
      description: "Advanced process control systems for optimized manufacturing operations."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Systems",
      description: "Industrial safety integration with fail-safe operations and emergency protocols."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Real-time Data Acquisition",
      description: "High-speed data collection and processing for critical industrial applications."
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Assembly line automation, quality control, and production optimization",
      applications: ["Assembly Automation", "Quality Control", "Production Monitoring", "Inventory Management"]
    },
    {
      name: "Oil & Gas",
      description: "Pipeline monitoring, refinery automation, and safety systems",
      applications: ["Pipeline Control", "Refinery Automation", "Tank Level Monitoring", "Safety Interlocks"]
    },
    {
      name: "Pharmaceuticals",
      description: "Clean room automation, batch processing, and regulatory compliance",
      applications: ["Clean Room Control", "Batch Processing", "Temperature Control", "Compliance Monitoring"]
    },
    {
      name: "Food Processing",
      description: "Food safety automation, packaging control, and quality assurance",
      applications: ["Food Safety Systems", "Packaging Automation", "Temperature Monitoring", "Traceability"]
    },
    {
      name: "Automotive",
      description: "Production line control, robotic integration, and quality testing",
      applications: ["Production Control", "Robotic Integration", "Quality Testing", "Paint Shop Automation"]
    }
  ];

  const benefits = [
    "Increased operational efficiency by 40-60%",
    "Reduced downtime through predictive maintenance",
    "Enhanced safety with automated emergency protocols",
    "Real-time monitoring and control capabilities",
    "Scalable solutions adaptable to business growth",
    "Comprehensive technical support and maintenance"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Button 
          variant="ghost" 
          className="mb-8" 
          onClick={() => onNavigate('solutions')}
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Solutions
        </Button>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Industry-Specific Solutions</Badge>
              <h1 className="text-4xl md:text-5xl mb-6">Smart Industrial Automation Solutions</h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your industrial operations with our comprehensive PLC-based automation solutions, 
                designed for maximum efficiency, safety, and scalability across diverse industries.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => onNavigate('contact')}>
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1717386255773-a456c611dc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMFBMQyUyMHN5c3RlbXN8ZW58MXx8fHwxNzU4Mjc1MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial Automation Systems"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Key Features & Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industries Served */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Industries We Serve</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Factory className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="text-sm mb-2 text-gray-800">Key Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.applications.map((app, appIndex) => (
                        <span key={appIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
            <h2 className="text-3xl mb-8 text-center">Why Choose Our Industrial Automation?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Ready to Automate Your Industry?</h2>
          <p className="text-xl mb-6 text-primary-foreground/80">
            Get a customized automation solution designed specifically for your industrial requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => onNavigate('contact')}
            >
              Request Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Download Case Studies
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}