import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ArrowRight, 
  Users, 
  Lightbulb, 
  BarChart3, 
  TrendingUp, 
  BookOpen,
  Star,
  Award,
  CheckCircle,
  Play,
  Droplets,
  Network,
  Shield,
  Building2,
  Factory,
  Cpu,
  Globe,
  Target,
  Zap
} from "lucide-react";

interface ModernHomePageProps {
  onNavigate: (page: string) => void;
}

export function ModernHomePage({ onNavigate }: ModernHomePageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      id: "auto-people-counting",
      title: "Auto People Counting",
      subtitle: "AI-Powered Analytics",
      description: "Advanced computer vision technology for accurate crowd counting and space optimization.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      stats: "99.5% Accuracy"
    },
    {
      id: "pump-guru",
      title: "PumpGuru",
      subtitle: "IoT AI Water Solutions",
      description: "Intelligent water distribution with AI optimization and predictive maintenance.",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-sky-500 to-sky-600",
      bgColor: "bg-sky-50",
      stats: "40% Water Savings"
    },
    {
      id: "iot-ai-solutions",
      title: "IoT AI Solutions",
      subtitle: "Smart Connectivity",
      description: "Comprehensive IoT ecosystem with AI-driven analytics and edge computing.",
      icon: <Network className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      stats: "Real-time Monitoring"
    },
    {
      id: "security-systems",
      title: "Security & Smart Systems",
      subtitle: "Advanced Protection",
      description: "Multi-protocol rugged hardware for industrial and city security solutions.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      stats: "24/7 Protection"
    }
  ];

  const industries = [
    { name: "Manufacturing", icon: <Factory className="w-6 h-6" />, count: "200+" },
    { name: "Smart Cities", icon: <Building2 className="w-6 h-6" />, count: "50+" },
    { name: "Healthcare", icon: <CheckCircle className="w-6 h-6" />, count: "100+" },
    { name: "Agriculture", icon: <Droplets className="w-6 h-6" />, count: "150+" }
  ];

  const achievements = [
    { icon: <Award className="w-8 h-8" />, number: "30+", label: "Years Excellence", color: "text-blue-600" },
    { icon: <Users className="w-8 h-8" />, number: "100+", label: "OEM Partners", color: "text-green-600" },
    { icon: <Target className="w-8 h-8" />, number: "500+", label: "Projects", color: "text-purple-600" },
    { icon: <Globe className="w-8 h-8" />, number: "15+", label: "Industries", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Main Headline */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwaW5kdXN0cmlhbCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzU4Mjc3MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern industrial technology background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        {/* Main Headline Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <Badge variant="outline" className="bg-white/80 backdrop-blur-sm border-blue-200 text-blue-700 px-6 py-3 mb-8">
              <Award className="w-4 h-4 mr-2" />
              Trusted by 100+ OEMs | 30+ Years Excellence
            </Badge>

            <h1 className="text-5xl lg:text-6xl xl:text-8xl mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                SMART
              </span>
              <span className="text-slate-700 mx-4">|</span>
              <span className="bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
                SUSTAINABLE
              </span>
              <span className="text-slate-700 mx-4">|</span>
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                STRATEGIC
              </span>
              <div className="mt-4">
                <span className="text-slate-800">SOLUTIONS</span>
              </div>
            </h1>

            <p className="text-2xl lg:text-3xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Solutions that empower industries with reliability and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white px-10 py-4 text-xl"
                onClick={() => onNavigate('solutions')}
              >
                <Play className="mr-2 w-6 h-6" />
                Explore Solutions
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-10 py-4 text-xl"
                onClick={() => onNavigate('contact')}
              >
                Get Started
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className={`${achievement.color} mb-3 flex justify-center`}>
                    {achievement.icon}
                  </div>
                  <div className="text-3xl text-slate-800 mb-2">{achievement.number}</div>
                  <div className="text-slate-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Core Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive automation technologies designed to transform your industrial operations
            </p>
          </div>

          {/* Solution Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution, index) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-8 py-4 rounded-2xl text-lg transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-blue-50 shadow-xl text-slate-800 scale-105 border-2 border-blue-200'
                    : 'bg-slate-50 text-slate-600 hover:bg-blue-50 hover:scale-102 border-2 border-transparent'
                }`}
              >
                <div className={`p-3 rounded-xl mr-4 ${
                  activeTab === index ? solution.bgColor : 'bg-slate-100'
                }`}>
                  <div className="text-slate-700">
                    {solution.icon}
                  </div>
                </div>
                <span>{solution.title}</span>
              </button>
            ))}
          </div>

          {/* Active Solution Description Block */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Solution Content */}
                <div>
                  <div className={`w-20 h-20 mb-8 rounded-2xl ${solutions[activeTab].bgColor} flex items-center justify-center`}>
                    <div className="text-slate-700">
                      {solutions[activeTab].icon}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl mb-4 text-slate-800">{solutions[activeTab].title}</h3>
                  <p className="text-2xl text-blue-600 mb-6">{solutions[activeTab].subtitle}</p>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {solutions[activeTab].description}
                  </p>
                  
                  <Badge variant="secondary" className="mb-8 bg-blue-50 text-blue-700 text-lg px-6 py-3">
                    {solutions[activeTab].stats}
                  </Badge>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg"
                      className={`bg-gradient-to-r ${solutions[activeTab].color} text-white hover:opacity-90 px-8 py-4 text-lg`}
                      onClick={() => onNavigate(solutions[activeTab].id)}
                    >
                      Explore Solution
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline" 
                      className="px-8 py-4 text-lg"
                      onClick={() => onNavigate('contact')}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>

                {/* Solution Visual */}
                <div className="relative">
                  <div className={`${solutions[activeTab].bgColor} rounded-2xl p-8 shadow-xl`}>
                    <div className="text-center">
                      <div className="text-slate-700 mb-6 flex justify-center scale-150">
                        {solutions[activeTab].icon}
                      </div>
                      <h4 className="text-2xl text-slate-800 mb-4">{solutions[activeTab].title}</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                        <div className="bg-white/80 rounded-xl p-4">
                          <div className="text-lg text-blue-600 mb-1">Advanced</div>
                          <div>Technology</div>
                        </div>
                        <div className="bg-white/80 rounded-xl p-4">
                          <div className="text-lg text-green-600 mb-1">Real-time</div>
                          <div>Monitoring</div>
                        </div>
                        <div className="bg-white/80 rounded-xl p-4">
                          <div className="text-lg text-purple-600 mb-1">AI-Powered</div>
                          <div>Analytics</div>
                        </div>
                        <div className="bg-white/80 rounded-xl p-4">
                          <div className="text-lg text-orange-600 mb-1">24/7</div>
                          <div>Support</div>
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-6">About Aventek</Badge>
              <h2 className="text-4xl lg:text-5xl mb-6">Pioneering Industrial Innovation Since 1994</h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  Founded by <span className="text-blue-600">Mr. Nikhil R. Trivedi</span>, ex-Tata Electric R&D, 
                  Aventek has been at the forefront of industrial automation for over three decades.
                </p>
                <p>
                  From microprocessor-based systems to AI-driven IoT solutions, we redefine automation with 
                  smart, sustainable, and strategic solutions that empower industries.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl text-blue-600 mb-2">1994</div>
                  <div className="text-sm text-slate-600">Founded</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl text-green-600 mb-2">500+</div>
                  <div className="text-sm text-slate-600">Projects</div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button onClick={() => onNavigate('about')}>
                  Our Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" onClick={() => onNavigate('innovation')}>
                  Innovation
                </Button>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560264280-88b68371db39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTgyNzU0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team meeting in modern office"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">Industries We Serve</Badge>
            <h2 className="text-4xl lg:text-5xl mb-6">Transforming Multiple Industries</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our solutions power innovation across diverse sectors, from manufacturing to smart cities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
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

      {/* Innovation & Research */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4Mjc1NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Research lab technology"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl mb-1">R&D</div>
                <div className="text-sm">Excellence</div>
              </div>
            </div>

            <div>
              <Badge variant="outline" className="mb-6">Innovation & Research</Badge>
              <h2 className="text-4xl lg:text-5xl mb-6">Leading the Future of Automation</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">R&D Excellence</h3>
                    <p className="text-slate-600">30+ years of continuous innovation with dedicated research facilities and cutting-edge technology development.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">OEM Partnerships</h3>
                    <p className="text-slate-600">Strategic collaborations with 100+ OEMs driving innovation and market expansion across industries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Future Technologies</h3>
                    <p className="text-slate-600">Leading research in AI, blockchain integration, and next-generation IoT platforms for smart cities.</p>
                  </div>
                </div>
              </div>

              <Button 
                onClick={() => onNavigate('innovation')} 
                className="mt-8"
                size="lg"
              >
                Explore Innovation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6">Industry Insights</Badge>
            <h2 className="text-4xl lg:text-5xl mb-6">Stay Ahead with Expert Analysis</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Latest research, industry trends, and technological insights from our experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8">
                <div className="p-4 bg-blue-100 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl mb-4">Market Analysis</h3>
                <p className="text-slate-600 mb-6">Deep insights into automation trends and emerging technologies shaping industrial transformation.</p>
                <div className="text-blue-600 flex items-center">
                  View Reports
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8">
                <div className="p-4 bg-green-100 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl mb-4">Case Studies</h3>
                <p className="text-slate-600 mb-6">Real-world implementations and measurable results achieved across various industry verticals.</p>
                <div className="text-green-600 flex items-center">
                  Success Stories
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8">
                <div className="p-4 bg-purple-100 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl mb-4">Tech Trends</h3>
                <p className="text-slate-600 mb-6">Future-focused analysis on AI, blockchain, and their impact on industrial automation.</p>
                <div className="text-purple-600 flex items-center">
                  Trend Analysis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button onClick={() => onNavigate('insights')} size="lg">
              View All Insights
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-sky-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 100+ OEMs who trust Aventek for smart, sustainable, and strategic automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('solutions')}
              className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600"
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}