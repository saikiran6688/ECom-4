import { Product } from '../types';

export const products: Product[] = [
  // Men's Products
  {
    id: '1',
    name: 'Premium Cotton Shirt',
    price: 1299,
    originalPrice: 1999,
    rating: 4.5,
    reviews: 128,
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'men',
    subcategory: 'clothing',
    brand: 'Fashion Hub',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Black'],
    description: 'Premium quality cotton shirt with modern fit',
    inStock: true,
    discount: 35
  },
  {
    id: '2',
    name: 'Casual Sneakers',
    price: 2499,
    originalPrice: 3499,
    rating: 4.3,
    reviews: 89,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'men',
    subcategory: 'footwear',
    brand: 'SportMax',
    sizes: ['6', '7', '8', '9', '10', '11'],
    colors: ['White', 'Black', 'Navy'],
    description: 'Comfortable casual sneakers perfect for daily wear',
    inStock: true,
    discount: 29
  },

  // Women's Products
  {
    id: '3',
    name: 'Elegant Summer Dress',
    price: 1899,
    originalPrice: 2899,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'women',
    subcategory: 'clothing',
    brand: 'StyleCraft',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Red', 'Blue', 'Green', 'Yellow'],
    description: 'Beautiful summer dress with floral patterns',
    inStock: true,
    discount: 34
  },
  {
    id: '4',
    name: 'Designer Handbag',
    price: 3999,
    originalPrice: 5999,
    rating: 4.4,
    reviews: 92,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'women',
    subcategory: 'accessories',
    brand: 'LuxBags',
    colors: ['Black', 'Brown', 'Tan'],
    description: 'Premium leather handbag with multiple compartments',
    inStock: true,
    discount: 33
  },

  // Kids Products
  {
    id: '5',
    name: 'Kids Sports Shoes',
    price: 999,
    originalPrice: 1499,
    rating: 4.6,
    reviews: 74,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'kids',
    subcategory: 'footwear',
    brand: 'KidStep',
    sizes: ['1', '2', '3', '4', '5'],
    colors: ['Red', 'Blue', 'Pink'],
    description: 'Comfortable sports shoes for active kids',
    inStock: true,
    discount: 33
  },

  // Electronics
  {
    id: '6',
    name: 'Smartphone Pro Max',
    price: 79999,
    originalPrice: 89999,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'mobiles',
    subcategory: 'smartphones',
    brand: 'TechMax',
    colors: ['Black', 'Silver', 'Gold'],
    description: 'Latest smartphone with advanced camera and performance',
    inStock: true,
    discount: 11
  },
  {
    id: '7',
    name: 'Gaming Laptop Ultra',
    price: 124999,
    originalPrice: 149999,
    rating: 4.5,
    reviews: 67,
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'laptops',
    subcategory: 'gaming',
    brand: 'GameForce',
    description: 'High-performance gaming laptop with RTX graphics',
    inStock: true,
    discount: 17
  },

  // Sports
  {
    id: '8',
    name: 'Professional Running Shoes',
    price: 4999,
    originalPrice: 6999,
    rating: 4.6,
    reviews: 189,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'sports',
    subcategory: 'footwear',
    brand: 'RunMax',
    sizes: ['6', '7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'White', 'Blue'],
    description: 'Professional running shoes with advanced cushioning',
    inStock: true,
    discount: 29
  },

  // Furniture
  {
    id: '9',
    name: 'Modern Sofa Set',
    price: 45999,
    originalPrice: 59999,
    rating: 4.3,
    reviews: 45,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'furniture',
    subcategory: 'living-room',
    brand: 'ComfortHome',
    colors: ['Grey', 'Brown', 'Cream'],
    description: 'Comfortable 3-seater sofa with modern design',
    inStock: true,
    discount: 23
  },

  // Kitchen
  {
    id: '10',
    name: 'Non-Stick Cookware Set',
    price: 2999,
    originalPrice: 4499,
    rating: 4.4,
    reviews: 156,
    image: 'https://images.pexels.com/photos/1754183/pexels-photo-1754183.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'kitchen',
    subcategory: 'cookware',
    brand: 'ChefPro',
    description: '7-piece non-stick cookware set with premium coating',
    inStock: true,
    discount: 33
  }
];

export const heroSlides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Summer Fashion Sale',
    subtitle: 'Up to 70% Off on Latest Trends',
    cta: 'Shop Now'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Electronics Mega Sale',
    subtitle: 'Latest Gadgets at Unbeatable Prices',
    cta: 'Explore Deals'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Home & Living',
    subtitle: 'Transform Your Space with Style',
    cta: 'Discover More'
  }
];