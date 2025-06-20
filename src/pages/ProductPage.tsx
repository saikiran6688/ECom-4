import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RefreshCw, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary-500 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      alert('Please select a size');
      return;
    }
    if (product.colors && !selectedColor) {
      alert('Please select a color');
      return;
    }
    
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary-500">Home</Link>
          <span>/</span>
          <Link to={`/category/${product.category}`} className="hover:text-primary-500 capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => prev === 0 ? images.length - 1 : prev - 1)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => prev === images.length - 1 ? 0 : prev + 1)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-none w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary-500' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <p className="text-lg text-gray-600">{product.brand}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-800">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Colors */}
            {product.colors && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Color</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 rounded-lg transition-colors ${
                        selectedColor === color
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 rounded-lg transition-colors ${
                        selectedSize === size
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-primary-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>

              <button className="w-full border border-gray-300 text-gray-700 py-4 px-6 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Add to Wishlist</span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6 text-primary-500" />
                <div>
                  <p className="font-semibold text-sm">Free Shipping</p>
                  <p className="text-xs text-gray-500">On orders above ₹999</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-6 h-6 text-primary-500" />
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-gray-500">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-primary-500" />
                <div>
                  <p className="font-semibold text-sm">Warranty</p>
                  <p className="text-xs text-gray-500">1-year warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Description</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
            {product.features && (
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;