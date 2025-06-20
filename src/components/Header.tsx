import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { itemCount } = useCart();

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            🎉 Free Shipping on Orders Above ₹999 | Use Code: FREESHIP
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">ShopSphere</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands, categories..."
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-full focus:border-primary-500 focus:outline-none transition-colors"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search - Mobile */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden text-gray-600 hover:text-primary-500 transition-colors"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* User Account */}
            <Link to="/account" className="hidden sm:flex items-center space-x-1 text-gray-600 hover:text-primary-500 transition-colors">
              <User className="w-6 h-6" />
              <span className="text-sm font-medium">Account</span>
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="hidden sm:flex items-center space-x-1 text-gray-600 hover:text-primary-500 transition-colors">
              <Heart className="w-6 h-6" />
              <span className="text-sm font-medium">Wishlist</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative flex items-center space-x-1 text-gray-600 hover:text-primary-500 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="hidden sm:block text-sm font-medium">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce-gentle">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-primary-500 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden mt-4 animate-slide-up">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-full focus:border-primary-500 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center space-x-8 py-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => setActiveCategory(category.id)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <Link
                  to={`/category/${category.id}`}
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors py-2"
                >
                  {category.name}
                </Link>

                {/* Mega Menu */}
                {activeCategory === category.id && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-6 min-w-[300px] z-50 animate-fade-in">
                    <div className="grid grid-cols-1 gap-4">
                      {category.subcategories.map((sub) => (
                        <div key={sub.id} className="border-b border-gray-100 pb-3 last:border-b-0">
                          <h4 className="font-semibold text-gray-800 mb-2">{sub.name}</h4>
                          {sub.items && (
                            <div className="grid grid-cols-2 gap-1">
                              {sub.items.slice(0, 6).map((item) => (
                                <Link
                                  key={item}
                                  to={`/category/${category.id}?subcategory=${sub.id}&item=${item}`}
                                  className="text-sm text-gray-600 hover:text-primary-500 transition-colors py-1"
                                >
                                  {item}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-slide-up">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.id}`}
                  className="block py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;