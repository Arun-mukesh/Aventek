import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Phone, Mail, Send, Users, Code, Wrench } from "lucide-react";
import { LeadForm } from "./LeadForm";
import contactImage from 'figma:asset/a54616ca3d495c3136fb300d8579e954c560e0ff.png';

export function ContactPage() {
  // Set this to true when you have active job openings
  const hasOpenings = false;
  
  const jobOpenings = [
    {
      title: "IoT Engineers",
      description: "Design and develop IoT solutions for industrial applications.",
      requirements: ["3+ years experience", "Embedded systems knowledge", "Protocol expertise"]
    },
    {
      title: "Embedded System Developers",
      description: "Create robust embedded systems for automation solutions.",
      requirements: ["C/C++ proficiency", "Microcontroller experience", "Hardware debugging"]
    },
    {
      title: "Automation Support Engineers",
      description: "Provide technical support and maintenance for automation systems.",
      requirements: ["PLC programming", "Industrial systems", "Customer service"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Contact & Careers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us or join our team to shape the future of automation
          </p>
        </div>

        {/* Contact & Quick Enquiry */}
        <section className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl mb-8">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Address</h3>
                  <p className="text-gray-600">
                    M/s Aventek<br />
                    328, New Sonal Link Industrial Estate<br />
                    Bldg. No. 2- Link Road, Kanch Pada<br />
                    Malad(West), Mumbai-400064<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">
                    <a href="tel:02244816938" className="hover:text-primary">
                      022 44816938
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Email</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>
                      <a href="mailto:jay@aventekindia.com" className="hover:text-primary">
                        jay@aventekindia.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:milind@aventekindia.com" className="hover:text-primary">
                        milind@aventekindia.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:nikhil@aventekindia.com" className="hover:text-primary">
                        nikhil@aventekindia.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Image */}
            <div className="mt-8">
              <ImageWithFallback
                src={contactImage}
                alt="Office environment"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Quick Enquiry Form */}
          <div>
            <LeadForm />
          </div>
        </section>

        {/* Careers Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 mr-3 text-primary" />
              <h2 className="text-3xl">Careers</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "Be part of the future of automation."
            </p>
            <p className="text-gray-600 mt-4">
              Join our team of innovators and help shape the next generation of industrial automation solutions.
            </p>
          </div>

          {/* Culture & Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-3">Collaborative Culture</h3>
                <p className="text-gray-600">Work with passionate engineers and innovators in a supportive environment.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-3">Hands-on Projects</h3>
                <p className="text-gray-600">Work on cutting-edge automation and IoT projects that make a real impact.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl mb-3">Growth Opportunities</h3>
                <p className="text-gray-600">Continuous learning and career development in emerging technologies.</p>
              </CardContent>
            </Card>
          </div>

          {/* Open Positions */}
          <div>
            <h3 className="text-2xl mb-8">Open Roles</h3>
            
            {!hasOpenings ? (
              // No Openings Message
              <Card className="border-2 border-dashed border-gray-300">
                <CardContent className="p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="p-4 bg-gray-100 rounded-full inline-block mb-4">
                      <Users className="w-12 h-12 text-gray-400" />
                    </div>
                    <h4 className="text-xl mb-3 text-gray-700">No Current Openings</h4>
                    <p className="text-gray-600 mb-6">
                      We don't have any open positions at the moment. However, we're always interested in connecting with talented professionals who are passionate about automation and IoT.
                    </p>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600">
                        Feel free to send your resume to:
                      </p>
                      <div className="flex flex-col gap-2">
                        <a 
                          href="mailto:jay@aventekindia.com" 
                          className="text-primary hover:underline font-medium"
                        >
                          jay@aventekindia.com
                        </a>
                        <a 
                          href="mailto:milind@aventekindia.com" 
                          className="text-primary hover:underline font-medium"
                        >
                          milind@aventekindia.com
                        </a>
                        <a 
                          href="mailto:nikhil@aventekindia.com" 
                          className="text-primary hover:underline font-medium"
                        >
                          nikhil@aventekindia.com
                        </a>
                      </div>
                      <p className="text-sm text-gray-500 mt-4">
                        We'll keep your information on file for future opportunities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              // Active Job Listings
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-xl mb-2">{job.title}</h4>
                          <p className="text-gray-600 mb-4">{job.description}</p>
                          <div>
                            <h5 className="text-sm mb-2 text-gray-800">Requirements:</h5>
                            <ul className="space-y-1">
                              {job.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-center text-sm text-gray-600">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:ml-6">
                          <Button>Apply Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 text-primary-foreground/80">
            Whether you're looking for innovative solutions or want to join our team, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us Today
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              View All Openings
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}