import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Link, Shield, Database, Cpu, Network, Lock, CheckCircle, ArrowRight, FileText, Users, Package } from "lucide-react";

interface BlockchainIntegrationPageProps {
  onNavigate: (page: string) => void;
}

export function BlockchainIntegrationPage({ onNavigate }: BlockchainIntegrationPageProps) {
  const keyFeatures = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Smart Contract Development",
      description: "Custom smart contracts for automated business processes and transparent transactions."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Supply Chain Transparency",
      description: "End-to-end traceability and verification for supply chain management and authenticity."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Integrity Solutions",
      description: "Immutable data storage and verification systems for critical business information."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Decentralized Identity",
      description: "Secure identity management systems with user-controlled digital credentials."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "IoT Device Authentication",
      description: "Blockchain-based device authentication and secure communication protocols."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure Asset Management",
      description: "Digital asset tokenization and secure management of valuable resources."
    }
  ];

  const useCases = [
    {
      title: "Supply Chain Management",
      description: "Track products from manufacturing to delivery with complete transparency",
      features: ["Product Authenticity", "Origin Verification", "Quality Assurance", "Recall Management"],
      industries: ["Manufacturing", "Food & Beverage", "Pharmaceuticals", "Automotive"]
    },
    {
      title: "Digital Identity Verification",
      description: "Secure, decentralized identity management for organizations and individuals",
      features: ["Identity Authentication", "Credential Verification", "Access Control", "Privacy Protection"],
      industries: ["Healthcare", "Finance", "Education", "Government"]
    },
    {
      title: "Asset Tokenization",
      description: "Convert physical and digital assets into blockchain-based tokens",
      features: ["Asset Digitization", "Fractional Ownership", "Transparent Trading", "Smart Contracts"],
      industries: ["Real Estate", "Finance", "Art & Collectibles", "Intellectual Property"]
    },
    {
      title: "IoT Security & Trust",
      description: "Secure IoT networks with blockchain-based device authentication",
      features: ["Device Authentication", "Data Integrity", "Secure Communication", "Automated Compliance"],
      industries: ["Smart Cities", "Industrial IoT", "Healthcare", "Transportation"]
    }
  ];

  const benefits = [
    "Enhanced security through cryptographic protection",
    "Immutable record keeping and audit trails",
    "Reduced operational costs and intermediaries",
    "Increased transparency and trust",
    "Automated processes through smart contracts",
    "Global accessibility and 24/7 operations"
  ];

  const blockchainPlatforms = [
    { name: "Ethereum", features: ["Smart Contracts", "DeFi Integration", "Large Ecosystem"] },
    { name: "Hyperledger Fabric", features: ["Enterprise Focus", "Permissioned Network", "Modular Architecture"] },
    { name: "Polygon", features: ["Layer 2 Scaling", "Lower Fees", "Ethereum Compatible"] },
    { name: "Binance Smart Chain", features: ["Fast Transactions", "Low Costs", "DeFi Support"] }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <Button 
          variant="ghost" 
          className="mb-8" 
          onClick={() => onNavigate('solutions')}
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Solutions
        </Button>

        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">Decentralized Solutions</Badge>
              <h1 className="text-4xl md:text-5xl mb-6">Blockchain Platform Integration</h1>
              <p className="text-xl text-gray-600 mb-8">
                Leverage the power of blockchain technology for secure, transparent, and efficient business operations. 
                Our comprehensive blockchain solutions provide trust, security, and automation for modern enterprises.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => onNavigate('contact')}>
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View Use Cases
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjBuZXR3b3JrfGVufDF8fHx8MTc1ODI3NTM2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Blockchain Technology Network"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Comprehensive Blockchain Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4 text-purple-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Blockchain Use Cases & Applications</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm mb-2 text-gray-800">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm mb-2 text-gray-800">Target Industries:</h4>
                    <div className="flex flex-wrap gap-1">
                      {useCase.industries.map((industry, industryIndex) => (
                        <Badge key={industryIndex} variant="secondary" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Supported Blockchain Platforms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blockchainPlatforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Link className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg mb-3">{platform.name}</h3>
                  <div className="space-y-1">
                    {platform.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-xs text-gray-600 block">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl mb-8 text-center">Why Choose Blockchain Integration?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Ready to Embrace Blockchain Technology?</h2>
          <p className="text-xl mb-6 text-primary-foreground/80">
            Transform your business with secure, transparent, and efficient blockchain solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => onNavigate('contact')}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Download Whitepaper
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}