'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '@/contexts/ShopContext';
import { getProductById, Product } from '@/data/products';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  HeartIcon,
  ShoppingCartIcon,
  TrashIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useShop();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  // Get full product details for wishlist items
  const wishlistProducts = wishlist.items
    .map(item => getProductById(item.productId))
    .filter(product => product !== undefined) as Product[];

  const handleQuickAdd = (product: Product) => {
    if (product.sizes.length > 0 && product.colors.length > 0) {
      addToCart(product, product.sizes[0], product.colors[0], 1);
    }
  };

  const handleSelectItem = (productId: number) => {
    setSelectedItems(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleRemoveSelected = () => {
    selectedItems.forEach(productId => {
      removeFromWishlist(productId);
    });
    setSelectedItems([]);
  };

  const handleMoveToCart = () => {
    selectedItems.forEach(productId => {
      const product = getProductById(productId);
      if (product && product.sizes.length > 0 && product.colors.length > 0) {
        addToCart(product, product.sizes[0], product.colors[0], 1);
        removeFromWishlist(productId);
      }
    });
    setSelectedItems([]);
  };

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-screen bg-matte-black text-white">
        <Navigation />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center max-w-md mx-auto">
              <HeartIcon className="w-24 h-24 text-gray-600 mx-auto mb-8" />
              <h1 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
              <p className="text-gray-400 mb-8">
                Save items you love to your wishlist and shop them later.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center space-x-2 bg-neon-green text-black px-8 py-4 rounded-lg font-semibold hover:bg-neon-green/90 transition-colors"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span>Start Shopping</span>
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
            <div>
              <h1 className="text-4xl font-bold font-bebas">My Wishlist</h1>
              <p className="text-gray-400 mt-2">
                {wishlistProducts.length} item{wishlistProducts.length !== 1 ? 's' : ''} saved
              </p>
            </div>
            <Link
              href="/shop"
              className="flex items-center space-x-2 text-neon-green hover:text-neon-green/80 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              <span>Continue Shopping</span>
            </Link>
          </div>

          {/* Bulk Actions */}
          {selectedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-900 rounded-lg p-4 mb-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {selectedItems.length} item{selectedItems.length !== 1 ? 's' : ''} selected
                </span>
                <div className="flex space-x-4">
                  <button
                    onClick={handleMoveToCart}
                    className="flex items-center space-x-2 bg-neon-green text-black px-4 py-2 rounded-lg font-semibold hover:bg-neon-green/90 transition-colors"
                  >
                    <ShoppingCartIcon className="w-4 h-4" />
                    <span>Move to Cart</span>
                  </button>
                  <button
                    onClick={handleRemoveSelected}
                    className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    <TrashIcon className="w-4 h-4" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Wishlist Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {wishlistProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors"
                >
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.images[0] || '/placeholder-product.jpg'}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleQuickAdd(product)}
                          className="bg-neon-green text-black p-3 rounded-full hover:bg-neon-green/90 transition-colors"
                          aria-label={`Add ${product.name} to cart`}
                        >
                          <ShoppingCartIcon className="w-5 h-5" />
                        </button>
                        <Link
                          href={`/product/${product.slug}`}
                          className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                          aria-label={`View ${product.name} details`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </Link>
                      </div>
                    </div>

                    {/* Selection Checkbox */}
                    <div className="absolute top-3 left-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(product.id)}
                          onChange={() => handleSelectItem(product.id)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                          selectedItems.includes(product.id)
                            ? 'bg-neon-green border-neon-green'
                            : 'bg-black/50 border-gray-400'
                        }`}>
                          {selectedItems.includes(product.id) && (
                            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </label>
                    </div>

                    {/* Remove from Wishlist */}
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-3 right-3 p-2 bg-black/50 rounded-full hover:bg-red-600 transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <HeartSolidIcon className="w-5 h-5 text-neon-pink" />
                    </button>

                    {/* Product Badges */}
                    <div className="absolute bottom-3 left-3 space-y-1">
                      {product.isNew && (
                        <span className="bg-neon-green text-black px-2 py-1 rounded-full text-xs font-bold">
                          NEW
                        </span>
                      )}
                      {product.isOnSale && (
                        <span className="bg-neon-pink text-white px-2 py-1 rounded-full text-xs font-bold">
                          SALE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs text-neon-blue uppercase tracking-wider font-semibold">
                        {product.collection.replace('-', ' ')}
                      </span>
                    </div>
                    
                    <Link
                      href={`/product/${product.slug}`}
                      className="block"
                    >
                      <h3 className="font-semibold mb-2 hover:text-neon-green transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-neon-green">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center text-sm text-yellow-400">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    {/* Color Preview */}
                    <div className="flex space-x-1 mt-3">
                      {product.colors.slice(0, 5).map((color, index) => (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full border border-gray-600 ${color.class}`}
                          title={color.name}
                        />
                      ))}
                      {product.colors.length > 5 && (
                        <span className="text-xs text-gray-500 self-center ml-1">
                          +{product.colors.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Recommended Products */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold font-bebas mb-8">You Might Also Like</h2>
            <div className="text-center">
              <Link
                href="/shop"
                className="inline-block bg-neon-green text-black px-8 py-4 rounded-lg font-semibold hover:bg-neon-green/90 transition-colors"
              >
                Explore More Products
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
