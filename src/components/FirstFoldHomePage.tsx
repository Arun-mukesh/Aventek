import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import backgroundImage from 'figma:asset/abe7cc34ac0fb07fb9744b134d34cfab61efe977.png';
import reverseVendingImage from 'figma:asset/204fed48274a0ff944b044e033aa7379281cc748.png';
import autoPeopleCountingImage from 'figma:asset/5eb4c0ed640ee49d9d7d6c8584701591b69eda12.png';
import iotAiSolutionsImage from 'figma:asset/e4ba74603b289c61f4d9a58c19da6c6916b67530.png';
import pumpGuruImage from 'figma:asset/3c178118b036d0fb36556d076aa92f08bcfd63ec.png';
import controllersHardwareImage from 'figma:asset/d0ec05a1645528a4f3554b88841581a2e57f5516.png';
import industriesImage from 'figma:asset/5fdfbb7dbe5ee71800575b7ee52596406c5af355.png';

import { 
  ArrowRight, 
  Users, 
  Droplets, 
  Network, 
  Recycle, 
  Play,
  Award,
  TrendingUp,
  Star,
  Building2,
  Factory,
  CheckCircle,
  Lightbulb,
  BarChart3,
  BookOpen,
  Cpu
} from "lucide-react";

interface FirstFoldHomePageProps {
  onNavigate: (page: string) => void;
}

