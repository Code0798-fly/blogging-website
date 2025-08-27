import { Header } from './Header';
import { Footer } from './Footer';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

// interface CategoryPageProps {
//   category: string;
//   onNavigate: (page: string) => void;
//   onSelectPost: (post: any) => void;
// }
type CategoryPageProps = {
  onNavigate: (path: string) => void;
  onSelectPost: (id: string) => void;
};

const categoryData = {
  skincare: {
    title: "Skincare & Beauty",
    description: "Expert tips and secrets for radiant, healthy skin that glows from within",
    icon: "✨",
    color: "from-pink-500 via-rose-500 to-pink-600",
    heroImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=400&fit=crop",
    posts: [
      {
        id: 1,
        title: "10-Step Korean Skincare Routine for Glass Skin",
        excerpt: "Achieve that coveted glass skin look with this comprehensive Korean skincare routine that celebrities swear by.",
        readTime: "8 min read",
        date: "2 days ago",
        author: "Dr. Sarah Kim",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=250&fit=crop",
        trending: true
      },
      {
        id: 4,
        title: "Natural DIY Face Masks for Every Skin Type",
        excerpt: "Discover kitchen ingredients that can transform your skin with these easy-to-make face mask recipes.",
        readTime: "6 min read",
        date: "1 week ago",
        author: "Beauty Expert Maya",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop",
        trending: false
      }
    ]
  },
  wellness: {
    title: "Wellness & Fitness",
    description: "Mind-body wellness practices for total health and inner radiance",
    icon: "🧘‍♀️",
    color: "from-purple-500 via-violet-500 to-purple-600",
    heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=400&fit=crop",
    posts: [
      {
        id: 2,
        title: "Mindful Morning Rituals for Inner Glow",
        excerpt: "Start your day with intention and create a morning routine that radiates beauty from within.",
        readTime: "6 min read",
        date: "3 days ago",
        author: "Maya Wellness",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
        trending: true
      },
      {
        id: 5,
        title: "Yoga Poses for Glowing Skin",
        excerpt: "These specific yoga poses increase blood circulation and promote natural radiance.",
        readTime: "10 min read",
        date: "5 days ago",
        author: "Yogi Priya",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=250&fit=crop",
        trending: false
      }
    ]
  },
  lifestyle: {
    title: "Lifestyle & Fashion",
    description: "Style inspiration and lifestyle tips for confident, beautiful living",
    icon: "👗",
    color: "from-orange-500 via-amber-500 to-orange-600",
    heroImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&h=400&fit=crop",
    posts: [
      {
        id: 3,
        title: "Fall Fashion Trends That Boost Confidence",
        excerpt: "Discover this season's must-have fashion pieces that will make you feel unstoppable.",
        readTime: "5 min read",
        date: "4 days ago",
        author: "Emma Style",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=250&fit=crop",
        trending: true
      },
      {
        id: 6,
        title: "Building a Capsule Wardrobe for Every Season",
        excerpt: "Create a timeless, versatile wardrobe with these essential pieces that never go out of style.",
        readTime: "7 min read",
        date: "1 week ago",
        author: "Fashion Guru Riya",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
        trending: false
      }
    ]
  },
  nutrition: {
    title: "Nutrition & Health",
    description: "Fuel your body and skin with the right nutrition for optimal beauty",
    icon: "🥗",
    color: "from-green-500 via-emerald-500 to-green-600",
    heroImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=400&fit=crop",
    posts: [
      {
        id: 7,
        title: "Superfoods for Radiant Skin & Hair",
        excerpt: "Nourish your beauty from within with these nutrient-packed foods that enhance your natural glow.",
        readTime: "7 min read",
        date: "2 days ago",
        author: "Chef Priya",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
        trending: true
      },
      {
        id: 8,
        title: "Detox Water Recipes for Clear Skin",
        excerpt: "Hydrate and detoxify with these delicious water infusions that promote clear, glowing skin.",
        readTime: "4 min read",
        date: "6 days ago",
        author: "Nutritionist Anita",
        image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=250&fit=crop",
        trending: false
      }
    ]
  },
  selfcare: {
    title: "Self-Care & Mental Health",
    description: "Nurture your inner peace for outer radiance and confidence",
    icon: "🌸",
    color: "from-pink-400 via-rose-400 to-pink-500",
    heroImage: "https://images.unsplash.com/photo-1591343612531-ac2d8f1266e6?w=1200&h=400&fit=crop",
    posts: [
      {
        id: 9,
        title: "Self-Care Sunday Rituals for Mental Wellness",
        excerpt: "Create sacred time for yourself with these rejuvenating self-care practices.",
        readTime: "8 min read",
        date: "1 day ago",
        author: "Therapist Lisa",
        image: "https://images.unsplash.com/photo-1591343612531-ac2d8f1266e6?w=400&h=250&fit=crop",
        trending: true
      },
      {
        id: 10,
        title: "Meditation Techniques for Stress Relief",
        excerpt: "Learn simple meditation practices that reduce stress and promote inner glow.",
        readTime: "6 min read",
        date: "4 days ago",
        author: "Mindfulness Coach Rohit",
        image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=250&fit=crop",
        trending: false
      }
    ]
  }
};

