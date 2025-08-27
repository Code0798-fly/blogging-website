import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { BlogListing } from './components/BlogListing';
import { BlogPost } from './components/BlogPost';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { CategoryPage } from './components/CategoryPage';

export default function App() {
  return (
    <div>
      {/* Example Header Navigation */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogListing />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
