import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { getTechnologyData } from '../utils/api';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { motion } from 'framer-motion';

const Technology = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const techData = await getTechnologyData();
        setData(techData);
      } catch (err) {
        console.error('Error loading technology data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingSpinner message="Loading technology details..." />;
  if (!data) return <div className="text-center py-12">No data available</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimateOnScroll animationType="fade-up">
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-20"></div>
          <motion.h1 
            className="section-title"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {data.title}
          </motion.h1>
          <motion.p 
            className="section-subtitle"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data.description}
          </motion.p>
        </motion.div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <AnimateOnScroll animationType="fade-left" delay={0.1}>
          <motion.div whileHover={{ y: -5 }}>
            <div className="card">
              <motion.h2 
                className="h2 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Technical Specifications
              </motion.h2>
              <div className="space-y-4">
                {[
                  { label: "Operating Temperature:", value: data.process_details.temperature_range },
                  { label: "Catalyst Type:", value: data.process_details.catalyst_type },
                  { label: "Feedstock Types:", value: data.process_details.feedstock },
                  { label: "Conversion Efficiency:", value: data.efficiency }
                ].map((spec, index) => (
                  <AnimateOnScroll key={index} animationType="fade-up" delay={0.2 + index * 0.1}>
                    <motion.div 
                      className="flex justify-between items-center p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span className="font-medium text-gray-700">{spec.label}</span>
                      <span className="font-bold text-green-600 text-lg">{spec.value}</span>
                    </motion.div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimateOnScroll>

        <AnimateOnScroll animationType="fade-right" delay={0.1}>
          <motion.div whileHover={{ y: -5 }}>
            <div className="card">
              <motion.h2 
                className="h2 mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Output Products
              </motion.h2>
              <div className="space-y-6">
                {data.process_details.output_products.map((product, index) => (
                  <AnimateOnScroll key={`product-${index}`} animationType="fade-up" delay={0.2 + index * 0.1}>
                    <motion.div 
                      className="list-item"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mr-5">
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl text-gray-900">{product.split('(')[0].trim()}</h3>
                        <p className="text-gray-600">{product.includes('(') ? product.match(/\((.*?)\)/)[1] : ''}</p>
                      </div>
                    </motion.div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animationType="fade-up" delay={0.1}>
        <motion.div 
          className="card mb-16"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2 
            className="h2 mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technology Advantages
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                    ⚙️
                  </span>
                  Process Benefits
                </motion.h3>
                <ul className="space-y-4">
                  {[
                    "High conversion efficiency (70-80%) compared to traditional methods",
                    "Produces high-quality fuel products suitable for various applications",
                    "Operates at lower temperatures reducing energy consumption",
                    "Minimal environmental emissions during operation"
                  ].map((benefit, index) => (
                    <AnimateOnScroll key={index} animationType="fade-up" delay={0.2 + index * 0.1}>
                      <motion.li 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="text-green-500 mr-3 mt-1 text-xl">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    </AnimateOnScroll>
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
                  Economic Benefits
                </motion.h3>
                <ul className="space-y-4">
                  {[
                    "Lower capital investment compared to large-scale facilities",
                    "Faster deployment and scalability options",
                    "Reduced transportation costs due to decentralized processing",
                    "Multiple revenue streams from various product outputs"
                  ].map((benefit, index) => (
                    <AnimateOnScroll key={index} animationType="fade-up" delay={0.2 + index * 0.1}>
                      <motion.li 
                        className="flex items-start"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <span className="text-blue-500 mr-3 mt-1 text-xl">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    </AnimateOnScroll>
                  ))}
                </ul>
              </motion.div>
            </AnimateOnScroll>
          </div>
        </motion.div>
      </AnimateOnScroll>

      <AnimateOnScroll animationType="fade-up" delay={0.3}>
        <motion.div 
          className="gradient-bg"
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2 
            className="h2 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Innovation Impact
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-700 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            This micro-scale catalytic pyrolysis technology represents a breakthrough in waste-to-energy conversion, 
            offering a commercially viable solution that addresses both environmental challenges and energy security concerns 
            while creating sustainable economic opportunities.
          </motion.p>
        </motion.div>
      </AnimateOnScroll>
    </div>
  );
};

export default Technology;