export function FirstFoldHomePage({ onNavigate }: FirstFoldHomePageProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageKey, setImageKey] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate solutions
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % solutions.length);
      setImageKey(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const solutions = [
    {
      id: "pump-guru",
      title: "PumpGuru",
      subtitle: "IoT AI Water Solutions",
      description: "Intelligent water distribution with AI optimization, predictive maintenance, and sustainable water management.",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-blue-800 to-blue-900",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      stats: "40% Water Savings",
      features: ["Smart Distribution", "Predictive Maintenance", "Water Conservation", "Remote Monitoring"],
      image: pumpGuruImage
    },
    {
      id: "controllers-interfaces",
      title: "Interface Relay Boards",
      subtitle: "Custom Hardware Solutions",
      description: "Specialized embedded systems, controllers, and human-machine interfaces designed for complex industrial applications.",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-orange-600 to-orange-700",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      stats: "Industrial Grade",
      features: ["Custom Controllers", "HMI Interfaces", "Multi-protocol Comm", "Ruggedized Hardware"],
      image: controllersHardwareImage
    },
    {
      id: "iot-ai-solutions",
      title: "IoT AI Solutions",
      subtitle: "Smart Connectivity",
      description: "Comprehensive IoT ecosystem with AI-driven analytics, edge computing, and seamless device integration.",
      icon: <Network className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      stats: "Real-time Monitoring",
      features: ["Edge Computing", "AI Analytics", "Scalable Platform", "Secure Connectivity"],
      image: iotAiSolutionsImage
    },
    {
      id: "auto-people-counting",
      title: "Auto People Counting",
      subtitle: "AI-Powered Analytics",
      description: "Advanced computer vision technology for accurate crowd counting and space optimization with real-time analytics.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      stats: "99.5% Accuracy",
      features: ["Real-time Monitoring", "AI Analytics", "Privacy Compliant", "Easy Integration"],
      image: autoPeopleCountingImage
    },
    {
      id: "reverse-vending",
      title: "Plastic Bottle Recycle Machine",
      subtitle: "Smart Recycling Solutions",
      description: "Smart automated recycling systems that incentivize plastic bottle recycling through intelligent collection and reward mechanisms.",
      icon: <Recycle className="w-8 h-8" />,
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      stats: "Eco-Friendly Impact",
      features: ["Automated Recognition", "Digital Rewards", "Real-time Monitoring", "Sustainable Management"],
      image: reverseVendingImage
    }
  ];

  return (
    <div className="min-h-screen">
      {/* First Fold - Compact Homepage */}
      <section 
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* No overlay - full image visibility */}
        <div className="absolute inset-0 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {/* Top Section - Brand Headline */}
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-blue-200 text-blue-700 px-4 py-2 mb-4">
              <Award className="w-4 h-4 mr-2" />
              Trusted by 100+ OEMs | 30+ Years Excellence
            </Badge>

            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-3 leading-tight text-sky-400">
              <span className="text-sky-400">
                SMART
              </span>
              <span className="text-sky-400 mx-1 sm:mx-2">|</span>
              <span className="text-sky-400">
                SUSTAINABLE
              </span>
              <span className="text-sky-400 mx-1 sm:mx-2">|</span>
              <span className="text-sky-400">
                STRATEGIC
              </span>
              <span className="text-sky-400 ml-1 sm:ml-2">SOLUTIONS</span>
            </h1>

            <p className="text-base sm:text-lg text-white mb-6 max-w-2xl mx-auto leading-relaxed">
              Solutions that empower industries with reliability and innovation.
            </p>
          </div>

          {/* Core Solutions Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-6">
              <h2 className="text-2xl lg:text-3xl mb-3 text-sky-400">Our Core Solutions</h2>
              <p className="text-white max-w-xl mx-auto text-sm">
                Comprehensive automation technologies designed to transform your operations
              </p>
            </div>

            {/* Solution Selection Tabs */}
            <div className="flex flex-nowrap justify-center gap-2 mb-6 overflow-x-auto px-4">
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  onClick={() => {
                    setActiveTab(index);
                    setImageKey(prev => prev + 1);
                  }}
                  className={`flex items-center px-3 py-2.5 rounded-xl transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeTab === index
                      ? 'bg-white shadow-lg text-slate-800 scale-105 border-2 border-sky-400'
                      : 'bg-white/80 text-slate-700 hover:bg-white hover:scale-102 border-2 border-transparent'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg mr-2 ${
                    activeTab === index ? solution.iconBg : 'bg-slate-100'
                  }`}>
                    <div className="w-4 h-4 text-slate-700">
                      {solution.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium">{solution.title}</span>
                </button>
              ))}
            </div>

            {/* Main Solution Display - Compact */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/50 mb-8">
              <div className="grid lg:grid-cols-2 gap-0">
                
                {/* Left - Content */}
                <div className="p-6 lg:p-8">
                  <div className={`w-12 h-12 ${solutions[activeTab].iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <div className="text-slate-700">
                      {solutions[activeTab].icon}
                    </div>
                  </div>

                  <h3 className="text-2xl mb-2 text-slate-800">{solutions[activeTab].title}</h3>
                  <p className="text-lg text-blue-600 mb-3">{solutions[activeTab].subtitle}</p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {solutions[activeTab].description}
                  </p>

                  <Badge className="mb-4 bg-blue-50 text-blue-700 px-3 py-1 text-sm">
                    ⚡ {solutions[activeTab].stats}
                  </Badge>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {solutions[activeTab].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      className={`bg-gradient-to-r ${solutions[activeTab].color} text-white hover:opacity-90 px-4 py-2 text-sm`}
                      onClick={() => onNavigate(solutions[activeTab].id)}
                    >
                      <Play className="mr-2 w-4 h-4" />
                      Explore
                    </Button>
                    <Button 
                      variant="outline" 
                      className="px-4 py-2 text-sm"
                      onClick={() => onNavigate('contact')}
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Right - Dynamic Image */}
                <div className="relative overflow-hidden bg-slate-100">
                  <div className="relative h-80 lg:h-full min-h-[400px]">
                    <img
                      key={imageKey} // Force re-mount for smooth transition
                      src={solutions[activeTab].image}
                      alt={solutions[activeTab].title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out animate-in fade-in zoom-in-105"
                    />
                    
                    {/* Overlay with gradient and icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm mb-4`}>
                          <div className={`p-2 rounded-lg mr-3 ${solutions[activeTab].iconBg}`}>
                            <div className="w-4 h-4 text-slate-700">
                              {solutions[activeTab].icon}
                            </div>
                          </div>
                          <span className="text-sm font-medium text-slate-800">{solutions[activeTab].subtitle}</span>
                        </div>
                        
                        <div className="text-white">
                          <div className="text-xl font-medium mb-2">{solutions[activeTab].title}</div>
                          <div className="text-sm opacity-90 leading-relaxed">
                            {solutions[activeTab].description.split('.')[0]}.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-white mb-4">Trusted Excellence Since 1994</h2>
            <p className="text-blue-50 text-lg max-w-2xl mx-auto">
              Three decades of innovation, reliability, and partnership in industrial automation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <div className="text-white mb-3 flex justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <div className="text-4xl text-white mb-2">30+</div>
                <div className="text-blue-50">Years Excellence</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <div className="text-white mb-3 flex justify-center">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-4xl text-white mb-2">100+</div>
                <div className="text-blue-50">Associate Partners</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <div className="text-white mb-3 flex justify-center">
                  <Factory className="w-8 h-8" />
                </div>
                <div className="text-4xl text-white mb-2">500+</div>
                <div className="text-blue-50">Projects Delivered</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                <div className="text-white mb-3 flex justify-center">
                  <Building2 className="w-8 h-8" />
                </div>
                <div className="text-4xl text-white mb-2">15+</div>
                <div className="text-blue-50">Industries Served</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4"
                onClick={() => onNavigate('about')}
              >
                Our Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                onClick={() => onNavigate('innovation')}
              >
                Innovation Story
                <Lightbulb className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6 border-blue-200 text-blue-700">About Aventek</Badge>
              <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">Pioneering Industrial Innovation Since 1994</h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Founded by <span className="text-blue-600 font-semibold">Mr. Nikhil R. Trivedi</span>, ex-Tata Electric R&D, 
                  Aventek has been at the forefront of industrial automation for over three decades, driving digital transformation across industries.
                </p>
                <p>
                  From microprocessor-based systems to AI-driven IoT solutions, we redefine automation with 
                  smart, sustainable, and strategic solutions that empower industries with next-generation technology.
                </p>
                <p>
                  Our commitment to excellence has earned the trust of <span className="text-blue-600 font-semibold">100+ Associates and partners</span> 
                  and delivered successful projects across diverse industrial sectors throughout India.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="text-3xl text-blue-600 mb-2">1994</div>
                  <div className="text-sm text-slate-600">Founded</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="text-3xl text-green-600 mb-2">500+</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <div className="text-3xl text-purple-600 mb-2">15+</div>
                  <div className="text-sm text-slate-600">Industries</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  onClick={() => onNavigate('about')}
                  className="bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  <BookOpen className="mr-2 w-5 h-5" />
                  Our Complete Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate('innovation')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  size="lg"
                >
                  <Lightbulb className="mr-2 w-5 h-5" />
                  Innovation Journey
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTgyNzU0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial automation team collaboration and innovation"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-blue-600 text-sm mb-1">🏆 30+ Years Excellence</p>
                    <p className="text-gray-800 text-lg">Your Trusted Partner</p>
                    <p className="text-gray-600 text-sm">Leading India's digital transformation since 1994</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section - New Enhanced */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-indigo-200 text-indigo-700 px-6 py-2">
              <Lightbulb className="w-4 h-4 mr-2" />
              Innovation & R&D Excellence
            </Badge>
            <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">Driving Tomorrow's Technology Today</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Our dedicated R&D team continuously pushes the boundaries of industrial automation, 
              delivering cutting-edge solutions that define industry standards and drive digital transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced R&D Capabilities</h3>
                    <p className="text-slate-600">
                      State-of-the-art research facilities developing next-generation automation solutions 
                      with AI, IoT, and blockchain integration for Industry 4.0 transformation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customers & Associates Partnerships</h3>
                    <p className="text-slate-600">
                      A collaborative ecosystem with customers and associates across industries, co-creating innovative 
                      solutions that address complex industrial challenges and market demands.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Future-Ready Solutions</h3>
                    <p className="text-slate-600">
                      Pioneering technologies including AI-driven analytics, predictive maintenance, 
                      smart connectivity, and sustainable automation for tomorrow's industries.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <div className="text-3xl text-indigo-600 mb-2">ISO</div>
                  <div className="text-sm text-slate-600">Certifications with limited patent and TM</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                  <div className="text-3xl text-green-600 mb-2">25+</div>
                  <div className="text-sm text-slate-600">R&D Projects</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  onClick={() => onNavigate('innovation')}
                  className="bg-indigo-600 hover:bg-indigo-700"
                  size="lg"
                >
                  <Star className="mr-2 w-5 h-5" />
                  Innovation Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate('contact')}
                  className="border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
                  size="lg"
                >
                  Partnership Opportunities
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl opacity-20 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGRldmVsb3BtZW50JTIwbGFib3JhdG9yeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MDUwNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Advanced R&D laboratory with cutting-edge technology development"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-indigo-600 text-sm mb-1">🚀 Innovation Hub</p>
                    <p className="text-gray-800 text-lg">Advanced R&D Laboratory</p>
                    <p className="text-gray-600 text-sm">Developing next-generation automation solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-blue-100 rounded-2xl inline-block mb-6">
                  <Network className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-4">AI & IoT Integration</h3>
                <p className="text-slate-600 mb-4">
                  Pioneering AI-driven IoT solutions for intelligent automation and predictive analytics.
                </p>
                <div className="text-blue-600 flex items-center justify-center">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-green-200">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-green-100 rounded-2xl inline-block mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl mb-4">Sustainable Technology</h3>
                <p className="text-slate-600 mb-4">
                  Developing eco-friendly automation solutions for sustainable industrial operations.
                </p>
                <div className="text-green-600 flex items-center justify-center">
                  <span className="text-sm">Explore Solutions</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-purple-200">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-purple-100 rounded-2xl inline-block mb-6">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl mb-4">Industry Recognition</h3>
                <p className="text-slate-600 mb-4">
                  Award-winning innovations recognized by industry leaders and technology councils.
                </p>
                <div className="text-purple-600 flex items-center justify-center">
                  <span className="text-sm">View Awards</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={industriesImage}
            alt="Industries technology background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 to-blue-50/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transforming operations across diverse sectors with cutting-edge automation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Manufacturing", icon: <Factory className="w-8 h-8" />, count: "200+" },
              { name: "Pumping Station", icon: <Droplets className="w-8 h-8" />, count: "100+" },
              { name: "Infra Projects", icon: <Building2 className="w-8 h-8" />, count: "100+" },
              { name: "Agriculture", icon: <CheckCircle className="w-8 h-8" />, count: "150+" }
            ].map((industry, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl mb-2">{industry.name}</h3>
                  <div className="text-3xl text-blue-600 mb-2">{industry.count}</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => onNavigate('industries')} size="lg">
              View All Industries
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-6 py-2">OUR CLIENTS</Badge>
            <h2 className="text-4xl lg:text-5xl mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Partnering with leading organizations across manufacturing, retail, infrastructure, and technology sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Dorf Ketal", industry: "Chemical Solutions" },
              { name: "Tata Group", industry: "Conglomerate" },
              { name: "Reliance", industry: "Industries" },
              { name: "L&T", industry: "Infrastructure" },
              { name: "Mahindra", industry: "Manufacturing" },
              { name: "Aditya Birla", industry: "Group" },
              { name: "Godrej", industry: "Industries" },
              { name: "Shoppers Stop", industry: "Retail" },
              { name: "DLF", industry: "Real Estate" },
              { name: "Siemens", industry: "Technology" },
              { name: "Jindal", industry: "Steel & Power" },
              { name: "Bajaj", industry: "Auto & Finance" },
              { name: "Crompton", industry: "Consumer Electrical" },
              { name: "Havells", industry: "Electrical Equipment" },
              { name: "Voltas", industry: "Engineering" }
            ].map((client, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition-colors mb-1">
                    {client.name}
                  </div>
                  <div className="text-xs text-gray-500">{client.industry}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Stats */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="text-5xl text-blue-600 mb-3 font-bold">100+</div>
                <div className="text-gray-700 text-lg font-medium">Active Associates & Partners</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="text-5xl text-green-600 mb-3 font-bold">15+</div>
                <div className="text-gray-700 text-lg font-medium">Industry Sectors</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="text-5xl text-purple-600 mb-3 font-bold">98%</div>
                <div className="text-gray-700 text-lg font-medium">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-slate-300 text-slate-700 px-6 py-2">
              <BarChart3 className="w-4 h-4 mr-2" />
              Industry Intelligence & Insights
            </Badge>
            <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">Empowering Decisions with Data-Driven Insights</h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Stay ahead of industry trends with our comprehensive research, market analysis, and expert insights 
              that guide strategic decisions and drive industrial transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "Market Analysis & Trends", 
                icon: <BarChart3 className="w-8 h-8" />, 
                color: "text-blue-600", 
                bg: "bg-blue-100",
                description: "Comprehensive market research and trend analysis for industrial automation, IoT adoption rates, and emerging technology landscapes.",
                stats: "50+ Reports",
                topics: ["Industry 4.0 Adoption", "IoT Market Growth", "Automation ROI", "Technology Forecasts"]
              },
              { 
                title: "Success Case Studies", 
                icon: <BookOpen className="w-8 h-8" />, 
                color: "text-green-600", 
                bg: "bg-green-100",
                description: "Real-world implementation stories showcasing successful automation projects, challenges overcome, and measurable business impact.",
                stats: "100+ Cases", 
                topics: ["Digital Transformation", "Cost Optimization", "Efficiency Gains", "ROI Achievements"]
              },
              { 
                title: "Technology Trends & Future", 
                icon: <TrendingUp className="w-8 h-8" />, 
                color: "text-purple-600", 
                bg: "bg-purple-100",
                description: "Forward-looking analysis of emerging technologies, innovation roadmaps, and strategic recommendations for future-ready operations.",
                stats: "25+ Predictions",
                topics: ["AI & ML Integration", "Edge Computing", "Blockchain in Industry", "Sustainability Tech"]
              }
            ].map((insight, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group border-2 border-transparent hover:border-slate-200">
                <CardContent className="p-8">
                  <div className={`p-4 ${insight.bg} rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform`}>
                    <div className={insight.color}>
                      {insight.icon}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{insight.title}</h3>
                    <Badge variant="outline" className={`${insight.color} border-current`}>
                      {insight.stats}
                    </Badge>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">{insight.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {insight.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-600">{topic}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`${insight.color} flex items-center group-hover:translate-x-1 transition-transform`}>
                    <span className="font-medium">Explore Insights</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Insights */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Featured Industry Reports</h3>
              <p className="text-slate-600">Latest research and analysis from our industry experts</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Industry 4.0 Readiness Index", type: "Market Report", date: "Dec 2024" },
                { title: "Smart Manufacturing ROI Analysis", type: "Research Study", date: "Nov 2024" },
                { title: "IoT Security Best Practices", type: "White Paper", date: "Oct 2024" },
                { title: "Automation Success Metrics", type: "Case Study", date: "Sep 2024" }
              ].map((report, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                  <Badge variant="outline" className="mb-2 text-xs">{report.type}</Badge>
                  <h4 className="font-medium mb-2 text-sm">{report.title}</h4>
                  <p className="text-xs text-slate-500">{report.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate('insights')} 
                size="lg"
                className="bg-slate-800 hover:bg-slate-900"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                View All Insights & Reports
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => onNavigate('contact')}
                className="border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white"
              >
                Request Custom Research
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}