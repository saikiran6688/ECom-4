import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const CategoryGrid: React.FC = () => {
  const featuredCategories = categories.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover amazing products across all our categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 group-hover:text-primary-500 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Featured Category Cards */}
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Shop Men</h3>
            <p className="mb-4 opacity-90">Latest fashion trends for men</p>
            <Link
              to="/category/men"
              className="inline-block bg-white text-primary-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Now
            </Link>
          </div>

          <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Shop Women</h3>
            <p className="mb-4 opacity-90">Elegant styles for every occasion</p>
            <Link
              to="/category/women"
              className="inline-block bg-white text-accent-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
          </div>

          <div className="bg-gradient-to-br from-success-500 to-success-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Shop Kids</h3>
            <p className="mb-4 opacity-90">Fun and comfortable for little ones</p>
            <Link
              to="/category/kids"
              className="inline-block bg-white text-success-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Discover
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;