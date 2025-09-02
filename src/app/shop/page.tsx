'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useShop } from '@/contexts/ShopContext';
import { PRODUCTS, Product, PRODUCT_COLORS } from '@/data/products';

const Shop = () => {
  const { addToCart, addToWishlist } = useShop();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'sportswear', name: 'Sportswear' },
    { id: 'casual', name: 'Casual' },
    { id: 'new', name: 'New Arrivals' },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest First' },
    { id: 'name', name: 'Name A-Z' },
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    const filtered = PRODUCTS.filter(product => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'new') {
          if (!product.tags?.includes('new-arrival')) return false;
        } else if (selectedCategory === 'sportswear') {
          if (product.type !== 'sportswear') return false;
        } else {
          if (product.category !== selectedCategory) return false;
        }
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!product.name.toLowerCase().includes(query) && 
            !product.description.toLowerCase().includes(query) &&
            !product.tags?.some(tag => tag.toLowerCase().includes(query))) {
          return false;
        }
      }

      // Color filter
      if (selectedColors.length > 0) {
        if (!product.colors.some(color => selectedColors.includes(color.name))) {
          return false;
        }
      }

      // Price filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      return true;
    });

    // Sort products
    switch (selectedSort) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [selectedCategory, searchQuery, selectedColors, priceRange, selectedSort]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / productsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleColorToggle = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedColors([]);
    setPriceRange([0, 500]);
    setCurrentPage(1);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(
      product,
      product.sizes[0],
      product.colors[0],
      1
    );
  };

  return (
    <div className="min-h-screen bg-matte-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-wider">
              SHOP <span className="text-neon-green neon-glow-green">COLLECTION</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover our complete range of premium sportswear and casual clothing designed to fuel your hustle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-600 text-white placeholder-gray-400 focus:border-neon-green focus:outline-none"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 border border-gray-600 text-gray-300 hover:border-neon-green hover:text-neon-green transition-colors"
              aria-label="Toggle filters"
            >
              <FunnelIcon className="h-5 w-5" />
              Filters
            </button>

            {/* Results Count */}
            <div className="text-gray-300">
              {filteredAndSortedProducts.length} products found
            </div>
          </div>

          {/* Filters Section */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 p-6 bg-gray-900 border border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          value={category.id}
                          checked={selectedCategory === category.id}
                          onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setCurrentPage(1);
                          }}
                          className="mr-2 text-neon-green focus:ring-neon-green"
                        />
                        <span className="text-gray-300">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Colors</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {Object.entries(PRODUCT_COLORS).map(([colorKey, colorValue]) => (
                      <button
                        key={colorKey}
                        onClick={() => handleColorToggle(colorKey)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColors.includes(colorKey) 
                            ? 'border-neon-green' 
                            : 'border-gray-600'
                        } hover:border-neon-green transition-colors`}
                        style={{ backgroundColor: colorValue.hex }}
                        aria-label={`Filter by ${colorKey}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => {
                        setPriceRange([priceRange[0], parseInt(e.target.value)]);
                        setCurrentPage(1);
                      }}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 border border-gray-600 text-gray-300 hover:border-neon-green hover:text-neon-green transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 border-2 font-semibold tracking-wide transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-neon-green text-neon-green bg-neon-green/10'
                      : 'border-gray-600 text-gray-300 hover:border-neon-green hover:text-neon-green'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <label htmlFor="sort-select" className="text-gray-300 font-medium">Sort by:</label>
              <select
                id="sort-select"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="bg-gray-900 border border-gray-600 text-white px-4 py-2 focus:border-neon-green focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {paginatedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-gray-900 overflow-hidden relative"
              >
                {/* Product Image */}
                <div className="relative h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  {product.tags?.includes('new-arrival') && (
                    <div className="absolute top-4 left-4 bg-neon-green text-matte-black px-3 py-1 text-sm font-bold tracking-wide z-10">
                      NEW
                    </div>
                  )}
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 bg-neon-pink text-white px-3 py-1 text-sm font-bold tracking-wide z-10">
                      SALE
                    </div>
                  )}
                  
                  {/* Placeholder for product image */}
                  <div className="text-6xl font-bebas text-neon-green opacity-20">
                    JJ
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-matte-black/80 flex items-center justify-center gap-4"
                  >
                    <Link
                      href={`/product/${product.slug}`}
                      className="px-4 py-2 border-2 border-neon-green text-neon-green font-bold tracking-wide hover:bg-neon-green hover:text-matte-black transition-all duration-300"
                    >
                      QUICK VIEW
                    </Link>
                    <button
                      onClick={() => addToWishlist(product.id)}
                      className="px-4 py-2 border-2 border-neon-pink text-neon-pink font-bold tracking-wide hover:bg-neon-pink hover:text-matte-black transition-all duration-300"
                      aria-label={`Add ${product.name} to wishlist`}
                    >
                      ♡
                    </button>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-bebas text-xl font-bold text-white mb-2 tracking-wide">
                    {product.name}
                  </h3>
                  
                  {/* Colors */}
                  <div className="flex gap-2 mb-3">
                    {product.colors.slice(0, 4).map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className={`w-4 h-4 rounded-full border-2 border-gray-600`}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                    {product.colors.length > 4 && (
                      <span className="text-xs text-gray-400 self-center">
                        +{product.colors.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-neon-green font-bold text-lg">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(57, 255, 20, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAddToCart(product)}
                    className="w-full py-3 bg-neon-green text-matte-black font-bold tracking-wide hover:bg-neon-blue transition-colors duration-300"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    ADD TO CART
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mb-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-600 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-neon-green hover:text-neon-green transition-colors"
                >
                  Previous
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 border ${
                        currentPage === page
                          ? 'border-neon-green text-neon-green bg-neon-green/10'
                          : 'border-gray-600 text-gray-300 hover:border-neon-green hover:text-neon-green'
                      } transition-colors`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-600 text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-neon-green hover:text-neon-green transition-colors"
                >
                  Next
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredAndSortedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
                <p className="text-gray-300 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-neon-green text-matte-black font-bold tracking-wide hover:bg-neon-blue transition-colors duration-300"
                >
                  CLEAR FILTERS
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
