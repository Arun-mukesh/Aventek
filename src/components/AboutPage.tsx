import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Eye, Award, Users, Brain, Lightbulb, Microscope, TrendingUp, Code } from "lucide-react";
import whoWeAreImage from 'figma:asset/ed83d51e83068a9e66d5564b5e03a627032495d7.png';
import researchDevImage from 'figma:asset/1f9460b8c6ea16cbf870f22d1dd3ff4f3a9fab6f.png';

export function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">About Aventek</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the way in automation and IoT solutions for over three decades
          </p>
        </div>

        {/* Who We Are */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 1994 by Mr. Nikhil R. Trivedi, ex-Tata Electric R&D, 
                  Aventek has been at the forefront of industrial automation and 
                  smart technology solutions.
                </p>
                <p>
                  We specialize in automation, IoT, and smart security systems, 
                  bringing over 30 years of expertise to empower industries and 
                  communities across India.
                </p>
                <p>
                  Our journey from microprocessor-based systems to AI-driven 
                  IoT solutions reflects our commitment to innovation and 
                  technological advancement.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src={whoWeAreImage}
                alt="Business team collaboration"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Mission, Vision, Our Edge */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Mission</h3>
              <p className="text-gray-600">
                To create smart, sustainable, and economical technology solutions 
                that empower industries and communities.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Vision</h3>
              <p className="text-gray-600">
                To be India's most trusted partner in automation and IoT solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-8">
              <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl mb-4">Our Edge</h3>
              <div className="text-gray-600 space-y-2 text-left">
                <p>• Proven track record with major OEMs</p>
                <p>• Strong R&D base</p>
                <p>• Innovative, low-failure-rate systems</p>
                <p>• Commitment to long-term client success</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl mb-2">Mr. Nikhil R. Trivedi</h3>
                <p className="text-primary mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">Ex-Tata Electric R&D, 30+ years in industrial automation. Visionary leader driving Aventek's innovation in smart technology solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">Mr. Jay Trivedi</h3>
                <p className="text-blue-600 mb-2">Director</p>
                <p className="text-gray-600 text-sm">Strategic leader overseeing business development and client partnerships, ensuring innovative solutions align with market demands and customer success.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-xl mb-2">Mr. Milind Trivedi</h3>
                <p className="text-purple-600 mb-2">Director</p>
                <p className="text-gray-600 text-sm">Technical leader driving product innovation and R&D initiatives, bringing expertise in automation systems and cutting-edge technology implementation.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-green-600" />
                </div>
                <h3 className="text-xl mb-2">R&D Team</h3>
                <p className="text-green-600 mb-2">Chief Technology Officers</p>
                <p className="text-gray-600 text-sm">Dedicated team of engineers and researchers specializing in AI, IoT, and automation technologies with diverse industry expertise.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-12 h-12 text-orange-600" />
                </div>
                <h3 className="text-xl mb-2">Operations Team</h3>
                <p className="text-orange-600 mb-2">Project Delivery & Support</p>
                <p className="text-gray-600 text-sm">Experienced professionals ensuring seamless project delivery, quality assurance, and comprehensive customer support.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research & Development */}
        <section className="mb-16">
          <h2 className="text-3xl text-center mb-12">Research & Development</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src={researchDevImage}
                alt="Research development engineering team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Microscope className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Advanced Research Labs</h3>
                  <p className="text-gray-600">State-of-the-art facilities for hardware development, software engineering, and system integration testing.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Innovation Pipeline</h3>
                  <p className="text-gray-600">Continuous R&D in AI algorithms, blockchain integration, and next-generation IoT platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Technology Stack</h3>
                  <p className="text-gray-600">Expertise in PLC systems, edge computing, cloud platforms, and custom embedded solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Projects */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl text-center mb-12">Ongoing Projects & Research</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Sustainable Solutions</h3>
                <p className="text-gray-600 mb-4">Developing eco-friendly and energy-efficient automation systems that reduce environmental impact while optimizing operational performance.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Energy-efficient automation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Renewable energy integration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Smart resource management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Carbon footprint reduction</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Plant and Factory Vigilance & Monitoring System</h3>
                <p className="text-gray-600 mb-4">Comprehensive surveillance and monitoring solutions for industrial facilities ensuring safety, security, and operational efficiency.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>24/7 real-time monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>AI-powered threat detection</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Automated alert systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Integration with access control</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Theft and Vigilance Monitoring Solution</h3>
                <p className="text-gray-600 mb-4">Advanced security systems leveraging IoT and AI technologies to prevent theft, unauthorized access, and ensure comprehensive asset protection.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Intelligent video analytics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Motion detection & alerts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Remote monitoring capabilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Cloud-based storage & reporting</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Smart City Infrastructure</h3>
                <p className="text-gray-600 mb-4">Developing integrated solutions for traffic management, environmental monitoring, and public safety systems.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>AI-powered traffic optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Real-time air quality monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Integrated security platforms</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Industrial IoT Platform</h3>
                <p className="text-gray-600 mb-4">Next-generation platform for comprehensive industrial automation and predictive maintenance.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Machine learning algorithms</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Edge computing integration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Blockchain security protocols</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Sustainable Energy Solutions</h3>
                <p className="text-gray-600 mb-4">Research into renewable energy management and smart grid technologies for efficient power distribution.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Solar panel optimization</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Battery management systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Smart grid integration</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Autonomous Systems Research</h3>
                <p className="text-gray-600 mb-4">Advanced research in autonomous vehicles, drones, and robotic systems for industrial applications.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Computer vision systems</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Navigation algorithms</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                    <span>Safety protocol development</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-gradient-to-br from-primary/5 to-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl text-center mb-12">Our Innovation Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <h4 className="text-lg">1994 - Foundation</h4>
                  <p className="text-gray-600">Founded by Mr. Nikhil R. Trivedi with vision for industrial automation excellence</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <h4 className="text-lg">2000s - Strategic Growth</h4>
                  <p className="text-gray-600">Expanded partnerships with 100+ OEMs across multiple industries in India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <h4 className="text-lg">2010s - Digital Innovation</h4>
                  <p className="text-gray-600">Transition to advanced PLC solutions and smart technology integration platforms</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <h4 className="text-lg">Today - AI & IoT Leadership</h4>
                  <p className="text-gray-600">Leading with AI-driven IoT solutions, blockchain integration, and autonomous systems research</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}