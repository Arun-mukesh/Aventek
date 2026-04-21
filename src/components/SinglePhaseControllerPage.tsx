import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import pumpGuruImage from 'figma:asset/3c178118b036d0fb36556d076aa92f08bcfd63ec.png';
import { 
  ArrowRight, 
  Droplets, 
  Settings, 
  Gauge, 
  Zap, 
  AlertTriangle, 
  BarChart3,
  Download,
  Monitor,
  Cpu,
  Shield,
  Wifi,
  Factory,
  Building2,
  Users,
  TrendingUp,
  CheckCircle,
  Play,
  ExternalLink,
  FileText,
  ArrowLeft,
  Power,
  Wrench,
  Activity,
  Home,
  Maximize2
} from "lucide-react";

interface SinglePhaseControllerPageProps {
  onNavigate: (page: string) => void;
}

export function SinglePhaseControllerPage({ onNavigate }: SinglePhaseControllerPageProps) {
  const keyFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "4-inch color display", 
      description: "Clear color display showing system status and operating parameters"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Smart dry-run protection",
      description: "Advanced dry-run protection prevents pump damage and extends equipment life"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Voltage monitoring",
      description: "Continuous voltage monitoring with under/over voltage protection"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Single-phase motor control (0.5-3 HP)",
      description: "Precise control for single-phase motors up to 3 HP rating"
    },
    {
      icon: <Power className="w-6 h-6" />,
      title: "Overload protection",
      description: "Intelligent overload protection prevents motor damage"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Tank level management",
      description: "Automatic tank level sensing and control"
    }
  ];

  const smartFeatures = [
    "Easy-to-use interface",
    "Automatic operation",
    "Water level indication",
    "Scheduled operation",
    "Energy saving mode",
    "Fault alerts"
  ];

  const specifications = {
    "Power Supply": "Single Phase 230V ± 10%, 50Hz",
    "Motor Rating": "Up to 5 HP",
    "Display": "LED/LCD multi-parameter display",
    "Control Type": "Microprocessor based",
    "Protection Features": "Dry Run, Overload, Under/Over Voltage",
    "Enclosure": "ABS/MS enclosure, IP54 rated",
    "Operating Temperature": "-10°C to +55°C",
    "Installation": "Wall mounting with bracket",
    "Standards": "IS/IEC basic compliance",
    "Warranty": "2 years standard warranty"
  };

  const applications = [
    {
      title: "Residential Pumps",
      description: "Home water supply systems and pressure boosting applications",
      icon: <Home className="w-6 h-6" />,
      features: ["Domestic water supply", "Pressure boosting", "Garden irrigation", "Overhead tank filling"]
    },
    {
      title: "Small Commercial Buildings",
      description: "Office buildings, shops, and small commercial establishments",
      icon: <Building2 className="w-6 h-6" />,
      features: ["Office water systems", "Retail establishments", "Small restaurants", "Service centers"]
    },
    {
      title: "Domestic Water Systems",
      description: "Comprehensive water management for residential complexes",
      icon: <Droplets className="w-6 h-6" />,
      features: ["Bore well pumps", "Sump pumps", "Pressure tanks", "Water circulation"]
    },
    {
      title: "Garden Irrigation",
      description: "Automated irrigation systems for gardens and small farms",
      icon: <Settings className="w-6 h-6" />,
      features: ["Drip irrigation", "Sprinkler systems", "Timer control", "Moisture sensing"]
    }
  ];

  const benefits = [
    {
      title: "Cost Effective",
      description: "Budget-friendly solution for single-phase applications",
      impact: "40% Cost Savings",
      color: "text-blue-600"
    },
    {
      title: "User Friendly",
      description: "Simple operation and maintenance for homeowners",
      impact: "Easy Operation",
      color: "text-green-600"
    },
    {
      title: "Reliable Protection",
      description: "Comprehensive protection against common pump failures",
      impact: "99% Protection",
      color: "text-purple-600"
    },
    {
      title: "Energy Efficient",
      description: "Optimized power consumption for household applications",
      impact: "20% Energy Saving",
      color: "text-orange-600"
    }
  ];

  const protectionFeatures = [
    {
      title: "Dry Run Protection",
      description: "Prevents pump damage when water level is low",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      title: "Overload Protection", 
      description: "Protects motor from electrical overload conditions",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Voltage Protection",
      description: "Under/over voltage protection with auto-restart",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Phase Loss Protection",
      description: "Single phase monitoring and protection",
      icon: <AlertTriangle className="w-6 h-6" />
    }
  ];

  const installationFeatures = [
    {
      title: "Wall Mounting",
      description: "Compact wall-mount design saves space and ensures easy access",
      icon: <Maximize2 className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Simple Wiring",
      description: "User-friendly wiring with clear terminals and documentation",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "LED Indicators",
      description: "Clear visual indicators for power, run, and fault conditions",
      icon: <Monitor className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Manual Controls",
      description: "Manual start/stop controls with override functionality",
      icon: <Power className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('pump-guru-overview')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to PumpGuru Products
          </Button>
          <div className="text-sm text-gray-600">
            <span>PumpGuru</span> <span className="mx-2">›</span> <span>Single Phase Controller</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-purple-600 text-purple-600">Compact Smart Control</Badge>
          <h1 className="text-4xl md:text-6xl mb-6 text-purple-600">SINGLE PHASE CONTROLLER</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Compact single-phase controller ideal for residential and small commercial applications with essential smart features and reliable protection
          </p>
        </div>

        {/* Hero Product Image & Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-gray-50 p-8 rounded-2xl shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-purple-100 rounded-xl mr-4">
                    <Home className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl text-gray-800">Residential Smart Control</h2>
                    <p className="text-purple-600">Compact Smart Control</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 mb-8">
                  <p>
                    Our Single Phase Controller brings smart pump control technology to residential and 
                    small commercial applications, combining essential protection features with user-friendly operation.
                  </p>
                  <p>
                    Designed for homeowners and small businesses, it provides reliable water management 
                    with comprehensive protection against common pump failures and electrical issues.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-purple-600 mb-1">5HP</div>
                    <div className="text-sm text-gray-600">Max Motor</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-green-600 mb-1">230V</div>
                    <div className="text-sm text-gray-600">Single Phase</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-blue-600 mb-1">IP54</div>
                    <div className="text-sm text-gray-600">Protection</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-purple-600 hover:bg-purple-700"
                    onClick={() => {
                      alert("Single Phase Controller PDF will be available for download");
                    }}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Product PDF
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    onClick={() => onNavigate('contact')}
                  >
                    <FileText className="mr-2 w-5 h-5" />
                    Request Quote
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={pumpGuruImage}
                  alt="Single Phase Controller - Compact smart control for residential and small commercial applications"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-purple-600 text-lg mb-1">🏠 Residential Solution</p>
                      <p className="text-gray-800 text-xl">Single Phase Controller</p>
                      <p className="text-gray-600 text-sm">Smart control for homes and small businesses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Product Gallery & Residential Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1610312973684-e47446aa260b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nbGUlMjBwaGFzZSUyMHB1bXAlMjBjb250cm9sbGVyJTIwcmVzaWRlbnRpYWx8ZW58MXx8fHwxNzU5MDQ5NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Residential pump controller installation"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Residential Installation</h4>
                    <p className="text-sm text-purple-200">Home water system setup</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1743862558369-5dcea79ccbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGVsZWN0cm9uaWMlMjBjb250cm9sJTIwcGFuZWx8ZW58MXx8fHwxNzU5MDQ5NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Compact controller panel for residential use"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Control Panel</h4>
                    <p className="text-sm text-purple-200">User-friendly interface</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={pumpGuruImage}
                  alt="Single Phase Controller unit with digital display"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Controller Unit</h4>
                    <p className="text-sm text-purple-200">Compact single-phase control</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">User-Friendly Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-purple-100 rounded-full inline-block mb-4">
                    <div className="text-purple-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Installation Features */}
        <section className="mb-16 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl">
          <h2 className="text-3xl text-center mb-12">Easy Installation & Operation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`p-4 ${feature.color} rounded-full inline-block mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Technical Specifications</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-purple-600 text-white p-6">
                  <h3 className="text-2xl mb-2">Single Phase Controller</h3>
                  <p className="text-purple-100">Complete specifications for residential applications</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="text-gray-600 font-medium">{key}</span>
                        <span className="text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Residential & Small Commercial Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-purple-100 rounded-lg mr-4">
                      <div className="text-purple-600">{app.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl">{app.title}</h3>
                      <p className="text-gray-600 text-sm">{app.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Protection Features */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Essential Protection Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protectionFeatures.map((protection, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-purple-100 rounded-full inline-block mb-4">
                    <div className="text-purple-600">{protection.icon}</div>
                  </div>
                  <h3 className="text-lg mb-3">{protection.title}</h3>
                  <p className="text-gray-600 text-sm">{protection.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Homeowner Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`text-3xl mb-3 ${benefit.color}`}>{benefit.impact}</div>
                  <h3 className="text-lg mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Installation & Support */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">DIY-Friendly Installation & Support</h2>
              <p className="text-xl text-gray-600">
                Simple installation process with comprehensive homeowner support
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Wrench className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Easy Installation</h4>
                <p className="text-sm text-gray-600 mb-4">DIY-friendly with detailed instructions and support</p>
                <Button size="sm" variant="outline" className="border-purple-600 text-purple-600">
                  Installation Guide
                </Button>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Activity className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Customer Support</h4>
                <p className="text-sm text-gray-600 mb-4">Dedicated support for homeowners and small businesses</p>
                <Button size="sm" variant="outline" className="border-blue-600 text-blue-600">
                  Contact Support
                </Button>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Warranty & Service</h4>
                <p className="text-sm text-gray-600 mb-4">2-year warranty with local service support</p>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                  Warranty Details
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Perfect for Homes & Small Businesses</h2>
          <p className="text-xl mb-6 text-purple-100">
            Get reliable, cost-effective single-phase pump control with essential smart features and comprehensive protection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50"
              onClick={() => {
                alert("Single Phase Controller PDF will be available for download");
              }}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Product Details
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600"
              onClick={() => onNavigate('contact')}
            >
              Get Quote & Installation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-purple-100 text-sm">
              🏠 Perfect for homes | 💰 Budget friendly | 🔧 Easy installation | 🛡️ Comprehensive protection
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}