import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { FirstFoldHomePage } from "./components/FirstFoldHomePage";
import { AboutPage } from "./components/AboutPage";
import { SolutionsPage } from "./components/SolutionsPage";
import { IndustriesPage } from "./components/IndustriesPage";
import { InnovationPage } from "./components/InnovationPage";
import { InsightsPage } from "./components/InsightsPage";
import { ContactPage } from "./components/ContactPage";
import { HomePage } from "./components/HomePage";
import { AutoPeopleCountingPage } from "./components/AutoPeopleCountingPage";
import { PumpGuruPage } from "./components/PumpGuruPage";
import { PumpGuruOverviewPage } from "./components/PumpGuruOverviewPage";
import { SecuritySystemsPage } from "./components/SecuritySystemsPage";
import { ReverseVendingPage } from "./components/ReverseVendingPage";
import { IndustryAutomationPage } from "./components/IndustryAutomationPage";
import { IoTAISolutionsPage } from "./components/IoTAISolutionsPage";
import { BlockchainIntegrationPage } from "./components/BlockchainIntegrationPage";
import { ControllersHardwarePage } from "./components/ControllersHardwarePage";
import { InterfaceRelayBoardsPage } from "./components/InterfaceRelayBoardsPage";
import { ROPlantThreePhasePage } from "./components/ROPlantThreePhasePage";
import { ThreePhaseControllerPage } from "./components/ThreePhaseControllerPage";
import { ThreePhaseMiniGuruPage } from "./components/ThreePhaseMiniGuruPage";
import { SinglePhaseControllerPage } from "./components/SinglePhaseControllerPage";
import { PumpGuruGenericDetailPage } from "./components/PumpGuruGenericDetailPage";
import { CookieConsent } from "./components/CookieConsent";
import { Toaster } from "./components/ui/sonner";

