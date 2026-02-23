import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { categoryData } from "./data/blog";
import { Helmet } from 'react-helmet-async';
// ✅ all categories ka dummy data (expand kar sakte ho)
// const categoryData = {
//   skincare: {
//     posts: [
//       {
//         id: 1,
//         slug: "skincare-basics",
//         title: "The Ultimate Skincare Routine for Beginners",
//         category: "skincare",
//         readTime: "7 min read",
//         excerpt: "Learn the step by step skincare routine to achieve glowing skin...",
//         content: "Full skincare routine content with detailed steps, products, and expert advice...",
//         image:
//           "https://images.unsplash.com/photo-1583241801167-f7e4173b9c3b?w=800&h=500&fit=crop",
//       },
//       {
//         id: 4,
//         slug: "anti-aging-serums",
//         title: "The Science Behind Anti-Aging Serums",
//         category: "skincare",
//         readTime: "8 min read",
//         excerpt: "Discover how anti-aging serums actually work on skin...",
//         content: "Deep dive into anti-aging products, ingredients, and dermatologist reviews...",
//         image:
//           "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=500&fit=crop",
//       },
//     ],
//   },
//   haircare: {
//     posts: [
//       {
//         id: 2,
//         slug: "haircare-tips",
//         title: "5 Proven Haircare Tips for Healthy Hair",
//         category: "haircare",
//         readTime: "5 min read",
//         excerpt: "Simple habits that can transform your hair health naturally...",
//         content: "Here are 5 detailed habits, remedies, and expert-backed tips for strong hair...",
//         image:
//           "https://images.unsplash.com/photo-1600185365926-3a2b1e7b0f5d?w=800&h=500&fit=crop",
//       },
//       {
//         id: 5,
//         slug: "natural-hair-masks",
//         title: "Natural Hair Masks for Every Hair Type",
//         category: "haircare",
//         readTime: "6 min read",
//         excerpt: "DIY masks you can make from ingredients at home...",
//         content: "Step by step guide for natural masks suitable for dry, oily, curly, and straight hair...",
//         image:
//           "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&h=500&fit=crop",
//       },
//     ],
//   },
// };

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
console.log("slug>>",slug)
  let post: any = null;
  let category: any = null;

  console.log("Slug outside loop:", slug);

for (const [key, cat] of Object.entries(categoryData)) {
  const found = cat.posts.find((p) => {
    console.log("In find - p.slug:", p.slug, "slug:", slug);
    return p.slug === slug;
  });

  if (found) {
    console.log("Found post:", found);
    post = found;
    category = cat;
    break;
  }
}


  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Post not found</p>
      </div>
    );
  }

  // ✅ related posts (same category ke andar se)
  const relatedPosts =
    categoryData[post.category as keyof typeof categoryData]?.posts.filter(
      (p) => p.slug !== slug
    ) || [];

  return (
    <div className="min-h-screen">
     
      <Header />

      {/* Article Header */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Link to="/" className="hover:text-green-600">
                  Home
                </Link>
                <span>/</span>
                <Link to="/blog" className="hover:text-green-600">
                  Blog
                </Link>
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

              {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">
                Full Article
              </h2> */}
              <p className="text-gray-700 mb-6 leading-relaxed">
               <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </p>
            </div>

            {/* Article Actions */}
           
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
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
                      <p className="text-xs text-gray-500">
                        {relatedPost.readTime}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
