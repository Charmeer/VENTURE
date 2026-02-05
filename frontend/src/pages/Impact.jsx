import React from 'react';
import { Link } from 'react-router-dom';

const Impact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="section-title">Impact Assessment – Sustainability Metrics</h1>
        <p className="section-subtitle">Triple-bottom-line approach delivering measurable environmental benefits, financial returns, and positive social outcomes</p>
      </div>

      {/* Impact Assessment Overview */}
      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact Assessment Overview</h2>
        <p className="text-gray-700 mb-4">
          The plastic waste conversion system addresses India's significant plastic waste challenge by converting 1,800 tons of plastic waste annually into valuable fuel products while creating local employment opportunities and reducing environmental pollution.
        </p>
      </div>

      {/* Sustainability Metrics */}
      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Sustainability Metrics</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Waste Diversion</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">1,800 tons</p>
            <p className="text-sm text-blue-700">annually from landfills</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-800 mb-2">Conversion Efficiency</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">70-80%</p>
            <p className="text-sm text-green-700">fuel output rate</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-800 mb-2">Economic Value</h3>
            <p className="text-3xl font-bold text-purple-600 mb-2">₹25L/month</p>
            <p className="text-sm text-purple-700">revenue generation</p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <h3 className="font-semibold text-orange-800 mb-2">Emissions Reduction</h3>
            <p className="text-3xl font-bold text-orange-600 mb-2">12,000 tons</p>
            <p className="text-sm text-orange-700">CO₂ equivalent yearly</p>
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Environmental Impact</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Waste Reduction</h3>
            <p className="text-gray-700">
              The system significantly diverts plastic waste from traditional disposal methods, preventing 1,800 tons of plastic from entering landfills each year. This addresses the critical issue where 70% of India's 3.5 million tons of annual plastic waste currently ends up in landfills, oceans, or is burned.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Cleaner Energy Production</h3>
            <p className="text-gray-700">
              The pyrolysis process converts plastic waste into valuable liquid fuel (60-70% yield) and gaseous fuel (20-25% yield), providing a sustainable alternative to conventional fossil fuels. This fuel substitution reduces dependency on traditional energy sources while utilizing waste materials.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Environmental Burden Reduction</h3>
            <p className="text-gray-700">
              The system eliminates pollution from open burning and improper plastic disposal methods. The controlled thermal decomposition process at 400-500°C with zeolite-based catalysts ensures environmentally responsible waste processing compared to traditional disposal methods.
            </p>
          </div>
        </div>
      </div>

      {/* Economic Impact */}
      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Economic Impact</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Revenue Generation</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span>Liquid fuel sales</span>
                <span className="font-medium">₹18 lakhs/month</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span>Gaseous fuel sales</span>
                <span className="font-medium">₹3.5 lakhs/month</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span>Waste processing fees</span>
                <span className="font-medium">₹2 lakhs/month</span>
              </li>
              <li className="flex justify-between py-2 border-b border-gray-100">
                <span>By-product sales</span>
                <span className="font-medium">₹1.5 lakhs/month</span>
              </li>
              <li className="flex justify-between py-2 font-bold text-gray-900">
                <span>Total monthly revenue</span>
                <span>₹25 lakhs</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Local Economic Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>15-20 direct employment opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Enhanced local tax base contributions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Support for decentralized micro-scale operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Development of local business opportunities</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Cost Structure</h3>
          <p className="text-gray-700 mb-3">Monthly operational costs total ₹10.05 lakhs:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="font-medium text-gray-900">₹4.5L</div>
              <div className="text-gray-600">Raw materials</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-gray-900">₹2.8L</div>
              <div className="text-gray-600">Labor costs</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-gray-900">₹2.0L</div>
              <div className="text-gray-600">Utilities & maintenance</div>
            </div>
            <div className="text-center">
              <div className="font-medium text-gray-900">₹0.9L</div>
              <div className="text-gray-600">Transportation & misc</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Impact */}
      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Social Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Health Improvement</h3>
            <p className="text-gray-700 mb-4">
              The system contributes to improved air and water quality by eliminating open burning practices and preventing plastic waste contamination of local water sources. This addresses significant health hazards associated with traditional plastic waste disposal methods.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Skill Development and Employment</h3>
            <p className="text-gray-700 mb-4">
              The facility provides direct employment for 15-20 local workers while offering technical training programs that develop specialized skills in waste processing and renewable energy technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Waste Management Infrastructure</h3>
            <p className="text-gray-700 mb-4">
              The operation enhances local waste collection systems and creates entrepreneurship opportunities for community members to participate in the waste-to-energy value chain.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Development</h3>
            <p className="text-gray-700 mb-4">
              The project supports local business development and strengthens the community's technical capabilities in sustainable waste management practices.
            </p>
          </div>
        </div>
      </div>

      {/* Operational Impact Summary */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Operational Impact Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">150 tons</div>
            <div className="text-blue-800 font-medium">Monthly Processing Capacity</div>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">105 tons</div>
            <div className="text-green-800 font-medium">Fuel Production Monthly</div>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">1,800 tons</div>
            <div className="text-purple-800 font-medium">Annual Waste Diversion</div>
          </div>
          
          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600 mb-2">12,000 tons</div>
            <div className="text-orange-800 font-medium">CO₂ Reduction Yearly</div>
          </div>
          
          <div className="text-center p-6 bg-indigo-50 rounded-lg">
            <div className="text-2xl font-bold text-indigo-600 mb-2">15-20 jobs</div>
            <div className="text-indigo-800 font-medium">Local Employment</div>
          </div>
          
          <div className="text-center p-6 bg-teal-50 rounded-lg">
            <div className="text-2xl font-bold text-teal-600 mb-2">218%</div>
            <div className="text-teal-800 font-medium">5-Year ROI</div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-700 mb-6">
            The system demonstrates measurable sustainability outcomes across environmental, economic, and social dimensions while maintaining strong financial viability through diversified revenue streams and efficient operational processes.
          </p>
          <Link to="/" className="btn-primary">Return to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Impact;