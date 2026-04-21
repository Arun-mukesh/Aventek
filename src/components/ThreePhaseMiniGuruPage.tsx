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
  Minimize2,
  Maximize2
} from "lucide-react";

interface ThreePhaseMiniGuruPageProps {
  onNavigate: (page: string) => void;
}

export function ThreePhaseMiniGuruPage({ onNavigate }: ThreePhaseMiniGuruPageProps) {
  const keyFeatures = [
    {
      icon: <Minimize2 className="w-6 h-6" />,
      title: "Compact Design",
      description: "Space-saving design perfect for installations with limited panel space"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Essential Controls",
      description: "All essential three-phase control functions in a compact package"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Digital Indicators",
      description: "Clear LED indicators for system status, alarms, and operational parameters"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Phase Monitoring",
      description: "Basic phase monitoring with protection against phase loss and sequence errors"
    },
    {
      icon: <Power className="w-6 h-6" />,
      title: "Manual Override",
      description: "Manual override functionality for maintenance and emergency operations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Basic Protection",
      description: "Essential protection features including overload and dry run protection"
    }
  ];

  const specifications = {
    "Power Supply": "Three Phase 415V ± 10%, 50Hz",
    "Motor Rating": "Up to 15 HP",
    "Form Factor": "Compact design - 50% smaller",
    "Display": "LED indicators with digital display",
    "Control Type": "Microprocessor based",
    "Protection": "Overload, Phase Loss, Basic Dry Run",
    "Enclosure": "ABS/MS enclosure, IP54 rated",
    "Operating Temperature": "-10°C to +55°C",
    "Mounting": "Panel mount / Wall mount",
    "Standards": "IS/IEC basic compliance"
  };

  const applications = [
    {
      title: "Small Industrial Pumps",
      description: "Compact three-phase pumps for small industrial applications",
      icon: <Factory className="w-6 h-6" />,
      features: ["Space efficient", "Cost effective", "Reliable operation", "Easy installation"]
    },
    {
      title: "Commercial Buildings",
      description: "Water pumps for office buildings and commercial complexes",
      icon: <Building2 className="w-6 h-6" />,
      features: ["Quiet operation", "Compact installation", "Energy efficient", "Low maintenance"]
    },
    {
      title: "Boosting Systems",
      description: "Water pressure boosting systems for multi-story buildings",
      icon: <TrendingUp className="w-6 h-6" />,
      features: ["Pressure management", "Automatic control", "Compact design", "Reliable service"]
    },
    {
      title: "Utility Applications",
      description: "Municipal and utility applications requiring compact control",
      icon: <Users className="w-6 h-6" />,
      features: ["Public infrastructure", "Reliable service", "Easy maintenance", "Cost optimized"]
    }
  ];

  const benefits = [
    {
      title: "Space Saving",
      description: "50% smaller than conventional controllers",
      impact: "50% Smaller",
      color: "text-green-600"
    },
    {
      title: "Cost Effective",
      description: "Optimized for budget-conscious applications",
      impact: "30% Lower Cost",
      color: "text-blue-600"
    },
    {
      title: "Essential Protection",
      description: "All critical protection features included",
      impact: "100% Protected",
      color: "text-purple-600"
    },
    {
      title: "Easy Maintenance",
      description: "Simplified design for easy maintenance",
      impact: "Quick Service",
      color: "text-orange-600"
    }
  ];

  const compactFeatures = [
    {
      title: "Miniaturized Electronics",
      description: "Advanced miniaturization technology for maximum functionality in minimum space",
      icon: <Cpu className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Essential Controls",
      description: "All critical control functions optimized for space-constrained installations",
      icon: <Settings className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "LED Status Display",
      description: "Clear LED indicators for all important system parameters and alarms",
      icon: <Monitor className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Flexible Mounting",
      description: "Multiple mounting options for versatile installation in any configuration",
      icon: <Maximize2 className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const comparisonData = [
    {
      feature: "Size",
      miniGuru: "Compact - 50% smaller",
      standard: "Standard industrial size"
    },
    {
      feature: "Cost",
      miniGuru: "Budget optimized",
      standard: "Full-featured pricing"
    },
    {
      feature: "Installation",
      miniGuru: "Quick & easy",
      standard: "Professional installation"
    },
    {
      feature: "Features",
      miniGuru: "Essential functions",
      standard: "Comprehensive features"
    },
    {
      feature: "Applications",
      miniGuru: "Small to medium pumps",
      standard: "Industrial heavy-duty"
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
            <span>PumpGuru</span> <span className="mx-2">›</span> <span>3 Phase Mini Guru</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-green-600 text-green-600">Compact Three Phase Solution</Badge>
          <h1 className="text-4xl md:text-6xl mb-6 text-green-600">3 PHASE MINI GURU</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Miniaturized three-phase controller with essential smart features designed for space-constrained applications and budget-conscious projects
          </p>
        </div>

        {/* Hero Product Image & Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-gray-50 p-8 rounded-2xl shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-green-100 rounded-xl mr-4">
                    <Minimize2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl text-gray-800">Compact Smart Control</h2>
                    <p className="text-green-600">Compact Three Phase Solution</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 mb-8">
                  <p>
                    The 3 Phase Mini Guru brings essential smart pump control features in a compact, 
                    cost-effective package perfect for space-constrained installations and budget-conscious projects.
                  </p>
                  <p>
                    Despite its miniaturized design, it includes all critical three-phase control functions, 
                    basic protection features, and intelligent monitoring capabilities.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-green-600 mb-1">50%</div>
                    <div className="text-sm text-gray-600">Smaller Size</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-blue-600 mb-1">15HP</div>
                    <div className="text-sm text-gray-600">Max Motor</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl text-purple-600 mb-1">IP54</div>
                    <div className="text-sm text-gray-600">Protection</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={() => {
                      alert("3 Phase Mini Guru PDF will be available for download");
                    }}
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Download Product PDF
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
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
                  alt="3 Phase Mini Guru - Compact three-phase controller with essential smart features for space-constrained applications"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-green-600 text-lg mb-1">📦 Compact Solution</p>
                      <p className="text-gray-800 text-xl">3 Phase Mini Guru</p>
                      <p className="text-gray-600 text-sm">Essential features in a space-saving design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Product Gallery & Compact Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1695175898289-9ec8b25af346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwZWxlY3RyaWNhbCUyMGNvbnRyb2xsZXIlMjBkZXZpY2V8ZW58MXx8fHwxNzU5MDQ5NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Compact electrical controller device installation"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Compact Installation</h4>
                    <p className="text-sm text-green-200">Space-saving design</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1743862558369-5dcea79ccbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGVsZWN0cm9uaWMlMjBjb250cm9sJTIwcGFuZWx8ZW58MXx8fHwxNzU5MDQ5NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Small electronic control panel setup"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Control Panel</h4>
                    <p className="text-sm text-green-200">Essential features compact</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={pumpGuruImage}
                  alt="3 Phase Mini Guru compact controller unit"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg mb-1">Mini Guru Unit</h4>
                    <p className="text-sm text-green-200">Miniaturized controller</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Compact Design Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-green-100 rounded-full inline-block mb-4">
                    <div className="text-green-600">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Compact Features Showcase */}
        <section className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
          <h2 className="text-3xl text-center mb-12">Miniaturization Technology</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compactFeatures.map((feature, index) => (
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

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Mini Guru vs Standard Controller</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-600 text-white p-6">
                  <h3 className="text-2xl mb-2">Feature Comparison</h3>
                  <p className="text-green-100">Choose the right solution for your application</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-4">Feature</th>
                          <th className="text-center py-3 px-4 text-green-600">Mini Guru</th>
                          <th className="text-center py-3 px-4 text-blue-600">Standard Controller</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium">{row.feature}</td>
                            <td className="py-3 px-4 text-center text-green-600">{row.miniGuru}</td>
                            <td className="py-3 px-4 text-center text-blue-600">{row.standard}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Technical Specifications</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-green-600 text-white p-6">
                  <h3 className="text-2xl mb-2">3 Phase Mini Guru</h3>
                  <p className="text-green-100">Compact controller specifications</p>
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
          <h2 className="text-3xl text-center mb-12">Ideal Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-green-100 rounded-lg mr-4">
                      <div className="text-green-600">{app.icon}</div>
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
          <h2 className="text-3xl text-center mb-12">Compact Solution Benefits</h2>
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
          <div className="bg-white p-8 rounded-xl shadow-lg border border-green-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">Easy Installation & Support</h2>
              <p className="text-xl text-gray-600">
                Simplified installation process and comprehensive support for the Mini Guru
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Wrench className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Quick Installation</h4>
                <p className="text-sm text-gray-600 mb-4">Simplified installation process - DIY friendly with detailed instructions</p>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                  Installation Guide
                </Button>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Activity className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">User Support</h4>
                <p className="text-sm text-gray-600 mb-4">User-friendly design with comprehensive documentation and support</p>
                <Button size="sm" variant="outline" className="border-blue-600 text-blue-600">
                  User Manual
                </Button>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Service & Warranty</h4>
                <p className="text-sm text-gray-600 mb-4">Standard warranty with optional extended service plans</p>
                <Button size="sm" variant="outline" className="border-purple-600 text-purple-600">
                  Warranty Info
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Perfect for Space-Constrained Applications</h2>
          <p className="text-xl mb-6 text-green-100">
            Get all essential three-phase control features in a compact, budget-friendly package.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-green-50"
              onClick={() => {
                alert("3 Phase Mini Guru PDF will be available for download");
              }}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Product Details
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => onNavigate('contact')}
            >
              Get Quote & Pricing
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="text-center">
            <p className="text-green-100 text-sm">
              📦 50% space saving | 💰 Budget optimized | ⚡ All essential features | 🔧 Easy installation
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}