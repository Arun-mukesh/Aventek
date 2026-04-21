import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Factory, Smartphone, Shield, Settings, Link, Network, Cpu, Camera, Eye, Recycle, Leaf, Radio, Droplets, Users, Car } from "lucide-react";
import iotAiSolutionsImage from 'figma:asset/e4ba74603b289c61f4d9a58c19da6c6916b67530.png';
import autoPeopleCountingImage from 'figma:asset/5eb4c0ed640ee49d9d7d6c8584701591b69eda12.png';
import autoPeopleCountingBannerImage from 'figma:asset/f297a941af7044d2eeda4bfb33545a20274135b2.png';
import autoVehicleCountingImage from 'figma:asset/13b62e79bd44ce05afc3ba362a8c9ce55c644e76.png';
import pumpGuruImage from 'figma:asset/3c178118b036d0fb36556d076aa92f08bcfd63ec.png';
import controllersHardwareImage from 'figma:asset/d0ec05a1645528a4f3554b88841581a2e57f5516.png';
import securitySystemsImage from 'figma:asset/af91dac8b150e6eb6845a21c9ca5806b91bf80d8.png';
import reverseVendingImage from 'figma:asset/204fed48274a0ff944b044e033aa7379281cc748.png';
import aiImageProcessingImage from 'figma:asset/c3a6f6187b8b748418ac98167a9310326507b732.png';
import sustainableSolutionsImage from 'figma:asset/dd5ff5d9d89dcb6a36c3c457f330d7f82205ebad.png';
import industrialCellularModemImage from 'figma:asset/7f7fe0adc1ddf4d20f649ce9cda2ea4832c5693b.png';
import blockchainIntegrationImage from 'figma:asset/7f2eab76ff36cbda5408ad2a8f35dad7c4e0ae4d.png';

interface SolutionsPageProps {
  onNavigate: (page: string) => void;
}

