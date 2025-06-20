export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images?: string[];
  category: string;
  subcategory: string;
  brand: string;
  sizes?: string[];
  colors?: string[];
  description: string;
  features?: string[];
  inStock: boolean;
  discount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  items?: string[];
}

export interface FilterOptions {
  priceRange: [number, number];
  brands: string[];
  rating: number;
  inStock: boolean;
}