import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ArrowLeft, 
  Download, 
  Cpu, 
  Zap, 
  Shield, 
  Settings,
  CheckCircle,
  FileText,
  ExternalLink
} from "lucide-react";
import controllersHardwareImage from 'figma:asset/d0ec05a1645528a4f3554b88841581a2e57f5516.png';

interface InterfaceRelayBoardsPageProps {
  onNavigate: (page: string) => void;
}

export function InterfaceRelayBoardsPage({ onNavigate }: InterfaceRelayBoardsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "RS232/RS485 to Ethernet Converter",
      model: "AVT-ETH-232/485",
      description: "Industrial-grade serial to Ethernet converter for seamless integration of legacy devices with modern networks.",
      image: "https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcm5ldCUyMG5ldHdvcmslMjBjb252ZXJ0ZXIlMjBtb2R1bGUlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3Mzc0ODU4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: [
        "Supports RS232/RS485 serial ports",
        "10/100Mbps Ethernet interface",
        "TCP/IP, UDP, Modbus TCP protocols",
        "Operating temp: -40°C to +75°C",
        "DIN rail mountable",
        "Isolated power supply protection"
      ],
      applications: [
        "Factory automation",
        "Building management systems",
        "SCADA integration",
        "Remote monitoring"
      ],
      pdfLink: "https://www.automationind.com/pdfs/aventek-eth-converter.pdf",
      features: [
        "Plug and play configuration",
        "Web-based management",
        "Dual watchdog protection",
        "Industrial-grade design"
      ]
    },
    {
      id: 2,
      name: "8 Channel Relay Interface Module",
      model: "AVT-RLY-08",
      description: "High-current relay module with 8 independent channels for industrial control applications.",
      image: "https://images.unsplash.com/photo-1729944950511-e9c71556cfd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWxheSUyMG1vZHVsZSUyMGluZHVzdHJpYWwlMjBjb250cm9sJTIwYm9hcmR8ZW58MXx8fHwxNzczNzQ4NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: [
        "8 SPDT relay outputs",
        "Contact rating: 10A @ 250VAC",
        "Optical isolation: 2500V",
        "RS485/Modbus RTU interface",
        "Wide input voltage: 9-36VDC",
        "LED status indicators"
      ],
      applications: [
        "Motor control",
        "Lighting automation",
        "Process control",
        "Safety systems"
      ],
      pdfLink: "https://www.automationind.com/pdfs/aventek-relay-module.pdf",
      features: [
        "Surge protection",
        "Modbus RTU protocol",
        "Compact DIN rail design",
        "Industrial temperature range"
      ]
    },
    {
      id: 3,
      name: "16 Channel Digital I/O Module",
      model: "AVT-DIO-16",
      description: "Versatile digital input/output module with configurable channels for diverse automation needs.",
      image: "https://images.unsplash.com/photo-1743862558369-5dcea79ccbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5wdXQlMjBvdXRwdXQlMjBtb2R1bGUlMjBjaXJjdWl0JTIwYm9hcmR8ZW58MXx8fHwxNzczNzQ4NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: [
        "16 configurable I/O channels",
        "Input voltage: 3.3V to 24V",
        "Output current: 500mA per channel",
        "RS485/Ethernet interface",
        "Modbus RTU/TCP support",
        "LED status per channel"
      ],
      applications: [
        "PLC integration",
        "Sensor interfacing",
        "Actuator control",
        "Data acquisition"
      ],
      pdfLink: "https://www.automationind.com/pdfs/aventek-dio-module.pdf",
      features: [
        "Flexible configuration",
        "Hot-swappable connectors",
        "ESD protection",
        "Stackable design"
      ]
    },
    {
      id: 4,
      name: "Analog Input Interface Module",
      model: "AVT-AI-08",
      description: "Precision analog input module for accurate signal acquisition and process monitoring.",
      image: "https://images.unsplash.com/photo-1743862558369-5dcea79ccbff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFsb2clMjBpbnRlcmZhY2UlMjBtb2R1bGUlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NzM3NDg1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: [
        "8 analog input channels",
        "16-bit resolution",
        "Input range: 0-10V, 4-20mA",
        "Sampling rate: 100Hz",
        "±0.1% accuracy",
        "Modbus RTU/TCP interface"
      ],
      applications: [
        "Temperature monitoring",
        "Pressure sensing",
        "Flow measurement",
        "Level monitoring"
      ],
      pdfLink: "https://www.automationind.com/pdfs/aventek-analog-input.pdf",
      features: [
        "High-precision ADC",
        "Programmable ranges",
        "Over-voltage protection",
        "Calibration support"
      ]
    },
    {
      id: 5,
      name: "PWM Output Controller",
      model: "AVT-PWM-04",
      description: "Precision PWM controller for variable speed drives and proportional control applications.",
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQV00lMjBjb250cm9sbGVyJTIwZWxlY3Ryb25pYyUyMGNpcmN1aXR8ZW58MXx8fHwxNzczNzQ4NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: [
        "4 PWM output channels",
        "Frequency: 1Hz to 20kHz",
        "Duty cycle: 0-100%",
        "Output current: 2A per channel",
        "RS485/Modbus interface",
        "12-bit resolution"
      ],
      applications: [
        "Variable speed drives",
        "Valve control",
        "LED dimming",
        "Heater control"
      ],
      pdfLink: "https://www.automationind.com/pdfs/aventek-pwm-controller.pdf",
      features: [
        "Adjustable frequency",
        "Soft-start capability",
        "Fault detection",
        "Remote configuration"
      ]
    },
    {
      id: 6,
      name: "USB to Multi-Serial Adapter",
      model: "AVT-USB-4P",
      description: "Industrial USB adapter providing four isolated serial ports for diverse communication needs.",
      image: "https://images.unsplash.com/photo-1766325693346-6279a63b1fba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVU0IlMjBzZXJpYWwlMjBhZGFwdGVyJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzM3NDg1OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: [
        "4 independent serial ports",
        "Supports RS232/RS485/RS422",
        "USB 2.0 interface",
        "Baud rate: up to 921.6Kbps",
        "Optical isolation: 2500V",
        "Windows/Linux drivers"
      ],
      applications: [
        "Multi-device communication",
        "Test and measurement",
        "Industrial PC connectivity",
        "Protocol conversion"
      ],
      pdfLink: "https://www.automationind.com/pdfs/aventek-usb-adapter.pdf",
      features: [
        "Plug and play",
        "LED status indicators",
        "Surge protection",
        "Compact design"
      ]
    },
    {
      id: 7,
      name: "GSM/GPRS Modem Interface",
      model: "AVT-GSM-M1",
      description: "Industrial cellular modem for remote monitoring and control via GSM/GPRS networks.",
      image: "https://images.unsplash.com/photo-1668163921919-b4255e7c1dc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHU00lMjBtb2RlbSUyMGluZHVzdHJpYWwlMjBkZXZpY2V8ZW58MXx8fHwxNzczNzQ4NTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: [
        "Quad-band GSM/GPRS",
        "SMS and data transmission",
        "AT command interface",
        "RS232/RS485 ports",
        "Dual SIM support",
        "Power: 9-36VDC"
      ],
      applications: [
        "Remote telemetry",
        "Alarm notification",
        "M2M communication",
        "Field data logging"
      ],
      pdfLink: "https://www.automationind.com/pdfs/aventek-gsm-modem.pdf",
      features: [
        "Automatic reconnection",
        "SMS command control",
        "FOTA updates",
        "Industrial temperature"
      ]
    },
    {
      id: 8,
      name: "CAN Bus Interface Module",
      model: "AVT-CAN-01",
      description: "High-speed CAN bus interface for automotive and industrial network integration.",
      image: "https://images.unsplash.com/photo-1478810505243-bf4b28879382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDQU4lMjBidXMlMjBpbnRlcmZhY2UlMjBhdXRvbW90aXZlJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzczNzQ4NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specifications: [
        "CAN 2.0A/B compliant",
        "Baud rate: up to 1Mbps",
        "USB/RS232 interface",
        "Programmable filters",
        "Bus termination support",
        "Windows/Linux SDK"
      ],
      applications: [
        "Vehicle diagnostics",
        "Industrial automation",
        "Robotics control",
        "Testing and analysis"
      ],
      pdfLink: "https://www.automationind.com/pdfs/aventek-can-interface.pdf",
      features: [
        "High-speed performance",
        "Multiple protocol support",
        "Error detection",
        "Flexible configuration"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('solutions')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Solutions
        </Button>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <Cpu className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl mb-2">Interface Relay Boards</h1>
              <p className="text-xl text-gray-600">
                Industrial-Grade Communication & Control Modules
              </p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Aventek's comprehensive range of interface relay boards and control modules provides reliable, 
            industrial-grade solutions for diverse automation and control applications. Designed for harsh 
            industrial environments with superior quality and performance.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg mb-2">Industrial Grade</h3>
              <p className="text-sm text-gray-600">Built for harsh environments</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg mb-2">High Performance</h3>
              <p className="text-sm text-gray-600">Reliable and efficient operation</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6 text-center">
              <Settings className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg mb-2">Easy Integration</h3>
              <p className="text-sm text-gray-600">Modbus & standard protocols</p>
            </CardContent>
          </Card>
          <Card className="bg-white">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-lg mb-2">Proven Quality</h3>
              <p className="text-sm text-gray-600">30+ years of expertise</p>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <section className="mb-12">
          <h2 className="text-3xl mb-6">Product Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-2">
                    {product.model}
                  </Badge>
                  <h3 className="text-xl mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm mb-2 text-gray-800">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                    <Button
                      size="sm"
                      variant="default"
                      onClick={() => window.open(product.pdfLink, '_blank')}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      PDF
                    </Button>
                  </div>
                </CardContent>

                {/* Expanded Details */}
                {selectedProduct === product.id && (
                  <div className="border-t bg-gray-50 p-6">
                    <h4 className="text-sm mb-3 text-gray-800">Technical Specifications:</h4>
                    <ul className="space-y-2 mb-4">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="text-blue-600 mr-2">•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-sm mb-3 text-gray-800">Applications:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>

                    <h4 className="text-sm mb-3 text-gray-800">All Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Reference Link */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg mb-2">View Complete Product Catalog</h3>
                <p className="text-sm text-gray-600">
                  Access detailed specifications, datasheets, and technical documentation for all Aventek products.
                </p>
              </div>
              <Button
                variant="default"
                onClick={() => window.open('https://www.automationind.com/aventek.html', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Catalog
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg text-center mt-12">
          <h2 className="text-3xl mb-4">Need Custom Solutions?</h2>
          <p className="text-xl mb-6 text-white/90">
            Our engineering team can design custom interface modules for your specific requirements.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600"
            onClick={() => onNavigate('contact')}
          >
            Contact Our Engineers
          </Button>
        </section>
      </div>
    </div>
  );
}