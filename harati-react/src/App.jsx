import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/design" element={<div>डिजाइन पृष्ठ (अझै बन्न बाँकी)</div>} />
          <Route path="/services" element={<div>सेवाहरू पृष्ठ (अझै बन्न बाँकी)</div>} />
          <Route path="/faq" element={<div>प्रश्नहरू पृष्ठ (अझै बन्न बाँकी)</div>} />
          <Route path="/contact" element={<div>सम्पर्क पृष्ठ (अझै बन्न बाँकी)</div>} />
          <Route path="/book" element={<div>बुकिङ पृष्ठ (अझै बन्न बाँकी)</div>} />
          <Route path="/reviews" element={<div>प्रतिक्रिया पृष्ठ (अझै बन्न बाँकी)</div>} />
          <Route path="/login" element={<div>लगइन पृष्ठ (अझै बन्न बाँकी)</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
