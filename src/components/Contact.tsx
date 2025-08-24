import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const handleCategorySelect = (category: string) => {
    onNavigate('category');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} onSelectCategory={handleCategorySelect} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions about beauty, health, or wellness? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Subject</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option value="">Select a topic</option>
                        <option value="skincare">Skincare Question</option>
                        <option value="haircare">Haircare Question</option>
                        <option value="healthcare">Healthcare Question</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Message</label>
                      <textarea
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 text-xl">📧</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
                        <p className="text-gray-600">hello@beautyhealthblog.com</p>
                        <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 text-xl">💬</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Social Media</h3>
                        <p className="text-gray-600">Follow us for daily tips</p>
                        <div className="flex space-x-2 mt-2">
                          <span className="text-green-600 cursor-pointer hover:text-green-700">Instagram</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-green-600 cursor-pointer hover:text-green-700">Facebook</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-green-600 cursor-pointer hover:text-green-700">Twitter</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 text-xl">⏰</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Response Time</h3>
                        <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM IST</p>
                        <p className="text-sm text-gray-500">Weekend messages answered on Monday</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <Card className="bg-gray-50">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Can you review my skincare routine?</h4>
                        <p className="text-sm text-gray-600">Yes! Send us your current routine and skin concerns for personalized advice.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Do you accept guest posts?</h4>
                        <p className="text-sm text-gray-600">We welcome expert contributors. Please include your credentials and topic ideas.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Are consultations available?</h4>
                        <p className="text-sm text-gray-600">Our team offers virtual consultations. Contact us for availability and pricing.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't miss out on the latest beauty and health tips. Subscribe to our newsletter for weekly insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800"
              />
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Join 50,000+ readers who trust our expert advice
            </p>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}