export function SolutionsPage({ onNavigate }: SolutionsPageProps) {
  const solutions = [
    {
      id: "pump-guru-overview",
      title: "Pump Guru",
      description: "Intelligent water distribution system with AI optimization, predictive maintenance, and sustainable water management.",
      icon: <Droplets className="w-8 h-8" />,
      image: pumpGuruImage,
      features: [
        "Smart water distribution and monitoring",
        "AI-powered predictive maintenance",
        "Real-time performance analytics",
        "Water conservation optimization",
        "Remote control and automation"
      ],
      industries: ["Water Treatment", "Agriculture", "Municipal Services", "Industrial", "Smart Cities"]
    },
    {
      id: "interface-relay-boards",
      title: "Interface Relay Boards",
      description: "Specialized embedded systems, controllers, and human-machine interfaces for complex industrial applications.",
      icon: <Cpu className="w-8 h-8" />,
      image: controllersHardwareImage,
      features: [
        "Custom embedded controller design",
        "Touch-screen HMI development",
        "Multi-protocol communication modules",
        "Real-time data acquisition systems",
        "Ruggedized hardware solutions"
      ],
      industries: ["Manufacturing", "Energy", "Water Treatment", "Mining", "Chemical Processing"]
    },
    {
      id: "iot-ai-solutions",
      title: "IoT AI Solution",
      description: "Smart connectivity modules, intelligent dashboards, and AI-powered analytics for modern businesses.",
      icon: <Network className="w-8 h-8" />,
      image: iotAiSolutionsImage,
      features: [
        "Smart sensor networks and gateways",
        "AI-powered analytics dashboards",
        "Edge computing solutions",
        "Real-time monitoring platforms",
        "Predictive maintenance systems"
      ],
      industries: ["Smart Cities", "Retail", "Healthcare", "Transportation", "Agriculture"]
    },
    {
      id: "auto-people-counting",
      title: "Auto People Counting",
      description: "AI-powered analytics for accurate crowd counting and space utilization optimization with real-time insights.",
      icon: <Users className="w-8 h-8" />,
      image: autoPeopleCountingImage,
      badge: "FIRST EVER PEOPLE COUNTING PLATFORM DEVELOPED IN INDIA",
      website: "https://autopeoplecounting.com/",
      features: [
        "Real-time people counting analytics",
        "AI-powered crowd detection",
        "Privacy-compliant technology",
        "Space utilization optimization",
        "Heat mapping and flow analysis"
      ],
      industries: ["Retail", "Transportation", "Smart Cities", "Events", "Corporate Offices"]
    },
    {
      id: "auto-vehicle-counting",
      title: "Auto Vehicle Counting",
      description: "Intelligent vehicle detection and counting system with AI-powered traffic analytics and monitoring.",
      icon: <Car className="w-8 h-8" />,
      image: autoVehicleCountingImage,
      features: [
        "Real-time vehicle detection and counting",
        "AI-powered traffic flow analysis",
        "Multi-lane monitoring capability",
        "Vehicle classification and tracking",
        "Traffic pattern analytics"
      ],
      industries: ["Transportation", "Smart Cities", "Toll Systems", "Parking Management", "Infrastructure"]
    },
    {
      id: "reverse-vending",
      title: "Plastic Bottle Recycle Machine",
      description: "Smart automated recycling systems that incentivize plastic bottle recycling through intelligent collection and reward mechanisms.",
      icon: <Recycle className="w-8 h-8" />,
      image: reverseVendingImage,
      features: [
        "Automated bottle recognition and sorting",
        "Digital rewards and incentive programs",
        "Real-time recycling monitoring",
        "Sustainable waste management",
        "IoT-enabled collection tracking"
      ],
      industries: ["Environmental Services", "Retail", "Smart Cities", "Corporate Sustainability", "Municipal Services"]
    },
    {
      id: "ai-image-processing",
      title: "AI with Image Processing and IoT Solutions",
      description: "Advanced computer vision technology integrated with IoT for intelligent visual analytics and automation.",
      icon: <Eye className="w-8 h-8" />,
      image: aiImageProcessingImage,
      features: [
        "Computer vision analytics",
        "Real-time image processing",
        "Object detection and tracking",
        "AI-powered pattern recognition",
        "Edge AI deployment"
      ],
      industries: ["Retail", "Smart Cities", "Security", "Manufacturing", "Transportation"]
    },
    {
      id: "security-systems", 
      title: "Security & Smart Alarms Systems",
      description: "Multi-protocol rugged hardware for industrial & city security with comprehensive monitoring and alarm capabilities.",
      icon: <Shield className="w-8 h-8" />,
      image: securitySystemsImage,
      features: [
        "Multi-protocol communication systems",
        "Rugged industrial-grade hardware",
        "Advanced surveillance platforms",
        "Integrated access control systems",
        "Real-time threat detection and alerts"
      ],
      industries: ["Government", "Critical Infrastructure", "Industrial Plants", "Smart Cities", "Transportation"]
    },
    {
      id: "sustainable-solutions",
      title: "Sustainable Solution Products",
      description: "Eco-friendly automation solutions for sustainable operations and environmental conservation.",
      icon: <Leaf className="w-8 h-8" />,
      image: sustainableSolutionsImage,
      features: [
        "Energy-efficient automation systems",
        "Green technology integration",
        "Carbon footprint monitoring",
        "Sustainable resource management",
        "Environmental impact analytics"
      ],
      industries: ["Manufacturing", "Agriculture", "Smart Cities", "Corporate Sustainability", "Energy"]
    },
    {
      id: "industrial-cellular-modem",
      title: "Industrial Cellular Modem Solutions",
      description: "Robust cellular communication modules for reliable remote connectivity in industrial environments.",
      icon: <Radio className="w-8 h-8" />,
      image: industrialCellularModemImage,
      features: [
        "4G/5G cellular connectivity",
        "Industrial-grade durability",
        "Remote device management",
        "Secure data transmission",
        "Multiple protocol support"
      ],
      industries: ["Oil & Gas", "Utilities", "Transportation", "Agriculture", "Remote Monitoring"]
    },
    {
      id: "blockchain-integration",
      title: "Blockchain Platform Integration",
      description: "Secure blockchain solutions for industrial applications, supply chain management, and data integrity.",
      icon: <Link className="w-8 h-8" />,
      image: blockchainIntegrationImage,
      features: [
        "Smart contract development",
        "Supply chain transparency solutions",
        "Data integrity and verification",
        "Decentralized identity management", 
        "IoT device authentication"
      ],
      industries: ["Supply Chain", "Healthcare", "Finance", "Manufacturing", "Logistics"]
    }
  ];

  const featuredProducts = [
    {
      id: "pump-guru",
      name: "Pump Guru",
      description: "Intelligent water distribution system with AI optimization and real-time monitoring.",
      image: pumpGuruImage
    },
    {
      id: "interface-relay-boards",
      name: "Interface Relay Boards",
      description: "Specialized embedded systems, controllers, and human-machine interfaces for complex industrial applications.",
      image: controllersHardwareImage
    },
    {
      id: "iot-ai-solutions",
      name: "IoT AI Solution",
      description: "Smart connectivity modules, intelligent dashboards, and AI-powered analytics for modern businesses.",
      image: iotAiSolutionsImage
    },
    {
      id: "auto-people-counting",
      name: "Auto People Counting",
      description: "AI-powered analytics for accurate crowd counting and space utilization optimization.",
      image: autoPeopleCountingBannerImage,
      badge: "FIRST EVER PEOPLE COUNTING PLATFORM DEVELOPED IN INDIA",
      website: "https://autopeoplecounting.com/"
    },
    {
      id: "iot-ai-solutions",
      name: "Auto Vehicle Counting",
      description: "Intelligent vehicle detection and counting system with AI-powered traffic analytics and monitoring.",
      image: autoVehicleCountingImage
    },
    {
      id: "reverse-vending",
      name: "Plastic Bottle Recycle Machine",
      description: "Smart automated recycling systems that incentivize plastic bottle recycling through intelligent collection and reward mechanisms.",
      image: reverseVendingImage
    },
    {
      id: "reverse-vending",
      name: "Sustainable Solution Products",
      description: "Eco-friendly automation solutions for sustainable operations and environmental conservation.",
      image: sustainableSolutionsImage
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Solutions & Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automation and IoT solutions designed to transform your operations
          </p>
        </div>

        {/* Solution Categories */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Our Comprehensive Solution Portfolio</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => solution.id === 'security-systems' ? onNavigate('security-systems') : null}>
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  {solution.badge && (
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        {solution.badge}
                      </Badge>
                    </div>
                  )}
                  
                  {solution.website && (
                    <div className="mb-3 text-sm">
                      <a 
                        href={solution.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        🌐 Visit autopeoplecounting.com
                      </a>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h4 className="text-sm mb-2 text-gray-800">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm mb-2 text-gray-800">Target Industries:</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.industries.slice(0, 3).map((industry, industryIndex) => (
                        <Badge key={industryIndex} variant="secondary" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                      {solution.industries.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{solution.industries.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => onNavigate(solution.id)}
                  >
                    Explore Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Featured Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  {product.badge && (
                    <div className="mb-3 text-sm text-blue-600">
                      <Badge variant="outline" className="text-xs">
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                  {product.name === "Auto People Counting" && (
                    <div className="mb-3 text-sm text-blue-600">
                      <a 
                        href="https://autopeoplecounting.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline font-medium"
                      >
                        🌐 Visit autopeoplecounting.com
                      </a>
                    </div>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      if (product.name === "Auto People Counting") {
                        onNavigate('auto-people-counting');
                      } else if (product.name === "Pump Guru") {
                        onNavigate('pump-guru-overview');
                      }
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-6 text-primary-foreground/80">
            Discover how our solutions can empower your industry with reliability and innovation.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary"
            onClick={() => onNavigate('contact')}
          >
            Explore Solutions →
          </Button>
        </section>
      </div>
    </div>
  );
}