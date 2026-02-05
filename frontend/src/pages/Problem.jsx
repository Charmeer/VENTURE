import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { getProblemData } from '../utils/api';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { motion } from 'framer-motion';

const Problem = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const problemData = await getProblemData();
        setData(problemData);
      } catch (err) {
        setError('Failed to load problem data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingSpinner message="Loading plastic waste problem data..." />;
  if (error) return <div className="text-center py-12 text-red-600">{error}</div>;
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
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20"></div>
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

      <AnimateOnScroll animationType="fade-up">
        <div className="card mb-16">
          <h2 className="h2">Scale of the Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimateOnScroll animationType="fade-up" className="delay-100">
              <div className="stat-card">
                <div className="text-4xl font-bold text-red-600 mb-3">{data.statistics.annual_plastic_waste}</div>
                <p className="text-gray-700 font-medium">Annual Plastic Waste Generated</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animationType="fade-up" className="delay-200">
              <div className="stat-card">
                <div className="text-4xl font-bold text-yellow-600 mb-3">{data.statistics.recycling_rate}</div>
                <p className="text-gray-700 font-medium">Traditional Recycling Rate</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animationType="fade-up" className="delay-300">
              <div className="stat-card">
                <div className="text-4xl font-bold text-orange-600 mb-3">{data.statistics.unmanaged_waste}</div>
                <p className="text-gray-700 font-medium">Unmanaged Waste Stream</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <AnimateOnScroll animationType="fade-left" className="duration-500">
          <div className="card">
            <h2 className="h2 mb-8 text-center">Environmental Consequences</h2>
            <ul className="space-y-6">
              <AnimateOnScroll animationType="fade-up" className="delay-100">
                <li className="list-item">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-red-600 text-lg font-bold">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Soil Contamination</h3>
                    <span className="text-gray-700">Plastic chemicals leaching into agricultural land</span>
                  </div>
                </li>
              </AnimateOnScroll>
              <AnimateOnScroll animationType="fade-up" className="delay-200">
                <li className="list-item">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-red-600 text-lg font-bold">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Water Pollution</h3>
                    <span className="text-gray-700">Microplastics entering rivers and groundwater systems</span>
                  </div>
                </li>
              </AnimateOnScroll>
              <AnimateOnScroll animationType="fade-up" className="delay-300">
                <li className="list-item">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-red-600 text-lg font-bold">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Air Pollution</h3>
                    <span className="text-gray-700">Toxic fumes from open burning of plastic waste</span>
                  </div>
                </li>
              </AnimateOnScroll>
              <AnimateOnScroll animationType="fade-up" className="delay-400">
                <li className="list-item">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-red-600 text-lg font-bold">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Biodiversity Loss</h3>
                    <span className="text-gray-700">Wildlife ingestion and habitat destruction</span>
                  </div>
                </li>
              </AnimateOnScroll>
            </ul>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animationType="fade-right" className="duration-500">
          <div className="card">
            <h2 className="h2 mb-8 text-center">Health Impacts</h2>
            <ul className="space-y-6">
              <AnimateOnScroll animationType="fade-up" className="delay-100">
                <li className="list-item">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-orange-600 text-lg font-bold">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Respiratory Issues</h3>
                    <span className="text-gray-700">Inhalation of toxic fumes from plastic burning</span>
                  </div>
                </li>
              </AnimateOnScroll>
              <AnimateOnScroll animationType="fade-up" className="delay-200">
                <li className="list-item">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-orange-600 text-lg font-bold">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Cancer Risk</h3>
                    <span className="text-gray-700">Exposure to carcinogenic plastic chemicals</span>
                  </div>
                </li>
              </AnimateOnScroll>
              <AnimateOnScroll animationType="fade-up" className="delay-300">
                <li className="list-item">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-orange-600 text-lg font-bold">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Hormonal Disruption</h3>
                    <span className="text-gray-700">Endocrine-disrupting compounds affecting human health</span>
                  </div>
                </li>
              </AnimateOnScroll>
              <AnimateOnScroll animationType="fade-up" className="delay-400">
                <li className="list-item">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-orange-600 text-lg font-bold">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Child Development</h3>
                    <span className="text-gray-700">Particularly vulnerable populations facing long-term impacts</span>
                  </div>
                </li>
              </AnimateOnScroll>
            </ul>
          </div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animationType="fade-up" className="delay-300">
        <div className="gradient-bg">
          <h2 className="h2 mb-8 text-center">Economic Burden</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              The mismanagement of plastic waste creates substantial economic costs for society, including healthcare expenses, environmental cleanup costs, and lost productivity from pollution-related illnesses.
            </p>
            <AnimateOnScroll animationType="fade-up" className="delay-400">
              <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                  <span className="mr-3 bg-blue-100 p-2 rounded-lg">
                    💸
                  </span>
                  Current Waste Management Gap
                </h3>
                <p className="text-blue-700">
                  Traditional recycling methods can only process 30% of plastic waste effectively, leaving 70% requiring alternative solutions. 
                  This represents both an environmental crisis and a significant economic opportunity for innovative waste conversion technologies.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Problem;