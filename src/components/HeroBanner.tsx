import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Droplets, Network, Shield, ArrowRight, Play, ChevronRight, Lightbulb } from "lucide-react";

interface HeroBannerProps {
  onNavigate: (page: string) => void;
}

export function HeroBanner({ onNavigate }: HeroBannerProps) {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      id: "auto-people-counting",
      title: "Auto People Counting",
      subtitle: "AI-Powered Analytics",
      description: "Advanced computer vision technology for accurate crowd counting, space utilization optimization, and intelligent people flow analytics.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-600 to-blue-800",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      keywords: ["people counting", "crowd analytics", "AI vision", "occupancy tracking"]
    },
    {
      id: "pump-guru",
      title: "PumpGuru",
      subtitle: "IoT AI Water Solutions",
      description: "Intelligent water distribution system with AI optimization, predictive maintenance, and real-time monitoring for sustainable water management.",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-sky-500 to-blue-600",
      textColor: "text-sky-600",
      bgColor: "bg-sky-50",
      keywords: ["smart water management", "IoT pumps", "water automation", "predictive maintenance"]
    },
    {
      id: "iot-ai-solutions",
      title: "IoT AI Solutions",
      subtitle: "Smart Connectivity",
      description: "Comprehensive IoT ecosystem with AI-driven analytics, edge computing, and intelligent automation for next-generation smart operations.",
      icon: <Network className="w-8 h-8" />,
      color: "from-indigo-600 to-purple-600",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      keywords: ["IoT solutions", "AI analytics", "smart sensors", "edge computing"]
    },
    {
      id: "security-systems",
      title: "Security & Smart Systems",
      subtitle: "Advanced Protection",
      description: "Multi-protocol rugged hardware for industrial and city security with comprehensive monitoring, access control, and threat detection.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-slate-600 to-slate-800",
      textColor: "text-slate-600",
      bgColor: "bg-slate-50",
      keywords: ["security systems", "industrial protection", "smart surveillance", "access control"]
    }
  ];

  const currentSolution = solutions[activeTab];

  return (
    <section className="relative min-h-[90vh] overflow-hidden" role="banner" aria-label="Aventek Solutions Hero Banner">
      {/* SEO Meta Keywords (would be in head in real implementation) */}
      <div className="sr-only">
        industrial automation, IoT solutions, AI technology, smart systems, PLC programming, 
        people counting, water management, security systems, OEM partnerships, Industry 4.0,
        smart cities, automation solutions, industrial IoT, artificial intelligence, 
        process automation, smart manufacturing, predictive maintenance, edge computing
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYmFja2dyb3VuZCUyMGluZHVzdHJpYWwlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc1ODI3NTc1MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern industrial automation technology background showcasing Aventek's smart solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-900/80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[90vh] flex items-center py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column - Brand & Description */}
            <div className="text-white">
              <header className="mb-6">
                <Badge variant="outline" className="bg-white/10 border-white/30 text-white mb-4 px-4 py-2">
                  30+ Years | 100+ OEMs | Industry 4.0 Leader
                </Badge>
                <h1 className="text-4xl md:text-6xl mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                    SMART
                  </span>
                  <span className="text-white"> | </span>
                  <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                    SUSTAINABLE
                  </span>
                  <span className="text-white"> | </span>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent block">
                    STRATEGIC SOLUTIONS
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
                  Solutions that empower industries with reliability and innovation.
                </p>
              </header>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3"
                  onClick={() => onNavigate(currentSolution.id)}
                >
                  <Play className="mr-2 w-4 h-4" />
                  Explore {currentSolution.title}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white hover:text-slate-900 px-6 py-3"
                  onClick={() => onNavigate('contact')}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              {/* Quick Access Links */}
              <div className="mb-6">
                <div className="text-sm text-blue-200 mb-3 flex items-center">
                  <div className="w-6 h-px bg-blue-400 mr-2"></div>
                  Quick Access
                </div>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                  <button
                    onClick={() => onNavigate('auto-people-counting')}
                    className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-all duration-200 backdrop-blur-sm hover:scale-105"
                  >
                    <Users className="w-4 h-4 mr-2 text-blue-300" />
                    <span className="hidden sm:inline">People Counting</span>
                    <span className="sm:hidden">Counting</span>
                  </button>
                  <button
                    onClick={() => onNavigate('pump-guru')}
                    className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-all duration-200 backdrop-blur-sm hover:scale-105"
                  >
                    <Droplets className="w-4 h-4 mr-2 text-sky-300" />
                    <span className="hidden sm:inline">Water Management</span>
                    <span className="sm:hidden">Water</span>
                  </button>
                  <button
                    onClick={() => onNavigate('security-systems')}
                    className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-all duration-200 backdrop-blur-sm hover:scale-105"
                  >
                    <Shield className="w-4 h-4 mr-2 text-slate-300" />
                    <span className="hidden sm:inline">Security Systems</span>
                    <span className="sm:hidden">Security</span>
                  </button>
                  <button
                    onClick={() => onNavigate('innovation')}
                    className="flex items-center px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm text-white transition-all duration-200 backdrop-blur-sm hover:scale-105"
                  >
                    <Lightbulb className="w-4 h-4 mr-2 text-yellow-300" />
                    <span className="hidden sm:inline">OEM Partnership</span>
                    <span className="sm:hidden">OEM</span>
                  </button>
                </div>
              </div>

              {/* Company Stats - Compact Version */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl mb-1 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">30+</div>
                  <div className="text-blue-200 text-xs">Years Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">100+</div>
                  <div className="text-blue-200 text-xs">OEM Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">15+</div>
                  <div className="text-blue-200 text-xs">Industries</div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Solution Cards */}
            <div className="lg:pl-8">
              {/* Horizontal Solution Tabs */}
              <nav className="mb-6" role="tablist" aria-label="Solution categories">
                <div className="flex flex-wrap gap-2 mb-4">
                  {solutions.map((solution, index) => (
                    <button
                      key={solution.id}
                      role="tab"
                      aria-selected={index === activeTab}
                      aria-controls={`solution-panel-${index}`}
                      className={`flex items-center px-3 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 hover:scale-105 ${
                        index === activeTab 
                          ? 'bg-white text-slate-900 shadow-xl' 
                          : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      <div className={`p-1 rounded-lg mr-2 ${
                        index === activeTab ? solution.bgColor : 'bg-white/20'
                      }`}>
                        <div className={`w-4 h-4 ${index === activeTab ? solution.textColor : 'text-white'}`}>
                          {solution.icon}
                        </div>
                      </div>
                      <span className="font-medium hidden sm:inline">{solution.title}</span>
                      <span className="font-medium sm:hidden">{solution.title.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </nav>

              {/* Active Solution Detail Card - Compact Version */}
              <Card 
                className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden"
                role="tabpanel"
                id={`solution-panel-${activeTab}`}
                aria-labelledby={`solution-tab-${activeTab}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className={`p-2 rounded-lg mr-4 ${currentSolution.bgColor} flex-shrink-0`}>
                      <div className={currentSolution.textColor}>
                        {currentSolution.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl mb-1">{currentSolution.title}</h2>
                      <p className={`text-sm ${currentSolution.textColor} mb-3`}>{currentSolution.subtitle}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {currentSolution.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {currentSolution.keywords.slice(0, 3).map((keyword, index) => (
                        <Badge key={index} variant="secondary" className="text-xs py-1">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm"
                      className={`bg-gradient-to-r ${currentSolution.color} text-white hover:opacity-90 flex-1`}
                      onClick={() => onNavigate(currentSolution.id)}
                    >
                      Explore Solution
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline" 
                      onClick={() => onNavigate('contact')}
                    >
                      Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="flex flex-col items-center text-white/60">
            <div className="text-xs mb-2">Scroll</div>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}