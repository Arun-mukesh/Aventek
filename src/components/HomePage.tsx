import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { RefinedHeroBanner } from "./RefinedHeroBanner";
import { ArrowRight, Users, Lightbulb, BarChart3, TrendingUp, BookOpen } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Banner */}
      <RefinedHeroBanner onNavigate={onNavigate} />

      {/* Company Statistics */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Trusted Industry Leader</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Three decades of excellence in industrial automation and smart technology solutions
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">30+</div>
              <div className="text-slate-600">Years of Excellence</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">100+</div>
              <div className="text-slate-600">OEM Partners</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">500+</div>
              <div className="text-slate-600">Projects Delivered</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">15+</div>
              <div className="text-slate-600">Industry Verticals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">OUR CLIENTS</Badge>
            <h2 className="text-3xl md:text-4xl mb-4">Trusted by Industry Leaders</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Partnering with leading organizations across manufacturing, retail, infrastructure, and more
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {/* Client Logo Placeholders */}
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  Dorf Ketal
                </div>
                <div className="text-xs text-gray-400 mt-1">Chemical Solutions</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  Tata Group
                </div>
                <div className="text-xs text-gray-400 mt-1">Conglomerate</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  Reliance
                </div>
                <div className="text-xs text-gray-400 mt-1">Industries</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  L&T
                </div>
                <div className="text-xs text-gray-400 mt-1">Infrastructure</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  Mahindra
                </div>
                <div className="text-xs text-gray-400 mt-1">Manufacturing</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  Aditya Birla
                </div>
                <div className="text-xs text-gray-400 mt-1">Group</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  Godrej
                </div>
                <div className="text-xs text-gray-400 mt-1">Industries</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  Shoppers Stop
                </div>
                <div className="text-xs text-gray-400 mt-1">Retail</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  DLF
                </div>
                <div className="text-xs text-gray-400 mt-1">Real Estate</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-700 transition-colors">
                  Siemens
                </div>
                <div className="text-xs text-gray-400 mt-1">Technology</div>
              </div>
            </div>
          </div>

          {/* Client Stats */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl text-primary mb-2">100+</div>
                <div className="text-gray-600">Active OEM Partners</div>
              </div>
              <div>
                <div className="text-3xl text-primary mb-2">15+</div>
                <div className="text-gray-600">Industry Sectors</div>
              </div>
              <div>
                <div className="text-3xl text-primary mb-2">98%</div>
                <div className="text-gray-600">Client Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">About Aventek</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1994 by Mr. Nikhil R. Trivedi, ex-Tata Electric R&D, 
                  Aventek has been pioneering industrial automation and smart technology 
                  solutions for over three decades.
                </p>
                <p>
                  From microprocessor-based systems to AI-driven IoT solutions, 
                  <span className="text-primary"> we redefine automation</span> with 
                  smart, sustainable, and strategic solutions that empower industries 
                  with reliability and innovation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  onClick={() => onNavigate('about')}
                  className="bg-primary hover:bg-primary/90"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => onNavigate('innovation')}
                >
                  Our Innovation Story
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1698047682129-c3e217ac08b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NTgyNTcxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern office team meeting"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl">30+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Research Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Innovation & Research</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading the future of automation with cutting-edge research and strategic OEM partnerships
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwcmVzZWFyY2glMjB0ZWNobm9sb2d5JTIwbGFifGVufDF8fHx8MTc1ODI3NTIyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Innovation research technology lab"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">R&D Excellence</h3>
                  <p className="text-gray-600">30+ years of continuous innovation in industrial automation and IoT solutions with dedicated research facilities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">OEM Partnerships</h3>
                  <p className="text-gray-600">Strategic collaborations with 100+ OEMs across multiple industries, driving innovation and market expansion.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Future Technologies</h3>
                  <p className="text-gray-600">Leading research in AI, blockchain integration, and next-generation IoT platforms for smart cities and industries.</p>
                </div>
              </div>
              
              <Button 
                onClick={() => onNavigate('innovation')}
                className="bg-primary hover:bg-primary/90"
              >
                Explore Innovation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Knowledge Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Industry Insights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay ahead with our latest research, industry trends, and expert analysis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('insights')}>
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-lg inline-block mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl mb-3">Market Analysis</h3>
                <p className="text-gray-600 mb-4">Deep insights into automation trends, IoT adoption rates, and emerging technologies shaping industrial transformation.</p>
                <div className="text-primary text-sm flex items-center">
                  Latest Reports
                  <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('insights')}>
              <CardContent className="p-6">
                <div className="p-3 bg-green-100 rounded-lg inline-block mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl mb-3">Case Studies</h3>
                <p className="text-gray-600 mb-4">Real-world implementations, challenges solved, and measurable results achieved across various industry verticals.</p>
                <div className="text-green-600 text-sm flex items-center">
                  Success Stories
                  <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('insights')}>
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">Tech Trends</h3>
                <p className="text-gray-600 mb-4">Future-focused analysis on AI, blockchain, edge computing, and their impact on industrial automation.</p>
                <div className="text-blue-600 text-sm flex items-center">
                  Trend Analysis
                  <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={() => onNavigate('insights')}
              variant="outline"
              size="lg"
            >
              View All Insights
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Comprehensive Clients & Partners Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-200 border-blue-400">
              OUR TRUSTED PARTNERSHIPS
            </Badge>
            <h2 className="text-3xl md:text-5xl mb-4">Powering India's Leading Enterprises</h2>
            <p className="text-blue-200 max-w-3xl mx-auto text-lg">
              From Fortune 500 companies to innovative startups, we've partnered with industry leaders 
              across manufacturing, retail, infrastructure, and technology sectors
            </p>
          </div>

          {/* Client Categories */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl mb-2 text-blue-400">25+</div>
              <div className="text-sm text-blue-200">Manufacturing Partners</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl mb-2 text-green-400">18+</div>
              <div className="text-sm text-blue-200">Retail & Hospitality</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl mb-2 text-purple-400">30+</div>
              <div className="text-sm text-blue-200">Infrastructure Projects</div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl mb-2 text-yellow-400">27+</div>
              <div className="text-sm text-blue-200">Technology OEMs</div>
            </div>
          </div>

          {/* Client Grid - Manufacturing & Heavy Industries */}
          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-center text-blue-200">Manufacturing & Heavy Industries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Tata Steel", sector: "Steel" },
                { name: "Reliance Industries", sector: "Petrochemicals" },
                { name: "L&T", sector: "Engineering" },
                { name: "Mahindra & Mahindra", sector: "Automotive" },
                { name: "Jindal Steel", sector: "Steel" },
                { name: "Aditya Birla Group", sector: "Conglomerate" },
                { name: "Godrej Industries", sector: "FMCG" },
                { name: "Siemens India", sector: "Technology" },
                { name: "ABB India", sector: "Automation" },
                { name: "Schneider Electric", sector: "Energy" },
                { name: "Honeywell", sector: "Technology" },
                { name: "Bosch India", sector: "Engineering" }
              ].map((client, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all group"
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm mb-1 group-hover:text-blue-300 transition-colors">
                      {client.name}
                    </div>
                    <div className="text-xs text-blue-300/70">{client.sector}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Grid - Retail, Hospitality & Infrastructure */}
          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-center text-blue-200">Retail, Hospitality & Real Estate</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Shoppers Stop", sector: "Retail" },
                { name: "Future Group", sector: "Retail" },
                { name: "DLF", sector: "Real Estate" },
                { name: "Oberoi Realty", sector: "Real Estate" },
                { name: "Taj Hotels", sector: "Hospitality" },
                { name: "ITC Hotels", sector: "Hospitality" },
                { name: "Phoenix Mills", sector: "Retail & Malls" },
                { name: "Prestige Group", sector: "Real Estate" },
                { name: "Hiranandani", sector: "Real Estate" },
                { name: "Pantaloons", sector: "Retail" },
                { name: "Westside", sector: "Retail" },
                { name: "Lifestyle", sector: "Retail" }
              ].map((client, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all group"
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm mb-1 group-hover:text-green-300 transition-colors">
                      {client.name}
                    </div>
                    <div className="text-xs text-blue-300/70">{client.sector}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Grid - Chemical & Pharmaceutical */}
          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-center text-blue-200">Chemical, Pharmaceutical & Process Industries</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Dorf Ketal", sector: "Chemicals", featured: true },
                { name: "Dr. Reddy's Labs", sector: "Pharma" },
                { name: "Sun Pharma", sector: "Pharma" },
                { name: "Cipla", sector: "Pharma" },
                { name: "Lupin", sector: "Pharma" },
                { name: "Tata Chemicals", sector: "Chemicals" },
                { name: "UPL Limited", sector: "Agrochemicals" },
                { name: "Aarti Industries", sector: "Chemicals" },
                { name: "Pidilite", sector: "Chemicals" },
                { name: "Asian Paints", sector: "Paints" },
                { name: "Berger Paints", sector: "Paints" },
                { name: "BASF India", sector: "Chemicals" }
              ].map((client, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg backdrop-blur-sm border transition-all group ${
                    client.featured 
                      ? 'bg-blue-500/20 border-blue-400 ring-2 ring-blue-400' 
                      : 'bg-white/10 border-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className="text-center">
                    <div className={`font-semibold text-sm mb-1 transition-colors ${
                      client.featured 
                        ? 'text-blue-300' 
                        : 'group-hover:text-purple-300'
                    }`}>
                      {client.name}
                    </div>
                    <div className="text-xs text-blue-300/70">{client.sector}</div>
                    {client.featured && (
                      <div className="text-xs text-blue-400 mt-1 font-medium">✓ Active Partner</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Grid - Technology & IT */}
          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-center text-blue-200">Technology & IT Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "TCS", sector: "IT Services" },
                { name: "Infosys", sector: "IT Services" },
                { name: "Wipro", sector: "IT Services" },
                { name: "Tech Mahindra", sector: "IT Services" },
                { name: "HCL Tech", sector: "IT Services" },
                { name: "IBM India", sector: "Technology" },
                { name: "Oracle India", sector: "Software" },
                { name: "Microsoft India", sector: "Technology" },
                { name: "Dell India", sector: "Technology" },
                { name: "HP India", sector: "Technology" },
                { name: "Cisco India", sector: "Networking" },
                { name: "Intel India", sector: "Semiconductors" }
              ].map((client, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all group"
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm mb-1 group-hover:text-yellow-300 transition-colors">
                      {client.name}
                    </div>
                    <div className="text-xs text-blue-300/70">{client.sector}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-6xl text-blue-400 mb-4">"</div>
              <p className="text-xl text-blue-100 mb-6 italic">
                Aventek's AI-powered people and vehicle counting solution has transformed our operational 
                efficiency at our Dadra Nagar Plant. The system achieves 99% accuracy and provides real-time 
                insights that have significantly enhanced our security and management capabilities.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div>
                  <div className="font-semibold text-lg">Dorf Ketal Chemical India Ltd.</div>
                  <div className="text-sm text-blue-300">Chemical Manufacturing Excellence</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-blue-200 mb-6 text-lg">
              Join 100+ leading organizations transforming their operations with Aventek
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50"
                onClick={() => onNavigate('contact')}
              >
                Become a Partner
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => onNavigate('solutions')}
              >
                View Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}