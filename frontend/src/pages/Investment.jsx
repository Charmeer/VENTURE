import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { getInvestmentData } from '../utils/api';
import { InvestmentChart } from '../components/Charts';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { motion } from 'framer-motion';

const Investment = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const investmentData = await getInvestmentData();
        setData(investmentData);
      } catch (err) {
        console.error('Error loading investment data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingSpinner message="Loading investment requirements..." />;
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
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
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
        <AnimateOnScroll animationType="fade-left" className="duration-500">
          <div className="card">
            <h2 className="h2 mb-8 text-center">Capital Requirements Breakdown</h2>
            <div className="space-y-4">
              <AnimateOnScroll animationType="fade-up" className="delay-100">
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                  <span className="font-medium text-gray-700 text-lg">Plant Equipment & Machinery</span>
                  <span className="font-bold text-green-600 text-2xl">{data.capital_requirements.plant_equipment}</span>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animationType="fade-up" className="delay-200">
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                  <span className="font-medium text-gray-700 text-lg">Land & Infrastructure</span>
                  <span className="font-bold text-green-600 text-2xl">{data.capital_requirements.land_and_infrastructure}</span>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animationType="fade-up" className="delay-300">
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                  <span className="font-medium text-gray-700 text-lg">Working Capital</span>
                  <span className="font-bold text-green-600 text-2xl">{data.capital_requirements.working_capital}</span>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animationType="fade-up" className="delay-400">
                <div className="flex justify-between items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
                  <span className="font-medium text-gray-700 text-lg">Licensing & Permits</span>
                  <span className="font-bold text-green-600 text-2xl">{data.capital_requirements.licensing_and_permits}</span>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animationType="fade-up" className="delay-500">
                <div className="border-t-2 border-gray-200 pt-6 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900 text-xl">Total Initial Investment</span>
                    <span className="font-bold text-green-600 text-3xl">{data.capital_requirements.total_initial_investment}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animationType="fade-right" className="duration-500">
          <div className="card">
            <h2 className="h2 mb-8 text-center">Investment Visualization</h2>
            <InvestmentChart data={data.capital_requirements} />
          </div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animationType="fade-up">
        <div className="card mb-16">
          <h2 className="h2 mb-10 text-center">Funding Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.funding_sources.map((source, index) => (
              <AnimateOnScroll key={`funding-${index}`} animationType="fade-up" className={`delay-${(index + 1) * 100}`}>
                <div className="stat-card">
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    {source.includes('(60%)') && '60%'}
                    {source.includes('(30%)') && '30%'}
                    {source.includes('(10%)') && '10%'}
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900 mb-3">{source.split(' (')[0]}</h3>
                  <p className="text-gray-600">{source.includes('(') ? source.match(/\((.*?)\)/)[1] : ''}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <AnimateOnScroll animationType="fade-up" className="delay-100">
          <div className="stat-card">
            <div className="text-4xl font-bold text-green-600 mb-4">₹27 Lakhs</div>
            <div className="text-xl font-semibold mb-3 text-gray-800">Total Investment</div>
            <p className="text-gray-600">Complete project setup cost</p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animationType="fade-up" className="delay-200">
          <div className="stat-card">
            <div className="text-4xl font-bold text-blue-600 mb-4">18 Months</div>
            <div className="text-xl font-semibold mb-3 text-gray-800">Payback Period</div>
            <p className="text-gray-600">Time to recover initial investment</p>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll animationType="fade-up" className="delay-300">
          <div className="stat-card">
            <div className="text-4xl font-bold text-purple-600 mb-4">218%</div>
            <div className="text-xl font-semibold mb-3 text-gray-800">5-Year ROI</div>
            <p className="text-gray-600">Return on investment over 5 years</p>
          </div>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animationType="fade-up" className="delay-300">
        <div className="gradient-bg">
          <h2 className="h2 mb-8 text-center">Investment Opportunity Summary</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
            This represents a compelling investment opportunity in the rapidly growing waste-to-energy sector. 
            With strong fundamentals, proven technology, and significant market demand, the project offers attractive 
            returns while contributing to environmental sustainability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimateOnScroll animationType="fade-up" className="delay-100">
              <span className="bg-white px-6 py-3 rounded-full text-green-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">Low Risk Profile</span>
            </AnimateOnScroll>
            <AnimateOnScroll animationType="fade-up" className="delay-200">
              <span className="bg-white px-6 py-3 rounded-full text-green-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">Proven Technology</span>
            </AnimateOnScroll>
            <AnimateOnScroll animationType="fade-up" className="delay-300">
              <span className="bg-white px-6 py-3 rounded-full text-green-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">Government Support</span>
            </AnimateOnScroll>
            <AnimateOnScroll animationType="fade-up" className="delay-400">
              <span className="bg-white px-6 py-3 rounded-full text-green-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-300">Scalable Model</span>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Investment;