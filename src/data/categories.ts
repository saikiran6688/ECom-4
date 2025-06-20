import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      {
        id: 'clothing',
        name: 'Clothing',
        items: ['Shirts', 'T-Shirts', 'Jeans', 'Trousers', 'Suits', 'Ethnic Wear']
      },
      {
        id: 'footwear',
        name: 'Footwear',
        items: ['Casual Shoes', 'Formal Shoes', 'Sports Shoes', 'Sandals', 'Boots']
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items: ['Watches', 'Belts', 'Wallets', 'Sunglasses', 'Bags']
      }
    ]
  },
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      {
        id: 'clothing',
        name: 'Clothing',
        items: ['Dresses', 'Tops', 'Sarees', 'Kurtas', 'Jeans', 'Skirts', 'Ethnic Wear']
      },
      {
        id: 'footwear',
        name: 'Footwear',
        items: ['Heels', 'Flats', 'Sneakers', 'Sandals', 'Boots', 'Ethnic Footwear']
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items: ['Jewelry', 'Handbags', 'Watches', 'Sunglasses', 'Scarves']
      }
    ]
  },
  {
    id: 'kids',
    name: 'Kids',
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      {
        id: 'boys',
        name: 'Boys',
        items: ['T-Shirts', 'Shirts', 'Jeans', 'Shorts', 'Ethnic Wear', 'Sports Wear']
      },
      {
        id: 'girls',
        name: 'Girls',
        items: ['Dresses', 'Tops', 'Jeans', 'Skirts', 'Ethnic Wear', 'Party Wear']
      },
      {
        id: 'footwear',
        name: 'Footwear',
        items: ['School Shoes', 'Sports Shoes', 'Sandals', 'Boots']
      }
    ]
  },
  {
    id: 'books',
    name: 'Books',
    image: 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      {
        id: 'fiction',
        name: 'Fiction',
        items: ['Romance', 'Mystery', 'Fantasy', 'Sci-Fi', 'Thriller']
      },
      {
        id: 'non-fiction',
        name: 'Non-Fiction',
        items: ['Biography', 'Self-Help', 'Business', 'History', 'Science']
      },
      {
        id: 'educational',
        name: 'Educational',
        items: ['Textbooks', 'Reference', 'Competitive Exams', 'Children Books']
      }
    ]
  },
  {
    id: 'mobiles',
    name: 'Mobiles',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      {
        id: 'smartphones',
        name: 'Smartphones',
        items: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Vivo', 'Oppo']
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items: ['Cases & Covers', 'Screen Protectors', 'Chargers', 'Power Banks', 'Headphones']
      }
    ]
  },
  {
    id: 'laptops',
    name: 'Laptops',
    image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      {
        id: 'gaming',
        name: 'Gaming Laptops',
        items: ['ASUS ROG', 'MSI Gaming', 'HP Omen', 'Dell Alienware', 'Lenovo Legion']
      },
      {
        id: 'business',
        name: 'Business Laptops',
        items: ['Dell Latitude', 'HP EliteBook', 'Lenovo ThinkPad', 'MacBook Pro']
      },
      {
        id: 'accessories',
        name: 'Accessories',
        items: ['Laptop Bags', 'Mouse', 'Keyboards', 'Cooling Pads', 'Docking Stations']
      }
    ]
  },
  {
    id: 'sports',
    name: 'Sports',
    image: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      {
        id: 'footwear',
        name: 'Sports Footwear',
        items: ['Running Shoes', 'Basketball Shoes', 'Football Boots', 'Tennis Shoes', 'Training Shoes']
      },
      {
        id: 'apparel',
        name: 'Sports Apparel',
        items: ['Jerseys', 'Track Suits', 'Shorts', 'Sports Bras', 'Compression Wear']
      },
      {
        id: 'equipment',
        name: 'Equipment',
        items: ['Cricket Bats', 'Tennis Rackets', 'Footballs', 'Gym Equipment', 'Yoga Mats']
      }
    ]
  },
  {
    id: 'furniture',
    name: 'Furniture',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      {
        id: 'living-room',
        name: 'Living Room',
        items: ['Sofas', 'Coffee Tables', 'TV Units', 'Recliners', 'Bookshelves']
      },
      {
        id: 'bedroom',
        name: 'Bedroom',
        items: ['Beds', 'Wardrobes', 'Dressing Tables', 'Mattresses', 'Nightstands']
      },
      {
        id: 'dining',
        name: 'Dining',
        items: ['Dining Tables', 'Chairs', 'Bar Stools', 'Cabinets', 'Sideboards']
      }
    ]
  },
  {
    id: 'home',
    name: 'Home',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      {
        id: 'decor',
        name: 'Home Decor',
        items: ['Wall Art', 'Mirrors', 'Curtains', 'Cushions', 'Rugs', 'Lighting']
      },
      {
        id: 'appliances',
        name: 'Appliances',
        items: ['Air Conditioners', 'Refrigerators', 'Washing Machines', 'Vacuum Cleaners']
      }
    ]
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    image: 'https://images.pexels.com/photos/1754183/pexels-photo-1754183.jpeg?auto=compress&cs=tinysrgb&w=400',
    subcategories: [
      {
        id: 'cookware',
        name: 'Cookware',
        items: ['Pots & Pans', 'Pressure Cookers', 'Non-Stick Cookware', 'Bakeware']
      },
      {
        id: 'appliances',
        name: 'Kitchen Appliances',
        items: ['Mixers', 'Blenders', 'Microwaves', 'Food Processors', 'Coffee Makers']
      },
      {
        id: 'storage',
        name: 'Storage',
        items: ['Containers', 'Jars', 'Lunch Boxes', 'Water Bottles']
      }
    ]
  }
];