export function CategoryPage({  onNavigate, onSelectPost }: CategoryPageProps) {
 const { category } = useParams();
  const data = category
    ? categoryData[category as keyof typeof categoryData]
    : null;

  useEffect(() => {
    console.log("Category param:", category);
  }, [category]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="text-center">
          <span className="text-6xl mb-4 block">😔</span>
          <p className="text-xl text-foreground/70">Category not found</p>
        </div>
      </div>
    );
  }

  const handlePostClick = (post: any) => {
    onSelectPost({ ...post, category });
    onNavigate('post');
  };

  const handleCategorySelect = (cat: string) => {
    onNavigate('category');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/50 via-white to-purple-50/50">
      <Header onNavigate={onNavigate} onSelectCategory={handleCategorySelect} />
      
      {/* Category Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-85`}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">{data.icon}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {data.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <span>📚</span>
                <span>{data.posts.length}+ Articles</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⏱️</span>
                <span>Updated Weekly</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✨</span>
                <span>Expert Advice</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-6 bg-white/50 backdrop-blur-sm border-b border-pink-100">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-foreground/60">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <span>/</span>
           
            <span className="text-foreground font-medium">{data.title}</span>
          </nav>
        </div>
      </section>

      {/* Category Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="p-8 border-0 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="text-4xl font-bold text-primary mb-2">{data.posts.length * 12}+</div>
                <div className="text-foreground/70">Expert Articles</div>
              </Card>
              <Card className="p-8 border-0 bg-gradient-to-br from-purple-50 to-orange-50">
                <div className="text-4xl font-bold text-secondary mb-2">50K+</div>
                <div className="text-foreground/70">Happy Readers</div>
              </Card>
              <Card className="p-8 border-0 bg-gradient-to-br from-orange-50 to-pink-50">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <div className="text-foreground/70">Success Rate</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-orange-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest {data.title} Articles</h2>
              <p className="text-xl text-foreground/70">Curated content to help you glow</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {data.posts.map((post, index) => (
               <Link 
    key={post.id} 
    to={`/post/${post.title.replaceAll(' ','-').toLocaleLowerCase()}`}   
    className="block group" 
  >
                <Card 
                  key={post.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] border-0 bg-white/80 backdrop-blur-sm"
                  onClick={() => handlePostClick(post)}
                >
                  <div className="lg:flex">
                    <div className="lg:w-2/5 relative">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {post.trending && (
                        <div className="absolute top-4 left-4">
                          <Badge className="gradient-rainbow text-white border-0 animate-pulse">
                            🔥 Trending
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="lg:w-3/5 p-6 lg:p-8">
                      <Badge className={`mb-4 bg-gradient-to-r ${data.color} text-white border-0`}>
                        {data.title}
                      </Badge>
                      <h3 className="text-xl lg:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-foreground/70 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${data.color} rounded-full flex items-center justify-center`}>
                            <span className="text-white font-bold text-sm">{post.author[0]}</span>
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{post.author}</div>
                            <div className="text-sm text-foreground/60">{post.date} • {post.readTime}</div>
                          </div>
                        </div>
                        <Button className="gradient-primary hover:opacity-90 rounded-xl">
                          Read More →
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-16">Quick {data.title} Tips</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-0 bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-3">Expert Advice</h3>
                <p className="text-foreground/70">Get tips from certified professionals and industry experts</p>
              </Card>
              <Card className="p-8 border-0 bg-gradient-to-br from-purple-50 to-orange-50 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-3">Natural Solutions</h3>
                <p className="text-foreground/70">Discover gentle, natural approaches that work with your body</p>
              </Card>
              <Card className="p-8 border-0 bg-gradient-to-br from-orange-50 to-pink-50 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3">Proven Results</h3>
                <p className="text-foreground/70">Science-backed methods with real, measurable outcomes</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}