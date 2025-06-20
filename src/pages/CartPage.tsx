import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items yet.</p>
          <Link
            to="/"
            className="bg-primary-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-600 font-medium"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-none">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.product.name}</h3>
                        <p className="text-gray-600 text-sm">{item.product.brand}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-500 hover:text-red-600 p-1"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    {(item.selectedSize || item.selectedColor) && (
                      <div className="flex gap-4 mb-3 text-sm text-gray-600">
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                        {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 border border-gray-300 rounded hover:bg-gray-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-800">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </p>
                        {item.product.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">
                            ₹{(item.product.originalPrice * item.quantity).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">
                    {total > 999 ? 'Free' : '₹99'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">₹{Math.round(total * 0.18).toLocaleString()}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">
                      ₹{(total + (total > 999 ? 0 : 99) + Math.round(total * 0.18)).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Proceed to Checkout</span>
                </button>
                
                <Link
                  to="/"
                  className="w-full border border-primary-500 text-primary-500 py-3 px-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center block"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold text-gray-800 mb-3">We Accept</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• UPI Payments</div>
                  <div>• Credit Cards</div>
                  <div>• Debit Cards</div>
                  <div>• Net Banking</div>
                  <div>• Digital Wallets</div>
                  <div>• Cash on Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;