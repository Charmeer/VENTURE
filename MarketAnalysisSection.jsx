import React from 'react';

const MarketAnalysisSection = () => {
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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Market Analysis – Market Size and Opportunities
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive analysis of the plastic waste conversion market with focus on scalable, decentralized processing solutions
        </p>
      </div>

      {/* Market Definition */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Market Definition and Approach</h2>
        <div className="bg-blue-50 rounded-lg p-6">
          <p className="text-lg text-gray-700">
            Our market approach focuses on <strong>{marketData.definition.approach}</strong> strategically positioned in {marketData.definition.location}. This localized model targets {marketData.definition.target}.
          </p>
        </div>
      </section>

      {/* Market Size Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Market Size</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Processing Capacity Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Processing Capacity</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">Monthly Capacity:</span>
                <span className="font-medium text-gray-800">{marketData.capacity.monthly}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Daily Rate:</span>
                <span className="font-medium text-gray-800">{marketData.capacity.daily}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Utilization:</span>
                <span className="font-medium text-green-600">{marketData.capacity.utilization}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Feedstock:</span>
                <span className="font-medium text-gray-800">{marketData.capacity.feedstock}</span>
              </li>
            </ul>
          </div>

          {/* Revenue Potential Card */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Revenue Potential</h3>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-lg font-semibold text-green-800">Monthly: {marketData.revenue.monthly}</p>
                <p className="text-gray-600">Annual: {marketData.revenue.annual}</p>
              </div>
              
              <h4 className="font-medium text-gray-700">Revenue Breakdown:</h4>
              <div className="space-y-2">
                {marketData.revenue.breakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-50 rounded p-2">
                    <span className="text-sm text-gray-600">{item.source}</span>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">{item.amount}</p>
                      <p className="text-xs text-gray-500">{item.percentage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Market Opportunities by Region</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Geographic Focus */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Geographic Focus Areas</h3>
            <p className="text-gray-600 mb-4">The market targets <strong>Tier 2 and Tier 3 cities</strong> with:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                High plastic waste generation rates
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Existing industrial base requiring alternative fuels
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Growing environmental regulations
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Limited centralized waste management infrastructure
              </li>
            </ul>
          </div>

          {/* Pricing Structure */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Product Pricing Structure</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-blue-50 rounded">
                <span className="text-gray-700">Liquid Fuel:</span>
                <span className="font-semibold text-blue-700">{marketData.pricing.liquidFuel}</span>
              </div>
              <div className="flex justify-between p-3 bg-green-50 rounded">
                <span className="text-gray-700">Gaseous Fuel:</span>
                <span className="font-semibold text-green-700">{marketData.pricing.gaseousFuel}</span>
              </div>
              <div className="flex justify-between p-3 bg-purple-50 rounded">
                <span className="text-gray-700">Processing Fee:</span>
                <span className="font-semibold text-purple-700">{marketData.pricing.processingFee}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demand Indicators */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Demand Indicators</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Demand Drivers */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Primary Demand Drivers</h3>
            <ol className="space-y-3">
              {marketData.demandDrivers.map((driver, index) => (
                <li key={index} className="flex">
                  <span className="font-bold text-indigo-600 mr-3">{index + 1}.</span>
                  <span className="text-gray-700">{driver}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Target Segments */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Target Market Segments</h3>
            <ul className="space-y-3">
              {marketData.segments.map((segment, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span className="text-gray-700">{segment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Market Scale and Potential */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Market Scale and Potential</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2">{marketData.marketScale.tam}</div>
              <p className="text-gray-600">Total Addressable Market</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-green-700 mb-2">Focused Deployment Strategy</div>
              <p className="text-gray-600">{marketData.marketScale.strategy}</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-purple-700 mb-2">High Scalability</div>
              <p className="text-gray-600">{marketData.marketScale.scalability}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-500 italic">
          All market data and figures presented above are derived from internal analysis and represent the current operational model. 
          Regional opportunities are based on identified demand factors and strategic geographic targeting.
        </p>
      </div>
    </div>
  );
};

export default MarketAnalysisSection;