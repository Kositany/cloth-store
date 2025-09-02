'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      title: "Customer Service",
      details: ["support@jatolljatizi.com", "1-800-JATOLL-J", "Mon-Fri 9AM-6PM EST"],
      icon: "💬"
    },
    {
      title: "Press & Media",
      details: ["press@jatolljatizi.com", "For media inquiries", "& collaboration requests"],
      icon: "📰"
    },
    {
      title: "Wholesale",
      details: ["wholesale@jatolljatizi.com", "Bulk orders &", "retail partnerships"],
      icon: "🏢"
    },
    {
      title: "Returns",
      details: ["returns@jatolljatizi.com", "Easy 30-day returns", "& exchanges"],
      icon: "↩️"
    }
  ];

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unworn items with original tags. Items must be in original condition."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 25 countries worldwide. International shipping times vary by location."
    },
    {
      question: "How do I find my size?",
      answer: "Check our detailed size guide on each product page. We also offer free exchanges for sizing issues."
    }
  ];

  return (
    <div className="min-h-screen bg-matte-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bebas text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-wider">
              GET IN <span className="text-neon-green neon-glow-green">TOUCH</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Have questions? Need support? Want to collaborate? We&apos;re here to help fuel your hustle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bebas text-3xl md:text-4xl font-bold text-white mb-8 tracking-wider">
                SEND US A <span className="text-neon-blue neon-glow-blue">MESSAGE</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-colors duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-colors duration-300 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(57, 255, 20, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-neon-green text-matte-black font-bold text-lg tracking-wide hover:bg-neon-blue transition-colors duration-300"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-bebas text-3xl md:text-4xl font-bold text-white mb-8 tracking-wider">
                CONTACT <span className="text-neon-pink neon-glow-pink">INFO</span>
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 p-6 border-l-4 border-neon-green"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="font-bebas text-xl font-bold text-white mb-2 tracking-wide">
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 p-6 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 border border-neon-green/20">
                <h3 className="font-bebas text-xl font-bold text-white mb-4 tracking-wide">
                  FOLLOW US
                </h3>
                <div className="flex space-x-4">
                  {['IG', 'TW', 'FB', 'TT', 'YT'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.2, color: "var(--neon-green)" }}
                      className="w-12 h-12 bg-gray-800 hover:bg-neon-green/20 text-gray-400 hover:text-neon-green flex items-center justify-center transition-all duration-300 font-bold"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-matte-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-bebas text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider">
              FREQUENTLY ASKED <span className="text-neon-green neon-glow-green">QUESTIONS</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 border-l-4 border-neon-blue"
              >
                <h3 className="font-bebas text-lg font-bold text-white mb-3 tracking-wide">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-6">
              Still have questions? We&apos;re here to help!
            </p>
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 240, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-transparent border-2 border-neon-blue text-neon-blue font-bold text-lg tracking-wide hover:bg-neon-blue hover:text-matte-black transition-all duration-300"
            >
              CONTACT SUPPORT
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
