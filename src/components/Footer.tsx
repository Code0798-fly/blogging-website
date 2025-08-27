import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 gradient-rainbow"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-rainbow rounded-2xl flex items-center justify-center">
                  <span className="text-white text-xl font-bold">G</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    GlowVibe
                  </h3>
                  <p className="text-sm text-white/70">Beauty & Wellness Blog</p>
                </div>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                Empowering you to glow from within with expert beauty tips, wellness advice, and lifestyle inspiration. Join our community of radiant souls.
              </p>
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-pointer group">
                  <span className="text-sm group-hover:scale-110 transition-transform">📘</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-pointer group">
                  <span className="text-sm group-hover:scale-110 transition-transform">📷</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-pointer group">
                  <span className="text-sm group-hover:scale-110 transition-transform">🐦</span>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-pointer group">
                  <span className="text-sm group-hover:scale-110 transition-transform">📌</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/"
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">🏠</span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog"
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">📝</span>
                    <span>All Posts</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about"
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">👥</span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact"
                    className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">📞</span>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-bold mb-6 text-lg">Categories</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/category/skincare" className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">✨</span>
                    <span>Skincare & Beauty</span>
                  </Link>
                </li>
                <li>
                  <Link to="/category/wellness" className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">🧘‍♀️</span>
                    <span>Wellness & Fitness</span>
                  </Link>
                </li>
                <li>
                  <Link to="/category/lifestyle" className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">👗</span>
                    <span>Lifestyle & Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link to="/category/nutrition" className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">🥗</span>
                    <span>Nutrition & Health</span>
                  </Link>
                </li>
                <li>
                  <Link to="/category/self-care" className="text-white/70 hover:text-white transition-colors duration-200 flex items-center space-x-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">🌸</span>
                    <span>Self-Care</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              ✨ Stay in the Glow Loop
            </h4>
            <p className="text-white/70 mb-6">
              Get weekly beauty secrets, wellness tips, and exclusive content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email for glow tips"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <button className="gradient-primary px-6 py-3 rounded-xl hover:opacity-90 transition-opacity font-medium shadow-lg">
                ✨ Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 GlowVibe. All rights reserved. Made with 💖 for beautiful souls.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-white/60 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-white/60 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
