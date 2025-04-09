
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">BlogBytes</h3>
            <p className="text-gray-600 text-sm">
              A modern blog platform focused on delivering high-quality content with a clean, distraction-free reading experience.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-600 hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter to get updated on our latest articles.
            </p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-white border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-r-md text-sm font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} BlogBytes. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-primary">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-primary">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-primary">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
