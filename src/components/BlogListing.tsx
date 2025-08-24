import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogListingProps {
  onNavigate: (page: string) => void;
  onSelectPost: (post: any) => void;
}

const allPosts = [
  {
    id: 1,
    title: "10 Essential Skincare Steps for Glowing Skin",
    excerpt: "Discover the complete skincare routine that will transform your skin and give you that natural glow.",
    category: "skincare",
    readTime: "5 min read",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Hair Care Secrets for Stronger, Healthier Hair",
    excerpt: "Learn the best practices for maintaining healthy hair from root to tip with natural ingredients.",
    category: "haircare",
    readTime: "7 min read",
    date: "December 12, 2024",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Boost Your Immunity Naturally",
    excerpt: "Simple lifestyle changes and natural remedies to strengthen your immune system.",
    category: "healthcare",
    readTime: "6 min read",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "The Science Behind Anti-Aging Serums",
    excerpt: "Understanding how anti-aging ingredients work and choosing the right products for your skin type.",
    category: "skincare",
    readTime: "8 min read",
    date: "December 8, 2024",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Natural Hair Masks for Every Hair Type",
    excerpt: "DIY hair mask recipes using natural ingredients that you can find in your kitchen.",
    category: "haircare",
    readTime: "6 min read",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Mindful Eating for Better Health",
    excerpt: "How to develop a healthy relationship with food and improve your overall well-being.",
    category: "healthcare",
    readTime: "10 min read",
    date: "December 3, 2024",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop"
  }
];

export function BlogListing({ onNavigate, onSelectPost }: BlogListingProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePostClick = (post: any) => {
    onSelectPost(post);
    onNavigate('post');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onNavigate('category');
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} onSelectCategory={handleCategorySelect} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Beauty & Health Articles
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore our collection of expert tips, guides, and insights for a healthier, more beautiful you.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-green-600 hover:bg-green-700' : 'border-green-500 text-green-600 hover:bg-green-50'}
            >
              All Articles
            </Button>
            <Button
              variant={selectedCategory === 'skincare' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('skincare')}
              className={selectedCategory === 'skincare' ? 'bg-green-600 hover:bg-green-700' : 'border-green-500 text-green-600 hover:bg-green-50'}
            >
              Skin Care
            </Button>
            <Button
              variant={selectedCategory === 'haircare' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('haircare')}
              className={selectedCategory === 'haircare' ? 'bg-green-600 hover:bg-green-700' : 'border-green-500 text-green-600 hover:bg-green-50'}
            >
              Hair Care
            </Button>
            <Button
              variant={selectedCategory === 'healthcare' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('healthcare')}
              className={selectedCategory === 'healthcare' ? 'bg-green-600 hover:bg-green-700' : 'border-green-500 text-green-600 hover:bg-green-50'}
            >
              Health Care
            </Button>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card 
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1"
                    onClick={() => handlePostClick(post)}
                  >
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="bg-green-100 text-green-700">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <h3 className="font-bold mb-2 text-gray-800">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                        <span className="text-green-600 hover:text-green-700 font-medium text-sm">
                          Read More →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}