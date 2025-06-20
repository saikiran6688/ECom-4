import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { FilterOptions } from '../types';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('relevance');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 200000],
    brands: [],
    rating: 0,
    inStock: false
  });

  const category = categories.find(cat => cat.id === categoryId);
  const categoryProducts = products.filter(p => p.category === categoryId);

  const filteredProducts = useMemo(() => {
    let filtered = categoryProducts.filter(product => {
      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }
      
      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }
      
      // Rating filter
      if (product.rating < filters.rating) {
        return false;
      }
      
      // Stock filter
      if (filters.inStock && !product.inStock) {
        return false;
      }
      
      return true;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newer products have higher IDs
        filtered.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [categoryProducts, filters, sortBy]);

  const uniqueBrands = Array.from(new Set(categoryProducts.map(p => p.brand)));

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <p className="text-gray-600">The requested category could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.name}</h1>
              <p className="text-gray-600">{filteredProducts.length} products found</p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              {/* View Mode */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'bg-gray-200'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'bg-gray-200'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="relevance">Sort by Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="newest">Newest First</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceRange[0]}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      priceRange: [parseInt(e.target.value) || 0, prev.priceRange[1]]
                    }))}
                    className="w-20 px-2 py-1 border rounded text-sm"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      priceRange: [prev.priceRange[0], parseInt(e.target.value) || 200000]
                    }))}
                    className="w-20 px-2 py-1 border rounded text-sm"
                  />
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Brands</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {uniqueBrands.map(brand => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.brands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilters(prev => ({
                              ...prev,
                              brands: [...prev.brands, brand]
                            }));
                          } else {
                            setFilters(prev => ({
                              ...prev,
                              brands: prev.brands.filter(b => b !== brand)
                            }));
                          }
                        }}
                        className="mr-2"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        checked={filters.rating === rating}
                        onChange={() => setFilters(prev => ({ ...prev, rating }))}
                        className="mr-2"
                      />
                      <span className="text-sm">{rating}+ Stars</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* In Stock */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.inStock}
                    onChange={(e) => setFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                    className="mr-2"
                  />
                  <span className="text-sm">In Stock Only</span>
                </label>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({
                  priceRange: [0, 200000],
                  brands: [],
                  rating: 0,
                  inStock: false
                })}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className={viewMode === 'list' ? 'flex-row' : ''}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;