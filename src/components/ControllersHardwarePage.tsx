import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Cpu, Monitor, Network, Zap, Shield, Settings, CheckCircle, ArrowRight, Wrench, Gauge, Thermometer } from "lucide-react";
import controllersImage from 'figma:asset/d0ec05a1645528a4f3554b88841581a2e57f5516.png';

interface ControllersHardwarePageProps {
  onNavigate: (page: string) => void;
}

export function ControllersHardwarePage({ onNavigate }: ControllersHardwarePageProps) {
  const keyFeatures = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Custom Embedded Controllers",
      description: "Tailored embedded systems designed for specific industrial applications and requirements."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Touch-Screen HMI",
      description: "Intuitive human-machine interfaces with responsive touch controls and real-time displays."
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Multi-Protocol Communication",
      description: "Support for various industrial protocols including Modbus, Profinet, EtherNet/IP, and CAN."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Real-time Data Acquisition",
      description: "High-speed data collection and processing systems for critical monitoring applications."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ruggedized Hardware",
      description: "Industrial-grade components designed to withstand harsh environmental conditions."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Modular Design",
      description: "Flexible, scalable hardware architecture that adapts to changing requirements."
    }
  ];

  const products = [
    {
      title: "Industrial Control Panels",
      description: "Custom-designed control panels with integrated displays, switches, and monitoring systems",
      features: ["Custom Layout Design", "Weather-resistant Enclosures", "Emergency Stop Systems", "Status Indicators"],
      applications: ["Process Control", "Machine Operation", "Safety Systems", "Remote Monitoring"]
    },
    {
      title: "Embedded Controllers",
      description: "Purpose-built embedded systems for specific industrial automation requirements",
      features: ["ARM/x86 Processors", "Real-time Operating Systems", "Custom I/O Interfaces", "Edge Computing"],
      applications: ["Data Acquisition", "Process Control", "Machine Automation", "IoT Gateways"]
    },
    {
      title: "HMI Touch Displays",
      description: "Interactive touch-screen interfaces for intuitive machine operation and monitoring",
      features: ["Multi-touch Support", "High-resolution Displays", "Customizable UI", "Data Visualization"],
      applications: ["Machine Control", "Process Monitoring", "Data Entry", "Alarm Management"]
    },
    {
      title: "Communication Modules",
      description: "Industrial communication interfaces for seamless integration with existing systems",
      features: ["Multiple Protocols", "Wireless Connectivity", "Data Conversion", "Network Security"],
      applications: ["System Integration", "Remote Monitoring", "Data Exchange", "Protocol Bridging"]
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      applications: ["Assembly Line Control", "Quality Control Systems", "Production Monitoring", "Equipment Interface"]
    },
    {
      name: "Energy & Utilities",
      applications: ["Power Distribution", "Grid Monitoring", "Renewable Energy", "Substation Control"]
    },
    {
      name: "Water Treatment",
      applications: ["Process Control", "Chemical Dosing", "Filtration Systems", "Quality Monitoring"]
    },
    {
      name: "Mining",
      applications: ["Equipment Control", "Safety Systems", "Environmental Monitoring", "Material Handling"]
    },
    {
      name: "Chemical Processing",
      applications: ["Reactor Control", "Safety Interlocks", "Batch Processing", "Quality Assurance"]
    },
    {
      name: "Oil & Gas",
      applications: ["Pipeline Control", "Refinery Automation", "Safety Systems", "Environmental Monitoring"]
    }
  ];

  const specifications = [
    {
      category: "Environmental",
      specs: ["Operating Temperature: -40°C to +70°C", "Humidity: 5-95% RH", "IP65/IP67 Protection", "Vibration Resistant"]
    },
    {
      category: "Communication",
      specs: ["Ethernet/Serial Interfaces", "Wireless (WiFi/Bluetooth)", "Industrial Protocols", "Secure Connections"]
    },
    {
      category: "Power",
      specs: ["12-24V DC Operation", "Battery Backup Options", "Power Management", "Energy Efficient Design"]
    },
    {
      category: "Processing",
      specs: ["ARM Cortex / x86 Processors", "Real-time Performance", "Expandable Memory", "Edge Computing"]
    }
  ];

  const benefits = [
    "Reduced development time with proven designs",
    "Cost-effective solutions for specific requirements",
    "Reliable operation in harsh industrial environments",
    "Seamless integration with existing systems",
    "Comprehensive technical support and documentation",
    "Scalable solutions that grow with your needs"
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
              <Badge className="mb-4 bg-orange-100 text-orange-800">Custom Hardware Solutions</Badge>
              <h1 className="text-4xl md:text-5xl mb-6">Controllers & Custom Hardware</h1>
              <p className="text-xl text-gray-600 mb-8">
                Specialized embedded systems, controllers, and human-machine interfaces designed for complex 
                industrial applications. Our custom hardware solutions provide reliable, ruggedized performance 
                in the most demanding environments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => onNavigate('contact')}>
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Technical Specs
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={controllersImage}
                alt="Custom Controllers and Hardware Circuit Board"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Advanced Hardware Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4 text-orange-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Portfolio */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Custom Hardware Products</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm mb-2 text-gray-800">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm mb-2 text-gray-800">Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.applications.map((app, appIndex) => (
                        <span key={appIndex} className="text-sm text-gray-600 flex items-center">
                          <Wrench className="w-3 h-3 text-blue-500 mr-2" />
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

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4 text-orange-600">{spec.category}</h3>
                  <div className="space-y-2">
                    {spec.specs.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-sm text-gray-600">
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Industries & Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4 text-blue-600">{industry.name}</h3>
                  <div className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {app}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-lg">
            <h2 className="text-3xl mb-8 text-center">Why Choose Our Custom Hardware?</h2>
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
          <h2 className="text-3xl mb-4">Need Custom Hardware Solutions?</h2>
          <p className="text-xl mb-6 text-primary-foreground/80">
            Get specialized controllers and hardware designed specifically for your industrial requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => onNavigate('contact')}
            >
              Request Custom Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Technical Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}