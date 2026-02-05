import React from 'react';
import { Link } from 'react-router-dom';

const Market = () => {
  const marketData = {
    definition: {
      approach: "micro-scale, decentralized plastic waste processing units",
      location: "Tier 2 and Tier 3 cities across India",
      target: "areas with high plastic waste generation and industrial demand for alternative fuels"
    },
    capacity: {
      monthly: "150 tons per month (1800 tons annually)",
      daily: "Approximately 5 tons per day",
      utilization: "85% operational efficiency",
      feedstock: "Mixed plastic waste (LDPE, HDPE, PP, PS)"
    },
    revenue: {
      monthly: "₹25 lakhs per unit",
      annual: "₹3 crores per unit",
      breakdown: [
        { source: "Liquid fuel sales", amount: "₹18 lakhs/month", percentage: "72%" },
        { source: "Gaseous fuel sales", amount: "₹3.5 lakhs/month", percentage: "14%" },
        { source: "Waste processing fees", amount: "₹2 lakhs/month", percentage: "8%" },
        { source: "By-product sales", amount: "₹1.5 lakhs/month", percentage: "6%" }
      ]
    },
    pricing: {
      liquidFuel: "₹17,000 per ton",
      gaseousFuel: "₹14,000 per ton",
      processingFee: "₹1,333 per ton"
    },
    demandDrivers: [
      "Rising fuel costs driving industrial adoption of alternative fuels",
      "Government waste management regulations creating compliance requirements",
      "Corporate sustainability initiatives increasing demand for green solutions",
      "Growing environmental awareness among businesses and municipalities"
    ],
    segments: [
      "Industrial fuel users seeking cost-effective alternatives",
      "Transportation sector requiring sustainable fuel solutions",
      "Waste management companies needing processing partnerships",
      "Municipal corporations addressing plastic waste challenges"
    ],
    marketScale: {
      tam: "₹28,000 crores annually across India",
      strategy: "Concentrated deployment in high-opportunity cities",
      scalability: "Replicable micro-unit model suitable for multiple locations"
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="section-title">Market Analysis – Market Size and Opportunities</h1>
        <p className="section-subtitle">Comprehensive analysis of the plastic waste conversion market with focus on scalable, decentralized processing solutions</p>
      </div>
      
      {/* Market Definition */}
      <div className="card mb-12">
        <h2 className="h2 mb-8 text-center">Market Definition and Approach</h2>
        <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Our market approach focuses on <strong className="font-bold text-blue-700">{marketData.definition.approach}</strong> strategically positioned in {marketData.definition.location}. This localized model targets {marketData.definition.target}.
          </p>
        </div>
      </div>

      {/* Market Size Cards */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Processing Capacity */}
        <div className="card">
          <h3 className="h3 text-center mb-8">Processing Capacity</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center py-4 px-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
              <span className="text-gray-700 font-medium">Monthly Capacity:</span>
              <span className="font-bold text-lg text-green-600">{marketData.capacity.monthly}</span>
            </li>
            <li className="flex justify-between items-center py-4 px-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
              <span className="text-gray-700 font-medium">Daily Rate:</span>
              <span className="font-bold text-lg text-green-600">{marketData.capacity.daily}</span>
            </li>
            <li className="flex justify-between items-center py-4 px-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
              <span className="text-gray-700 font-medium">Utilization:</span>
              <span className="font-bold text-lg text-green-600">{marketData.capacity.utilization}</span>
            </li>
            <li className="flex justify-between items-center py-4 px-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl">
              <span className="text-gray-700 font-medium">Feedstock:</span>
              <span className="font-bold text-lg text-green-600">{marketData.capacity.feedstock}</span>
            </li>
          </ul>
        </div>

        {/* Revenue Potential */}
        <div className="card">
          <h3 className="h3 text-center mb-8">Revenue Potential</h3>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 text-center border border-green-100">
              <p className="text-xl font-bold text-green-800 mb-2">Monthly: {marketData.revenue.monthly}</p>
              <p className="text-lg text-gray-700">Annual: {marketData.revenue.annual}</p>
            </div>
            
            <h4 className="font-bold text-lg text-center text-gray-800 mb-6">Revenue Breakdown:</h4>
            <div className="space-y-3">
              {marketData.revenue.breakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-5">
                  <span className="text-gray-700 font-medium">{item.source}</span>
                  <div className="text-right">
                    <p className="font-bold text-green-600">{item.amount}</p>
                    <p className="text-sm text-gray-500 font-medium">{item.percentage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Market Opportunities */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Geographic Focus */}
        <div className="card">
          <h3 className="h3 text-center mb-8">Geographic Focus Areas</h3>
          <p className="text-gray-700 mb-6 text-center font-medium">The market targets <strong className="text-blue-700">Tier 2 and Tier 3 cities</strong> with:</p>
          <ul className="space-y-4">
            <li className="list-item">
              <span className="text-green-500 mr-3 mt-1 text-xl font-bold">✓</span>
              <span className="text-gray-700">High plastic waste generation rates</span>
            </li>
            <li className="list-item">
              <span className="text-green-500 mr-3 mt-1 text-xl font-bold">✓</span>
              <span className="text-gray-700">Existing industrial base requiring alternative fuels</span>
            </li>
            <li className="list-item">
              <span className="text-green-500 mr-3 mt-1 text-xl font-bold">✓</span>
              <span className="text-gray-700">Growing environmental regulations</span>
            </li>
            <li className="list-item">
              <span className="text-green-500 mr-3 mt-1 text-xl font-bold">✓</span>
              <span className="text-gray-700">Limited centralized waste management infrastructure</span>
            </li>
          </ul>
        </div>

        {/* Pricing Structure */}
        <div className="card">
          <h3 className="h3 text-center mb-8">Product Pricing Structure</h3>
          <div className="space-y-5">
            <div className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
              <span className="text-gray-700 font-medium text-lg">Liquid Fuel:</span>
              <span className="font-bold text-xl text-blue-700">{marketData.pricing.liquidFuel}</span>
            </div>
            <div className="flex justify-between items-center p-5 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
              <span className="text-gray-700 font-medium text-lg">Gaseous Fuel:</span>
              <span className="font-bold text-xl text-green-700">{marketData.pricing.gaseousFuel}</span>
            </div>
            <div className="flex justify-between items-center p-5 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
              <span className="text-gray-700 font-medium text-lg">Processing Fee:</span>
              <span className="font-bold text-xl text-purple-700">{marketData.pricing.processingFee}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Demand Indicators */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Demand Drivers */}
        <div className="card">
          <h3 className="h3 text-center mb-8">Primary Demand Drivers</h3>
          <ol className="space-y-4">
            {marketData.demandDrivers.map((driver, index) => (
              <li key={index} className="list-item">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                  {index + 1}
                </span>
                <span className="text-gray-700 text-lg">{driver}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Target Segments */}
        <div className="card">
          <h3 className="h3 text-center mb-8">Target Market Segments</h3>
          <ul className="space-y-4">
            {marketData.segments.map((segment, index) => (
              <li key={index} className="list-item">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-gray-700 text-lg">{segment}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Market Scale */}
      <div className="gradient-bg mb-12">
        <h2 className="h2 mb-10 text-center">Market Scale and Potential</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="stat-card">
            <div className="text-4xl font-bold text-blue-700 mb-4">{marketData.marketScale.tam}</div>
            <p className="text-gray-700 font-medium">Total Addressable Market</p>
          </div>
          <div className="stat-card">
            <div className="text-xl font-bold text-green-700 mb-4">Focused Deployment Strategy</div>
            <p className="text-gray-700">{marketData.marketScale.strategy}</p>
          </div>
          <div className="stat-card">
            <div className="text-xl font-bold text-purple-700 mb-4">High Scalability</div>
            <p className="text-gray-700">{marketData.marketScale.scalability}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <Link to="/" className="btn-primary">Return to Home</Link>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500 italic">
        All market data and figures presented above are derived from internal analysis and represent the current operational model. Regional opportunities are based on identified demand factors and strategic geographic targeting.
      </div>
    </div>
  );
};

export default Market;