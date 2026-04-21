import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import exampleImage from 'figma:asset/c29dbda08eae2e688b9d9b0895f4204137ece893.png';
import { Users, Droplets, Network, Shield, ArrowRight, Play, Star, Award, TrendingUp, Lightbulb } from "lucide-react";

interface RefinedHeroBannerProps {
  onNavigate: (page: string) => void;
}

export function RefinedHeroBanner({ onNavigate }: RefinedHeroBannerProps) {
  const [hoveredService, setHoveredService] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      id: "auto-people-counting",
      title: "Auto People Counting",
      subtitle: "AI-Powered Analytics",
      description: "Advanced computer vision technology for accurate crowd counting and space optimization.",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      stats: "99.5% Accuracy"
    },
    {
      id: "pump-guru",
      title: "PumpGuru",
      subtitle: "IoT AI Water Solutions",
      description: "Intelligent water distribution with AI optimization and predictive maintenance.",
      icon: <Droplets className="w-6 h-6" />,
      color: "from-sky-500 to-sky-600",
      bgColor: "bg-sky-50",
      iconBg: "bg-sky-100",
      stats: "40% Water Savings"
    },
    {
      id: "iot-ai-solutions",
      title: "IoT AI Solutions",
      subtitle: "Smart Connectivity",
      description: "Comprehensive IoT ecosystem with AI-driven analytics and edge computing.",
      icon: <Network className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      stats: "Real-time Monitoring"
    },
    {
      id: "security-systems",
      title: "Security & Smart Systems",
      subtitle: "Advanced Protection",
      description: "Multi-protocol rugged hardware for industrial and city security solutions.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      iconBg: "bg-slate-100",
      stats: "24/7 Protection"
    }
  ];

  const achievements = [
    { icon: <Award className="w-5 h-5" />, label: "30+ Years", sublabel: "Excellence" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "100+ OEMs", sublabel: "Partners" },
    { icon: <Star className="w-5 h-5" />, label: "15+ Industries", sublabel: "Served" },
    { icon: <Lightbulb className="w-5 h-5" />, label: "Industry 4.0", sublabel: "Leader" }
  ];

  // Animation trigger
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Auto-rotate solutions
  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50" role="banner">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaW5kdXN0cmlhbCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU4Mjc3MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern industrial technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/90 to-sky-100/85"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Hero Content */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Achievements Badge */}
            <div className="flex justify-center mb-8">
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700 px-6 py-3 text-sm">
                <Award className="w-4 h-4 mr-2" />
                Trusted by 100+ OEMs | 30+ Years of Excellence
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                  SMART
                </span>
                <span className="text-slate-700 mx-2">|</span>
                <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                  SUSTAINABLE
                </span>
                <span className="text-slate-700 mx-2">|</span>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  STRATEGIC
                </span>
                <span className="text-slate-800 ml-3">
                  SOLUTIONS
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Solutions that empower industries with reliability and innovation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-8 py-4 text-lg"
                onClick={() => onNavigate('solutions')}
              >
                <Play className="mr-2 w-5 h-5" />
                Explore Our Solutions
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg"
                onClick={() => onNavigate('contact')}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl text-slate-800 mb-4">Our Core Solutions</h2>
            </div>

            {/* Interactive Solution Tabs */}
            <div className="max-w-6xl mx-auto">
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => setHoveredService(index)}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                      hoveredService === index
                        ? 'bg-white shadow-lg text-slate-800 scale-105'
                        : 'bg-white/60 text-slate-600 hover:bg-white/80 hover:scale-102'
                    }`}
                  >
                    <div className={`p-2 rounded-lg mr-3 ${
                      hoveredService === index ? service.iconBg : 'bg-slate-100'
                    }`}>
                      <div className="w-4 h-4 text-slate-700">
                        {service.icon}
                      </div>
                    </div>
                    <span className="hidden sm:inline">{service.title}</span>
                    <span className="sm:hidden">{service.title.split(' ')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Active Solution Display - Simplified */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-8 lg:p-12 text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${services[hoveredService].iconBg} flex items-center justify-center`}>
                    <div className="w-10 h-10 text-slate-700">
                      {services[hoveredService].icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl mb-2 text-slate-800">{services[hoveredService].title}</h3>
                  <p className="text-blue-600 mb-4">{services[hoveredService].subtitle}</p>
                  <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
                    {services[hoveredService].description}
                  </p>
                  
                  <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700">
                    {services[hoveredService].stats}
                  </Badge>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <Button 
                      className={`bg-gradient-to-r ${services[hoveredService].color} text-white hover:opacity-90`}
                      onClick={() => onNavigate(services[hoveredService].id)}
                    >
                      Explore Solution
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => onNavigate('contact')}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl text-slate-800 mb-8">Why Industry Leaders Choose Aventek</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-blue-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl text-slate-800 mb-1">{achievement.label}</div>
                  <div className="text-sm text-slate-600">{achievement.sublabel}</div>
                </div>
              ))}
            </div>
            
            {/* Client Testimonial */}
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50">
                <p className="text-lg text-slate-700 mb-4 italic">
                  "Aventek's automation solutions have transformed our manufacturing efficiency by 40%. 
                  Their expertise in IoT and AI integration is unmatched in the industry."
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full flex items-center justify-center text-white">
                    A
                  </div>
                  <div>
                    <div className="text-slate-800">Manufacturing Director</div>
                    <div className="text-sm text-slate-600">Leading Automotive OEM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Links */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Quick Access:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => onNavigate('innovation')}
                className="px-4 py-2 bg-white/80 hover:bg-white rounded-full text-sm text-slate-700 hover:text-blue-600 transition-all duration-200 border border-slate-200/50 hover:border-blue-200"
              >
                OEM Partnership
              </button>
              <button
                onClick={() => onNavigate('industries')}
                className="px-4 py-2 bg-white/80 hover:bg-white rounded-full text-sm text-slate-700 hover:text-blue-600 transition-all duration-200 border border-slate-200/50 hover:border-blue-200"
              >
                Industries We Serve
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-4 py-2 bg-white/80 hover:bg-white rounded-full text-sm text-slate-700 hover:text-blue-600 transition-all duration-200 border border-slate-200/50 hover:border-blue-200"
              >
                About Aventek
              </button>
              <button
                onClick={() => onNavigate('insights')}
                className="px-4 py-2 bg-white/80 hover:bg-white rounded-full text-sm text-slate-700 hover:text-blue-600 transition-all duration-200 border border-slate-200/50 hover:border-blue-200"
              >
                Industry Insights
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="flex flex-col items-center text-slate-500">
            <div className="text-xs mb-2">Discover More</div>
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}