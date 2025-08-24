import { Header } from './Header';
import { Footer } from './Footer';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const handleCategorySelect = (category: string) => {
    onNavigate('category');
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} onSelectCategory={handleCategorySelect} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About BeautyHealth Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your trusted source for expert beauty, health, and wellness advice
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At BeautyHealth Blog, we believe that everyone deserves to feel confident and healthy in their own skin. Our mission is to provide evidence-based, accessible, and practical advice that empowers you to make informed decisions about your beauty and health journey.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We focus on three core areas: skincare, haircare, and healthcare, providing comprehensive guides, tips, and insights that help you achieve your personal wellness goals naturally and effectively.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Articles Published</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">50K+</div>
                    <div className="text-sm text-gray-600">Monthly Readers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">3</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                  alt="Beauty and wellness"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1494790108755-2616c9fc8c85?w=150&h=150&fit=crop&crop=face"
                    alt="Dr. Sarah Johnson"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-gray-800 mb-2">Dr. Sarah Johnson</h3>
                  <p className="text-green-600 mb-3">Dermatologist & Founder</p>
                  <p className="text-gray-600 text-sm">
                    10+ years experience in dermatology with expertise in natural skincare solutions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Maya Patel"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-gray-800 mb-2">Maya Patel</h3>
                  <p className="text-green-600 mb-3">Hair Care Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Certified trichologist specializing in natural hair care and treatments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
                    alt="Dr. Emily Chen"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-bold text-gray-800 mb-2">Dr. Emily Chen</h3>
                  <p className="text-green-600 mb-3">Wellness Expert</p>
                  <p className="text-gray-600 text-sm">
                    Nutritionist and wellness coach with focus on holistic health approaches.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔬</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Science-Based</h3>
                <p className="text-gray-600 text-sm">All our advice is backed by scientific research and expert knowledge.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌿</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Natural Approach</h3>
                <p className="text-gray-600 text-sm">We prioritize natural and gentle solutions for sustainable wellness.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💛</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Inclusive</h3>
                <p className="text-gray-600 text-sm">Beauty and health advice for all skin types, hair types, and lifestyles.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Educational</h3>
                <p className="text-gray-600 text-sm">We believe in empowering you with knowledge to make informed choices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Story</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                BeautyHealth Blog was born from a simple idea: beauty and health should be accessible, natural, and sustainable for everyone. Founded in 2021 by Dr. Sarah Johnson, our platform started as a small collection of evidence-based articles about natural skincare routines.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                What began as a passion project quickly grew into a comprehensive resource for thousands of readers seeking authentic, science-backed advice about skincare, haircare, and overall wellness. We noticed a gap in the beauty industry - too many products promising quick fixes, and not enough focus on understanding the 'why' behind healthy practices.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Today, we're proud to be a trusted voice in the wellness community, helping people develop sustainable routines that not only make them look good but feel confident and healthy from the inside out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}