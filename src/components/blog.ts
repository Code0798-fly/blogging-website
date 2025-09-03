// src/data/blogs.ts

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  featured?: boolean;
  trending?: boolean;
  image?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  posts: number;
  trending?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10-Step Korean Skincare Routine for Glass Skin",
    excerpt: "Achieve that coveted glass skin look with this comprehensive Korean skincare routine that celebrities swear by.",
    category: "skincare",
    readTime: "8 min read",
    author: "Dr. Sarah Kim",
    date: "2 days ago",
    featured: true,
    trending: true,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Mindful Morning Rituals for Inner Glow",
    excerpt: "Start your day with intention and create a morning routine that radiates beauty from within.",
    category: "wellness",
    readTime: "6 min read",
    author: "Maya Wellness",
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=250&fit=crop"
  },
  // ...more posts
];

export const categories: Category[] = [
  {
    name: "Skincare & Beauty",
    slug: "skincare",
    description: "Expert tips for glowing, healthy skin",
    icon: "✨",
    posts: 45,
    trending: true,
  },
  {
    name: "Wellness & Fitness",
    slug: "wellness",
    description: "Mind-body wellness for total health",
    icon: "🧘‍♀️",
    posts: 32
  },
  // ...more categories
];
