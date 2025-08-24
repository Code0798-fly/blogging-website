import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface HeaderProps {
  onNavigate: (page: string) => void;
  onSelectCategory: (category: string) => void;
}

export function Header({ onNavigate, onSelectCategory }: HeaderProps) {
  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    onNavigate('category');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <div className="w-12 h-12 gradient-rainbow rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white text-xl font-bold">G</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                GlowVibe
              </h1>
              <p className="text-xs text-muted-foreground">Beauty & Wellness Blog</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('blog')}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              All Posts
            </button>
            <div className="relative group">
              <button className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium flex items-center space-x-1">
                <span>Categories</span>
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-pink-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  <button 
                    onClick={() => handleCategoryClick('skincare')}
                    className="flex items-center space-x-3 w-full text-left px-4 py-3 text-foreground/80 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 hover:text-primary transition-all duration-200 rounded-xl group/item"
                  >
                    <span className="text-xl">✨</span>
                    <div>
                      <div className="font-medium">Skincare & Beauty</div>
                      <div className="text-xs text-muted-foreground">Glow from within</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleCategoryClick('wellness')}
                    className="flex items-center space-x-3 w-full text-left px-4 py-3 text-foreground/80 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-secondary transition-all duration-200 rounded-xl"
                  >
                    <span className="text-xl">🧘‍♀️</span>
                    <div>
                      <div className="font-medium">Wellness & Fitness</div>
                      <div className="text-xs text-muted-foreground">Mind & body balance</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleCategoryClick('lifestyle')}
                    className="flex items-center space-x-3 w-full text-left px-4 py-3 text-foreground/80 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-accent transition-all duration-200 rounded-xl"
                  >
                    <span className="text-xl">👗</span>
                    <div>
                      <div className="font-medium">Lifestyle & Fashion</div>
                      <div className="text-xs text-muted-foreground">Style inspiration</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleCategoryClick('nutrition')}
                    className="flex items-center space-x-3 w-full text-left px-4 py-3 text-foreground/80 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-tertiary transition-all duration-200 rounded-xl"
                  >
                    <span className="text-xl">🥗</span>
                    <div>
                      <div className="font-medium">Nutrition & Health</div>
                      <div className="text-xs text-muted-foreground">Fuel your glow</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleCategoryClick('selfcare')}
                    className="flex items-center space-x-3 w-full text-left px-4 py-3 text-foreground/80 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-primary transition-all duration-200 rounded-xl"
                  >
                    <span className="text-xl">🌸</span>
                    <div>
                      <div className="font-medium">Self-Care & Mental Health</div>
                      <div className="text-xs text-muted-foreground">Inner peace</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <button 
              onClick={() => onNavigate('about')}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Badge className="hidden md:block bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 px-3 py-1">
              ✨ New Posts
            </Badge>
            <Button className="gradient-primary hover:opacity-90 transition-opacity duration-200 rounded-xl px-6 shadow-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}