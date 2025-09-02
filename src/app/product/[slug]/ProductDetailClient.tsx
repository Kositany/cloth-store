'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductBySlug, PRODUCTS, ProductColor } from '@/data/products';
import { useShop } from '@/contexts/ShopContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  HeartIcon, 
  ShoppingCartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';

interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: Date;
  verified: boolean;
}

export default function ProductDetailClient() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, getCartItemQuantity } = useShop();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]);
      setSelectedSize(product.sizes[0]);
      
      // Mock reviews for demonstration
      setReviews([
        {
          id: 1,
          userName: "Alex M.",
          rating: 5,
          comment: "Amazing quality and the neon details really pop! Perfect fit and super comfortable.",
          date: new Date('2024-01-15'),
          verified: true
        },
        {
          id: 2,
          userName: "Sarah K.",
          rating: 4,
          comment: "Love the design and the material feels premium. Runs slightly large so consider sizing down.",
          date: new Date('2024-01-10'),
          verified: true
        },
        {
          id: 3,
          userName: "Jordan L.",
          rating: 5,
          comment: "This is my third purchase from Jatoll Jatizi. The quality is consistently excellent!",
          date: new Date('2024-01-08'),
          verified: true
        }
      ]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-matte-black text-white">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-400">The product you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    
    addToCart(product, selectedSize, selectedColor, quantity);
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const currentCartQuantity = selectedSize && selectedColor 
    ? getCartItemQuantity(product.id, selectedSize, selectedColor)
    : 0;

  const relatedProducts = PRODUCTS
    .filter(p => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-matte-black text-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-400">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Shop</span>
            <span className="mx-2">/</span>
            <span className="text-green-400">{product.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={product.images[currentImageIndex] || '/placeholder-product.jpg'}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRightIcon className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Product Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.isNew && (
                    <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  {product.isOnSale && (
                    <span className="bg-red-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      SALE
                    </span>
                  )}
                </div>
              </div>

              {/* Image Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex 
                          ? 'border-green-400' 
                          : 'border-gray-700 hover:border-gray-500'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    >
                      <Image
                        src={image || '/placeholder-product.jpg'}
                        alt={`${product.name} ${index + 1}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold font-bebas mb-2">{product.name}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarSolidIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating) 
                            ? 'text-green-400' 
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-400">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-green-400">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  {product.isOnSale && (
                    <span className="bg-red-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      SAVE ${product.originalPrice! - product.price}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Color: {selectedColor?.name}</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${color.class} ${
                        selectedColor?.name === color.name
                          ? 'border-green-400'
                          : 'border-gray-600 hover:border-gray-400'
                      }`}
                      title={color.name}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Size: {selectedSize}</h3>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 rounded-lg border transition-all font-medium ${
                        selectedSize === size
                          ? 'border-green-400 bg-green-400/10 text-green-400'
                          : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-600 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-2 hover:bg-gray-800 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-2 hover:bg-gray-800 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    {currentCartQuantity > 0 && (
                      <span className="text-green-400 text-sm">
                        {currentCartQuantity} in cart
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.button
                    onClick={handleAddToCart}
                    disabled={!selectedSize || !selectedColor}
                    className="flex-1 bg-green-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span>
                      {isAddedToCart ? 'Added to Cart!' : 'Add to Cart'}
                    </span>
                    {isAddedToCart && <CheckIcon className="w-5 h-5" />}
                  </motion.button>

                  <motion.button
                    onClick={handleWishlistToggle}
                    className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isInWishlist(product.id) ? (
                      <HeartSolidIcon className="w-6 h-6 text-red-400" />
                    ) : (
                      <HeartIcon className="w-6 h-6" />
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Product Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
                <div className="text-center">
                  <ShieldCheckIcon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Premium Quality</p>
                </div>
                <div className="text-center">
                  <TruckIcon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Free Shipping</p>
                </div>
                <div className="text-center">
                  <ArrowPathIcon className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-800">
              <nav className="flex space-x-8">
                {['description', 'features', 'care', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-2 border-b-2 font-medium capitalize transition-colors ${
                      activeTab === tab
                        ? 'border-green-400 text-green-400'
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Product Description</h3>
                  <p className="text-gray-300 leading-relaxed">{product.description}</p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Made with high-quality materials and designed for both performance and style, 
                    this piece represents the perfect fusion of function and fashion. Whether you&apos;re 
                    hitting the gym or the streets, this item will keep you looking and feeling your best.
                  </p>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold mb-2">Material</h4>
                    <p className="text-gray-300">{product.material}</p>
                  </div>
                </div>
              )}

              {activeTab === 'care' && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Care Instructions</h3>
                  <ul className="space-y-2">
                    {product.care.map((instruction, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-gray-800 pb-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <StarSolidIcon
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-green-400' : 'text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="font-semibold">{review.userName}</span>
                            {review.verified && (
                              <span className="bg-green-400 text-black px-2 py-1 rounded text-xs font-semibold">
                                Verified
                              </span>
                            )}
                          </div>
                          <span className="text-gray-400 text-sm">
                            {review.date.toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-300">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8">You Might Also Like</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <motion.div
                    key={relatedProduct.id}
                    className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors"
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={relatedProduct.images[0] || '/placeholder-product.jpg'}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold mb-2">{relatedProduct.name}</h4>
                      <p className="text-green-400 font-bold">${relatedProduct.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
