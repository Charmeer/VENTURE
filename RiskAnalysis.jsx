import React, { useState } from 'react';

const RiskAnalysis = () => {
  const [expandedRisk, setExpandedRisk] = useState(null);

  const riskData = {
    title: "Risk Analysis – Risk Mitigation Strategies",
    description: "Comprehensive risk assessment and mitigation strategies covering operational, market, and regulatory challenges.",
    risks: [
      {
        id: 1,
        category: "Feedstock Supply Consistency",
        risk: "Dependence on consistent availability of mixed plastic waste from local sources with potential supply disruptions due to seasonal variations, collection inefficiencies, or source availability changes.",
        impact: "Operational interruptions, reduced processing capacity, and potential revenue loss when feedstock quantities fall below required levels.",
        mitigation: "Multiple supplier agreements and local collection partnerships to ensure diversified sourcing channels and backup supply options."
      },
      {
        id: 2,
        category: "Price Volatility",
        risk: "Market fluctuations in both feedstock procurement costs and final product pricing that could affect profit margins and financial stability.",
        impact: "Reduced profitability, cash flow challenges, and potential competitiveness issues in the alternative fuel market.",
        mitigation: "Long-term supply contracts to lock in favorable procurement rates and diversified customer base to maintain stable revenue streams."
      },
      {
        id: 3,
        category: "Regulatory Changes",
        risk: "Evolving environmental regulations, waste management policies, and industry standards that could impose additional compliance requirements or operational restrictions.",
        impact: "Increased compliance costs, potential operational modifications, and possible permit or licensing challenges.",
        mitigation: "Regular compliance monitoring and industry association membership to stay informed of regulatory developments and participate in policy discussions."
      },
      {
        id: 4,
        category: "Technology Performance",
        risk: "Equipment reliability issues, process efficiency variations, or technical malfunctions that could affect production quality and operational consistency.",
        impact: "Production downtime, quality control challenges, and potential customer satisfaction issues.",
        mitigation: "Regular maintenance schedules and comprehensive operator training programs to ensure optimal equipment performance and skilled operation."
      }
    ],
    contingencyPlans: [
      "Alternative feedstock sources identification for supply chain resilience",
      "Backup equipment suppliers to minimize downtime",
      "Insurance coverage for operational risks and business interruption",
      "Emergency response protocols for unexpected operational challenges"
    ]
  };

  const toggleRisk = (riskId) => {
    setExpandedRisk(expandedRisk === riskId ? null : riskId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {riskData.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {riskData.description}
        </p>
      </div>

      {/* Risk Categories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Key Risk Categories
        </h2>
        
        <div className="space-y-6">
          {riskData.risks.map((risk) => (
            <div 
              key={risk.id} 
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Risk Header */}
              <div 
                className="p-6 cursor-pointer bg-gradient-to-r from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 transition-colors"
                onClick={() => toggleRisk(risk.id)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-800">
                    {risk.id}. {risk.category}
                  </h3>
                  <div className="flex items-center">
                    <span className="mr-2 text-sm text-gray-500">
                      {expandedRisk === risk.id ? 'Collapse' : 'Expand'}
                    </span>
                    <svg 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${expandedRisk === risk.id ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded Risk Details */}
              {expandedRisk === risk.id && (
                <div className="px-6 pb-6 bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    {/* Risk Description */}
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                      <h4 className="text-lg font-semibold text-red-700 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        Risk Description
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {risk.risk}
                      </p>
                    </div>

                    {/* Impact */}
                    <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100">
                      <h4 className="text-lg font-semibold text-orange-700 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Impact
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {risk.impact}
                      </p>
                    </div>
                  </div>

                  {/* Mitigation Strategy */}
                  <div className="mt-6 bg-blue-50 rounded-lg p-5 border border-blue-100">
                    <h4 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Mitigation Strategy
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {risk.mitigation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contingency Planning Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Contingency Planning
        </h2>
        
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {riskData.contingencyPlans.map((plan, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">{plan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management Philosophy */}
      <section className="text-center bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Risk Management Approach
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our systematic risk management approach continuously monitors and adapts to changing conditions, 
          ensuring proactive identification and mitigation of potential challenges while maintaining 
          operational excellence and stakeholder confidence.
        </p>
      </section>

      {/* Footer Note */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-500 italic">
          All risk assessments and mitigation strategies are based on comprehensive analysis of operational requirements, 
          market conditions, and regulatory environment. Risk management approaches are continuously reviewed and updated 
          based on operational experience and changing conditions.
        </p>
      </div>
    </div>
  );
};

export default RiskAnalysis;