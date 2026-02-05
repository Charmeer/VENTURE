import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { getRevenueData } from '../utils/api';
import { RevenueChart } from '../components/Charts';

const Revenue = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const revenueData = await getRevenueData();
        setData(revenueData);
      } catch (err) {
        console.error('Error loading revenue data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingSpinner message="Loading revenue data..." />;
  if (!data) return <div className="text-center py-12">No data available</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="section-title">{data.title}</h1>
        <p className="section-subtitle">{data.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Revenue Streams Breakdown</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Liquid Fuel Sales</span>
              <span className="font-bold text-green-600 text-xl">₹18 lakhs/month</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Gaseous Fuel Sales</span>
              <span className="font-bold text-green-600 text-xl">₹3.5 lakhs/month</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">Waste Processing Fees</span>
              <span className="font-bold text-green-600 text-xl">₹2 lakhs/month</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-700">By-product Sales</span>
              <span className="font-bold text-green-600 text-xl">₹1.5 lakhs/month</span>
            </div>
            <div className="border-t-2 border-gray-200 pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-lg">Total Monthly Revenue</span>
                <span className="font-bold text-green-600 text-2xl">₹25 lakhs/month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Revenue Distribution</h2>
          <RevenueChart data={data.revenue_streams} />
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">₹17,000/ton</div>
            <h3 className="font-semibold text-gray-900 mb-2">Liquid Fuel Price</h3>
            <p className="text-gray-600">High-quality diesel substitute</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">₹14,000/ton</div>
            <h3 className="font-semibold text-gray-900 mb-2">Gaseous Fuel Price</h3>
            <p className="text-gray-600">LPG and natural gas alternative</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">₹1,333/ton</div>
            <h3 className="font-semibold text-gray-900 mb-2">Processing Fee</h3>
            <p className="text-gray-600">Waste collection and processing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;