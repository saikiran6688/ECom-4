import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category/:categoryId" element={<CategoryPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">S</span>
                    </div>
                    <span className="text-xl font-bold">ShopSphere</span>
                  </div>
                  <p className="text-gray-400 mb-4">
                    Your ultimate shopping destination for fashion, electronics, and lifestyle products.
                  </p>
                  <div className="flex space-x-4">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                      <span className="text-sm">f</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                      <span className="text-sm">t</span>
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                      <span className="text-sm">i</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Customer Service</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <p className="text-gray-400 mb-2">📧 support@shopsphere.com</p>
                  <p className="text-gray-400 mb-4">📞 +91 1234567890</p>
                  <p className="text-gray-400 text-sm">
                    Mon-Fri: 9:00 AM - 8:00 PM<br />
                    Sat-Sun: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2025 ShopSphere. All rights reserved. Built with ❤️ for amazing shopping experiences.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;