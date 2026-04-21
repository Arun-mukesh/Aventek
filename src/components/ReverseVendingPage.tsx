import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Recycle, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  Smartphone,
  BarChart3,
  Coins,
  Leaf,
  Users,
  Globe,
  Shield
} from "lucide-react";

interface ReverseVendingPageProps {
  onNavigate: (page: string) => void;
}

export function ReverseVendingPage({ onNavigate }: ReverseVendingPageProps) {
  const features = [
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Automated Plastic Recognition",
      description: "Advanced sensors identify and sort different types of plastic bottles automatically",
      color: "text-green-600",
      bg: "bg-green-100"
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Digital Reward System",
      description: "Instant digital rewards and credits for users promoting sustainable recycling habits",
      color: "text-blue-600",
      bg: "bg-blue-100"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Capacity Monitoring",
      description: "IoT sensors track fill levels and trigger automated collection schedules",
      color: "text-purple-600",
      bg: "bg-purple-100"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Smart User Interface",
      description: "Intuitive touchscreen interface with multiple language support",
      color: "text-orange-600",
      bg: "bg-orange-100"
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Impact",
      value: "85%",
      subtitle: "Reduction in plastic waste",
      color: "text-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Engagement",
      value: "90%",
      subtitle: "User retention rate",
      color: "text-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Collection Efficiency",
      value: "95%",
      subtitle: "Automated processing",
      color: "text-purple-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Smart City Integration",
      value: "100%",
      subtitle: "IoT connectivity",
      color: "text-indigo-600"
    }
  ];

  const applications = [
    "Shopping malls and retail centers",
    "Public transportation hubs",
    "Educational institutions",
    "Office complexes and corporate campuses",
    "Municipal waste collection points",
    "Hotels and hospitality venues"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-6 border-green-200 text-green-700 text-lg px-6 py-3">
              <Recycle className="w-5 h-5 mr-2" />
              Smart Recycling Technology
            </Badge>
            <h1 className="text-4xl md:text-5xl mb-6">
              Plastic Bottle Recycle Machine
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform waste management with intelligent recycling systems that incentivize sustainability through automated collection and digital rewards
            </p>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBtYWNoaW5lfGVufDF8fHx8MTc1ODI3NDE1MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Reverse vending machine for plastic bottle recycling"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl">
                <div className="flex items-center justify-center mb-4">
                  <Recycle className="w-16 h-16 mr-4" />
                  <h2 className="text-3xl md:text-4xl">Smart Recycling Revolution</h2>
                </div>
                <p className="text-xl">
                  Empowering communities to create a sustainable future through intelligent waste management
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Key Features & Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 ${feature.bg} rounded-lg`}>
                      <div className={feature.color}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits & Statistics */}
        <section className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
          <h2 className="text-3xl text-center mb-12">Impact & Performance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className={`${benefit.color} mb-4 flex justify-center`}>
                    {benefit.icon}
                  </div>
                  <div className={`text-3xl mb-2 ${benefit.color}`}>
                    {benefit.value}
                  </div>
                  <h3 className="text-lg mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">How It Works</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-600">1</span>
                </div>
                <h3 className="text-xl mb-3">Insert Bottle</h3>
                <p className="text-gray-600">
                  Users insert plastic bottles into the machine through the automated intake system
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-600">2</span>
                </div>
                <h3 className="text-xl mb-3">Smart Recognition</h3>
                <p className="text-gray-600">
                  AI-powered sensors identify, sort, and validate the plastic bottle type and condition
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-purple-600">3</span>
                </div>
                <h3 className="text-xl mb-3">Instant Rewards</h3>
                <p className="text-gray-600">
                  Digital rewards, credits, or vouchers are instantly credited to user accounts
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Perfect Applications</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our reverse vending machines are ideal for high-traffic locations where sustainable waste management makes a significant environmental and social impact.
              </p>
              
              <div className="grid gap-3">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button 
                  onClick={() => onNavigate('contact')}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Get Implementation Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-green-600 to-blue-600 text-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Recycle className="w-16 h-16 mx-auto mb-6 text-white" />
                    <h3 className="text-2xl mb-4">Environmental Impact</h3>
                    <div className="space-y-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-3xl mb-1">1M+</div>
                        <div className="text-green-100">Bottles Recycled</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-3xl mb-1">75%</div>
                        <div className="text-green-100">Waste Reduction</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-3xl mb-1">50+</div>
                        <div className="text-green-100">Active Installations</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl text-center mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-blue-600 mb-2" />
                <h3 className="text-xl">Security Features</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Tamper-proof design</li>
                  <li>• CCTV integration ready</li>
                  <li>• Secure payment processing</li>
                  <li>• Anti-vandalism protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-8 h-8 text-green-600 mb-2" />
                <h3 className="text-xl">Smart Analytics</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Real-time usage monitoring</li>
                  <li>• Predictive maintenance alerts</li>
                  <li>• Collection optimization</li>
                  <li>• Performance reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="w-8 h-8 text-purple-600 mb-2" />
                <h3 className="text-xl">Connectivity</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 4G/WiFi connectivity</li>
                  <li>• Cloud-based management</li>
                  <li>• Mobile app integration</li>
                  <li>• API for third-party systems</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl text-center">
          <h2 className="text-3xl mb-4">Ready to Transform Waste Management?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Join the sustainable revolution with our intelligent reverse vending machines. Create positive environmental impact while engaging your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => onNavigate('contact')}
            >
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-green-600"
              onClick={() => onNavigate('solutions')}
            >
              View All Solutions
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}