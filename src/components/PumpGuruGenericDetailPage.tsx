import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Download, FileText, CheckCircle } from "lucide-react";

interface PumpGuruGenericDetailPageProps {
  onNavigate: (page: string) => void;
  productId: string;
}

interface GenericProduct {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  displayType: string;
  specifications: string[];
  features: string[];
  applications: string[];
  pdfLink: string;
}

const genericProducts: Record<string, GenericProduct> = {
  "flameproof-pump-guru": {
    id: "flameproof-pump-guru",
    name: "FLAMEPROOF PUMP GURU",
    category: "Specialized Solutions",
    tagline: "Explosion-Proof Pump Control for Hazardous Areas",
    description:
      "Certified flameproof pump controller designed for explosive and hazardous environments with ruggedized construction for Zone 1 & Zone 2 applications.",
    image: "/assets/pump-guru/images/6.png",
    displayType: "Explosion-Proof Enclosure",
    specifications: [
      "ATEX/IECEx certified flameproof enclosure",
      "Three-phase motor control (up to 15 HP)",
      "IP66/IP67 protection rating",
      "Explosion-proof display window",
      "Zone 1 & Zone 2 certified",
      "Intrinsically safe circuits",
    ],
    features: [
      "Explosion-proof design",
      "Hazardous area compliance",
      "Emergency shutdown support",
      "Spark-free operation",
      "Remote monitoring capable",
      "Corrosion-resistant structure",
    ],
    applications: [
      "Petrochemical plants",
      "Oil & gas facilities",
      "Chemical processing units",
      "Refineries",
      "Hazardous storage areas",
    ],
    pdfLink: "/assets/pump-guru/pdfs/FlameproofPumpGuru.pdf",
  },
  "max-pump-guru": {
    id: "max-pump-guru",
    name: "MAX Pump Guru",
    category: "Premium Solutions",
    tagline: "Maximum Performance & Advanced IoT Integration",
    description:
      "Premium controller with AI-powered optimization, multi-pump orchestration, cloud connectivity, and advanced analytics for enterprise water systems.",
    image: "/assets/pump-guru/images/8.png",
    displayType: "10-inch Color HMI",
    specifications: [
      "10-inch full-color touchscreen HMI",
      "Multi-pump control (up to 8 pumps)",
      "AI-powered optimization algorithms",
      "4G/Wi-Fi/Ethernet connectivity",
      "Predictive maintenance analytics",
      "Cloud dashboard integration",
    ],
    features: [
      "AI-based pump optimization",
      "Advanced scheduling",
      "Energy cost optimization",
      "Comprehensive data logging",
      "Mobile & web dashboards",
      "Automated reporting workflows",
    ],
    applications: [
      "Smart cities infrastructure",
      "Large commercial complexes",
      "Industrial water systems",
      "Municipal water supply",
      "Multi-building campuses",
    ],
    pdfLink: "/assets/pump-guru/pdfs/MaxPumpGuru.pdf",
  },
  "lever-guru": {
    id: "lever-guru",
    name: "Lever Guru",
    category: "Specialized Solutions",
    tagline: "Float Switch & Level Sensor Controller",
    description:
      "Dedicated level control system supporting multiple float switches and level sensors for complex tank management requirements.",
    image: "/assets/pump-guru/images/11.png",
    displayType: "LED Display Panel",
    specifications: [
      "Multi-level sensor support (up to 8 levels)",
      "Float switch compatibility",
      "Ultrasonic/capacitive sensor support",
      "Three-phase motor control",
      "Programmable level setpoints",
      "Relay output expansion",
    ],
    features: [
      "Multi-sensor compatibility",
      "Flexible level programming",
      "Sequential tank filling",
      "Overflow protection",
      "Low-level alarms",
      "Easy sensor calibration",
    ],
    applications: [
      "Multi-tank systems",
      "Industrial tank farms",
      "Water treatment plants",
      "Agricultural reservoirs",
      "Sequential tank control",
    ],
    pdfLink: "/assets/pump-guru/pdfs/LeverGuru.pdf",
  },
  "pumpguru-standard": {
    id: "pumpguru-standard",
    name: "PumpGuru Standard",
    category: "Commercial Solutions",
    tagline: "Smart Controller for Commercial Buildings",
    description:
      "Intelligent three-phase controller built for commercial facilities requiring reliable pressure and level-based water management.",
    image: "/assets/pump-guru/images/1.png",
    displayType: "4.3-inch Touch Display",
    specifications: [
      "4.3-inch color touchscreen",
      "Three-phase motor control (1-10 HP)",
      "Pressure sensor integration",
      "Level sensor compatibility",
      "Dry-run protection",
      "Wi-Fi/GSM connectivity",
    ],
    features: [
      "Auto/Manual mode switching",
      "Multi-tank management",
      "Smart scheduling",
      "Energy optimization",
      "Fault diagnostics",
      "Remote monitoring",
    ],
    applications: [
      "Commercial complexes",
      "Hotels & resorts",
      "Hospitals",
      "Educational institutions",
      "Shopping malls",
    ],
    pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf",
  },
  "ip-protection-panel": {
    id: "ip-protection-panel",
    name: "IP Protection Panel",
    category: "Specialized Solutions",
    tagline: "Weather-Protected Pump Control",
    description:
      "IP-rated protective control panel engineered for reliable outdoor and harsh-environment pump operation.",
    image: "/assets/pump-guru/images/5.png",
    displayType: "Protected Panel",
    specifications: [
      "IP-rated enclosure",
      "Weather-resistant components",
      "Motor protection relays",
      "Dry-run prevention",
      "Overload and phase protection",
      "Status indication LEDs",
    ],
    features: [
      "Outdoor-ready design",
      "Enhanced electrical protection",
      "Long-life operation",
      "Easy maintenance access",
      "Compact panel footprint",
      "Safety-focused architecture",
    ],
    applications: [
      "Outdoor pump rooms",
      "Industrial yards",
      "Commercial water systems",
      "Agriculture setups",
      "Utility installations",
    ],
    pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf",
  },
  "mini-pumpguru": {
    id: "mini-pumpguru",
    name: "Mini Pumpguru",
    category: "Residential Range",
    tagline: "Compact Smart Pump Controller",
    description:
      "Compact mini controller for dependable pump automation in homes and small businesses with essential protections.",
    image: "/assets/pump-guru/images/7.png",
    displayType: "Mini Digital Panel",
    specifications: [
      "Compact enclosure",
      "Single/three-phase compatibility",
      "Dry-run protection",
      "Overload protection",
      "Status indication",
      "Easy wiring terminals",
    ],
    features: [
      "Space-saving design",
      "Quick installation",
      "Low maintenance",
      "Reliable start/stop logic",
      "Essential safety logic",
      "Cost-effective control",
    ],
    applications: [
      "Homes",
      "Small shops",
      "Apartments",
      "Farm houses",
      "Small utility pumps",
    ],
    pdfLink: "/assets/pump-guru/pdfs/MiniPumpGuru.pdf",
  },
  "one-phase-miniguru": {
    id: "one-phase-miniguru",
    name: "1 Ph Miniguru",
    category: "Residential Range",
    tagline: "Single Phase Mini Controller",
    description:
      "Single-phase mini controller with compact design and essential protection functions for domestic and light commercial pumping.",
    image: "/assets/pump-guru/images/9.png",
    displayType: "Mini Panel",
    specifications: [
      "Single-phase motor support",
      "Dry-run prevention",
      "Overload protection",
      "Voltage monitoring",
      "Auto/manual operation",
      "Compact mounting",
    ],
    features: [
      "Simple control logic",
      "Reliable switching",
      "Protection-first design",
      "Small footprint",
      "Easy commissioning",
      "Economical deployment",
    ],
    applications: [
      "Residential homes",
      "Small buildings",
      "Borewell systems",
      "Village water supply",
      "Retail spaces",
    ],
    pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf",
  },
  "oht-filing": {
    id: "oht-filing",
    name: "OHT Filing",
    category: "Commercial Solutions",
    tagline: "Overhead Tank Filling Controller",
    description:
      "Dedicated controller for automatic overhead tank filling with level-based control and overflow prevention.",
    image: "/assets/pump-guru/images/12.png",
    displayType: "Tank Automation Panel",
    specifications: [
      "Tank level input support",
      "Automatic pump operation",
      "Overflow prevention",
      "Low-level cutoff",
      "Dry-run protection",
      "Visual status indicators",
    ],
    features: [
      "Automated tank refill",
      "Water-saving operation",
      "Pump health protection",
      "Simple setup",
      "Reliable level control",
      "Consistent water availability",
    ],
    applications: [
      "Housing societies",
      "Commercial buildings",
      "Schools",
      "Hospitals",
      "Hostels",
    ],
    pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf",
  },
  "dryrun-protector": {
    id: "dryrun-protector",
    name: "Dryrun Protector",
    category: "Specialized Solutions",
    tagline: "Dedicated Dry-Run Safety Module",
    description:
      "Protection module that prevents motor damage caused by dry-run conditions and unstable source water behavior.",
    image: "/assets/pump-guru/images/13.png",
    displayType: "Protection Module",
    specifications: [
      "Dry-run detection",
      "Automatic trip and reset",
      "Motor current sensing",
      "Delay timer configuration",
      "Visual fault indication",
      "Wide voltage tolerance",
    ],
    features: [
      "Pump life extension",
      "Damage prevention",
      "Fast fault response",
      "Low power operation",
      "Simple integration",
      "High reliability",
    ],
    applications: [
      "Borewell pumps",
      "Agriculture pumps",
      "Municipal supply",
      "Commercial pumping",
      "Water treatment intakes",
    ],
    pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf",
  },
  "threephase-preventer": {
    id: "threephase-preventer",
    name: "3Phase Preventer",
    category: "Industrial Grade",
    tagline: "Three-Phase Electrical Protection",
    description:
      "Electrical protection device for phase failure, imbalance, and abnormal line conditions in three-phase pump systems.",
    image: "/assets/pump-guru/images/14.png",
    displayType: "Protection Relay Unit",
    specifications: [
      "Phase-failure detection",
      "Phase-sequence monitoring",
      "Over/under-voltage protection",
      "Trip delay settings",
      "Relay output control",
      "LED fault diagnostics",
    ],
    features: [
      "Motor safety assurance",
      "Stable three-phase operation",
      "Rapid fault isolation",
      "Compact installation",
      "Industrial reliability",
      "Reduced downtime",
    ],
    applications: [
      "Industrial motors",
      "RO plants",
      "Commercial pump rooms",
      "Agricultural pump sets",
      "Utility infrastructure",
    ],
    pdfLink: "/assets/pump-guru/pdfs/PumpGuru.pdf",
  },
};

