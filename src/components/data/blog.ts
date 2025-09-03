// src/data/blog.ts

export const featuredPosts = [
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

export const categories = [
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


export const allPosts = [
  {
    id: 1,
    title: "10 Essential Skincare Steps for Glowing Skin",
    excerpt: "Discover the complete skincare routine that will transform your skin and give you that natural glow.",
    category: "skincare",
    readTime: "5 min read",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop",
    slug: "10-essential-skincare-steps-for-glowing-skin"
  },
  {
    id: 2,
    title: "Hair Care Secrets for Stronger, Healthier Hair",
    excerpt: "Learn the best practices for maintaining healthy hair from root to tip with natural ingredients.",
    category: "haircare",
    readTime: "7 min read",
    date: "December 12, 2024",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=250&fit=crop",
    slug: "hair-care-secrets-for-stronger-healthier-hair"
  },
  {
    id: 3,
    title: "Boost Your Immunity Naturally",
    excerpt: "Simple lifestyle changes and natural remedies to strengthen your immune system.",
    category: "healthcare",
    readTime: "6 min read",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
    slug: "boost-your-immunity-naturally"
  },
  {
    id: 4,
    title: "The Science Behind Anti-Aging Serums",
    excerpt: "Understanding how anti-aging ingredients work and choosing the right products for your skin type.",
    category: "skincare",
    readTime: "8 min read",
    date: "December 8, 2024",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=250&fit=crop",
    slug: "the-science-behind-anti-aging-serums"
  },
  {
    id: 5,
    title: "Natural Hair Masks for Every Hair Type",
    excerpt: "DIY hair mask recipes using natural ingredients that you can find in your kitchen.",
    category: "haircare",
    readTime: "6 min read",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=250&fit=crop",
    slug: "natural-hair-masks-for-every-hair-type"
  },
  {
    id: 6,
    title: "Mindful Eating for Better Health",
    excerpt: "How to develop a healthy relationship with food and improve your overall well-being.",
    category: "healthcare",
    readTime: "10 min read",
    date: "December 3, 2024",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
    slug: "mindful-eating-for-better-health"
  },
  {
    id: 7,
    title: "Natural DIY Face Masks for Every Skin Type",
    excerpt: "Discover kitchen ingredients that can transform your skin with these easy-to-make face mask recipes.",
    readTime: "6 min read",
    date: "1 week ago",
    author: "Beauty Expert Maya",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop",
    slug: "natural-diy-face-masks-for-every-skin-type"
  },
  {
    id: 8,
    title: "Yoga Poses for Glowing Skin",
    excerpt: "These specific yoga poses increase blood circulation and promote natural radiance.",
    readTime: "10 min read",
    date: "5 days ago",
    author: "Yogi Priya",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=250&fit=crop",
    slug: "yoga-poses-for-glowing-skin"
  },
  {
    id: 9,
    title: "Fall Fashion Trends That Boost Confidence",
    excerpt: "Discover this season's must-have fashion pieces that will make you feel unstoppable.",
    readTime: "5 min read",
    date: "4 days ago",
    author: "Emma Style",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=250&fit=crop",
    slug: "fall-fashion-trends-that-boost-confidence"
  },
  {
    id: 10,
    title: "Building a Capsule Wardrobe for Every Season",
    excerpt: "Create a timeless, versatile wardrobe with these essential pieces that never go out of style.",
    readTime: "7 min read",
    date: "1 week ago",
    author: "Fashion Guru Riya",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
    slug: "building-a-capsule-wardrobe-for-every-season"
  },
  {
    id: 11,
    title: "Superfoods for Radiant Skin & Hair",
    excerpt: "Nourish your beauty from within with these nutrient-packed foods that enhance your natural glow.",
    readTime: "7 min read",
    date: "2 days ago",
    author: "Chef Priya",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
    slug: "superfoods-for-radiant-skin-and-hair"
  },
  {
    id: 12,
    title: "Detox Water Recipes for Clear Skin",
    excerpt: "Hydrate and detoxify with these delicious water infusions that promote clear, glowing skin.",
    readTime: "4 min read",
    date: "6 days ago",
    author: "Nutritionist Anita",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=400&h=250&fit=crop",
    slug: "detox-water-recipes-for-clear-skin"
  },
  {
    id: 13,
    title: "Self-Care Sunday Rituals for Mental Wellness",
    excerpt: "Create sacred time for yourself with these rejuvenating self-care practices.",
    readTime: "8 min read",
    date: "1 day ago",
    author: "Therapist Lisa",
    image: "https://images.unsplash.com/photo-1591343612531-ac2d8f1266e6?w=400&h=250&fit=crop",
    slug: "self-care-sunday-rituals-for-mental-wellness"
  },
  {
    id: 14,
    title: "Meditation Techniques for Stress Relief",
    excerpt: "Learn simple meditation practices that reduce stress and promote inner glow.",
    readTime: "6 min read",
    date: "4 days ago",
    author: "Mindfulness Coach Rohit",
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=250&fit=crop",
    slug: "meditation-techniques-for-stress-relief"
  },
  {
    id: 15,
    title: "10-Step Korean Skincare Routine for Glass Skin",
    excerpt: "Achieve that coveted glass skin look with this comprehensive Korean skincare routine that celebrities swear by.",
    category: "skincare",
    readTime: "8 min read",
    author: "Dr. Sarah Kim",
    date: "2 days ago",
    featured: true,
    trending: true,
    slug: "10-step-korean-skincare-routine-for-glass-skin"
  },
  {
    id: 16,
    title: "Mindful Morning Rituals for Inner Glow",
    excerpt: "Start your day with intention and create a morning routine that radiates beauty from within.",
    category: "wellness",
    readTime: "6 min read",
    author: "Maya Wellness",
    date: "1 week ago",
    slug: "mindful-morning-rituals-for-inner-glow"
  }
];


export const categoryData = {
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
        slug: "10-step-korean-skincare-routine-for-glass-skin",
        excerpt: "Achieve that coveted glass skin look with this comprehensive Korean skincare routine that celebrities swear by.",
        readTime: "8 min read",
        date: "2 days ago",
        author: "Dr. Sarah Kim",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=250&fit=crop",
        trending: true
      },
       {
  "id": 1,
  "title": "10 Essential Skincare Steps for Glowing Skin",
  "excerpt": "Discover the complete skincare routine that will transform your skin and give you that natural glow.",
  "category": "skincare",
  "readTime": "5 min read",
  "date": "September 3, 2025",
  "image": "https://images.squarespace-cdn.com/content/v1/5c4f6ba1e2ccd1ee6075495d/9b4ea9f1-5cca-40c6-9be9-be9e721a259b/skin-care-routine-steps.jpg?format=1500w",
  "slug": "10-essential-skincare-steps-for-glowing-skin",
  "content": "<p>Who doesnot want healthy, glowing skin? Achieving that radiant glow isnot just about genetics — it is about a consistent, well-balanced skincare routine tailored to your skin was needs. Whether you are a skincare beginner or a seasoned enthusiast, these 10 essential skincare steps will help you unlock your best skin yet.</p><br><h2>1. <strong>Cleanser – The Foundation of It All</strong></h2><br><p>Your skincare routine should always start with a gentle cleanser. Cleansing removes dirt, oil, and impurities that accumulate on your skin throughout the day. Opt for a cleanser that suits your skin type — gel-based for oily skin, cream-based for dry skin, or micellar water for sensitive types.</p><br><h2>2. <strong>Exfoliation – Buff Away the Dullness</strong></h2><br><p>Exfoliation is key to removing dead skin cells that make your complexion look dull and tired. Use a gentle scrub 2-3 times a week, or switch to chemical exfoliants like AHAs and BHAs for a deeper cleanse. Remember, over-exfoliating can damage your skin barrier, so donot overdo it.</p><br><h2>3. <strong>Toner – Refresh and Rebalance</strong></h2><br><p>Often overlooked, toner helps restore your skin was pH balance and preps it to absorb the next steps more effectively. Look for alcohol-free formulas with hydrating or soothing ingredients like rose water, witch hazel, or hyaluronic acid.</p><br><h2>4. <strong>Essence – A Hydration Boost</strong></h2><br><p>Popular in Korean skincare, essence is a lightweight but powerful step that hydrates and improves skin texture. It is packed with active ingredients that promote cell regeneration and enhance your skin was natural glow.</p><br><h2>5. <strong>Serum – Targeted Treatment</strong></h2><br><p>Serums are concentrated formulas designed to target specific skin concerns like pigmentation, acne, or fine lines. Vitamin C serums are great for brightening, while niacinamide works wonders for oil control and enlarged pores. Apply your serum while your skin is still damp to maximize absorption.</p><br><h2>6. <strong>Eye Cream – Gentle Care for Delicate Skin</strong></h2><br><p>The skin around your eyes is thinner and more delicate, making it prone to dryness and early signs of aging. A good eye cream hydrates, reduces puffiness, and diminishes dark circles. Use your ring finger to gently tap it in without tugging.</p><br><h2>7. <strong>Moisturizer – Lock in the Goodness</strong></h2><br><p>No matter your skin type, moisturizing is essential. It seals in the products you’ve applied and provides long-lasting hydration. Gel moisturizers are great for oily skin, while creamier textures work well for dry or mature skin.</p><br><h2>8. <strong>Facial Oil – Glow Booster</strong></h2><br><p>Though optional, facial oils can be a game-changer for dry or dull skin. They add a layer of nourishment and help trap moisture. Use it after your moisturizer to seal everything in and give your skin a natural, dewy finish.</p><br><h2>9. <strong>Sunscreen – Your Daily Armor</strong></h2><br><p>If you do nothing else, wear sunscreen. UV rays are the leading cause of premature aging, hyperpigmentation, and skin cancer. Use a broad-spectrum SPF 30 or higher every single day, even if you are indoors or it is cloudy outside.</p><br><h2>10. <strong>Weekly Masks – A Self-Care Ritual</strong></h2><br><p>Masks give your skin that extra love it occasionally craves. Use hydrating masks for a moisture boost, clay masks for deep cleaning, or sheet masks for a quick glow. This step is not just great for your skin, but also for your mind — take the time to relax while your mask works its magic.</p><br><h2>Final Thoughts</h2><br><p>Glowing skin isnot about expensive products or overnight miracles — it is about consistency, patience, and understanding what your skin truly needs. Follow these 10 essential steps, tweak them according to your skin type and lifestyle, and stay hydrated from within. Your glow-up is just a routine away!</p><br><p><em>Disclaimer: Everyone has skin is different. Always do a patch test before trying new products and consult a dermatologist for persistent skin issues.</em></p><br>"

},

      {
        id: 4,
        title: "Natural DIY Face Masks for Every Skin Type",
        slug: "natural-diy-face-masks-for-every-skin-type",
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
        slug: "mindful-morning-rituals-for-inner-glow",
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
        slug: "yoga-poses-for-glowing-skin",
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
        slug: "fall-fashion-trends-that-boost-confidence",
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
        slug: "building-a-capsule-wardrobe-for-every-season",
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
        slug: "superfoods-for-radiant-skin-and-hair",
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
        slug: "detox-water-recipes-for-clear-skin",
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
        slug: "self-care-sunday-rituals-for-mental-wellness",
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
        slug: "meditation-techniques-for-stress-relief",
        excerpt: "Learn simple meditation practices that reduce stress and promote inner glow.",
        readTime: "6 min read",
        date: "4 days ago",
        author: "Mindfulness Coach Rohit",
        image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=250&fit=crop",
        trending: false
      }
    ]
  },
  haircare:{
    title: "HairCare",
    description: "Nurture your inner peace for outer radiance and confidence",
    icon: "🌸",
    color: "from-pink-400 via-rose-400 to-pink-500",
    heroImage: "https://images.unsplash.com/photo-1591343612531-ac2d8f1266e6?w=1200&h=400&fit=crop",
    posts:[
        {
    id: 2,
    title: "Hair Care Secrets for Stronger, Healthier Hair",
    excerpt: "Learn the best practices for maintaining healthy hair from root to tip with natural ingredients.",
    category: "haircare",
    readTime: "7 min read",
    date: "December 12, 2024",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=250&fit=crop",
    slug: "hair-care-secrets-for-stronger-healthier-hair"
  },
    ]
  }
};
