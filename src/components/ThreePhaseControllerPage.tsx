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
  Cog
} from "lucide-react";

interface ThreePhaseControllerPageProps {
  onNavigate: (page: string) => void;
}

export function ThreePhaseControllerPage({ onNavigate }: ThreePhaseControllerPageProps) {
  const keyFeatures = [
    {
      icon: <Power className="w-6 h-6" />,
      title: "Heavy-Duty Motor Control",
      description: "Robust three-phase motor control for industrial pumps up to 100 HP capacity"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Protection",
      description: "Comprehensive protection against overload, phase loss, dry run, and voltage fluctuations"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Phase Monitoring",
      description: "Real-time monitoring of all three phases with automatic phase sequence correction"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Soft Start Technology",
      description: "Smooth motor starting to reduce mechanical stress and extend equipment life"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Variable Speed Control",
      description: "Integrated VFD compatibility for precise speed control and energy optimization"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Digital Display",
      description: "Comprehensive digital display showing all critical parameters and system status"
    }
  ];

  const specifications = {
    "Power Supply": "Three Phase 415V ± 10%, 50Hz",
    "Motor Rating": "Up to 100 HP",
    "Control Modes": "DOL, Star-Delta, VFD Compatible",
    "Protection Features": "Overload, Phase Loss, Dry Run, Under/Over Voltage",
    "Display": "LED/LCD multi-parameter display",
    "Enclosure": "MS Powder Coated, IP54/IP65 available",
    "Operating Temperature": "-20°C to +70°C",
    "Communication": "RS485, Modbus RTU (Optional)",
    "Standards Compliance": "IS/IEC 60947, IS/IEC 61439",
    "Mounting": "Wall/Panel mounting options"
  };

  const applications = [
    {
      title: "Industrial Pumps",
      description: "Heavy-duty industrial water pumps and process fluid systems",
      icon: <Factory className="w-6 h-6" />,
      features: ["High-power motors", "Continuous operation", "Process integration", "Industrial standards"]
    },
    {
      title: "Heavy Machinery",
      description: "Industrial machinery requiring robust three-phase motor control",
      icon: <Cog className="w-6 h-6" />,
      features: ["Heavy-duty control", "Precise operation", "Safety systems", "Reliable performance"]
    },
    {
      title: "Large Irrigation Systems",
      description: "Agricultural and landscape irrigation with high-capacity pumps",
      icon: <Droplets className="w-6 h-6" />,
      features: ["Large coverage area", "Efficient water management", "Weather integration", "Remote control"]
    },
    {
      title: "Mining Operations",
      description: "Dewatering pumps and fluid handling in harsh industrial environments",
      icon: <Settings className="w-6 h-6" />,
      features: ["Extreme conditions", "Heavy-duty operation", "Safety critical", "Minimal downtime"]
    }
  ];

  const benefits = [
    {
      title: "Reliable Operation",
      description: "Proven reliability in harsh industrial environments",
      impact: "99.5% Uptime",
      color: "text-blue-600"
    },
    {
      title: "Motor Protection",
      description: "Advanced protection extends motor life significantly",
      impact: "50% Longer Life",
      color: "text-green-600"
    },
    {
      title: "Energy Efficiency",
      description: "Optimized control reduces energy consumption",
      impact: "25% Energy Savings",
      color: "text-purple-600"
    },
    {
      title: "Reduced Downtime",
      description: "Predictive maintenance prevents unexpected failures",
      impact: "80% Less Downtime",
      color: "text-orange-600"
    }
  ];

  const controlModes = [
    {
      title: "Direct On Line (DOL)",
      description: "Simple and reliable direct starting for standard applications",
      icon: <Power className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
      features: ["Simple operation", "Cost effective", "Robust design", "Easy maintenance"]
    },
    {
      title: "Star-Delta Starting",
      description: "Reduced starting current for larger motors and applications",
      icon: <Activity className="w-8 h-8" />,
      color: "bg-green-100 text-green-600",
      features: ["Reduced starting current", "Motor protection", "Smooth transition", "Energy efficient"]
    },
    {
      title: "VFD Compatible",
      description: "Variable frequency drive integration for precise speed control",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600",
      features: ["Variable speed", "Energy optimization", "Process control", "Advanced features"]
    },
    {
      title: "Smart Control",
      description: "Intelligent control with monitoring and diagnostics",
      icon: <Monitor className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600",
      features: ["Real-time monitoring", "Diagnostics", "Data logging", "Remote access"]
    }
  ];

  const protectionFeatures = [
    {
      title: "Overload Protection",
      description: "Thermal overload protection prevents motor damage",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Phase Loss Protection",
      description: "Automatic detection and protection against phase loss",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Dry Run Protection",
      description: "Prevents pump damage due to dry running conditions",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      title: "Voltage Protection",
      description: "Under/over voltage protection with auto-restart",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Phase Sequence",
      description: "Automatic phase sequence correction for proper rotation",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Earth Fault Protection",
      description: "Earth leakage protection for enhanced safety",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('pump-guru')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to PumpGuru Products
          </Button>
          <div className="text-sm text-gray-600">
            <span>PumpGuru</span> <span className="mx-2">›</span> <span>Three Phase Controller</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-red-600 text-red-600">Heavy Duty Pump Control</Badge>
          <h1 className="text-4xl md:text-6xl mb-6 text-red-600">THREE PHASE CONTROLLER</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Robust three-phase pump controller designed for heavy-duty industrial applications with advanced protection and control features
          </p>
        </div>

        {/* Hero Product Image & Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-red-50 to-gray-50 p-8 rounded-2xl shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-red-100 rounded-xl mr-4">
                    <Power className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl text-gray-800">Industrial Grade Control</h2>
                    <p className="text-red-600">Heavy Duty Pump Control</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 mb-8">
                  <p>
                    Our Three Phase Controller is engineered for the most demanding industrial applications, 
                    providing robust and reliable control for heavy-duty pumps and motors up to 100 HP.
                  </p>
                  <p>
                    With comprehensive protection features, multiple control modes, and industrial-grade construction, 
                    this controller ensures maximum uptime and equipment protection in harsh operating environments.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-red-600 mb-1">100HP</div>
                    <div className="text-sm text-gray-600">Max Motor Rating</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-green-600 mb-1">99.5%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-purple-600 mb-1">IP65</div>
                    <div className="text-sm text-gray-600">Protection</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() => {
                      alert("Three Phase Controller PDF will be available for download");
                    }}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Product PDF
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
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
                  alt="Three Phase Controller - Heavy duty pump control with advanced protection and monitoring capabilities"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-red-600 text-lg mb-1">⚡ Heavy Duty Solution</p>
                      <p className="text-gray-800 text-xl">Three Phase Controller</p>
                      <p className="text-gray-600 text-sm">Robust pump control for industrial applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Product Gallery & Industrial Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1570086625762-7c1396540ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHVtcCUyMGNvbnRyb2wlMjBwYW5lbCUyMGVsZWN0cmljYWx8ZW58MXx8fHwxNzU5MDQ5NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Industrial pump control panel installation"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Control Panel Setup</h4>
                    <p className="text-sm text-red-200">Heavy-duty industrial installation</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563456019560-2b37aa7ad890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMGNhYmluZXQlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc1OTA0OTQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Electrical control cabinet for three phase controller"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Control Cabinet</h4>
                    <p className="text-sm text-red-200">Robust electrical enclosure</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={pumpGuruImage}
                  alt="Three Phase Controller unit with digital display"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Controller Unit</h4>
                    <p className="text-sm text-red-200">Advanced three-phase control</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Advanced Control Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-red-100 rounded-full inline-block mb-4">
                    <div className="text-red-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Control Modes */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Control Modes & Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {controlModes.map((mode, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`p-4 ${mode.color} rounded-full inline-block mb-4`}>
                    {mode.icon}
                  </div>
                  <h3 className="text-lg mb-3">{mode.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{mode.description}</p>
                  <div className="space-y-1">
                    {mode.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-gray-500">• {feature}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Protection Features */}
        <section className="mb-16 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl">
          <h2 className="text-3xl text-center mb-12">Comprehensive Protection System</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protectionFeatures.map((protection, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
                      <div className="text-red-600">{protection.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">{protection.title}</h3>
                      <p className="text-gray-600 text-sm">{protection.description}</p>
                    </div>
                  </div>
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
                <div className="bg-red-600 text-white p-6">
                  <h3 className="text-2xl mb-2">Three Phase Controller</h3>
                  <p className="text-red-100">Complete technical specifications and capabilities</p>
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
          <h2 className="text-3xl text-center mb-12">Industrial Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-red-100 rounded-lg mr-4">
                      <div className="text-red-600">{app.icon}</div>
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

        {/* Benefits & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Performance Benefits</h2>
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
          <div className="bg-white p-8 rounded-xl shadow-lg border border-red-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">Professional Installation & Support</h2>
              <p className="text-xl text-gray-600">
                Expert installation services and ongoing support for optimal system performance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <Wrench className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Expert Installation</h4>
                <p className="text-sm text-gray-600 mb-4">Professional installation by certified industrial technicians</p>
                <Button size="sm" variant="outline" className="border-red-600 text-red-600">
                  Schedule Service
                </Button>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Activity className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Training & Support</h4>
                <p className="text-sm text-gray-600 mb-4">Comprehensive operator training and technical support</p>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                  Training Program
                </Button>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Warranty & Service</h4>
                <p className="text-sm text-gray-600 mb-4">Extended warranty and preventive maintenance programs</p>
                <Button size="sm" variant="outline" className="border-purple-600 text-purple-600">
                  Service Plan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Power Your Industrial Operations</h2>
          <p className="text-xl mb-6 text-red-100">
            Choose the most robust and reliable three-phase controller for your heavy-duty industrial applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-red-50"
              onClick={() => {
                alert("Three Phase Controller PDF will be available for download");
              }}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Complete Specifications
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600"
              onClick={() => onNavigate('contact')}
            >
              Request Technical Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-red-100 text-sm">
              ⚡ Trusted by heavy industries | 🏭 99.5% uptime guaranteed | 🛡️ Comprehensive protection
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}