'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '@/contexts/ShopContext';
import { ProductColor } from '@/data/products';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  TrashIcon, 
  MinusIcon, 
  PlusIcon,
  ShoppingBagIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity } = useShop();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (productId: number, size: string, color: ProductColor, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, size, color);
    } else {
      updateCartQuantity(productId, size, color, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      alert('Checkout functionality will be implemented with payment processing!');
      setIsCheckingOut(false);
    }, 2000);
  };

  const subtotal = cart.total;
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-matte-black text-white">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-md mx-auto">
              <ShoppingBagIcon className="w-24 h-24 text-gray-600 mx-auto mb-8" />
              <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
              <p className="text-gray-400 mb-8">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center space-x-2 bg-neon-green text-black px-8 py-4 rounded-lg font-semibold hover:bg-neon-green/90 transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-matte-black text-white">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold font-bebas">Shopping Cart</h1>
            <Link
              href="/shop"
              className="flex items-center space-x-2 text-neon-green hover:text-neon-green/80 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-6">
                  Cart Items ({cart.itemCount})
                </h2>
                
                <AnimatePresence>
                  {cart.items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}-${item.color.name}`}
                      initial={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-4 py-6 border-b border-gray-800 last:border-b-0"
                    >
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-20 h-20 bg-gray-800 rounded-lg overflow-hidden">
                        <Image
                          src={item.product.images[0] || '/placeholder-product.jpg'}
                          alt={item.product.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="text-lg font-semibold hover:text-neon-green transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                          <span>Size: {item.size}</span>
                          <span>Color: {item.color.name}</span>
                        </div>
                        <div className="flex items-center mt-2">
                          <span className="text-neon-green font-bold">
                            ${item.product.price}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(
                            item.product.id, 
                            item.size, 
                            item.color, 
                            item.quantity - 1
                          )}
                          className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                        >
                          <MinusIcon className="w-4 h-4" />
                        </button>
                        
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => handleQuantityChange(
                            item.product.id, 
                            item.size, 
                            item.color, 
                            item.quantity + 1
                          )}
                          className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                        >
                          <PlusIcon className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <div className="font-bold text-lg">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                        className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 rounded-lg p-6 sticky top-8">
                <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-neon-green">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-neon-green">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Free Shipping Progress */}
                {shipping > 0 && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Free shipping at $100</span>
                      <span>${(100 - subtotal).toFixed(2)} to go</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-neon-green h-2 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((subtotal / 100) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-neon-green text-black py-4 rounded-lg font-bold hover:bg-neon-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
                </button>

                {/* Payment Methods */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400 mb-3">We accept</p>
                  <div className="flex justify-center space-x-3">
                    <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs font-bold">
                      VISA
                    </div>
                    <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs font-bold">
                      MC
                    </div>
                    <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs font-bold">
                      AMEX
                    </div>
                    <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs font-bold">
                      PP
                    </div>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
                    <div className="w-4 h-4 bg-neon-green rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                    <span>Secure SSL Encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
