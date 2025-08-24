import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPostProps {
  post: any;
  onNavigate: (page: string) => void;
}

const relatedPosts = [
  {
    id: 4,
    title: "The Science Behind Anti-Aging Serums",
    category: "skincare",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=200&fit=crop"
  },
  {
    id: 5,
    title: "Natural Hair Masks for Every Hair Type",
    category: "haircare",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&h=200&fit=crop"
  }
];

export function BlogPost({ post, onNavigate }: BlogPostProps) {
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Post not found</p>
      </div>
    );
  }

  const handleCategorySelect = (category: string) => {
    onNavigate('category');
  };

  const handleRelatedPostClick = (relatedPost: any) => {
    // This would typically update the current post and stay on the same page
    onNavigate('post');
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} onSelectCategory={handleCategorySelect} />
      
      {/* Article Header */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <button 
                  onClick={() => onNavigate('home')}
                  className="hover:text-green-600"
                >
                  Home
                </button>
                <span>/</span>
                <button 
                  onClick={() => onNavigate('blog')}
                  className="hover:text-green-600"
                >
                  Blog
                </button>
                <span>/</span>
                <span className="text-gray-700">{post.title}</span>
              </div>
            </nav>

            {/* Article Meta */}
            <div className="mb-8">
              <Badge className="mb-4 bg-green-100 text-green-700">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-500">
                <span>December 15, 2024</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>By Beauty Expert</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Understanding the Basics</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Steps to Follow</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Start with clean hands and a clean face</li>
                <li>Apply products in the correct order</li>
                <li>Be gentle with your skin</li>
                <li>Be consistent with your routine</li>
                <li>Listen to your skin's needs</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Expert Tips</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <blockquote className="border-l-4 border-green-500 pl-6 my-8 italic text-gray-600">
                "Remember, consistency is key when it comes to any beauty routine. Results take time, so be patient with yourself and your skin."
              </blockquote>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Conclusion</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            {/* Article Actions */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    💖 Like (124)
                  </Button>
                  <Button variant="outline" size="sm">
                    💬 Comment (23)
                  </Button>
                  <Button variant="outline" size="sm">
                    📤 Share
                  </Button>
                </div>
                <Button 
                  onClick={() => onNavigate('blog')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  ← Back to Blog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card 
                  key={relatedPost.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleRelatedPostClick(relatedPost)}
                >
                  <div className="flex">
                    <ImageWithFallback
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-24 h-24 object-cover"
                    />
                    <CardContent className="p-4 flex-1">
                      <Badge className="mb-2 bg-green-100 text-green-700 text-xs">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-bold text-sm mb-2 text-gray-800">
                        {relatedPost.title}
                      </h3>
                      <p className="text-xs text-gray-500">{relatedPost.readTime}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Comments (23)</h2>
            
            {/* Comment Form */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Leave a Comment</h3>
                <textarea
                  placeholder="Share your thoughts..."
                  className="w-full p-4 border border-gray-200 rounded-lg mb-4 h-24 resize-none"
                ></textarea>
                <Button className="bg-green-600 hover:bg-green-700">
                  Post Comment
                </Button>
              </CardContent>
            </Card>

            {/* Sample Comments */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">S</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-bold text-gray-800">Sarah Johnson</span>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    <p className="text-gray-700">
                      Great article! I've been following this routine for a month now and I can already see the difference in my skin. Thank you for sharing these tips!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">M</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-bold text-gray-800">Maya Patel</span>
                      <span className="text-gray-500 text-sm">5 days ago</span>
                    </div>
                    <p className="text-gray-700">
                      Would love to see more content about natural ingredients. Do you have any recommendations for sensitive skin?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}