export function PumpGuruGenericDetailPage({ onNavigate, productId }: PumpGuruGenericDetailPageProps) {
  const product = genericProducts[productId];

  if (!product) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl mb-6">Product Not Found</h1>
          <p className="text-gray-600 mb-8">This product detail page is not available.</p>
          <Button onClick={() => onNavigate("pump-guru-overview")}>Back to PumpGuru Overview</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => onNavigate("pump-guru-overview")} className="mb-4">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to PumpGuru Products
          </Button>
          <div className="text-sm text-gray-600">
            <span>PumpGuru</span> <span className="mx-2">›</span> <span>{product.name}</span>
          </div>
        </div>

        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">{product.category}</Badge>
          <h1 className="text-4xl md:text-5xl mb-4">{product.name}</h1>
          <p className="text-xl text-blue-600 mb-4">{product.tagline}</p>
          <p className="text-gray-600 max-w-3xl mx-auto">{product.description}</p>
        </div>

        <section className="mb-12">
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full min-h-[320px] object-cover" />
              <CardContent className="p-8">
                <Badge variant="secondary" className="mb-4">{product.displayType}</Badge>
                <h2 className="text-2xl mb-4">Why {product.name}?</h2>
                <p className="text-gray-700 mb-6">{product.description}</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={() => window.open(product.pdfLink, "_blank")}> 
                    <Download className="mr-2 w-4 h-4" />
                    Download Brochure
                  </Button>
                  <Button variant="outline" onClick={() => onNavigate("contact")}>
                    <FileText className="mr-2 w-4 h-4" />
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-4">Key Specifications</h3>
              <div className="space-y-3">
                {product.specifications.map((spec) => (
                  <div key={spec} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-4">Smart Features</h3>
              <div className="space-y-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-4">Applications</h3>
              <div className="space-y-3">
                {product.applications.map((application) => (
                  <div key={application} className="flex items-start text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{application}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
