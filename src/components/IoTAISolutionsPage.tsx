import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import iotAiSolutionsImage from 'figma:asset/e4ba74603b289c61f4d9a58c19da6c6916b67530.png';
import { 
  ArrowLeft, 
  Network, 
  Cpu, 
  Cloud, 
  Smartphone, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Droplets,
  Monitor,
  Wifi,
  Settings,
  Database,
  TrendingUp,
  AlertTriangle,
  Factory,
  Building2,
  Eye,
  Lightbulb,
  Play,
  ExternalLink,
  FileText,
  Download
} from "lucide-react";

interface IoTAISolutionsPageProps {
  onNavigate: (page: string) => void;
}

export function IoTAISolutionsPage({ onNavigate }: IoTAISolutionsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: "smart-connectivity-platform",
      name: "Smart Connectivity Platform",
      subtitle: "Universal IoT Integration Hub",
      description: "Comprehensive IoT platform enabling seamless device connectivity across multiple protocols with AI-driven analytics",
      features: ["Multi-protocol support", "Device management", "Real-time monitoring", "Cloud integration", "Edge computing"],
      applications: ["Smart cities", "Industrial automation", "Building management", "Energy monitoring"],
      benefits: ["Unified device control", "Scalable architecture", "Reduced complexity", "Future-ready integration"],
      specifications: {
        "Protocols Supported": "MQTT, HTTP, CoAP, LoRaWAN, Zigbee, WiFi",
        "Edge Processing": "ARM Cortex-A72 quad-core",
        "Storage": "64GB eMMC, MicroSD expansion",
        "Connectivity": "Ethernet, WiFi 6, 4G/5G optional",
        "Operating Temp": "-20°C to +70°C"
      }
    },
    {
      id: "ai-analytics-engine",
      name: "AI Analytics Engine",
      subtitle: "Intelligent Data Processing",
      description: "Advanced machine learning platform for predictive analytics, anomaly detection, and intelligent automation",
      features: ["Machine learning algorithms", "Predictive analytics", "Anomaly detection", "Real-time processing", "Custom model training"],
      applications: ["Predictive maintenance", "Quality control", "Energy optimization", "Process automation"],
      benefits: ["Prevent downtime", "Improve efficiency", "Reduce costs", "Data-driven decisions"],
      specifications: {
        "AI Framework": "TensorFlow, PyTorch compatibility",
        "Processing Power": "NVIDIA Jetson or equivalent",
        "Data Pipeline": "Real-time streaming analytics",
        "API Integration": "RESTful APIs, GraphQL",
        "Deployment": "Cloud, edge, hybrid options"
      }
    },
    {
      id: "edge-computing-gateway",
      name: "Edge Computing Gateway",
      subtitle: "Local Processing & Control",
      description: "Industrial-grade edge computing device for local data processing, reduced latency, and autonomous operations",
      features: ["Local data processing", "Real-time control", "Offline capability", "Secure communication", "Modular design"],
      applications: ["Manufacturing control", "Remote monitoring", "Autonomous systems", "Critical infrastructure"],
      benefits: ["Low latency", "Reduced bandwidth", "Enhanced security", "Reliable operation"],
      specifications: {
        "Processor": "Intel Core i5/i7 or ARM equivalent",
        "RAM": "8GB-32GB DDR4",
        "Storage": "256GB-2TB SSD",
        "I/O Ports": "USB 3.0, Serial, Ethernet, GPIO",
        "Enclosure": "IP65 rated, fanless design"
      }
    },
    {
      id: "cloud-integration-platform",
      name: "Cloud Integration Platform",
      subtitle: "Scalable Cloud Solutions",
      description: "Enterprise cloud platform for data storage, processing, visualization, and remote management of IoT ecosystems",
      features: ["Scalable architecture", "Data visualization", "Remote management", "API gateway", "Multi-tenant support"],
      applications: ["Enterprise IoT", "Fleet management", "Asset tracking", "Environmental monitoring"],
      benefits: ["Global accessibility", "Infinite scalability", "Cost optimization", "Enterprise security"],
      specifications: {
        "Cloud Infrastructure": "AWS, Azure, Google Cloud",
        "Database": "MongoDB, PostgreSQL, InfluxDB",
        "Security": "OAuth 2.0, JWT, SSL/TLS",
        "Scalability": "Auto-scaling containers",
        "SLA": "99.9% uptime guarantee"
      }
    },
    {
      id: "intelligent-sensors-network",
      name: "Intelligent Sensors Network",
      subtitle: "Smart Sensor Ecosystem",
      description: "Advanced sensor network with built-in intelligence, wireless connectivity, and self-configuring capabilities",
      features: ["Smart sensors", "Wireless mesh networking", "Self-configuration", "Battery optimization", "Environmental adaptation"],
      applications: ["Environmental monitoring", "Asset tracking", "Safety systems", "Agriculture monitoring"],
      benefits: ["Easy deployment", "Long battery life", "Adaptive operation", "Comprehensive monitoring"],
      specifications: {
        "Sensor Types": "Temperature, humidity, pressure, vibration, gas",
        "Communication": "LoRaWAN, Zigbee 3.0, WiFi",
        "Battery Life": "5-10 years (lithium battery)",
        "Range": "Up to 15km (LoRaWAN)",
        "Protection": "IP67 waterproof rating"
      }
    }
  ];

  // Function to get product-specific images
  const getProductImages = (productId: string) => {
    const productImageData: { [key: string]: Array<{url: string, alt: string, caption: string}> } = {
      'smart-connectivity-platform': [
        {
          url: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBjb25uZWN0aXZpdHklMjBwbGF0Zm9ybSUyMHNtYXJ0JTIwZGV2aWNlc3xlbnwxfHx8fDE3NTkwNTA5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "IoT connectivity platform dashboard",
          caption: "Universal device management hub"
        },
        {
          url: "https://images.unsplash.com/photo-1485796826113-174aa68fd81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBkZXZpY2VzJTIwbmV0d29yayUyMGNvbm5lY3RlZHxlbnwxfHx8fDE3NTkwNTA5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Connected IoT devices network",
          caption: "Multi-protocol device integration"
        },
        {
          url: iotAiSolutionsImage,
          alt: "Smart connectivity platform interface",
          caption: "Unified platform control"
        }
      ],
      'ai-analytics-engine': [
        {
          url: "https://images.unsplash.com/photo-1551808525-51a94da548ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFuYWx5dGljcyUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc1OTA1MDk3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "AI analytics data visualization",
          caption: "Advanced data analytics dashboard"
        },
        {
          url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBwcmVkaWN0aXZlJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1OTA1MDk3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Machine learning predictive analytics",
          caption: "Real-time ML processing"
        },
        {
          url: iotAiSolutionsImage,
          alt: "AI analytics engine interface",
          caption: "Intelligent data processing"
        }
      ],
      'edge-computing-gateway': [
        {
          url: "https://images.unsplash.com/photo-1581090126886-d5ed34c4c009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGdlJTIwY29tcHV0aW5nJTIwaW5kdXN0cmlhbCUyMGdhdGV3YXl8ZW58MXx8fHwxNzU5MDUwOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Industrial edge computing gateway",
          caption: "Rugged edge computing unit"
        },
        {
          url: "https://images.unsplash.com/photo-1674717770020-48d859d5cc22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGdlJTIwZGV2aWNlJTIwaW5kdXN0cmlhbCUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzU5MDUwOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Edge device industrial automation",
          caption: "Local processing and control"
        },
        {
          url: iotAiSolutionsImage,
          alt: "Edge computing gateway system",
          caption: "Edge intelligence platform"
        }
      ],
      'cloud-integration-platform': [
        {
          url: "https://images.unsplash.com/photo-1560005072-a19e1c9cb6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzU5MDUwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Cloud computing data center",
          caption: "Scalable cloud infrastructure"
        },
        {
          url: "https://images.unsplash.com/photo-1508921188216-4c1dc99c5b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNlcnZpY2VzJTIwZGFzaGJvYXJkJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NTkwNTA5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Cloud services monitoring dashboard",
          caption: "Remote management interface"
        },
        {
          url: iotAiSolutionsImage,
          alt: "Cloud integration platform",
          caption: "Enterprise cloud solution"
        }
      ],
      'intelligent-sensors-network': [
        {
          url: "https://images.unsplash.com/photo-1651060489229-9e6ce92b4a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjBzZW5zb3JzJTIwd2lyZWxlc3MlMjBuZXR3b3JrfGVufDF8fHx8MTc1OTA1MDk5OXww&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "IoT sensors wireless network",
          caption: "Smart sensor deployment"
        },
        {
          url: "https://images.unsplash.com/photo-1518101415773-df0d0a5c86f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwbW9uaXRvcmluZyUyMHNlbnNvcnN8ZW58MXx8fHwxNzU5MDUxMDAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
          alt: "Environmental monitoring sensors",
          caption: "Intelligent sensing network"
        },
        {
          url: iotAiSolutionsImage,
          alt: "Intelligent sensors network system",
          caption: "Advanced sensor ecosystem"
        }
      ]
    };

    return productImageData[productId] || [
      {
        url: iotAiSolutionsImage,
        alt: "IoT AI solution",
        caption: "Smart IoT platform"
      }
    ];
  };

  const systemFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms provide predictive insights and automated decision-making capabilities"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Universal Connectivity",
      description: "Support for multiple IoT protocols including MQTT, HTTP, LoRaWAN, Zigbee, and WiFi for seamless integration"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud-Edge Hybrid",
      description: "Flexible deployment options combining cloud scalability with edge computing for optimal performance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "End-to-end encryption, secure authentication, and compliance with industry security standards"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring with instant alerts, dashboards, and comprehensive analytics"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Edge Processing",
      description: "Local data processing reduces latency and enables autonomous operations with offline capabilities"
    }
  ];

  const applications = [
    { name: "Smart Cities", icon: <Building2 className="w-6 h-6" />, count: "75+" },
    { name: "Industrial IoT", icon: <Factory className="w-6 h-6" />, count: "150+" },
    { name: "Connected Health", icon: <Users className="w-6 h-6" />, count: "50+" },
    { name: "Agriculture 4.0", icon: <Droplets className="w-6 h-6" />, count: "100+" }
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

        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-indigo-600 text-indigo-600">Smart Connectivity & AI Analytics</Badge>
          <h1 className="text-4xl md:text-6xl mb-6 text-indigo-600">IoT & AI SOLUTIONS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Smart | Scalable | Secure - Comprehensive IoT ecosystem with AI-driven analytics for next-generation business intelligence
          </p>
        </div>

        {/* Hero Product Showcase */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4 text-gray-800">Complete IoT & AI Platform Suite</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From edge computing to cloud analytics - discover our comprehensive ecosystem of intelligent IoT solutions
              </p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              <img
                src={iotAiSolutionsImage}
                alt="IoT AI Solutions platform - Smart, Scalable, Secure ecosystem including connectivity platform, AI analytics, edge computing, cloud integration, and intelligent sensors"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-indigo-600 text-lg mb-1">🚀 Smart | Scalable | Secure</p>
                    <p className="text-gray-800 text-xl">Complete IoT & AI Platform Suite</p>
                    <p className="text-gray-600 text-sm">Advanced connectivity and intelligence for Industry 4.0 transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Range Overview */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">IoT & AI Product Portfolio</h2>
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {products.slice(0, 3).map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-indigo-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600 mr-4">
                      <Network className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-indigo-600">{product.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {products.slice(3).map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-indigo-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600 mr-4">
                      {product.id === 'cloud-integration-platform' ? <Cloud className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-sm text-indigo-600">{product.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* System Features */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Core Platform Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systemFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4 text-indigo-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Industry Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-4 bg-indigo-100 rounded-full w-fit mx-auto mb-4 text-indigo-600">
                    {app.icon}
                  </div>
                  <h3 className="text-lg mb-2">{app.name}</h3>
                  <div className="text-2xl text-indigo-600 mb-1">{app.count}</div>
                  <div className="text-sm text-gray-600">Active Projects</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProduct(null)}>
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {(() => {
                const product = products.find(p => p.id === selectedProduct);
                if (!product) return null;
                const images = getProductImages(product.id);
                
                return (
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-semibold">{product.name}</h2>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedProduct(null)}>
                        ✕
                      </Button>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        {images.map((img, idx) => (
                          <div key={idx} className="relative">
                            <img 
                              src={img.url} 
                              alt={img.alt}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                              {img.caption}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Description</h3>
                          <p className="text-gray-600">{product.description}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                          <div className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Applications</h3>
                          <div className="space-y-2">
                            {product.applications.map((app, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <ArrowRight className="w-4 h-4 text-indigo-500 mr-2" />
                                {app}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Technical Specifications</h3>
                          <div className="space-y-2">
                            {Object.entries(product.specifications).map(([key, value], idx) => (
                              <div key={idx} className="flex justify-between text-sm">
                                <span className="font-medium">{key}:</span>
                                <span className="text-gray-600">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-4">
                          <Button onClick={() => onNavigate('contact')} className="flex-1">
                            Get Quote
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Download Specs
                            <Download className="ml-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Ready to Transform with IoT & AI?</h2>
          <p className="text-xl mb-6 text-white/80">
            Discover how our intelligent IoT ecosystem can revolutionize your operations and drive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-indigo-600"
              onClick={() => onNavigate('contact')}
            >
              <Play className="mr-2 w-5 h-5" />
              Schedule Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-indigo-600"
              onClick={() => onNavigate('contact')}
            >
              <FileText className="mr-2 w-5 h-5" />
              Get Consultation
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}