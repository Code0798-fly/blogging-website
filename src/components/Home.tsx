import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
  onSelectPost: (post: any) => void;
  onSelectCategory: (category: string) => void;
}

const featuredPosts = [
  {
    id: 1,
    title: "10-Step Korean Skincare Routine for Glass Skin",
    excerpt: "Achieve that coveted glass skin look with this comprehensive Korean skincare routine that celebrities swear by.",
    category: "skincare",
    readTime: "8 min read",
    author: "Dr. Sarah Kim",
    date: "2 days ago",
    featured: true,
    trending: true
  },
  {
    id: 2,
    title: "Mindful Morning Rituals for Inner Glow",
    excerpt: "Start your day with intention and create a morning routine that radiates beauty from within.",
    category: "wellness",
    readTime: "6 min read",
    author: "Maya Wellness",
    date: "1 week ago"
  },
  {
    id: 3,
    title: "Fall Fashion Trends That Boost Confidence",
    excerpt: "Discover this season's must-have fashion pieces that will make you feel unstoppable.",
    category: "lifestyle",
    readTime: "5 min read",
    author: "Emma Style",
    date: "3 days ago"
  },
  {
    id: 4,
    title: "Superfoods for Radiant Skin & Hair",
    excerpt: "Nourish your beauty from within with these nutrient-packed foods that enhance your natural glow.",
    category: "nutrition",
    readTime: "7 min read",
    author: "Chef Priya",
    date: "5 days ago"
  }
];

const categories = [
  {
    name: "Skincare & Beauty",
    slug: "skincare",
    description: "Expert tips for glowing, healthy skin",
    icon: "✨",
    posts: 45,
    trending: true
  },
  {
    name: "Wellness & Fitness",
    slug: "wellness", 
    description: "Mind-body wellness for total health",
    icon: "🧘‍♀️",
    posts: 32,
    trending: false
  },
  {
    name: "Lifestyle & Fashion",
    slug: "lifestyle",
    description: "Style inspiration and life tips",
    icon: "👗",
    posts: 28,
    trending: false
  },
  {
    name: "Nutrition & Health",
    slug: "nutrition",
    description: "Fuel your body for optimal beauty",
    icon: "🥗",
    posts: 38,
    trending: false
  },
  {
    name: "Self-Care & Mental Health",
    slug: "selfcare",
    description: "Inner peace for outer radiance",
    icon: "🌸",
    posts: 25,
    trending: true
  }
];

export function Home({ onNavigate, onSelectPost, onSelectCategory }: HomeProps) {
  const handlePostClick = (post: any) => {
    onSelectPost(post);
    onNavigate('post');
  };

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    onNavigate('category');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={onNavigate} onSelectCategory={onSelectCategory} />
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 bg-gradient-to-br from-primary-light/20 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary-light/40 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-medium text-foreground/80">✨ Your Journey to Radiant Beauty Starts Here</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Glow Like Never</span>
              <br />
              <span className="text-foreground">Before</span>
            </h1>
            
            <p className="text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover the secrets to radiant skin, inner wellness, and confident living. 
              Transform your beauty routine with expert tips, natural remedies, and holistic wellness advice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark transition-colors duration-300 rounded-lg px-8 py-3"
                onClick={() => onNavigate('blog')}
              >
                ✨ Start Glowing Today
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary-light transition-colors rounded-lg px-8 py-3"
                onClick={() => onNavigate('about')}
              >
                Our Story
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500K+</div>
                <div className="text-sm text-foreground/60">Happy Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-foreground/60">Beauty Tips</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-foreground/60">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5⭐</div>
                <div className="text-sm text-foreground/60">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-primary text-white border-0 px-4 py-2 rounded-full mb-4">
                🔥 Trending Now
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Article</h2>
              <p className="text-xl text-foreground/70">Our most popular beauty secret this week</p>
            </div>
            
            <Card 
              className="overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02] border-gray-100"
              onClick={() => handlePostClick(featuredPosts[0])}
            >
              <div className="lg:flex">
                <div className="lg:w-1/2 relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop"
                    alt={featuredPosts[0].title}
                    className="w-full h-72 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white border-0">
                      ✨ Featured
                    </Badge>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center space-x-3 mb-6">
                    <Badge className="bg-primary-light text-primary border-0">
                      {featuredPosts[0].category}
                    </Badge>
                    <Badge variant="outline" className="border-primary text-primary">
                      🔥 Trending
                    </Badge>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground leading-tight">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{featuredPosts[0].author}</div>
                        <div className="text-sm text-foreground/60">{featuredPosts[0].date} • {featuredPosts[0].readTime}</div>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary-dark rounded-lg">
                      Read More →
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Categories</h2>
              <p className="text-xl text-foreground/70">Discover content tailored to your beauty journey</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card 
                  key={category.slug}
                  className={`group p-8 text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 border-gray-100 bg-white hover:bg-primary-light/20 ${index === 0 ? 'lg:col-span-2' : ''}`}
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    {category.trending && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🔥</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge className="bg-muted text-foreground/70 border-0">
                      {category.posts} articles
                    </Badge>
                    <span className="text-primary group-hover:text-primary-dark transition-colors duration-300 font-medium">
                      Explore →
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Glow Secrets</h2>
                <p className="text-xl text-foreground/70">Fresh beauty insights just for you</p>
              </div>
              <Button 
                variant="outline"
                onClick={() => onNavigate('blog')}
                className="hidden md:flex border-primary text-primary hover:bg-primary-light rounded-lg px-6"
              >
                View All Posts →
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.slice(1).map((post, index) => (
                <Card 
                  key={post.id}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 border-gray-100 bg-white"
                  onClick={() => handlePostClick(post)}
                >
                  <div className="relative">
                    <ImageWithFallback
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1522337360788-8b13dee7a37e' : 
                        index === 1 ? '1559599101-f09722fb4948' : 
                        '1490645935967-10de6ba17061'
                      }?w=400&h=250&fit=crop`}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-white border-0">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">{post.author[0]}</span>
                        </div>
                        <div>
                          <div className="text-xs font-medium text-foreground">{post.author}</div>
                          <div className="text-xs text-foreground/60">{post.date}</div>
                        </div>
                      </div>
                      <div className="text-xs text-foreground/60">{post.readTime}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12 md:hidden">
              <Button 
                variant="outline"
                onClick={() => onNavigate('blog')}
                className="border-primary text-primary hover:bg-primary-light rounded-lg px-8"
              >
                View All Posts →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-5xl mb-4 block">✨</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Glow Community</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Get exclusive beauty secrets, early access to new content, and personalized tips 
                delivered to your inbox every week.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email for glow tips"
                className="flex-1 px-6 py-3 rounded-lg text-foreground border-0 focus:ring-4 focus:ring-white/20"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 rounded-lg px-8 py-3 font-semibold">
                ✨ Join Now
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>Weekly newsletter</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🎁</span>
                <span>Exclusive content</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🚫</span>
                <span>No spam, promise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}