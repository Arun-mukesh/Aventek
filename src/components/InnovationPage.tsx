import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Lightbulb, Users, Cpu, Cloud, Wrench, Target, Handshake, TrendingUp, ArrowRight, Award, Globe } from "lucide-react";
import innovationCoreImage from 'figma:asset/9bbbdd2a4eeae6ed5535f7be427756ef13d820fc.png';

export function InnovationPage() {
  const innovations = [
    {
      title: "Pump Guru",
      description: "Intelligent water distribution system with AI optimization and real-time monitoring capabilities.",
      category: "AI Solutions",
      features: [
        "AI-powered optimization",
        "Real-time monitoring",
        "Predictive maintenance",
        "Energy efficiency"
      ]
    },
    {
      title: "Auto People Counting",
      description: "Advanced AI analytics for accurate crowd counting and space utilization optimization.",
      category: "IoT Analytics",
      features: [
        "Computer vision AI",
        "Real-time analytics",
        "Privacy-compliant",
        "Scalable deployment"
      ]
    },
    {
      title: "Plastic Bottle Recycle Machine",
      description: "Smart automated recycling systems that incentivize plastic bottle recycling through intelligent collection and reward mechanisms.",
      category: "Smart Recycling",
      features: [
        "Automated plastic recognition",
        "Digital reward system",
        "Real-time capacity monitoring",
        "Sustainable waste management"
      ]
    },
    {
      title: "Smart Toilets",
      description: "Intelligent restroom solutions with IoT sensors for hygiene monitoring, usage analytics, and automated maintenance alerts.",
      category: "Smart Infrastructure",
      features: [
        "Occupancy detection",
        "Hygiene monitoring",
        "Automated maintenance alerts",
        "Usage analytics dashboard"
      ]
    },
    {
      title: "Water ATM - Smart Drinking Water Dispensing",
      description: "Intelligent water dispensing machines with purification monitoring, contactless payment, and quality assurance systems.",
      category: "Smart Water Solutions",
      features: [
        "Advanced water purification",
        "Contactless payment integration",
        "Real-time quality monitoring",
        "Remote diagnostics & maintenance"
      ]
    },
    {
      title: "Custom Industrial Interfaces",
      description: "Tailored control interfaces designed for specific industrial applications.",
      category: "Hardware",
      features: [
        "Custom design",
        "Ruggedized build",
        "Industry compliance",
        "Easy integration"
      ]
    }
  ];

  const researchAreas = [
    {
      title: "IoT Protocol Development",
      description: "Developing next-generation communication protocols for seamless device connectivity.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Edge & Cloud AI Systems",
      description: "Creating intelligent systems that process data both at the edge and in the cloud.",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Rugged Device Hardware",
      description: "Engineering durable hardware solutions for harsh industrial environments.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Industry-Specific Smart Solutions",
      description: "Tailoring automation solutions for unique industry requirements.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Innovation & OEM Partnership</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering the future of automation through continuous research, development, and strategic OEM collaborations
          </p>
        </div>

        {/* Innovation Hero */}
        <section className="mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden mb-8">
            <img
              src={innovationCoreImage}
              alt="Modern office building illuminated at night representing innovation and technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl">
                <div className="flex items-center justify-center mb-4">
                  <Lightbulb className="w-12 h-12 mr-4" />
                  <h2 className="text-3xl md:text-4xl">Innovation at Our Core</h2>
                </div>
                <p className="text-xl">
                  Transforming ideas into intelligent solutions that shape the future of industry
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Innovations */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Featured Innovations</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{innovation.category}</Badge>
                  </div>
                  <h3 className="text-xl">{innovation.title}</h3>
                  <p className="text-gray-600">{innovation.description}</p>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="text-sm mb-3 text-gray-800">Key Features:</h4>
                    <ul className="space-y-2">
                      {innovation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Research & Development Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
                      {area.icon}
                    </div>
                    <h3 className="text-xl">{area.title}</h3>
                  </div>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* OEM Partnership Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Strategic OEM Partnerships</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Strategic Alliances</h3>
                    <p className="text-gray-600">Building lasting partnerships with 100+ OEMs across diverse industries to drive mutual growth and innovation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Technology Evolution</h3>
                    <p className="text-gray-600">Seamless transition from dedicated controllers to advanced PLC solutions with comprehensive OEM support.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Mutual Success</h3>
                    <p className="text-gray-600">Creating value through collaborative innovation, shared expertise, and long-term strategic partnerships.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-gradient-to-br from-primary/5 to-blue-50 border-none">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Users className="w-16 h-16 mx-auto text-primary mb-4" />
                    <h3 className="text-2xl mb-2">100+ OEM Partners</h3>
                    <p className="text-gray-600">Trusted by leading OEMs across multiple industries</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl text-primary">30+</div>
                      <div className="text-sm text-gray-600">Years Partnership</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl text-primary">15+</div>
                      <div className="text-sm text-gray-600">Industry Verticals</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <blockquote className="text-lg italic text-gray-700 mb-4">
                      "At Aventek, OEMs are our growth partners."
                    </blockquote>
                    <Button variant="outline">
                      Become a Partner
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl text-center mb-12">Partnership Benefits</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg mb-2">Customized Solutions</h3>
                <p className="text-gray-600 text-sm">Tailored automation solutions designed specifically for your industry requirements</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-green-100 rounded-full inline-block mb-4">
                  <Wrench className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg mb-2">Technical Support</h3>
                <p className="text-gray-600 text-sm">Comprehensive technical assistance and ongoing support throughout the project lifecycle</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 rounded-full inline-block mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg mb-2">Market Expansion</h3>
                <p className="text-gray-600 text-sm">Access to new markets and opportunities through our extensive network and expertise</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-purple-100 rounded-full inline-block mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg mb-2">Innovation Access</h3>
                <p className="text-gray-600 text-sm">Early access to our latest innovations and cutting-edge technology developments</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Ready to Innovate Together?</h2>
          <p className="text-xl mb-6 text-primary-foreground/80 max-w-3xl mx-auto">
            Join our network of successful OEM partners and unlock new possibilities for growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Explore Partnership
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View Innovation Portfolio
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}