// Aventek Corporate Website - v1.0
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // SEO and page management
  useEffect(() => {
    const pageData = {
      home: {
        title:
          "Aventek - Leading Industrial Automation & IoT Solutions Company India | 30+ Years Experience",
        description:
          "Aventek specializes in industrial automation, IoT AI solutions, smart security systems, and PLC programming. Trusted by 100+ OEMs across India for 30+ years.",
        keywords:
          "industrial automation, IoT solutions, AI technology, smart systems, PLC programming, people counting, water management, security systems, OEM partnerships, Industry 4.0",
      },
      about: {
        title:
          "About Aventek - 30+ Years Industrial Automation Excellence | Founded 1994",
        description:
          "Learn about Aventek's journey since 1994, our R&D excellence, OEM partnerships, and commitment to smart automation solutions across India.",
        keywords:
          "Aventek history, industrial automation company, R&D excellence, OEM partnerships, automation experience",
      },
      solutions: {
        title:
          "Industrial Automation Solutions - IoT, AI, Security Systems | Aventek",
        description:
          "Comprehensive automation solutions including PLC systems, IoT AI technology, security systems, and blockchain integration for industrial applications.",
        keywords:
          "automation solutions, PLC systems, IoT technology, security systems, blockchain integration, industrial solutions",
      },
      "auto-people-counting": {
        title:
          "AI People Counting System - Computer Vision Analytics | Aventek",
        description:
          "Advanced AI-powered people counting system with computer vision technology for accurate crowd analytics and space utilization optimization.",
        keywords:
          "people counting, crowd analytics, AI vision, computer vision, occupancy tracking, foot traffic analysis",
      },
      "pump-guru": {
        title:
          "PumpGuru - Smart Water Management IoT Solution | Aventek",
        description:
          "Intelligent water distribution system with AI optimization, predictive maintenance, and real-time monitoring for sustainable water management.",
        keywords:
          "smart water management, IoT pumps, water automation, predictive maintenance, intelligent irrigation",
      },
      "pump-guru-overview": {
        title:
          "PumpGuru Overview - Smart Water Management IoT Solution | Aventek",
        description:
          "Overview of PumpGuru, an intelligent water distribution system with AI optimization, predictive maintenance, and real-time monitoring for sustainable water management.",
        keywords:
          "smart water management, IoT pumps, water automation, predictive maintenance, intelligent irrigation, overview",
      },
      "security-systems": {
        title:
          "Industrial Security Systems - Smart Surveillance Solutions | Aventek",
        description:
          "Multi-protocol rugged hardware for industrial and city security with comprehensive monitoring, access control, and threat detection.",
        keywords:
          "security systems, industrial protection, smart surveillance, access control, threat detection",
      },
      "reverse-vending": {
        title:
          "Reverse Vending Machines - Smart Plastic Bottle Recycling | Aventek",
        description:
          "Smart automated recycling systems that incentivize plastic bottle recycling through intelligent collection and reward mechanisms.",
        keywords:
          "reverse vending, plastic recycling, smart recycling, automated collection, digital rewards, sustainability",
      },
      "industry-automation": {
        title:
          "Industrial Automation Solutions - PLC Programming & SCADA Systems | Aventek",
        description:
          "Custom PLC programming, SCADA development, and industrial automation solutions for manufacturing, oil & gas, pharmaceuticals, and more.",
        keywords:
          "industrial automation, PLC programming, SCADA systems, process control, manufacturing automation, industrial communication",
      },
      "iot-ai-solutions": {
        title:
          "IoT & AI Solutions - Smart Connectivity & Analytics Platform | Aventek",
        description:
          "Comprehensive IoT ecosystem with AI-driven analytics, edge computing, and seamless device integration for smart business solutions.",
        keywords:
          "IoT solutions, AI analytics, smart connectivity, edge computing, IoT platform, intelligent systems",
      },
      "blockchain-integration": {
        title:
          "Blockchain Integration - Smart Contracts & Supply Chain Solutions | Aventek",
        description:
          "Secure blockchain solutions for industrial applications, supply chain management, smart contracts, and data integrity systems.",
        keywords:
          "blockchain integration, smart contracts, supply chain blockchain, data integrity, decentralized identity, IoT blockchain",
      },
      "controllers-interfaces": {
        title:
          "Custom Controllers & Hardware - Embedded Systems & HMI Solutions | Aventek",
        description:
          "Specialized embedded systems, controllers, and human-machine interfaces designed for complex industrial applications.",
        keywords:
          "custom controllers, embedded systems, HMI interfaces, industrial hardware, control panels, ruggedized hardware",
      },
      "interface-relay-boards": {
        title:
          "Interface Relay Boards - Smart Control & Communication | Aventek",
        description:
          "High-performance relay boards for smart control and communication in industrial automation systems.",
        keywords:
          "relay boards, smart control, communication, industrial automation, automation systems, control boards",
      },
      "ro-plant-three-phase": {
        title:
          "RO Plant Three Phase Controller - Advanced Reverse Osmosis Control | Aventek",
        description:
          "Industrial-grade RO plant controller with three-phase motor control, TDS monitoring, and comprehensive water treatment automation.",
        keywords:
          "RO plant controller, reverse osmosis automation, three phase control, water treatment, industrial RO system",
      },
      "three-phase-controller": {
        title:
          "Three Phase Controller - Heavy Duty Industrial Pump Control | Aventek",
        description:
          "Robust three-phase pump controller for heavy-duty industrial applications with advanced protection and control features.",
        keywords:
          "three phase controller, industrial pump control, heavy duty motor control, phase monitoring, pump protection",
      },
      "three-phase-mini-guru": {
        title:
          "3 Phase Mini Guru - Compact Three Phase Controller | Aventek",
        description:
          "Miniaturized three-phase controller with essential smart features for space-constrained applications and budget-conscious projects.",
        keywords:
          "compact controller, mini three phase, space saving controller, budget pump control, small industrial pumps",
      },
      "single-phase-controller": {
        title:
          "Single Phase Controller - Residential Pump Control | Aventek",
        description:
          "Compact single-phase controller for residential and small commercial applications with essential smart features and reliable protection.",
        keywords:
          "single phase controller, residential pump control, home water systems, domestic pumps, small commercial",
      },
      "flameproof-pump-guru": {
        title:
          "Flameproof Pump Guru - Hazardous Area Pump Control | Aventek",
        description:
          "Explosion-proof flameproof Pump Guru controller for hazardous industrial areas with safety-focused operation and motor protection.",
        keywords:
          "flameproof controller, hazardous area pump control, explosion proof pump panel, industrial safety controller",
      },
      "max-pump-guru": {
        title: "MAX Pump Guru - Advanced IoT Pump Controller | Aventek",
        description:
          "Premium MAX Pump Guru controller with AI optimization, cloud connectivity, advanced analytics, and enterprise pump management.",
        keywords:
          "max pump guru, iot pump controller, ai pump optimization, smart water automation",
      },
      "lever-guru": {
        title: "Lever Guru - Level Sensor Pump Controller | Aventek",
        description:
          "Lever Guru controller for float switch and multi-level sensor applications with flexible tank and level automation.",
        keywords:
          "lever guru, level controller, float switch controller, tank automation",
      },
      "pumpguru-standard": {
        title:
          "PumpGuru Standard - Commercial Pump Controller | Aventek",
        description:
          "PumpGuru Standard three-phase controller for commercial facilities with intelligent pressure and water level management.",
        keywords:
          "pumpguru standard, commercial pump controller, building water automation",
      },
      "ip-protection-panel": {
        title: "IP Protection Panel - Outdoor Pump Control | Aventek",
        description:
          "Weather-resistant IP protection panel for reliable outdoor pump operation and enhanced electrical safety.",
        keywords:
          "ip protection panel, outdoor pump panel, weatherproof motor control",
      },
      "mini-pumpguru": {
        title: "Mini Pumpguru - Compact Pump Controller | Aventek",
        description:
          "Mini Pumpguru compact controller for homes and small businesses with essential pump protection and automation.",
        keywords:
          "mini pumpguru, compact pump controller, home pump automation",
      },
      "one-phase-miniguru": {
        title: "1 Ph Miniguru - Single Phase Mini Controller | Aventek",
        description:
          "1 Ph Miniguru compact single-phase pump controller with dry-run and overload protection for domestic applications.",
        keywords:
          "one phase miniguru, single phase mini controller, domestic pump control",
      },
      "oht-filing": {
        title: "OHT Filing - Overhead Tank Filling Controller | Aventek",
        description:
          "OHT Filing controller for automatic overhead tank filling with overflow prevention and dry-run safety.",
        keywords:
          "oht filling controller, overhead tank automation, automatic tank filling",
      },
      "dryrun-protector": {
        title: "Dryrun Protector - Pump Dry-Run Protection | Aventek",
        description:
          "Dryrun Protector module to prevent motor damage caused by dry-run conditions in pump installations.",
        keywords:
          "dryrun protector, dry run protection relay, pump motor safety",
      },
      "threephase-preventer": {
        title: "3Phase Preventer - Three-Phase Protection Unit | Aventek",
        description:
          "3Phase Preventer protection unit for phase failure, phase sequence, and abnormal electrical conditions.",
        keywords:
          "three phase preventer, phase failure protection, motor protection device",
      },
    };

    const page =
      pageData[currentPage as keyof typeof pageData] ||
      pageData.home;
    document.title = page.title;

    // Update meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]',
    );
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", page.description);

    // Update meta keywords
    let metaKeywords = document.querySelector(
      'meta[name="keywords"]',
    );
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute("content", page.keywords);
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <FirstFoldHomePage onNavigate={handleNavigate} />
        );
      case "about":
        return <AboutPage />;
      case "solutions":
        return <SolutionsPage onNavigate={handleNavigate} />;
      case "industries":
        return <IndustriesPage />;
      case "innovation":
        return <InnovationPage />;
      case "insights":
        return <InsightsPage />;
      case "contact":
        return <ContactPage />;
      case "auto-people-counting":
        return (
          <AutoPeopleCountingPage onNavigate={handleNavigate} />
        );
      case "pump-guru":
        return <PumpGuruPage onNavigate={handleNavigate} />;
      case "pump-guru-overview":
        return <PumpGuruOverviewPage onNavigate={handleNavigate} />;
      case "security-systems":
        return (
          <SecuritySystemsPage onNavigate={handleNavigate} />
        );
      case "reverse-vending":
        return (
          <ReverseVendingPage onNavigate={handleNavigate} />
        );
      case "industry-automation":
        return (
          <IndustryAutomationPage onNavigate={handleNavigate} />
        );
      case "iot-ai-solutions":
        return (
          <IoTAISolutionsPage onNavigate={handleNavigate} />
        );
      case "blockchain-integration":
        return (
          <BlockchainIntegrationPage
            onNavigate={handleNavigate}
          />
        );
      case "controllers-interfaces":
        return (
          <ControllersHardwarePage
            onNavigate={handleNavigate}
          />
        );
      case "interface-relay-boards":
        return (
          <InterfaceRelayBoardsPage
            onNavigate={handleNavigate}
          />
        );
      case "ro-plant-three-phase":
        return (
          <ROPlantThreePhasePage onNavigate={handleNavigate} />
        );
      case "three-phase-controller":
        return (
          <ThreePhaseControllerPage
            onNavigate={handleNavigate}
          />
        );
      case "three-phase-mini-guru":
        return (
          <ThreePhaseMiniGuruPage
            onNavigate={handleNavigate}
          />
        );
      case "single-phase-controller":
        return (
          <SinglePhaseControllerPage
            onNavigate={handleNavigate}
          />
        );
      case "flameproof-pump-guru":
      case "max-pump-guru":
      case "lever-guru":
      case "pumpguru-standard":
      case "ip-protection-panel":
      case "mini-pumpguru":
      case "one-phase-miniguru":
      case "oht-filing":
      case "dryrun-protector":
      case "threephase-preventer":
        return (
          <PumpGuruGenericDetailPage
            onNavigate={handleNavigate}
            productId={currentPage}
          />
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Aventek",
          description:
            "Leading industrial automation and IoT solutions company in India with 30+ years of experience",
          foundingDate: "1994",
          founder: "Nikhil R. Trivedi",
          address: {
            "@type": "PostalAddress",
            addressCountry: "India",
            addressRegion: "Maharashtra",
            addressLocality: "Pune",
          },
          sameAs: [],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+91-20-2345-6789",
            email: "info@aventek.com",
          },
          knowsAbout: [
            "Industrial Automation",
            "IoT Solutions",
            "AI Technology",
            "Smart Systems",
            "PLC Programming",
          ],
        })}
      </script>

      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      <main role="main" id="main-content">{renderPage()}</main>

      {/* Enhanced Footer with Dark Mode Support */}
      <footer
        className="bg-slate-900 dark:bg-slate-950 text-white py-12"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-blue-400">
                Aventek
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                Smart, sustainable, and strategic automation
                solutions that empower industries with
                reliability and innovation since 1994.
              </p>
              <div className="text-xs text-slate-400">
                <p>🏆 30+ Years Excellence</p>
                <p>🤝 100+ OEM Partners</p>
                <p>🌟 Industry 4.0 Leader</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-blue-400">
                Solutions
              </h4>
              <nav>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>
                    <button
                      onClick={() =>
                        handleNavigate("auto-people-counting")
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Auto People Counting
                    </button>
                    <div className="text-xs text-slate-400 mt-1">
                      <a
                        href="https://autopeoplecounting.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                      >
                        → Visit autopeoplecounting.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleNavigate("pump-guru")
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      PumpGuru IoT AI
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleNavigate("security-systems")
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Security Systems
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleNavigate("solutions")
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Blockchain Integration
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-blue-400">
                Company
              </h4>
              <nav>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>
                    <button
                      onClick={() => handleNavigate("about")}
                      className="hover:text-blue-400 transition-colors"
                    >
                      About Aventek
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleNavigate("innovation")
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Innovation & OEM
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        handleNavigate("industries")
                      }
                      className="hover:text-blue-400 transition-colors"
                    >
                      Industries
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavigate("insights")}
                      className="hover:text-blue-400 transition-colors"
                    >
                      Insights & Trends
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <h4 className="text-lg mb-4 text-blue-400">
                Contact Info
              </h4>
              <address className="space-y-2 text-sm text-slate-300 not-italic">
                <div>📍 M/s Aventek</div>
                <div>328, New Sonal Link Industrial Estate</div>
                <div>Bldg. No. 2- Link Road, Kanch Pada</div>
                <div>Malad(West), Mumbai-400064, India</div>
                <div>
                  📞{" "}
                  <a
                    href="tel:02244816938"
                    className="hover:text-blue-400"
                  >
                    022 44816938
                  </a>
                </div>
                <div>
                  ✉️{" "}
                  <a
                    href="mailto:jay@aventekindia.com"
                    className="hover:text-blue-400"
                  >
                    jay@aventekindia.com
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:milind@aventekindia.com"
                    className="hover:text-blue-400 ml-4"
                  >
                    milind@aventekindia.com
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:nikhil@aventekindia.com"
                    className="hover:text-blue-400 ml-4"
                  >
                    nikhil@aventekindia.com
                  </a>
                </div>
              </address>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
              <p>&copy; 2024 Aventek. All rights reserved.</p>
              <p className="mt-2 md:mt-0">
                🚀 30+ Years of Innovation in Industrial
                Automation | Trusted by 100+ OEMs
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <Toaster position="top-right" richColors />

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}