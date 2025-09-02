'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-matte-black via-matte-black to-green-500/5 py-32 px-8">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ 
            background: [
              "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.2), transparent 50%)",
              "radial-gradient(circle at 60% 40%, rgba(34,197,94,0.3), transparent 60%)",
              "radial-gradient(circle at 40% 60%, rgba(34,197,94,0.2), transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        />
        <motion.div 
          animate={{ 
            background: [
              "radial-gradient(circle at 30% 70%, rgba(14,165,233,0.15), transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(14,165,233,0.25), transparent 60%)",
              "radial-gradient(circle at 40% 60%, rgba(14,165,233,0.15), transparent 50%)"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        />
      </div>

      {/* Enhanced Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="h-full w-full bg-[linear-gradient(rgba(34,197,94,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            animation: "float 6s ease-in-out infinite"
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto">
        {/* Enhanced Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider leading-none">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
              className="block text-white mb-2 glitch"
              data-text="FUEL YOUR"
            >
              FUEL YOUR
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 80 }}
              className="block text-green-400"
              whileHover={{ 
                scale: 1.05,
                color: "#22c55e"
              }}
            >
              HUSTLE
            </motion.span>
          </h1>
        </motion.div>

        {/* Enhanced Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <motion.p 
            className="font-bebas text-2xl sm:text-3xl md:text-4xl text-white tracking-widest"
            animate={{ 
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            WEAR{" "}
            <motion.span 
              className="text-blue-400"
              whileHover={{ 
                scale: 1.1,
                color: "#22c55e"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              JATOLL JATIZI
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-20"
        >
          <motion.p 
            className="font-inter text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Premium sportswear and casual clothing designed for those who push boundaries. 
            Elevate your style with our cutting-edge neon aesthetics and uncompromising quality.
          </motion.p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <Link href="/shop">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-green-500 text-white font-bold text-xl tracking-wide border-2 border-green-500 hover:bg-green-600 hover:border-green-600 transition-all duration-300 rounded-lg"
            >
              <motion.span 
                className="relative z-10"
                whileHover={{ 
                  letterSpacing: "0.1em"
                }}
                transition={{ duration: 0.2 }}
              >
                SHOP NOW
              </motion.span>
            </motion.button>
          </Link>

          <Link href="/collections">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 4px 20px rgba(14, 165, 233, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-transparent text-blue-400 font-bold text-xl tracking-wide border-2 border-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg"
            >
              <motion.span 
                className="relative z-10"
                whileHover={{ 
                  letterSpacing: "0.1em"
                }}
                transition={{ duration: 0.2 }}
              >
                EXPLORE COLLECTIONS
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 180, 360] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rounded-full opacity-30"
      />
      <motion.div
        animate={{ 
          x: [0, -150, 0],
          y: [0, 100, 0],
          rotate: [0, -180, -360] 
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-1/3 right-1/3 w-6 h-6 border-2 border-blue-400 opacity-30"
      />
      <motion.div
        animate={{ 
          x: [0, 80, 0],
          y: [0, -80, 0],
          scale: [1, 1.5, 1] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-2/3 left-2/3 w-3 h-3 bg-green-500 rounded-full opacity-40"
      />
    </section>
  );
};

export default Hero;
