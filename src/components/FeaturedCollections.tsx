'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProducts, Product } from '@/data/products';
import { useShop } from '@/contexts/ShopContext';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const FeaturedCollections = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 6);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useShop();

  const handleQuickAdd = (product: Product) => {
    if (product.sizes.length > 0 && product.colors.length > 0) {
      addToCart(product, product.sizes[0], product.colors[0], 1);
    }
  };

  const handleWishlistToggle = (productId: number) => {
    if (isInWishlist(productId)) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-matte-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(34, 197, 94, 0.06) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-500/3 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.h2 
            className="text-6xl md:text-7xl lg:text-8xl font-bebas mb-12"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-green-400"
              whileHover={{ 
                color: "#22c55e",
                scale: 1.05
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              FEATURED
            </motion.span>
            <motion.span 
              className="text-white ml-4"
              whileHover={{ 
                color: "#3b82f6"
              }}
            >
              COLLECTIONS
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Discover our most popular pieces that define modern streetwear and athletic fashion
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/30 transition-all duration-500 rounded-2xl"
            >
              {/* Enhanced Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full"
                >
                  <Image
                    src={product.images[0] || '/placeholder-product.jpg'}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Enhanced Overlay on hover */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center"
                >
                  <div className="flex space-x-4">
                    <motion.button
                      onClick={() => handleQuickAdd(product)}
                      whileHover={{ scale: 1.1, boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCartIcon className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      onClick={() => handleWishlistToggle(product.id)}
                      whileHover={{ scale: 1.1, boxShadow: "0 4px 20px rgba(239, 68, 68, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                      aria-label={`${isInWishlist(product.id) ? 'Remove from' : 'Add to'} wishlist`}
                    >
                      {isInWishlist(product.id) ? (
                        <HeartSolidIcon className="w-6 h-6 text-red-400" />
                      ) : (
                        <HeartIcon className="w-6 h-6" />
                      )}
                    </motion.button>
                  </div>
                </motion.div>

                {/* Enhanced Product Badges */}
                <div className="absolute top-4 left-4 space-y-2 z-10">
                  {product.isNew && (
                    <motion.span 
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block"
                    >
                      NEW
                    </motion.span>
                  )}
                  {product.isOnSale && (
                    <motion.span 
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block"
                    >
                      SALE
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Enhanced Product Content */}
              <motion.div 
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/products/${product.id}`}>
                  <motion.h3 
                    className="font-bebas text-2xl text-white mb-4 hover:text-green-400 transition-colors duration-300"
                    whileHover={{ letterSpacing: "0.1em" }}
                  >
                    {product.name}
                  </motion.h3>
                </Link>
                <motion.p 
                  className="text-gray-400 text-base mb-8 line-clamp-2 leading-relaxed"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {product.description}
                </motion.p>
                
                {/* Enhanced Price and Action */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    {product.isOnSale && product.originalPrice ? (
                      <>
                        <motion.span 
                          className="text-gray-400 line-through text-sm"
                          whileHover={{ scale: 0.9 }}
                        >
                          ${product.originalPrice}
                        </motion.span>
                        <motion.span 
                          className="text-red-400 font-bold text-lg"
                          whileHover={{ 
                            scale: 1.1,
                            color: "#ef4444"
                          }}
                        >
                          ${product.price}
                        </motion.span>
                      </>
                    ) : (
                      <motion.span 
                        className="text-green-400 font-bold text-lg"
                        whileHover={{ 
                          scale: 1.1,
                          color: "#22c55e"
                        }}
                      >
                        ${product.price}
                      </motion.span>
                    )}
                  </div>
                  
                  <Link href={`/products/${product.id}`}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-transparent border border-blue-400 text-blue-400 px-6 py-3 text-base hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300"
                    >
                      VIEW DETAILS
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-green-500 text-green-400 px-12 py-6 text-xl font-bold tracking-wider hover:bg-green-500 hover:text-white rounded-lg transition-all duration-300"
            >
              <motion.span 
                className="relative z-10"
                whileHover={{ letterSpacing: "0.1em" }}
                transition={{ duration: 0.2 }}
              >
                VIEW ALL PRODUCTS
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
