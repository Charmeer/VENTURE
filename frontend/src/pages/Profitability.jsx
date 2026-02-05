import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { getProfitabilityData } from '../utils/api';
import { ProfitabilityChart } from '../components/Charts';

const Profitability = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profitData = await getProfitabilityData();
        setData(profitData);
      } catch (err) {
        console.error('Error loading profitability data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingSpinner message="Loading profitability analysis..." />;
  if (!data) return <div className="text-center py-12">No data available</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="section-title">{data.title}</h1>
        <p className="section-subtitle">{data.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Performance Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Monthly Gross Profit</span>
              <span className="font-bold text-green-600 text-xl">₹14.95 lakhs</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Monthly Operating Expenses</span>
              <span className="font-bold text-orange-600 text-xl">₹10.05 lakhs</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <span className="font-medium text-gray-700">Monthly Net Profit</span>
              <span className="font-bold text-green-600 text-2xl">₹4.9 lakhs</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
              <span className="font-medium text-gray-700">Annual Net Profit</span>
              <span className="font-bold text-blue-600 text-2xl">₹58.8 lakhs</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Profitability Analysis</h2>
          <ProfitabilityChart data={data.financial_metrics} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="card text-center">
          <div className="text-3xl font-bold text-green-600 mb-4">60%</div>
          <h3 className="text-xl font-semibold mb-2">Gross Margin</h3>
          <p className="text-gray-600">Strong profitability from core operations</p>
        </div>
        
        <div className="card text-center">
          <div className="text-3xl font-bold text-blue-600 mb-4">20%</div>
          <h3 className="text-xl font-semibold mb-2">Net Margin</h3>
          <p className="text-gray-600">Healthy bottom-line performance</p>
        </div>
        
        <div className="card text-center">
          <div className="text-3xl font-bold text-purple-600 mb-4">18 Months</div>
          <h3 className="text-xl font-semibold mb-2">Payback Period</h3>
          <p className="text-gray-600">Quick return on investment</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Returns</h2>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-4">218%</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">5-Year Return on Investment</h3>
            <p className="text-gray-700">Exceptional returns with sustainable business model</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profitability;