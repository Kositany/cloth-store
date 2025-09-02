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
    <section className="py-20 bg-gradient-to-b from-matte-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(57, 255, 20, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(0, 240, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(255, 32, 121, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(57, 255, 20, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neon-green/5 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bebas mb-6"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-neon-green neon-glow-green"
              whileHover={{ 
                textShadow: "0 0 30px #39ff14, 0 0 60px #39ff14",
                scale: 1.1
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              FEATURED
            </motion.span>
            <motion.span 
              className="text-white ml-4"
              whileHover={{ 
                color: "#00f0ff",
                textShadow: "0 0 20px #00f0ff"
              }}
            >
              COLLECTIONS
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Discover our most popular pieces that define modern streetwear and athletic fashion
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="card-glow group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-500"
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
                      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(57, 255, 20, 0.6)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-neon-green text-black p-3 rounded-full hover:bg-neon-green/90 transition-all duration-300"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCartIcon className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      onClick={() => handleWishlistToggle(product.id)}
                      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 32, 121, 0.6)" }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                      aria-label={`${isInWishlist(product.id) ? 'Remove from' : 'Add to'} wishlist`}
                    >
                      {isInWishlist(product.id) ? (
                        <HeartSolidIcon className="w-6 h-6 text-neon-pink" />
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
                      className="bg-neon-green text-black px-3 py-1 rounded-full text-xs font-bold inline-block"
                    >
                      NEW
                    </motion.span>
                  )}
                  {product.isOnSale && (
                    <motion.span 
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="bg-neon-pink text-white px-3 py-1 rounded-full text-xs font-bold inline-block"
                    >
                      SALE
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Enhanced Product Content */}
              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/products/${product.id}`}>
                  <motion.h3 
                    className="font-bebas text-xl text-white mb-2 hover:text-neon-green transition-colors duration-300"
                    whileHover={{ letterSpacing: "0.1em" }}
                  >
                    {product.name}
                  </motion.h3>
                </Link>
                <motion.p 
                  className="text-gray-400 text-sm mb-4 line-clamp-2"
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
                          className="text-neon-pink font-bold text-lg"
                          whileHover={{ 
                            scale: 1.1,
                            textShadow: "0 0 20px #ff2079"
                          }}
                        >
                          ${product.price}
                        </motion.span>
                      </>
                    ) : (
                      <motion.span 
                        className="text-neon-green font-bold text-lg"
                        whileHover={{ 
                          scale: 1.1,
                          textShadow: "0 0 20px #39ff14"
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
                        boxShadow: "0 0 20px rgba(0, 240, 255, 0.5)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-neon bg-transparent border border-neon-blue text-neon-blue px-4 py-2 text-sm hover:bg-neon-blue hover:text-black transition-all duration-300"
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
          className="text-center mt-16"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(57, 255, 20, 0.6)",
                borderColor: "#39ff14"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon bg-transparent border-2 border-neon-green text-neon-green px-8 py-4 text-lg font-bold tracking-wider hover:bg-neon-green hover:text-black transition-all duration-300 relative overflow-hidden"
            >
              <motion.span 
                className="relative z-10"
                whileHover={{ letterSpacing: "0.2em" }}
                transition={{ duration: 0.2 }}
              >
                VIEW ALL PRODUCTS
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-green via-neon-blue to-neon-green"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                style={{ zIndex: 0 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
