import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, ArrowRight, BookOpen, FileText, TrendingUp } from "lucide-react";
import { useState } from "react";
import { BlogDetailView } from "./BlogDetailView";

export function InsightsPage() {
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const blogPosts = [
    {
      title: "Redefining Smart Operations: AI-Powered People & Vehicle Counting Solution Live at Dorf Ketal!",
      excerpt: "We're thrilled to announce the successful implementation of our AI-powered People & Vehicle Counting Solution at Dorf Ketal Chemical India Ltd., Dadra Nagar Plant — driving a new era of smart, safe, and efficient operations!",
      category: "Case Study",
      date: "March 10, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1768796372063-4da660e034b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcGxhbnQlMjBzZWN1cml0eSUyMGNhbWVyYXMlMjBtb25pdG9yaW5nfGVufDF8fHx8MTc3MzY2MTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      source: "Aventek",
      fullContent: "This cutting-edge solution seamlessly integrates AI-driven algorithms, intelligent cameras, and a unified dashboard to deliver real-time insights into: People movement & occupancy levels, Vehicle traffic (inbound & outbound), Flow analytics for optimized on-site management. With an impressive 95–99% accuracy, the system empowers teams with live dashboards, enabling remote monitoring of traffic and occupancy — saving time, boosting security, and enhancing operational control. Whether deployed on-premise or on cloud, the platform ensures flexibility, data reliability, and effortless scalability — tailored to every client's environment. This commercial deployment at Dorf Ketal's Dadra Nagar Plant has already showcased remarkable precision and performance, reinforcing our commitment to innovation and excellence.",
      videoUrl: "https://lnkd.in/dXNVYKH6",
      tags: ["AI", "SmartAutomation", "PeopleCounting", "VehicleCounting", "IndustrialInnovation", "SmartInfrastructure", "DorfKetal", "TechnologyForSafety", "OperationalExcellence"]
    },
    {
      title: "Successful Implementation of Auto People & Vehicle Counting Solution at Dorf Ketal Chemical India Ltd., Dadra Nagar Plant",
      excerpt: "We are proud to announce the successful deployment of our advanced Auto People and Vehicle Counting Solution at the Dorf Ketal Chemical India Ltd., Dadra Nagar Plant, supporting efficient traffic and occupancy management.",
      category: "Case Study",
      date: "March 8, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1680440784528-64ac2af6a08d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWhpY2xlJTIwY291bnRpbmclMjB0cmFmZmljJTIwbW9uaXRvcmluZyUyMHN5c3RlbXxlbnwxfHx8fDE3NzM2NjEwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      source: "Aventek",
      fullContent: "Using our cutting-edge AI-driven cameras and sensors, integrated with a versatile dashboard, we now provide real-time insights into: Traffic flow (inbound and outbound) of personnel and vehicles, Accurate occupancy levels inside the plant, Vehicle movement and overall flow management. Our solution achieves nearly 99% accuracy with an optimized infrastructure and suitable environmental conditions. The dashboard offers an easy-to-use interface, enabling remote monitoring of flow and occupancy from any location, thereby saving time and reducing effort for security and operational teams. Data can be shared locally or on the cloud, based on client requirements, ensuring seamless integration and flexibility. Our robust application is simple to install, with clear guidelines for smooth deployment. This commercial installation at Dorf Ketal's Mundra plant has demonstrated excellent performance with high precision, contributing to enhanced operational efficiency.",
      videoUrls: ["https://lnkd.in/dSJXn67K", "https://lnkd.in/dBmQAfVR"],
      tags: ["AI", "SmartTrafficManagement", "OccupancyMonitoring", "Innovation", "DorfKetal", "Automation", "SmartSolutions", "DataDriven"],
      contact: "+91 9769113545"
    },
    {
      title: "How People Counting Technology is Revolutionizing Retail Analytics",
      excerpt: "Discover how AI-powered people counting solutions are transforming retail operations, improving customer experience, and optimizing space utilization in stores and shopping centers.",
      category: "People Counting",
      date: "February 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGN1c3RvbWVyc3xlbnwxfHx8fDE3NTgyNzQxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      source: "Grace Communication"
    },
    {
      title: "Smart Plastic Bottle Recycling: Technology for a Sustainable Future",
      excerpt: "Exploring innovative automated recycling machines that are making plastic bottle recycling easier, more efficient, and rewarding for communities across India.",
      category: "Sustainability",
      date: "February 20, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwYm90dGxlJTIwcmVjeWNsaW5nfGVufDF8fHx8MTc1ODI3NDE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      source: "Grace Communication"
    },
    {
      title: "The Real Danger of PET Bottle Waste — Global Facts and a Roadmap for Collective Action",
      excerpt: "PET bottles are convenient, but their lifecycle and mismanagement place a heavy burden on ecosystems and future generations. This article presents key global statistics, a case study of Norway's DRS success, and a collective roadmap for turning PET into a circular resource.",
      category: "Sustainability",
      date: "March 16, 2026",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1759868412016-8b7da190992a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFzdGljJTIwYm90dGxlJTIwcmVjeWNsaW5nJTIwZW52aXJvbm1lbnRhbCUyMHN1c3RhaW5hYmlsaXR5fGVufDF8fHx8MTc3MzY2Mjc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      source: "Aventek",
      fullContent: {
        sections: [
          {
            heading: "Why PET bottle waste is a growing problem",
            body: "PET production and disposal rates have surged globally. While PET is recyclable in principle, low collection rates and contamination mean much ends up in landfills or the environment. When PET degrades it forms microplastics that enter soils and waterways, with potential long-term health and ecological impacts. Producing virgin PET depends on fossil feedstocks, contributing to greenhouse gas emissions."
          },
          {
            heading: "Global statistics (select)",
            bullets: [
              "Global plastic production: ~367 million metric tonnes in 2020. (PlasticsEurope, 2021)",
              "Only ~9% of plastic ever produced has been recycled; ~79% has accumulated in landfills or nature. (Geyer et al., 2017 / Our World in Data)",
              "Annual leakage to oceans: ~8–12 million tonnes per year. (Jambeck et al., 2015)",
              "High litter prevalence: PET bottles are among top items found in global cleanups. (Break Free From Plastic)"
            ]
          },
          {
            heading: "Case Study — Norway Deposit Return Scheme (Infinitum)",
            body: "Norway operates a nationwide deposit-return scheme that refunds a small deposit when consumers return PET bottles and cans. This system achieves return rates typically between 90–97%, producing high-quality rPET and drastically reducing litter. The program succeeds due to clear financial incentive, accessible return points (retail and reverse vending machines), centralized processing, and collaboration across government, industry, and civil society.",
            stats: [
              { label: "Return rate", value: "90–97%" },
              { label: "Impact", value: "High-quality rPET, reduced litter" }
            ]
          },
          {
            heading: "A collective roadmap",
            bullets: [
              "Design for circularity: mono-material bottles, recyclable caps, and refillable systems where practical.",
              "Collection & incentives: deposit-return schemes, curbside consistency, and integrating informal collectors.",
              "Recycling & technology: improved mechanical recycling, targeted chemical recycling, and scaling local reprocessing.",
              "Policy & markets: EPR, recycled-content mandates, and incentives for rPET demand.",
              "Behavior change: consumer education, school programs, and reward-based return apps.",
              "Digital tools & traceability: QR/product passports to track materials and improve sorting."
            ]
          },
          {
            heading: "Measuring progress",
            body: "Important KPIs include capture rates (percent returned), recycled content in new bottles (rPET share), litter and microplastic indices, and lifecycle emissions reductions."
          }
        ],
        conclusion: "PET bottle pollution is not inevitable. When producers, governments, communities, and innovators align on design, policy, technology, and behavior, PET can become a circular resource. Collective action now will protect future generations."
      },
      references: [
        "https://www.plasticseurope.org/en/resources/publications/4312-plastics-the-facts-2021",
        "https://ourworldindata.org/plastic-pollution",
        "https://www.unep.org/resources/report/no-way-out",
        "https://www.breakfreefromplastic.org/globalbrandaudit/",
        "https://www.infinitum.no/en/infinitum/about-infinitum",
        "https://www.oecd.org/environment/waste/high-performing-deposit-refund-systems.pdf"
      ]
    },
    {
      title: "Auto People Counting Case Study: Shopping Mall Success Story",
      excerpt: "How a major shopping mall implemented our people counting system to increase operational efficiency by 35% and improve visitor experience through real-time analytics.",
      category: "Case Study",
      date: "February 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTgyNzQxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      source: "Grace Communication"
    },
    {
      title: "The Future of IoT in Industrial Automation",
      excerpt: "Exploring how IoT technologies are revolutionizing manufacturing processes and operational efficiency.",
      category: "IoT",
      date: "February 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1638734255280-8bae834f8297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzZW5zb3JzJTIwY29ubmVjdGVkJTIwZGV2aWNlc3xlbnwxfHx8fDE3NTgyNzQxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      source: "Aventek"
    },
    {
      title: "AI-Powered Analytics: Transforming Data into Insights",
      excerpt: "How artificial intelligence is enabling smarter decision-making in industrial environments.",
      category: "AI",
      date: "February 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG1hbnVmYWN0dXJpbmclMjBmYWN0b3J5fGVufDF8fHx8MTc1ODI3NDE1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      source: "Aventek"
    },
    {
      title: "Smart Cities: Building Connected Urban Infrastructure",
      excerpt: "The role of IoT and automation in creating sustainable, efficient urban environments.",
      category: "Smart Cities",
      date: "January 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1738162837329-2f2a2cdebb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4MjcwNjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      source: "Aventek"
    }
  ];

  const caseStudies = [
    {
      title: "People Counting Implementation at Premier Retail Chain",
      client: "Leading Retail Chain - 50+ Stores",
      result: "45% improvement in staffing efficiency",
      description: "Deployed Auto People Counting across multiple locations, providing real-time footfall analytics and enabling data-driven decisions for staff allocation and marketing strategies.",
      category: "People Counting"
    },
    {
      title: "Automated Plastic Bottle Recycling Machine Deployment",
      client: "Municipal Corporation & Educational Institutions",
      result: "10,000+ bottles recycled per month",
      description: "Implemented smart recycling machines with reward systems, significantly increasing recycling participation and environmental awareness in communities.",
      category: "Sustainability"
    },
    {
      title: "Smart Mall Analytics: Footfall Optimization",
      client: "Premium Shopping Mall - Mumbai",
      result: "35% increase in conversion rate",
      description: "Auto People Counting system provided insights into peak hours, customer flow patterns, and zone popularity, enabling targeted marketing and improved tenant placement.",
      category: "People Counting"
    },
    {
      title: "Manufacturing Efficiency Boost",
      client: "Leading Automotive OEM",
      result: "40% reduction in downtime",
      description: "Implementation of smart monitoring systems resulted in significant operational improvements.",
      category: "Automation"
    },
    {
      title: "Smart Water Management with Pump Guru",
      client: "Municipal Corporation",
      result: "30% water savings",
      description: "Pump Guru system optimized water distribution for 100,000+ residents.",
      category: "Water Management"
    },
    {
      title: "Transportation Hub People Counting",
      client: "Major Railway Station",
      result: "Enhanced crowd management & safety",
      description: "Real-time people counting enabled better crowd control during peak hours and improved passenger safety protocols.",
      category: "People Counting"
    }
  ];

  const resources = [
    {
      title: "IoT Implementation Guide",
      type: "Whitepaper",
      description: "Comprehensive guide to implementing IoT solutions in industrial environments."
    },
    {
      title: "Pump Guru Technical Manual",
      type: "Product Manual",
      description: "Detailed technical specifications and installation guide for Pump Guru systems."
    },
    {
      title: "Automation Trends 2024",
      type: "Report",
      description: "Annual report on emerging trends in industrial automation and smart technology."
    }
  ];

  // If a blog is selected, show the detail view
  if (selectedBlog) {
    return <BlogDetailView post={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">Insights</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest trends, insights, and success stories in automation and IoT
          </p>
        </div>

        {/* Latest Blog Posts */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-3xl">Latest Blog Posts</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg">{post.title}</h3>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedBlog(post)}
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <TrendingUp className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-3xl">Success Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">{study.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{study.client}</p>
                  <div className="text-2xl text-primary mb-4">{study.result}</div>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <Button variant="outline" size="sm">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FileText className="w-6 h-6 mr-3 text-primary" />
            <h2 className="text-3xl">Resources & Documentation</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                  <h3 className="text-lg mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button variant="outline" size="sm">
                    Download
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights, case studies, and product updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </section>
      </div>
    </div>
  );
}