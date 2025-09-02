'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useShop } from '@/contexts/ShopContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, wishlist } = useShop();

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/shop/men', label: 'Men' },
    { href: '/shop/women', label: 'Women' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-matte-black/95 backdrop-blur-md border-b border-green-500/20"
    >
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-3xl font-bold font-bebas"
            >
              <span className="text-green-400 transition-all duration-300 group-hover:text-blue-400">
                JATOLL
              </span>
              <span className="text-white ml-2 transition-all duration-300 group-hover:text-green-400">
                JATIZI
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
                    {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-12">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="relative text-white hover:text-green-400 transition-all duration-300 font-medium group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-green-400/10 rounded-lg -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="relative text-white hover:text-blue-400 transition-all duration-300 p-2 group"
              aria-label="Search products"
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-400"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.2, opacity: 0.6 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>

            {/* Wishlist */}
            <Link href="/wishlist">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative text-white hover:text-red-400 transition-all duration-300 p-2 group"
              >
                <HeartIcon className="w-6 h-6" />
                {wishlist.itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                    className="absolute -top-1 -right-1 bg-red-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                  >
                    {wishlist.itemCount}
                  </motion.span>
                )}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-red-400"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: 0.6 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </Link>

            {/* Shopping Cart */}
            <Link href="/cart">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative text-white hover:text-green-400 transition-all duration-300 p-2 group"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                {cart.itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    whileHover={{ scale: 1.2 }}
                    className="absolute -top-1 -right-1 bg-green-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                  >
                    {cart.itemCount}
                  </motion.span>
                )}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-green-400"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: 0.6 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-green-400 transition-colors p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-green-400/20"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white hover:text-green-400 transition-colors duration-300 font-medium py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile cart and wishlist */}
                <div className="flex space-x-4 pt-4 border-t border-gray-800">
                  <Link
                    href="/wishlist"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
                  >
                    <HeartIcon className="w-5 h-5" />
                    <span>Wishlist ({wishlist.itemCount})</span>
                  </Link>
                  <Link
                    href="/cart"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span>Cart ({cart.itemCount})</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
