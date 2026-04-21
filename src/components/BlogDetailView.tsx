import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calendar, Clock, ArrowLeft, ExternalLink, Download, Share2 } from "lucide-react";

interface BlogDetailViewProps {
  post: any;
  onBack: () => void;
}

export function BlogDetailView({ post, onBack }: BlogDetailViewProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-2">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Insights
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-96 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="text-sm">{post.category}</Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl mb-4">{post.title}</h1>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between py-4 border-y border-gray-200">
            <div className="text-sm text-gray-500">
              By <span className="text-gray-900 font-medium">{post.source}</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Dorf Ketal Blog 1 */}
          {post.title === "Redefining Smart Operations: AI-Powered People & Vehicle Counting Solution Live at Dorf Ketal!" && (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                {post.fullContent}
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Real-time people movement & occupancy monitoring</li>
                  <li>✓ Vehicle traffic tracking (inbound & outbound)</li>
                  <li>✓ Flow analytics for optimized on-site management</li>
                  <li>✓ 95–99% accuracy rate with live dashboards</li>
                  <li>✓ Remote monitoring capabilities</li>
                  <li>✓ On-premise or cloud deployment options</li>
                </ul>
              </div>

              <div className="my-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Live Deployment Success</h3>
                <p className="text-gray-700 leading-relaxed">
                  This commercial deployment at Dorf Ketal's Dadra Nagar Plant has already showcased remarkable 
                  precision and performance, reinforcing our commitment to innovation and excellence.
                </p>
              </div>

              {post.videoUrl && (
                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Watch the Solution in Action</h4>
                  <a 
                    href={post.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo Video
                  </a>
                </div>
              )}

              {post.tags && (
                <div className="pt-6 border-t border-gray-200 mt-8">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Related Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-8">
                <p className="text-gray-700 italic">
                  A heartfelt thanks to the Dorf Ketal team and leadership for their trust, collaboration, 
                  and vision in embracing intelligent automation. Together, we're shaping smarter, safer, 
                  and more connected industrial environments!
                </p>
              </div>
            </div>
          )}

          {/* Dorf Ketal Blog 2 */}
          {post.title === "Successful Implementation of Auto People & Vehicle Counting Solution at Dorf Ketal Chemical India Ltd., Dadra Nagar Plant" && (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                {post.fullContent}
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Real-time Insights</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Traffic flow tracking (inbound & outbound)</li>
                    <li>• Accurate occupancy levels inside the plant</li>
                    <li>• Vehicle movement analytics</li>
                    <li>• Overall flow management</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Performance Metrics</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Nearly 99% accuracy rate</li>
                    <li>• Remote monitoring capability</li>
                    <li>• Easy-to-use dashboard interface</li>
                    <li>• Local or cloud data sharing</li>
                  </ul>
                </div>
              </div>

              {post.videoUrls && post.videoUrls.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Watch Installation Videos</h4>
                  <div className="space-y-2">
                    {post.videoUrls.map((url: string, index: number) => (
                      <a 
                        key={index}
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo Video {index + 1}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {post.contact && (
                <div className="bg-blue-600 text-white p-6 rounded-lg my-8">
                  <h4 className="text-lg font-semibold mb-2">Interested in this solution?</h4>
                  <p className="mb-3">Call us to discuss your requirements</p>
                  <a href={`tel:${post.contact}`} className="text-2xl font-bold">
                    {post.contact}
                  </a>
                </div>
              )}

              {post.tags && (
                <div className="pt-6 border-t border-gray-200 mt-8">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* PET Bottle Waste Blog */}
          {post.fullContent?.sections && (
            <div className="space-y-8">
              {post.fullContent.sections.map((section: any, index: number) => (
                <section key={index} className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900">{section.heading}</h2>
                  
                  {section.body && (
                    <p className="text-gray-700 leading-relaxed">{section.body}</p>
                  )}
                  
                  {section.bullets && (
                    <ul className="space-y-3 ml-4">
                      {section.bullets.map((bullet: string, idx: number) => (
                        <li key={idx} className="text-gray-700 leading-relaxed">
                          • {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.stats && (
                    <div className="grid md:grid-cols-2 gap-4 my-6">
                      {section.stats.map((stat: any, idx: number) => (
                        <div key={idx} className="bg-green-50 border-l-4 border-green-500 p-4">
                          <div className="text-2xl font-bold text-green-700">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

              {post.fullContent.conclusion && (
                <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 my-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Conclusion</h3>
                  <p className="text-gray-700 leading-relaxed italic">
                    {post.fullContent.conclusion}
                  </p>
                </div>
              )}

              {post.references && (
                <div className="pt-6 border-t border-gray-200 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">References & Sources</h3>
                  <ul className="space-y-2">
                    {post.references.map((ref: string, index: number) => (
                      <li key={index} className="text-sm">
                        <a 
                          href={ref} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 hover:underline flex items-center"
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          {ref}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Default content for other blogs */}
          {!post.fullContent && !post.videoUrl && post.title !== "Redefining Smart Operations: AI-Powered People & Vehicle Counting Solution Live at Dorf Ketal!" && post.title !== "Successful Implementation of Auto People & Vehicle Counting Solution at Dorf Ketal Chemical India Ltd., Dadra Nagar Plant" && (
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
              <p className="text-gray-700 leading-relaxed">
                This comprehensive article explores the latest developments in {post.category.toLowerCase()} 
                technology and its impact on modern industries. Our experts provide detailed insights based 
                on years of experience and real-world implementations.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Takeaways</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Industry-leading technology and innovation</li>
                  <li>✓ Real-world applications and case studies</li>
                  <li>✓ Expert insights and best practices</li>
                  <li>✓ Future trends and opportunities</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              Interested in Learning More?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Contact our team to discuss how our solutions can transform your operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Resources
                <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <div className="bg-gray-50 py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Related Articles</h3>
          <div className="text-gray-600">
            Explore more insights from our blog...
          </div>
        </div>
      </div>
    </div>
  );
}
