import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import pumpGuruImage from 'figma:asset/3c178118b036d0fb36556d076aa92f08bcfd63ec.png';
import { 
  ArrowRight, 
  Droplets, 
  Brain, 
  Gauge, 
  Zap, 
  AlertTriangle, 
  BarChart3, 
  Settings,
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
  FileText
} from "lucide-react";

interface PumpGuruPageProps {
  onNavigate: (page: string) => void;
}

export function PumpGuruPage({ onNavigate }: PumpGuruPageProps) {
  const products = [
    {
      id: "ro-plant-three-phase",
      name: "RO Plant Three Phase",
      subtitle: "Advanced Reverse Osmosis Control",
      description: "Comprehensive three-phase RO plant controller with advanced monitoring and filtration management",
      features: ["Three-phase motor control", "Multi-stage filtration monitoring", "TDS control", "Auto-flush system", "Pressure management"],
      applications: ["Industrial RO plants", "Large commercial installations", "Municipal water treatment", "Manufacturing facilities"],
      benefits: ["99% water purity", "Automated operations", "Energy efficient", "Remote monitoring"],
      specifications: {
        "Power Supply": "Three Phase 415V",
        "Display": "7-inch HMI touchscreen",
        "Control Type": "Microprocessor based",
        "Communication": "RS485, Ethernet, WiFi",
        "Protection": "IP65 rated enclosure"
      }
    },
    {
      id: "pumpguru-standard",
      name: "PumpGuru Standard",
      subtitle: "Smart Pump Controller",
      description: "Intelligent pump control system with AI optimization and predictive maintenance capabilities",
      features: ["AI-driven optimization", "Predictive maintenance", "Energy efficiency", "Remote monitoring", "Smart scheduling"],
      applications: ["Water supply systems", "Irrigation networks", "Building automation", "Industrial processes"],
      benefits: ["30% energy savings", "Reduced maintenance", "24/7 monitoring", "Optimal performance"],
      specifications: {
        "Power Supply": "Single/Three Phase",
        "Display": "5-inch color display",
        "Control Algorithm": "AI-based optimization",
        "Connectivity": "IoT enabled",
        "Sensors": "Pressure, flow, temperature"
      }
    },
    {
      id: "three-phase-controller",
      name: "Three Phase Controller",
      subtitle: "Heavy Duty Pump Control",
      description: "Robust three-phase pump controller designed for heavy-duty industrial applications",
      features: ["Heavy-duty motor control", "Overload protection", "Phase monitoring", "Soft start", "Variable speed control"],
      applications: ["Industrial pumps", "Heavy machinery", "Large irrigation systems", "Mining operations"],
      benefits: ["Reliable operation", "Motor protection", "Extended equipment life", "Reduced downtime"],
      specifications: {
        "Motor Rating": "Up to 100 HP",
        "Protection": "Overload, phase loss, dry run",
        "Control Mode": "DOL, Star-Delta, VFD",
        "Enclosure": "MS powder coated",
        "Standards": "IS/IEC compliant"
      }
    },
    {
      id: "single-phase-controller",
      name: "Single Phase Controller",
      subtitle: "Compact Smart Control",
      description: "Compact single-phase controller ideal for residential and small commercial applications",
      features: ["Compact design", "Easy installation", "Digital display", "Auto restart", "Dry run protection"],
      applications: ["Residential pumps", "Small commercial buildings", "Domestic water systems", "Garden irrigation"],
      benefits: ["Cost effective", "User friendly", "Reliable protection", "Energy efficient"],
      specifications: {
        "Power Supply": "Single Phase 230V",
        "Motor Rating": "Up to 5 HP",
        "Display": "LED/LCD display",
        "Protection": "Dry run, overload",
        "Installation": "Wall mounting"
      }
    },
    {
      id: "mini-guru",
      name: "3 Phase Mini Guru",
      subtitle: "Compact Three Phase Solution",
      description: "Miniaturized three-phase controller with essential smart features for space-constrained applications",
      features: ["Compact design", "Essential controls", "Digital indicators", "Phase monitoring", "Manual override"],
      applications: ["Small industrial pumps", "Commercial buildings", "Boosting systems", "Utility applications"],
      benefits: ["Space saving", "Cost effective", "Essential protection", "Easy maintenance"],
      specifications: {
        "Power Supply": "Three Phase 415V",
        "Size": "Compact form factor",
        "Controls": "Start/Stop with indicators",
        "Protection": "Basic phase and overload",
        "Mounting": "Panel/wall mount"
      }
    }
  ];

  // Function to get product-specific images
  const getProductImages = (productId: string) => {
    const productImageData: { [key: string]: Array<{url: string, alt: string, caption: string}> } = {
      'ro-plant-three-phase': [
        {
          url: "https://images.unsplash.com/photo-1564605504543-1833fef7c1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmV2ZXJzZSUyMG9zbW9zaXMlMjB3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50fGVufDF8fHx8MTc1OTA0OTQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Industrial RO plant facility",
          caption: "Large-scale RO treatment plant"
        },
        {
          url: "https://images.unsplash.com/photo-1655039353512-ab38d6a37a92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjBmaWx0cmF0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc1OTA0OTQ3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Water filtration system",
          caption: "Multi-stage filtration setup"
        },
        {
          url: pumpGuruImage,
          alt: "RO Plant Three Phase controller unit",
          caption: "Advanced control system"
        }
      ],
      'pumpguru-standard': [
        {
          url: "https://images.unsplash.com/photo-1604172808131-ba87ab41474c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGVyJTIwbW9uaXRvcmluZyUyMHN5c3RlbXxlbnwxfHx8fDE3NTkwNTAxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Smart water monitoring system",
          caption: "IoT monitoring dashboard"
        },
        {
          url: "https://images.unsplash.com/photo-1650530224334-476083f65bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjB0cmVhdG1lbnQlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NTkwNTAwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Water pump control installation",
          caption: "Professional installation"
        },
        {
          url: pumpGuruImage,
          alt: "PumpGuru Standard controller",
          caption: "Smart pump controller"
        }
      ],
      'three-phase-controller': [
        {
          url: "https://images.unsplash.com/photo-1570086625762-7c1396540ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHVtcCUyMGNvbnRyb2wlMjBwYW5lbCUyMGVsZWN0cmljYWx8ZW58MXx8fHwxNzU5MDQ5NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Industrial control panel",
          caption: "Heavy-duty control panel"
        },
        {
          url: "https://images.unsplash.com/photo-1563456019560-2b37aa7ad890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMGNhYmluZXQlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc1OTA0OTQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Electrical control cabinet",
          caption: "Industrial control cabinet"
        },
        {
          url: pumpGuruImage,
          alt: "Three Phase controller unit",
          caption: "Three-phase motor control"
        }
      ],
      'single-phase-controller': [
        {
          url: "https://images.unsplash.com/photo-1610312973684-e47446aa260b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nbGUlMjBwaGFzZSUyMHB1bXAlMjBjb250cm9sbGVyJTIwcmVzaWRlbnRpYWx8ZW58MXx8fHwxNzU5MDQ5NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Residential pump installation",
          caption: "Home water system"
        },
        {
          url: "https://images.unsplash.com/photo-1685475188388-2a266e6bd5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBpcnJpZ2F0aW9uJTIwY29udHJvbCUyMHBhbmVsfGVufDF8fHx8MTc1OTA1MDEwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Automated irrigation panel",
          caption: "Irrigation control system"
        },
        {
          url: pumpGuruImage,
          alt: "Single Phase controller",
          caption: "Compact controller unit"
        }
      ],
      'mini-guru': [
        {
          url: "https://images.unsplash.com/photo-1695175898289-9ec8b25af346?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwZWxlY3RyaWNhbCUyMGNvbnRyb2xsZXIlMjBkZXZpY2V8ZW58MXx8fHwxNzU5MDQ5NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Compact controller device",
          caption: "Space-saving design"
        },
        {
          url: "https://images.unsplash.com/photo-1743862558369-5dcea79ccbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGVsZWN0cm9uaWMlMjBjb250cm9sJTIwcGFuZWx8ZW58MXx8fHwxNTU5MDQ5NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Small control panel",
          caption: "Essential controls"
        },
        {
          url: pumpGuruImage,
          alt: "Mini Guru controller",
          caption: "Miniaturized solution"
        }
      ]
    };

    return productImageData[productId] || [
      {
        url: pumpGuruImage,
        alt: "PumpGuru controller",
        caption: "Smart controller unit"
      }
    ];
  };

  const systemFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Optimization",
      description: "Machine learning algorithms optimize pump operations for maximum efficiency and water conservation"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of pressure, flow rates, energy consumption, and system performance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Efficiency",
      description: "Reduce energy consumption by up to 30% through intelligent control and optimization algorithms"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Predictive Maintenance",
      description: "Early detection of issues to prevent costly breakdowns and extend equipment lifespan"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "IoT Connectivity",
      description: "Remote monitoring and control capabilities with smartphone and web applications"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Protection",
      description: "Comprehensive protection against dry run, overload, phase loss, and voltage fluctuations"
    }
  ];

  const applications = [
    { name: "Municipal Water Supply", icon: <Building2 className="w-6 h-6" />, count: "150+" },
    { name: "Industrial Processing", icon: <Factory className="w-6 h-6" />, count: "200+" },
    { name: "Agricultural Irrigation", icon: <Droplets className="w-6 h-6" />, count: "300+" },
    { name: "Commercial Buildings", icon: <Users className="w-6 h-6" />, count: "100+" }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blue-600 text-blue-600">IoT & AI Water Solutions</Badge>
          <h1 className="text-4xl md:text-6xl mb-6 text-blue-600">PUMP GURU</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Small | Efficient | Economical - Complete range of intelligent pump controllers and water management solutions
          </p>
        </div>

        {/* Hero Product Showcase */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4 text-gray-800">Complete PumpGuru Product Range</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From RO plants to single-phase controllers - discover our comprehensive collection of intelligent pump control solutions
              </p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              <img
                src={pumpGuruImage}
                alt="PumpGuru complete product range - Small, Efficient, Economical solutions including RO Plant, Three Phase controllers, Single Phase controllers, and Mini Guru systems"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-blue-600 text-lg mb-1">🏆 Small | Efficient | Economical</p>
                    <p className="text-gray-800 text-xl">Complete PumpGuru Product Range</p>
                    <p className="text-gray-600 text-sm">Advanced digital displays with intelligent control for every application</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Range Overview */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Product Range Overview</h2>
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="text-center p-6 border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2">Industrial Grade</h3>
              <p className="text-gray-600 text-sm">RO Plants & Three Phase Controllers for heavy-duty applications</p>
            </Card>
            
            <Card className="text-center p-6 border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl mb-2">Commercial Solutions</h3>
              <p className="text-gray-600 text-sm">PumpGuru Standard for commercial buildings and facilities</p>
            </Card>
            
            <Card className="text-center p-6 border-purple-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl mb-2">Residential Range</h3>
              <p className="text-gray-600 text-sm">Single Phase Controllers and Mini Guru for homes and small applications</p>
            </Card>
          </div>
        </section>

        {/* Complete Product Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Complete Product Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Industrial Solutions Gallery */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1646295669679-40930dff242e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2F0ZXIlMjB0cmVhdG1lbnQlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NTkwNTAwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Industrial water treatment facility"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-lg mb-1">Industrial Solutions</h4>
                    <p className="text-blue-200 text-sm">Heavy-duty RO plants & controllers</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Smart Monitoring Gallery */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1604172808131-ba87ab41474c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHdhdGVyJTIwbW9uaXRvcmluZyUyMHN5c3RlbXxlbnwxfHx8fDE3NTkwNTAxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Smart water monitoring system"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-lg mb-1">Smart Monitoring</h4>
                    <p className="text-green-200 text-sm">IoT AI water management</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Control Systems Gallery */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1650530224334-476083f65bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHB1bXAlMjBjb250cm9sJTIwc3lzdGVtJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc1OTA1MDA5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Water pump control system installation"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-lg mb-1">Control Systems</h4>
                    <p className="text-purple-200 text-sm">Advanced pump control</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Automation Gallery */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1685475188388-2a266e6bd5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0ZWQlMjBpcnJpZ2F0aW9uJTIwY29udHJvbCUyMHBhbmVsfGVufDF8fHx8MTc1OTA1MDEwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Automated irrigation control panel"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-lg mb-1">Automation</h4>
                    <p className="text-orange-200 text-sm">Smart irrigation & control</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Gallery Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl text-blue-600 mb-1">5+</div>
              <div className="text-sm text-gray-600">Product Variants</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl text-green-600 mb-1">100+</div>
              <div className="text-sm text-gray-600">Installations</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl text-purple-600 mb-1">30%</div>
              <div className="text-sm text-gray-600">Energy Savings</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl text-orange-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Smart Monitoring</div>
            </div>
          </div>
        </section>

        {/* Individual Products */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Individual Product Details</h2>
          <div className="space-y-12">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Product Information */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-blue-100 rounded-xl mr-4">
                          <Cpu className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl text-gray-800">{product.name}</h3>
                          <p className="text-blue-600">{product.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6">{product.description}</p>

                      {/* Product Gallery */}
                      <div className="mb-8">
                        <h4 className="text-lg mb-4 text-gray-800">Product Gallery</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {getProductImages(product.id).map((image, imgIdx) => (
                            <div key={imgIdx} className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                              <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-2 left-2 right-2">
                                  <p className="text-white text-xs truncate">{image.caption}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg mb-3 text-gray-800">Key Features</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Specifications */}
                      <div className="mb-6">
                        <h4 className="text-lg mb-3 text-gray-800">Specifications</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between py-1 text-sm">
                              <span className="text-gray-600">{key}:</span>
                              <span className="text-gray-800">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => {
                            // Navigate to individual product page
                            const productRoutes: { [key: string]: string } = {
                              'ro-plant-three-phase': 'ro-plant-three-phase',
                              'three-phase-controller': 'three-phase-controller',
                              'single-phase-controller': 'single-phase-controller',
                              'three-phase-mini-guru': 'three-phase-mini-guru',
                              'mini-guru': 'three-phase-mini-guru'
                            };
                            const route = productRoutes[product.id];
                            if (route) {
                              onNavigate(route);
                            } else {
                              alert(`${product.name} PDF will be available for download`);
                            }
                          }}
                        >
                          <Play className="mr-2 w-4 h-4" />
                          View Details
                        </Button>
                        <Button 
                          variant="outline"
                          className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                          onClick={() => {
                            alert(`${product.name} PDF will be available for download`);
                          }}
                        >
                          <Download className="mr-2 w-4 h-4" />
                          Download PDF
                        </Button>
                      </div>
                    </div>

                    {/* Product Benefits & Applications */}
                    <div className={`bg-gradient-to-br from-blue-50 to-gray-50 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                      <div className="mb-8">
                        <h4 className="text-lg mb-4 text-blue-600">Benefits</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {product.benefits.map((benefit, idx) => (
                            <div key={idx} className="text-center p-3 bg-white rounded-lg shadow-sm">
                              <div className="text-sm text-gray-600">{benefit}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg mb-4 text-blue-600">Applications</h4>
                        <div className="space-y-2">
                          {product.applications.map((app, idx) => (
                            <div key={idx} className="flex items-center p-2 bg-white rounded text-sm">
                              <Droplets className="w-4 h-4 text-blue-500 mr-2" />
                              <span className="text-gray-700">{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* System Features */}
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl">
          <h2 className="text-3xl text-center mb-12">Advanced System Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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

        {/* Applications Overview */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Applications Across Industries</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {app.icon}
                  </div>
                  <h3 className="text-lg mb-2">{app.name}</h3>
                  <div className="text-2xl text-blue-600 mb-1">{app.count}</div>
                  <div className="text-sm text-gray-600">Installations</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Individual Product Links */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Explore Individual Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Factory className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">RO Plant Three Phase</h3>
                <p className="text-gray-600 mb-4 text-sm">Advanced Reverse Osmosis Control with comprehensive water treatment automation</p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                  onClick={() => onNavigate('ro-plant-three-phase')}
                >
                  <Play className="mr-2 w-4 h-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl mb-3">Three Phase Controller</h3>
                <p className="text-gray-600 mb-4 text-sm">Heavy Duty Pump Control for industrial applications up to 100 HP</p>
                <Button 
                  className="bg-red-600 hover:bg-red-700 w-full"
                  onClick={() => onNavigate('three-phase-controller')}
                >
                  <Play className="mr-2 w-4 h-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl mb-3">Single Phase Controller</h3>
                <p className="text-gray-600 mb-4 text-sm">Compact Smart Control for residential and small commercial applications</p>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 w-full"
                  onClick={() => onNavigate('single-phase-controller')}
                >
                  <Play className="mr-2 w-4 h-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl mb-3">3 Phase Mini Guru</h3>
                <p className="text-gray-600 mb-4 text-sm">Compact Three Phase Solution for space-constrained applications</p>
                <Button 
                  className="bg-green-600 hover:bg-green-700 w-full"
                  onClick={() => onNavigate('three-phase-mini-guru')}
                >
                  <Play className="mr-2 w-4 h-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Support & Documentation */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">Complete Product Documentation</h2>
              <p className="text-xl text-gray-600">
                Access detailed specifications, installation guides, and technical documentation for all PumpGuru products
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Product Catalogs</h4>
                <p className="text-sm text-gray-600 mb-4">Comprehensive product specifications and selection guides</p>
                <Button size="sm" variant="outline" className="border-blue-600 text-blue-600">
                  <Download className="mr-2 w-4 h-4" />
                  Download
                </Button>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Settings className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Installation Guides</h4>
                <p className="text-sm text-gray-600 mb-4">Step-by-step installation and configuration manuals</p>
                <Button size="sm" variant="outline" className="border-green-600 text-green-600">
                  <Download className="mr-2 w-4 h-4" />
                  Download
                </Button>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="text-lg mb-2">Technical Support</h4>
                <p className="text-sm text-gray-600 mb-4">Troubleshooting guides and technical support documentation</p>
                <Button size="sm" variant="outline" className="border-purple-600 text-purple-600">
                  <Download className="mr-2 w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Need specific product information or custom solutions?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => onNavigate('contact')}
                >
                  <Play className="mr-2 w-5 h-5" />
                  Request Technical Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('solutions')}
                >
                  Explore All Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Transform Your Water Management Today</h2>
          <p className="text-xl mb-6 text-blue-100">
            Choose from our complete range of PumpGuru solutions - Small, Efficient, and Economical for every application.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">30%</div>
              <div className="text-blue-100">Energy Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">25%</div>
              <div className="text-blue-100">Water Conservation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">90%</div>
              <div className="text-blue-100">Uptime Guaranteed</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => onNavigate('contact')}
            >
              Schedule Product Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => onNavigate('industries')}
            >
              View Applications
              <TrendingUp className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}