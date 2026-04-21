import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ArrowLeft, 
  ArrowRight,
  Download, 
  Droplets, 
  Factory,
  Home,
  Building2,
  CheckCircle,
  Zap,
  Shield,
  Wifi,
  Gauge,
  Settings
} from "lucide-react";

interface PumpGuruOverviewPageProps {
  onNavigate: (page: string) => void;
}

export function PumpGuruOverviewPage({ onNavigate }: PumpGuruOverviewPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const products = [
    {
      id: "ro-plant-three-phase",
      name: "RO Plant Controller",
      category: "Industrial Grade",
      tagline: "Advanced Water Treatment Automation",
      description: "Complete RO plant automation with three-phase motor control, TDS monitoring, and intelligent water management for industrial applications.",
      image: "/assets/pump-guru/images/4.png",
      displayType: "Large Touch Display",
      specifications: [
        "7-inch color touchscreen HMI",
        "Three-phase motor control (up to 10 HP)",
        "Real-time TDS monitoring",
        "Multi-stage filtration control",
        "Automatic flushing system",
        "Water quality monitoring",
        "Production tracking & reporting",
        "Remote monitoring via IoT"
      ],
      features: [
        "Complete RO plant automation",
        "Pre-filter & post-filter management",
        "Booster pump control",
        "High/Low TDS alarms",
        "Tank level management",
        "Auto/Manual operation modes",
        "Data logging & analytics",
        "Mobile app connectivity"
      ],
      applications: [
        "Industrial RO plants",
        "Commercial water treatment",
        "Bottling plants",
        "Pharmaceutical facilities",
        "Food processing units"
      ],
      pdfLink: "/assets/pump-guru/pdfs/ROPUMP.pdf"
    },
    {
      id: "flameproof-pump-guru",
      name: "FLAMEPROOF PUMP GURU",
      category: "Specialized Solutions",
      tagline: "Explosion-Proof Pump Control for Hazardous Areas",
      description: "Certified flameproof pump controller designed for explosive and hazardous environments. ATEX/IECEx certified with ruggedized enclosure for Zone 1 & Zone 2 applications.",
      image: "/assets/pump-guru/images/6.png",
      displayType: "Explosion-Proof Enclosure",
      specifications: [
        "ATEX/IECEx certified flameproof enclosure",
        "Three-phase motor control (up to 15 HP)",
        "IP66/IP67 protection rating",
        "Explosion-proof display window",
        "Zone 1 & Zone 2 certified",
        "Temperature monitoring",
        "Intrinsically safe circuits",
        "Corrosion-resistant materials"
      ],
      features: [
        "Explosion-proof design",
        "Hazardous area compliance",
        "Heavy-duty construction",
        "Certified safety features",
        "Emergency shutdown system",
        "Spark-free operation",
        "Remote monitoring capable",
        "Maintenance-free sealing"
      ],
      applications: [
        "Petrochemical plants",
        "Oil & gas facilities",
        "Chemical processing units",
        "Refineries",
        "Hazardous storage areas"
      ],
      pdfLink: "/assets/pump-guru/pdfs/FlameproofPumpGuru.pdf"
    },
    {
      id: "max-pump-guru",
      name: "MAX Pump Guru",
      category: "Premium Solutions",
      tagline: "Maximum Performance & Advanced IoT Integration",
      description: "Premium controller with maximum features including AI-powered optimization, cloud connectivity, advanced analytics, and comprehensive multi-pump management system.",
      image: "/assets/pump-guru/images/8.png",
      displayType: "10-inch Color HMI",
      specifications: [
        "10-inch full-color touchscreen HMI",
        "Multi-pump control (up to 8 pumps)",
        "AI-powered optimization algorithms",
        "4G/Wi-Fi/Ethernet connectivity",
        "Advanced data analytics",
        "Predictive maintenance AI",
        "Real-time energy monitoring",
        "Cloud dashboard integration"
      ],
      features: [
        "AI-based pump optimization",
        "Advanced scheduling algorithms",
        "Multi-zone management",
        "Energy cost optimization",
        "Comprehensive data logging",
        "Mobile app & web dashboard",
        "Voice assistant integration",
        "Automated reporting system"
      ],
      applications: [
        "Smart cities infrastructure",
        "Large commercial complexes",
        "Industrial water systems",
        "Municipal water supply",
        "Multi-building campuses"
      ],
      pdfLink: "/assets/pump-guru/pdfs/MaxPumpGuru.pdf"
    },
    {
      id: "lever-guru",
      name: "Lever Guru",
      category: "Specialized Solutions",
      tagline: "Float Switch & Level Sensor Controller",
      description: "Dedicated level control system with support for multiple float switches, level sensors, and tank management applications. Perfect for complex water level automation.",
      image: "/assets/pump-guru/images/11.png",
      displayType: "LED Display Panel",
      specifications: [
        "Multi-level sensor support (up to 8 levels)",
        "Float switch compatible",
        "Ultrasonic/capacitive sensor support",
        "Three-phase motor control",
        "Multi-tank management",
        "Programmable level settings",
        "Relay output expansion",
        "Visual level indicators"
      ],
      features: [
        "Multiple sensor compatibility",
        "Flexible level programming",
        "Multi-tank coordination",
        "Sequential tank filling",
        "Overflow protection",
        "Low-level alarms",
        "Cascade control logic",
        "Easy sensor calibration"
      ],
      applications: [
        "Multi-tank water systems",
        "Sequential tank control",
        "Industrial tank farms",
        "Water treatment plants",
        "Agricultural reservoirs"
      ],
      pdfLink: "/assets/pump-guru/pdfs/LeverGuru.pdf"
    },
    {
      id: "three-phase-controller",
      name: "Three Phase PumpGuru",
      category: "Industrial Grade",
      tagline: "Heavy-Duty Industrial Pump Controller",
      description: "Robust three-phase pump controller with large display for heavy-duty industrial and commercial applications requiring reliable pump management.",
      image: "/assets/pump-guru/images/2.png",
      displayType: "5-inch Touch Display",
      specifications: [
        "5-inch color touchscreen",
        "Three-phase motor support (1-15 HP)",
        "Advanced motor protection",
        "Dry-run prevention",
        "Overload & phase failure protection",
        "Variable speed control (VFD ready)",
        "Multi-pump control support",
        "Energy consumption monitoring"
      ],
      features: [
        "Intelligent pump scheduling",
        "Automatic alternation",
        "Pressure management",
        "Flow rate monitoring",
        "Leak detection system",
        "SMS/Email alerts",
        "Cloud connectivity",
        "Predictive maintenance"
      ],
      applications: [
        "Commercial buildings",
        "Industrial facilities",
        "Agricultural irrigation",
        "Water distribution systems",
        "HVAC systems"
      ],
      pdfLink: "/assets/pump-guru/pdfs/3phasePumpGuru.pdf"
    },
    {
      id: "pumpguru-standard",
      name: "PumpGuru Standard",
      category: "Commercial Solutions",
      tagline: "Smart Controller for Commercial Buildings",
      description: "Intelligent three-phase pump controller designed for commercial buildings, hotels, and facilities requiring reliable water supply management.",
      image: "/assets/pump-guru/images/1.png",
      displayType: "4.3-inch Touch Display",
      specifications: [
        "4.3-inch color touchscreen",
        "Three-phase motor control (1-10 HP)",
        "Smart pump switching",
        "Pressure sensor integration",
        "Level sensor compatibility",
        "Dry-run protection",
        "Timer-based operations",
        "Wi-Fi/GSM connectivity"
      ],
      features: [
        "Auto/Manual mode switching",
        "Multi-tank management",
        "Pressure maintenance",
        "Smart scheduling",
        "Energy optimization",
        "Fault diagnostics",
        "Remote monitoring",
        "Usage analytics"
      ],
      applications: [
        "Commercial complexes",
        "Hotels & resorts",
        "Hospitals",
        "Educational institutions",
        "Shopping malls"
      ],
      pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf"
    },
    {
      id: "three-phase-mini-guru",
      name: "3 Phase Mini Guru",
      category: "Residential Range",
      tagline: "Compact Three Phase Controller",
      description: "Space-saving three-phase controller with essential smart features for small commercial and large residential applications.",
      image: "/assets/pump-guru/images/10.png",
      displayType: "LED Indicator Panel",
      specifications: [
        "Compact design with LED indicators",
        "Three-phase motor support (1-5 HP)",
        "Basic motor protection",
        "Dry-run prevention",
        "Phase failure protection",
        "Manual override switch",
        "DIN rail mountable",
        "Cost-effective solution"
      ],
      features: [
        "Simple operation",
        "Visual status indicators",
        "Essential protection features",
        "Easy installation",
        "Low maintenance",
        "Reliable performance",
        "Compact footprint",
        "Budget-friendly"
      ],
      applications: [
        "Large residential buildings",
        "Small commercial units",
        "Farm houses",
        "Small industries",
        "Community water systems"
      ],
      pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf"
    },
    {
      id: "single-phase-controller",
      name: "Single Phase PumpGuru",
      category: "Residential Range",
      tagline: "Smart Home Water Management",
      description: "Compact single-phase controller designed for residential homes and small commercial applications with intelligent water management.",
      image: "/assets/pump-guru/images/3.png",
      displayType: "4-inch Display",
      specifications: [
        "4-inch color display",
        "Single-phase motor control (0.5-3 HP)",
        "Smart dry-run protection",
        "Overload protection",
        "Voltage monitoring",
        "Tank level management",
        "Timer functions",
        "Mobile app support"
      ],
      features: [
        "Easy-to-use interface",
        "Automatic operation",
        "Water level indication",
        "Scheduled operation",
        "Energy saving mode",
        "Fault alerts",
        "Wi-Fi connectivity",
        "Voice assistant integration"
      ],
      applications: [
        "Residential homes",
        "Apartments",
        "Small offices",
        "Retail stores",
        "Small restaurants"
      ],
      pdfLink: "/assets/pump-guru/pdfs/SinglePhasePumpGuru.pdf"
    },
    {
      id: "ip-protection-panel",
      name: "IP Protection Panel",
      category: "Specialized Solutions",
      tagline: "Weather-Protected Pump Control",
      description: "IP-rated protective control panel for reliable outdoor and harsh-environment pump operation with enhanced safety and durability.",
      image: "/assets/pump-guru/images/5.png",
      displayType: "Protected Panel",
      specifications: [
        "IP-rated enclosure",
        "Weather-resistant components",
        "Motor protection relays",
        "Dry-run prevention",
        "Overload and phase protection",
        "Status indication LEDs"
      ],
      features: [
        "Outdoor-ready design",
        "Enhanced electrical protection",
        "Reliable long-life operation",
        "Easy maintenance access",
        "Compact panel footprint",
        "Safety-focused architecture"
      ],
      applications: [
        "Outdoor pump rooms",
        "Industrial yards",
        "Commercial water systems",
        "Agriculture setups",
        "Utility installations"
      ],
      pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf"
    },
    {
      id: "mini-pumpguru",
      name: "Mini Pumpguru",
      category: "Residential Range",
      tagline: "Compact Smart Pump Controller",
      description: "Compact mini controller for dependable pump automation in homes and small businesses with essential protections and easy operation.",
      image: "/assets/pump-guru/images/7.png",
      displayType: "Mini Digital Panel",
      specifications: [
        "Compact enclosure",
        "Single/three-phase compatibility",
        "Dry-run protection",
        "Overload protection",
        "Simple status indication",
        "Easy wiring terminals"
      ],
      features: [
        "Space-saving design",
        "Quick installation",
        "Low maintenance",
        "Reliable pump start/stop",
        "Essential safety logic",
        "Cost-effective control"
      ],
      applications: [
        "Homes",
        "Small shops",
        "Apartments",
        "Farm houses",
        "Small utility pumps"
      ],
      pdfLink: "/assets/pump-guru/pdfs/MiniPumpGuru.pdf"
    },
    {
      id: "one-phase-miniguru",
      name: "1 Ph Miniguru",
      category: "Residential Range",
      tagline: "Single Phase Mini Controller",
      description: "Single-phase mini controller with compact form factor and essential protection functions for domestic and light commercial pumping.",
      image: "/assets/pump-guru/images/9.png",
      displayType: "Mini Panel",
      specifications: [
        "Single-phase motor support",
        "Dry-run prevention",
        "Overload protection",
        "Voltage monitoring",
        "Auto/manual operation",
        "Compact mounting"
      ],
      features: [
        "Simple control logic",
        "Reliable switching",
        "Protection-first design",
        "Small footprint",
        "Easy commissioning",
        "Economical deployment"
      ],
      applications: [
        "Residential homes",
        "Small buildings",
        "Borewell systems",
        "Village water supply",
        "Retail spaces"
      ],
      pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf"
    },
    {
      id: "oht-filing",
      name: "OHT Filing",
      category: "Commercial Solutions",
      tagline: "Overhead Tank Filling Controller",
      description: "Dedicated controller for automated overhead tank filling with level-based control, dry-run safety, and overflow prevention.",
      image: "/assets/pump-guru/images/12.png",
      displayType: "Tank Automation Panel",
      specifications: [
        "Tank level input support",
        "Automatic pump operation",
        "Overflow prevention",
        "Low-level cutoff",
        "Dry-run protection",
        "Visual status indicators"
      ],
      features: [
        "Automated tank refill",
        "Water-saving operation",
        "Pump health protection",
        "Simple setup",
        "Reliable level control",
        "Consistent water availability"
      ],
      applications: [
        "Housing societies",
        "Commercial buildings",
        "Schools",
        "Hospitals",
        "Hostels"
      ],
      pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf"
    },
    {
      id: "dryrun-protector",
      name: "Dryrun Protector",
      category: "Specialized Solutions",
      tagline: "Dedicated Dry-Run Safety Module",
      description: "Protection module to prevent motor damage due to dry-run conditions and unstable water source behavior.",
      image: "/assets/pump-guru/images/13.png",
      displayType: "Protection Module",
      specifications: [
        "Dry-run detection",
        "Automatic trip and reset",
        "Motor current sensing",
        "Delay timer configuration",
        "Visual fault indication",
        "Wide voltage tolerance"
      ],
      features: [
        "Pump life extension",
        "Damage prevention",
        "Fast fault response",
        "Low power operation",
        "Simple integration",
        "High reliability"
      ],
      applications: [
        "Borewell pumps",
        "Agriculture pumps",
        "Municipal supply",
        "Commercial pumping",
        "Water treatment intakes"
      ],
      pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf"
    },
    {
      id: "threephase-preventer",
      name: "3Phase Preventer",
      category: "Industrial Grade",
      tagline: "Three-Phase Electrical Protection",
      description: "Protection device for phase failure, imbalance, and abnormal electrical conditions to secure three-phase pump and motor systems.",
      image: "/assets/pump-guru/images/14.png",
      displayType: "Protection Relay Unit",
      specifications: [
        "Phase-failure detection",
        "Phase-sequence monitoring",
        "Over/under-voltage protection",
        "Trip delay settings",
        "Relay output control",
        "LED fault diagnostics"
      ],
      features: [
        "Motor safety assurance",
        "Stable three-phase operation",
        "Rapid fault isolation",
        "Compact installation",
        "Industrial reliability",
        "Reduced downtime"
      ],
      applications: [
        "Industrial motors",
        "RO plants",
        "Commercial pump rooms",
        "Agricultural pump sets",
        "Utility infrastructure"
      ],
      pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf"
    }
  ];

  const categories = [
    {
      name: "Industrial Grade",
      icon: <Factory className="w-12 h-12" />,
      description: "RO Plants & Three Phase Controllers for heavy-duty applications",
      color: "blue"
    },
    {
      name: "Premium Solutions",
      icon: <Gauge className="w-12 h-12" />,
      description: "MAX Pump Guru with advanced IoT and AI-powered optimization",
      color: "cyan"
    },
    {
      name: "Specialized Solutions",
      icon: <Shield className="w-12 h-12" />,
      description: "Flameproof & Level Guru for specialized industrial requirements",
      color: "red"
    },
    {
      name: "Commercial Solutions",
      icon: <Building2 className="w-12 h-12" />,
      description: "PumpGuru Standard for commercial buildings and facilities",
      color: "green"
    },
    {
      name: "Residential Range",
      icon: <Home className="w-12 h-12" />,
      description: "Single Phase Controllers and Mini Guru for homes",
      color: "purple"
    }
  ];

  const applications = [
    {
      title: "Industrial Solutions",
      description: "Heavy-duty RO plants & controllers",
      image: "https://images.unsplash.com/photo-1654703681413-a8efff3d47cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdhdGVyfGVufDF8fHx8MTc2OTE2ODU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Mega Business & Residential Complexes",
      description: "Large-scale commercial & residential water management",
      image: "https://images.unsplash.com/photo-1707301454103-1384f7c535d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbXBsZXglMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkxNjg1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Gated Communities & Housing",
      description: "Smart water systems for residential communities",
      image: "https://images.unsplash.com/photo-1630912121186-16bea8d6f241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFwYXJ0bWVudCUyMGNvbXBsZXh8ZW58MXx8fHwxNzY5MTY4NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Farming & Agriculture",
      description: "Irrigation & water distribution systems",
      image: "https://images.unsplash.com/photo-1768984418592-5b54e4fe7af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtaW5nJTIwYWdyaWN1bHR1cmUlMjBpcnJpZ2F0aW9ufGVufDF8fHx8MTc2OTE2ODU5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Hospitals & Healthcare",
      description: "Critical water supply & medical facility management",
      image: "https://images.unsplash.com/photo-1764885415563-8b868745e9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjkxMzk3NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Town Planning & Smart Cities",
      description: "Municipal water infrastructure & urban planning",
      image: "https://images.unsplash.com/photo-1700750772130-5036ba1e1b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3duJTIwY2l0eSUyMHBsYW5uaW5nfGVufDF8fHx8MTc2OTE2ODU5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Universities & Educational Campuses",
      description: "Campus-wide water distribution & management",
      image: "https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY5MTY3MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Mega Public Places",
      description: "Stadiums, malls & large public infrastructure",
      image: "https://images.unsplash.com/photo-1762625368913-a005c896556b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBwbGF6YSUyMGNyb3dkZWR8ZW58MXx8fHwxNzY5MTY4NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Temples & Religious Tourism",
      description: "Large-scale water management for religious sites",
      image: "https://images.unsplash.com/photo-1672332157466-127b80372628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjByZWxpZ2lvdXMlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY5MTY4NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;
  const selectedProduct = products.find((product) => product.id === selectedProductId) ?? null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('solutions')}
            className="mb-8 text-white hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Solutions
          </Button>

          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
              🏆 Small | Efficient | Economical
            </Badge>
            <h1 className="text-5xl md:text-6xl mb-4">
              Complete PumpGuru Product Range
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              Advanced digital displays with intelligent control for every application
            </p>
          </div>

          {/* Hero Product Image */}
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden bg-white/5 backdrop-blur border-white/10">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="/assets/pump-guru/images/1.png"
                  alt="Complete PumpGuru Product Range"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Product Range Overview */}
        <section className="mb-16">
          <h2 className="text-4xl text-center mb-12">Product Range Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                  selectedCategory === category.name ? 'ring-2 ring-blue-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex p-4 rounded-full bg-${category.color}-100 text-${category.color}-600 mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl mb-3">{category.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          {selectedCategory && (
            <div className="text-center mt-6">
              <Button 
                variant="outline" 
                onClick={() => setSelectedCategory(null)}
                size="sm"
              >
                Show All Products
              </Button>
            </div>
          )}
        </section>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Droplets className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="mb-2">Water Management</h4>
                <p className="text-sm text-gray-600">Intelligent water distribution</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                <h4 className="mb-2">Energy Efficient</h4>
                <p className="text-sm text-gray-600">Optimized power consumption</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h4 className="mb-2">Motor Protection</h4>
                <p className="text-sm text-gray-600">Advanced safety features</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Wifi className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h4 className="mb-2">IoT Connected</h4>
                <p className="text-sm text-gray-600">Remote monitoring & control</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-4xl text-center mb-12">Complete Product Gallery</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {product.category}
                      </Badge>
                      <h3 className="text-2xl mb-1">{product.name}</h3>
                      <p className="text-sm text-blue-600 font-medium">
                        {product.tagline}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {product.displayType}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm mb-3 text-gray-800 flex items-center">
                      <Settings className="w-4 h-4 mr-2 text-blue-600" />
                      Key Specifications:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.specifications.slice(0, 6).map((spec, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-xs">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm mb-3 text-gray-800 flex items-center">
                      <Gauge className="w-4 h-4 mr-2 text-green-600" />
                      Smart Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 6).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="default"
                      className="flex-1"
                      onClick={() => setSelectedProductId(product.id)}
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open(product.pdfLink, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Applications Gallery */}
        <section className="mb-16">
          <h2 className="text-4xl text-center mb-12">Application Showcase</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white text-lg mb-1">{app.title}</h3>
                    <p className="text-white/80 text-sm">{app.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-2xl text-center">
          <h2 className="text-4xl mb-4">Ready to Upgrade Your Water Management?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Choose from our complete range of PumpGuru controllers designed for every application, 
            from residential homes to heavy industrial facilities.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => onNavigate('contact')}
            >
              Request a Quote
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open('https://www.automationind.com/aventek.html', '_blank')}
            >
              Download Complete Catalog
            </Button>
          </div>
        </section>
      </div>

      <Dialog
        open={Boolean(selectedProduct)}
        onOpenChange={(open: boolean) => {
          if (!open) {
            setSelectedProductId(null);
          }
        }}
      >
        {selectedProduct && (
          <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProduct.name}</DialogTitle>
              <DialogDescription className="text-base text-blue-600 font-medium">
                {selectedProduct.tagline}
              </DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">{selectedProduct.category}</Badge>
                  <Badge variant="secondary">{selectedProduct.displayType}</Badge>
                </div>
                <p className="text-gray-700">{selectedProduct.description}</p>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-sm mb-2 text-gray-800 flex items-center">
                    <Settings className="w-4 h-4 mr-2 text-blue-600" />
                    Key Specifications
                  </h4>
                  <div className="space-y-2">
                    {selectedProduct.specifications.map((spec, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm mb-2 text-gray-800 flex items-center">
                    <Gauge className="w-4 h-4 mr-2 text-green-600" />
                    Smart Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm mb-2 text-gray-800">Applications</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProduct.applications.map((application, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <CheckCircle className="w-3 h-3 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-3 justify-end pt-2">
              <Button
                variant="outline"
                onClick={() => window.open(selectedProduct.pdfLink, '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button onClick={() => setSelectedProductId(null)}>
                Close
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}