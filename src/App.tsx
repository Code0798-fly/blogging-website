import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { BlogListing } from './components/BlogListing';
import { BlogPost } from './components/BlogPost';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CategoryPage } from './components/CategoryPage';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <div>
        {/* Example Header Navigation */}
       
  
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogListing />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}
