'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const footerSections = [
    {
      title: "SHOP",
      links: [
        { name: "New Arrivals", href: "/shop/new" },
        { name: "Men's Collection", href: "/shop/men" },
        { name: "Women's Collection", href: "/shop/women" },
        { name: "Sportswear", href: "/shop/sportswear" },
        { name: "Casual Wear", href: "/shop/casual" },
        { name: "Sale", href: "/shop/sale" }
      ]
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Size Guide", href: "/support/size-guide" },
        { name: "Shipping Info", href: "/support/shipping" },
        { name: "Returns", href: "/support/returns" },
        { name: "FAQ", href: "/support/faq" },
        { name: "Contact Us", href: "/contact" },
        { name: "Track Order", href: "/support/track" }
      ]
    },
    {
      title: "COMPANY",
      links: [
        { name: "About Jatoll Jatizi", href: "/about" },
        { name: "Our Story", href: "/about/story" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Privacy Policy", href: "/privacy" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", href: "#", icon: "instagram" },
    { name: "Twitter", href: "#", icon: "twitter" },
    { name: "Facebook", href: "#", icon: "facebook" },
    { name: "TikTok", href: "#", icon: "tiktok" },
    { name: "YouTube", href: "#", icon: "youtube" }
  ];

  return (
    <footer className="bg-matte-black border-t border-green-400/20">
      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-b border-gray-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
          <h3 className="font-bebas text-5xl md:text-6xl font-bold text-white mb-8 tracking-wider">
            FUEL YOUR <span className="text-green-400">INBOX</span>
          </h3>
          <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Get exclusive access to new drops, behind-the-scenes content, and member-only discounts
          </p>
          
          <div className="max-w-lg mx-auto flex gap-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(57, 255, 20, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-green-500 text-white font-bold tracking-wide hover:bg-blue-500 transition-colors duration-300"
            >
              SUBSCRIBE
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-8">
              <span className="font-bebas text-4xl font-bold text-green-400 tracking-wider">
                JATOLL JATIZI
              </span>
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Premium sportswear and casual clothing designed for those who push boundaries. 
              Elevate your style with cutting-edge neon aesthetics.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.2, color: "#22c55e" }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-gray-800 hover:bg-green-400/20 text-gray-400 hover:text-green-400 flex items-center justify-center transition-all duration-300"
                >
                  <span className="sr-only">{social.name}</span>
                  {/* Using simple letters as placeholders for social icons */}
                  <span className="font-bold text-sm">
                    {social.icon === 'instagram' && 'IG'}
                    {social.icon === 'twitter' && 'TW'}
                    {social.icon === 'facebook' && 'FB'}
                    {social.icon === 'tiktok' && 'TT'}
                    {social.icon === 'youtube' && 'YT'}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + sectionIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-bebas text-xl font-bold text-white mb-6 tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Jatoll Jatizi. All rights reserved. Fuel Your Hustle.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
