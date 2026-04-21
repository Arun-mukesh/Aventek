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
  Filter,
  Wrench,
  Activity
} from "lucide-react";

interface ROPlantThreePhasePageProps {
  onNavigate: (page: string) => void;
}

export function ROPlantThreePhasePage({ onNavigate }: ROPlantThreePhasePageProps) {
  const keyFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Three-Phase Motor Control",
      description: "Advanced three-phase motor control with soft start and variable speed capabilities"
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Multi-Stage Filtration",
      description: "Intelligent monitoring and control of pre-filter, carbon filter, and RO membrane stages"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "TDS Control & Monitoring",
      description: "Real-time Total Dissolved Solids monitoring with automatic quality control"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Auto-Flush System",
      description: "Automated membrane flushing system to maintain optimal performance and longevity"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Pressure Management",
      description: "Intelligent pressure control with high/low pressure protection and optimization"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "HMI Touchscreen",
      description: "7-inch color HMI touchscreen for comprehensive system monitoring and control"
    }
  ];

  const specifications = {
    "Power Supply": "Three Phase 415V ± 10%, 50Hz",
    "Motor Rating": "Up to 25 HP",
    "Display": "7-inch color HMI touchscreen",
    "Control Type": "Microprocessor based with PLC integration",
    "Communication": "RS485, Ethernet, WiFi, Modbus RTU/TCP",
    "Protection Rating": "IP65 rated enclosure",
    "Operating Temperature": "-10°C to +60°C",
    "Sensors Supported": "Pressure, Flow, TDS, Temperature, pH",
    "Alarms": "Visual and audible alarm system",
    "Data Logging": "Built-in data logger with SD card support"
  };

  const applications = [
    {
      title: "Industrial RO Plants",
      description: "Large-scale reverse osmosis plants for industrial water treatment",
      icon: <Factory className="w-6 h-6" />,
      features: ["High-capacity processing", "Continuous operation", "Multi-stage filtration", "Industrial-grade components"]
    },
    {
      title: "Commercial Installations",
      description: "Office buildings, hotels, hospitals, and commercial complexes",
      icon: <Building2 className="w-6 h-6" />,
      features: ["Reliable water supply", "Quality assurance", "Energy efficient", "Low maintenance"]
    },
    {
      title: "Municipal Water Treatment",
      description: "City-wide water treatment and distribution systems",
      icon: <Users className="w-6 h-6" />,
      features: ["Large-scale capacity", "Regulatory compliance", "Remote monitoring", "24/7 operation"]
    },
    {
      title: "Manufacturing Facilities",
      description: "Process water for pharmaceutical, food, and chemical industries",
      icon: <Settings className="w-6 h-6" />,
      features: ["Ultra-pure water", "Process integration", "Quality validation", "Batch tracking"]
    }
  ];

  const benefits = [
    {
      title: "Superior Water Quality",
      description: "Achieves 99% purity with TDS levels below 10 ppm",
      impact: "99% Purity",
      color: "text-blue-600"
    },
    {
      title: "Energy Efficiency",
      description: "Optimized pump control reduces energy consumption significantly",
      impact: "35% Energy Savings",
      color: "text-green-600"
    },
    {
      title: "Automated Operations",
      description: "Fully automated system with minimal manual intervention required",
      impact: "90% Automation",
      color: "text-purple-600"
    },
    {
      title: "Extended Membrane Life",
      description: "Auto-flush system extends RO membrane lifespan substantially",
      impact: "2x Longer Life",
      color: "text-orange-600"
    }
  ];

  const systemArchitecture = [
    {
      title: "Pre-Treatment Stage",
      description: "Sediment and carbon filtration with automated backwash",
      icon: <Filter className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "High Pressure Pump",
      description: "Three-phase pump with variable speed control",
      icon: <Zap className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "RO Membrane Assembly",
      description: "Multi-membrane configuration with auto-flush system",
      icon: <Droplets className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Control & Monitoring",
      description: "Advanced PLC control with HMI interface",
      icon: <Monitor className="w-8 h-8" />,
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
            onClick={() => onNavigate('pump-guru')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to PumpGuru Products
          </Button>
          <div className="text-sm text-gray-600">
            <span>PumpGuru</span> <span className="mx-2">›</span> <span>RO Plant Three Phase</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-600 text-blue-600">IoT & AI Water Solutions</Badge>
          <h1 className="text-4xl md:text-6xl mb-6 text-blue-600">RO PLANT THREE PHASE</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Advanced Reverse Osmosis Control System with intelligent three-phase motor management and comprehensive water quality monitoring
          </p>
        </div>

        {/* Hero Product Image & Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-blue-100 rounded-xl mr-4">
                    <Factory className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl text-gray-800">Industrial Grade RO Control</h2>
                    <p className="text-blue-600">Advanced Reverse Osmosis Control</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 mb-8">
                  <p>
                    Our RO Plant Three Phase controller represents the pinnacle of water treatment automation, 
                    designed specifically for large-scale industrial and commercial reverse osmosis applications.
                  </p>
                  <p>
                    With comprehensive three-phase motor control, multi-stage filtration monitoring, and intelligent 
                    TDS management, this system ensures consistent high-quality water production with minimal maintenance.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-blue-600 mb-1">99%</div>
                    <div className="text-sm text-gray-600">Water Purity</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-green-600 mb-1">35%</div>
                    <div className="text-sm text-gray-600">Energy Savings</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-purple-600 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Operation</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      alert("RO Plant Three Phase PDF will be available for download");
                    }}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Product PDF
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
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
                  alt="RO Plant Three Phase - Advanced Reverse Osmosis Control System with three-phase motor control and comprehensive monitoring"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-blue-600 text-lg mb-1">🏭 Industrial Grade Solution</p>
                      <p className="text-gray-800 text-xl">RO Plant Three Phase Controller</p>
                      <p className="text-gray-600 text-sm">Advanced reverse osmosis control with comprehensive monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Product Gallery & Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1564605504543-1833fef7c1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmV2ZXJzZSUyMG9zbW9zaXMlMjB3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50fGVufDF8fHx8MTc1OTA0OTQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Industrial RO Plant Three Phase Controller installation"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Industrial Installation</h4>
                    <p className="text-sm text-blue-200">Large-scale RO plant setup</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjBmaWx0cmF0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc1OTA0OTQ3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Water filtration system with RO Plant controller"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Filtration System</h4>
                    <p className="text-sm text-blue-200">Multi-stage water treatment</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={pumpGuruImage}
                  alt="RO Plant Three Phase Controller unit"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Controller Unit</h4>
                    <p className="text-sm text-blue-200">Advanced control system</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Advanced Features & Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-blue-100 rounded-full inline-block mb-4">
                    <div className="text-blue-600">{feature.icon}</div>
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
                <div className="bg-blue-600 text-white p-6">
                  <h3 className="text-2xl mb-2">RO Plant Three Phase Controller</h3>
                  <p className="text-blue-100">Complete technical specifications and capabilities</p>
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
          <h2 className="text-3xl text-center mb-12">Applications & Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <div className="text-blue-600">{app.icon}</div>
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
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
          <h2 className="text-3xl text-center mb-12">Benefits & Performance Impact</h2>
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

        {/* System Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">System Architecture & Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systemArchitecture.map((component, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`p-4 ${component.color} rounded-full inline-block mb-4`}>
                    {component.icon}
                  </div>
                  <h3 className="text-lg mb-3">{component.title}</h3>
                  <p className="text-gray-600 text-sm">{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Installation & Support */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">Installation & Technical Support</h2>
              <p className="text-xl text-gray-600">
                Complete installation guidance and ongoing technical support for optimal system performance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Wrench className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Installation Service</h4>
                <p className="text-sm text-gray-600 mb-4">Professional installation and commissioning by certified technicians</p>
                <Button size="sm" variant="outline" className="border-blue-600 text-blue-600">
                  Schedule Installation
                </Button>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Activity className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Training & Support</h4>
                <p className="text-sm text-gray-600 mb-4">Comprehensive operator training and 24/7 technical support</p>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                  Request Training
                </Button>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Maintenance</h4>
                <p className="text-sm text-gray-600 mb-4">Preventive maintenance programs and spare parts support</p>
                <Button size="sm" variant="outline" className="border-purple-600 text-purple-600">
                  Maintenance Plan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Ready to Transform Your Water Treatment?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Get the most advanced RO plant control system with proven industrial-grade performance and reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => {
                alert("RO Plant Three Phase PDF will be available for download");
              }}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Complete Specifications
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => onNavigate('contact')}
            >
              Request Technical Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-blue-100 text-sm">
              🏆 Trusted by leading industrial facilities across India | ⚡ 35% more efficient than conventional systems
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}