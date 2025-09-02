'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      title: "INNOVATION",
      description: "We push the boundaries of sportswear design with cutting-edge materials and bold aesthetics.",
      icon: "⚡"
    },
    {
      title: "QUALITY",
      description: "Every piece is crafted with premium materials and attention to detail that exceeds expectations.",
      icon: "💎"
    },
    {
      title: "PERFORMANCE",
      description: "Our clothing is designed to enhance your performance while making a statement.",
      icon: "🚀"
    },
    {
      title: "SUSTAINABILITY",
      description: "We're committed to responsible manufacturing and sustainable practices for our planet.",
      icon: "🌱"
    }
  ];

  const stats = [
    { label: "Years of Excellence", value: "10+" },
    { label: "Happy Customers", value: "50K+" },
    { label: "Products Sold", value: "200K+" },
    { label: "Countries Served", value: "25+" }
  ];

  return (
    <div className="min-h-screen bg-matte-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-wider">
              ABOUT <span className="text-neon-green neon-glow-green">JATOLL JATIZI</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              We&apos;re not just a clothing brand. We&apos;re a movement that empowers individuals to fuel their hustle 
              and express their unique style through premium sportswear and casual clothing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bebas text-4xl md:text-5xl font-bold text-white mb-6 tracking-wider">
                OUR <span className="text-neon-blue neon-glow-blue">STORY</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Born from the intersection of athletic performance and street style, Jatoll Jatizi emerged 
                  in 2014 with a simple mission: to create clothing that doesn&apos;t just look good, but makes 
                  you feel unstoppable.
                </p>
                <p>
                  Our founders, athletes and designers themselves, recognized the gap between functional 
                  sportswear and fashion-forward clothing. They envisioned a brand that would bridge this 
                  divide with bold neon aesthetics and premium quality materials.
                </p>
                <p>
                  Today, we continue to push boundaries, creating pieces that fuel your hustle whether 
                  you&apos;re crushing your workout, conquering the streets, or making moves in your career.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-neon-green/20 to-neon-blue/20 p-8 border-2 border-neon-green/30">
                <div className="text-center">
                  <div className="text-8xl font-bebas text-neon-green opacity-30 mb-4">JJ</div>
                  <p className="text-white font-semibold text-lg">
                    &quot;Style is a way to say who you are without having to speak.&quot;
                  </p>
                  <p className="text-neon-green mt-2">- Jatoll Jatizi Founders</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-matte-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bebas text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">
              OUR <span className="text-neon-pink neon-glow-pink">VALUES</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that drive everything we do at Jatoll Jatizi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 p-6 text-center border-2 border-transparent hover:border-neon-green transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-bebas text-2xl font-bold text-white mb-3 tracking-wider">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-bebas text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">
              BY THE <span className="text-neon-green neon-glow-green">NUMBERS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-bebas text-4xl md:text-5xl lg:text-6xl font-bold text-neon-green neon-glow-green mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-matte-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-bebas text-4xl md:text-5xl font-bold text-white mb-8 tracking-wider">
              OUR <span className="text-neon-blue neon-glow-blue">MISSION</span>
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              To empower individuals to express their unique style and fuel their hustle through 
              premium sportswear and casual clothing that combines cutting-edge design with 
              uncompromising quality.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(57, 255, 20, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neon-green text-matte-black font-bold text-lg tracking-wide hover:bg-neon-blue transition-colors duration-300"
            >
              JOIN OUR MISSION
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
