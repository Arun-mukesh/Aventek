import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Factory, Building2, ShoppingCart, Droplets, Shield } from "lucide-react";
import industriesHeroImage from 'figma:asset/8392b9a8df61d6290b6c5135a07cb772bf2a4aa1.png';

export function IndustriesPage() {
  const industries = [
    {
      title: "Manufacturing & Industrial Plants",
      description: "Smart automation & monitoring solutions for optimized production processes.",
      icon: <Factory className="w-8 h-8" />,
      solutions: [
        "Process automation",
        "Quality control systems",
        "Production monitoring",
        "Equipment maintenance"
      ]
    },
    {
      title: "Smart Cities",
      description: "IoT-based counting & security solutions for modern urban infrastructure.",
      icon: <Building2 className="w-8 h-8" />,
      solutions: [
        "Traffic monitoring",
        "Public safety systems",
        "Smart lighting",
        "Waste management"
      ]
    },
    {
      title: "Retail & Public Spaces",
      description: "AI-driven people counting and space optimization for enhanced customer experience.",
      icon: <ShoppingCart className="w-8 h-8" />,
      solutions: [
        "Footfall analytics",
        "Queue management",
        "Space utilization",
        "Customer behavior insights"
      ]
    },
    {
      title: "Utilities & Water Management",
      description: "Pump Guru systems for intelligent water distribution and management.",
      icon: <Droplets className="w-8 h-8" />,
      solutions: [
        "Water distribution control",
        "Pump optimization",
        "Leak detection",
        "Usage monitoring"
      ]
    },
    {
      title: "Defense & R&D",
      description: "Ruggedized automation hardware for critical applications and research.",
      icon: <Shield className="w-8 h-8" />,
      solutions: [
        "Military-grade systems",
        "Research automation",
        "Data acquisition",
        "Critical infrastructure"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering specialized automation and IoT solutions across diverse industries
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={industriesHeroImage}
              alt="Smart manufacturing facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl md:text-4xl mb-4">Empowering Industries with Innovation</h2>
                <p className="text-xl">From traditional manufacturing to smart cities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
                      {industry.icon}
                    </div>
                    <h3 className="text-lg">{industry.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <div>
                    <h4 className="text-sm mb-3 text-gray-800">Key Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl mb-2">Manufacturing Excellence</h3>
              <p className="text-gray-600">Reduced downtime by 40% for major automotive OEM</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏙️</div>
              <h3 className="text-xl mb-2">Smart City Integration</h3>
              <p className="text-gray-600">Deployed people counting systems across 50+ locations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-xl mb-2">Water Management</h3>
              <p className="text-gray-600">Optimized water distribution for 100,000+ residents</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}