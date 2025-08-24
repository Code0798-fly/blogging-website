import { useState } from 'react';
import { Home } from './components/Home';
import { BlogListing } from './components/BlogListing';
import { BlogPost } from './components/BlogPost';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CategoryPage } from './components/CategoryPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} onSelectPost={setSelectedPost} onSelectCategory={setSelectedCategory} />;
      case 'blog':
        return <BlogListing onNavigate={setCurrentPage} onSelectPost={setSelectedPost} />;
      case 'post':
        return <BlogPost post={selectedPost} onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'category':
        return <CategoryPage category={selectedCategory} onNavigate={setCurrentPage} onSelectPost={setSelectedPost} />;
      default:
        return <Home onNavigate={setCurrentPage} onSelectPost={setSelectedPost} onSelectCategory={setSelectedCategory} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderPage()}
    </div>
  );
}