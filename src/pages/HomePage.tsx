import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryGrid from '../components/CategoryGrid';
import ProductCarousel from '../components/ProductCarousel';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  const topDeals = products.filter(p => p.discount && p.discount > 30);
  const kidsProducts = products.filter(p => p.category === 'kids');
  const sportsProducts = products.filter(p => p.category === 'sports');

  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      
      {/* Special Offers Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders above ₹999</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure transactions</p>
            </div>
          </div>
        </div>
      </section>

      <ProductCarousel
        title="Top Deals"
        subtitle="Don't miss these amazing offers!"
        products={topDeals}
      />
      
      <ProductCarousel
        title="Popular in Kids"
        subtitle="Best-selling kids' products"
        products={kidsProducts}
      />
      
      <ProductCarousel
        title="Hot Picks in Sports"
        subtitle="Gear up for your fitness journey"
        products={sportsProducts}
      />

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive deals, new arrivals, and fashion tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="bg-primary-500 hover:bg-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;