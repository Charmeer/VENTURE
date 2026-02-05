import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <AnimateOnScroll animationType="fade-up">
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-30"
          />
          <motion.h1 
            className="h1 text-center mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turning Waste into <span className="text-green-600">Opportunity</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Revolutionary micro-scale catalytic pyrolysis technology transforming plastic waste into valuable fuel resources for a sustainable future.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
              <Link to="/investment" className="btn-primary text-lg px-10 py-4">
                Explore Investment Opportunity
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
              <Link to="/technology" className="btn-primary bg-gradient-to-r from-white to-gray-50 text-green-600 border-2 border-green-600 font-medium py-3 px-6 text-lg shadow-sm hover:shadow-md">
                Learn About Technology
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </AnimateOnScroll>

      {/* Key Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <AnimateOnScroll animationType="fade-up" delay={0.1}>
          <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.98 }}>
            <div className="stat-card">
              <motion.div 
                className="text-4xl font-bold text-green-600 mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
              >
                ₹27 Lakhs
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-2 text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Initial Investment
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Complete setup with equipment and infrastructure
              </motion.p>
            </div>
          </motion.div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animationType="fade-up" delay={0.2}>
          <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.98 }}>
            <div className="stat-card">
              <motion.div 
                className="text-4xl font-bold text-green-600 mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
              >
                18 Months
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-2 text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Payback Period
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Quick return on investment with strong profitability
              </motion.p>
            </div>
          </motion.div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animationType="fade-up" delay={0.3}>
          <motion.div whileHover={{ y: -10 }} whileTap={{ scale: 0.98 }}>
            <div className="stat-card">
              <motion.div 
                className="text-4xl font-bold text-green-600 mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
              >
                218%
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold mb-2 text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                ROI Over 5 Years
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Exceptional returns with sustainable business model
              </motion.p>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </div>

      {/* Executive Summary */}
      <AnimateOnScroll animationType="fade-up">
        <motion.div 
          className="card mb-20"
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Executive Summary
          </motion.h2>
          <div className="prose max-w-none">
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our innovative plastic waste conversion solution addresses India's critical environmental challenge while creating substantial economic value. By deploying micro-scale catalytic pyrolysis technology, we transform problematic plastic waste into high-value liquid and gaseous fuels.
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <AnimateOnScroll animationType="fade-left" delay={0.2}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl"
                >
                  <motion.h3 
                    className="h3 text-green-600 mb-6 flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <span className="mr-3 bg-green-100 p-2 rounded-lg">
                      🌍
                    </span>
                    Environmental Impact
                  </motion.h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Diverts 1,800 tons of plastic waste annually",
                      "Reduces CO₂ emissions by 12,000 tons yearly",
                      "Eliminates harmful open burning practices",
                      "Creates sustainable waste management ecosystem"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      >
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animationType="fade-right" delay={0.2}>
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
                >
                  <motion.h3 
                    className="h3 text-blue-600 mb-6 flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <span className="mr-3 bg-blue-100 p-2 rounded-lg">
                      💰
                    </span>
                    Business Benefits
                  </motion.h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "₹58.8 lakhs annual net profit potential",
                      "60% gross profit margins",
                      "Diversified revenue streams",
                      "Strong market demand across India"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      >
                        <span className="text-blue-500 mr-2 mt-1">✓</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimateOnScroll>
            </div>
          </div>
        </motion.div>
      </AnimateOnScroll>

      {/* Navigation Grid */}
      <div className="mb-16">
        <AnimateOnScroll animationType="fade-up">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore Our Solution
          </motion.h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {[
            { title: "The Plastic Waste Crisis", path: "/problem", desc: "Understanding the scale of India's plastic waste challenge" },
            { title: "Our Technology Solution", path: "/technology", desc: "Micro-scale catalytic pyrolysis innovation" },
            { title: "Process Engineering", path: "/process", desc: "Complete operational workflow and methodology" },
            { title: "Market Opportunity", path: "/market", desc: "₹28,000 crore market potential across India" },
            { title: "Investment Details", path: "/investment", desc: "Capital requirements and funding structure" },
            { title: "Operational Excellence", path: "/operations", desc: "Monthly breakdown and capacity planning" },
            { title: "Revenue Model", path: "/revenue", desc: "Multiple income streams and pricing strategy" },
            { title: "Financial Performance", path: "/profitability", desc: "Profitability analysis and returns projection" },
            { title: "Risk Management", path: "/risks", desc: "Comprehensive risk assessment and mitigation" },
            { title: "Triple Impact", path: "/impact", desc: "Environmental, financial, and social benefits" },
            { title: "Next Steps", path: "/next-steps", desc: "Implementation roadmap and partnership opportunities" }
          ].map((item, index) => (
            <AnimateOnScroll key={index} animationType="fade-up" delay={(index + 1) * 0.05}>
              <motion.div 
                whileHover={{ y: -8, zIndex: 10 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to={item.path}
                  className="card hover:border-green-400 transition-all duration-500 group overflow-hidden transform"
                >
                  <div className="p-1 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-gray-600 mb-4 transition-colors duration-300">{item.desc}</p>
                    <div className="flex items-center text-green-600 font-medium group-hover:underline transition-colors duration-300">
                      Learn More
                      <motion.span 
                        className="ml-2"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;