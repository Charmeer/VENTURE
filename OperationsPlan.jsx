import React from 'react';

const OperationsPlan = () => {
  const operationsData = {
    title: "Operations Plan – Implementation Details",
    description: "Systematic operational approach ensuring efficient day-to-day management of the plastic waste conversion system with clearly defined workflows.",
    dailyOperations: {
      feedstock: {
        title: "Feedstock Intake and Handling",
        steps: [
          "Collection of mixed plastic waste from local sources",
          "Basic sorting to remove non-plastic materials",
          "Size reduction through shredding to uniform dimensions",
          "Drying to optimal moisture content for processing efficiency"
        ]
      },
      processing: {
        title: "Processing Operations",
        details: [
          { label: "Monthly Capacity", value: "150 tons of feedstock" },
          { label: "Utilization Rate", value: "85% operational efficiency" },
          { label: "Operating Temperature", value: "400-500°C" },
          { label: "Catalyst System", value: "Zeolite-based catalysts" }
        ]
      },
      output: {
        title: "Output Handling and Utilization",
        details: [
          { label: "Fuel Production", value: "105 tons monthly" },
          { label: "Product Distribution", value: "Liquid fuel (60-70%), Gaseous fuel (20-25%), Solid residue (5-10%)" },
          { label: "Quality Control", value: "Final testing and certification" },
          { label: "Storage Management", value: "Proper containment protocols" }
        ]
      }
    },
    implementation: {
      setup: {
        title: "Initial Setup Requirements",
        requirements: [
          { item: "Plant Equipment", cost: "₹12 lakhs", description: "Complete processing system" },
          { item: "Infrastructure", cost: "₹8 lakhs", description: "Land and facility preparation" },
          { item: "Working Capital", cost: "₹5 lakhs", description: "Initial operational funding" },
          { item: "Licensing", cost: "₹2 lakhs", description: "Permits and regulatory compliance" }
        ]
      },
      configuration: {
        title: "System Configuration",
        steps: [
          "Local collection network establishment",
          "Pyrolysis reactor installation and calibration",
          "Fractional condensation system configuration",
          "Testing equipment and storage facilities setup"
        ]
      },
      constraints: {
        title: "Operational Constraints",
        limitations: [
          "Feedstock: Mixed plastic waste (LDPE, HDPE, PP, PS)",
          "Processing limit: 150 tons monthly maximum",
          "Temperature range: 400-500°C operational parameters",
          "Utilization target: 85% minimum efficiency"
        ]
      }
    },
    resources: {
      inputs: {
        title: "Input Materials",
        materials: [
          "Mixed plastic waste from local sources",
          "Zeolite-based catalysts for processing",
          "Electricity for plant operations",
          "Local logistics for feedstock collection"
        ]
      },
      infrastructure: {
        title: "Operational Infrastructure",
        facilities: [
          "Processing facility configured for micro-scale operations",
          "Segregated storage zones for feedstock and products",
          "Quality control laboratory with testing capabilities",
          "Utility systems for power and basic infrastructure"
        ]
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {operationsData.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {operationsData.description}
        </p>
      </div>

      {/* Daily Operations Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Daily Operations Workflow
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feedstock Handling */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {operationsData.dailyOperations.feedstock.title}
            </h3>
            <ul className="space-y-3">
              {operationsData.dailyOperations.feedstock.steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Processing Operations */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {operationsData.dailyOperations.processing.title}
            </h3>
            <div className="space-y-3">
              {operationsData.dailyOperations.processing.details.map((detail, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 font-medium">{detail.label}:</span>
                  <span className="text-gray-800 font-semibold">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Output Handling */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {operationsData.dailyOperations.output.title}
            </h3>
            <div className="space-y-3">
              {operationsData.dailyOperations.output.details.map((detail, index) => (
                <div key={index} className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-sm text-purple-600 font-medium">{detail.label}</div>
                  <div className="text-gray-800">{detail.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Implementation Process
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Setup Requirements */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-orange-700 mb-4">
              {operationsData.implementation.setup.title}
            </h3>
            <div className="space-y-3">
              {operationsData.implementation.setup.requirements.map((req, index) => (
                <div key={index} className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                  <div className="font-semibold text-orange-800">{req.item}</div>
                  <div className="text-orange-600 font-medium">{req.cost}</div>
                  <div className="text-sm text-gray-600">{req.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* System Configuration */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-teal-700 mb-4">
              {operationsData.implementation.configuration.title}
            </h3>
            <ul className="space-y-3">
              {operationsData.implementation.configuration.steps.map((step, index) => (
                <li key={index} className="flex items-start p-3 bg-teal-50 rounded-lg">
                  <span className="flex-shrink-0 w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operational Constraints */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-red-700 mb-4">
              {operationsData.implementation.constraints.title}
            </h3>
            <div className="space-y-3">
              {operationsData.implementation.constraints.limitations.map((limit, index) => (
                <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-100">
                  <span className="text-gray-700">{limit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Requirements Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Resource Requirements
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Materials */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              {operationsData.resources.inputs.title}
            </h3>
            <ul className="space-y-3">
              {operationsData.resources.inputs.materials.map((material, index) => (
                <li key={index} className="flex items-start p-3 bg-white bg-opacity-70 rounded-lg">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">{material}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Operational Infrastructure */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {operationsData.resources.infrastructure.title}
            </h3>
            <ul className="space-y-3">
              {operationsData.resources.infrastructure.facilities.map((facility, index) => (
                <li key={index} className="flex items-start p-3 bg-white bg-opacity-70 rounded-lg">
                  <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">{facility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Operational Workflow Structure */}
      <section className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Operational Workflow Structure
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-4 text-center">
          <div className="bg-white rounded-lg p-4 shadow-sm min-w-[120px]">
            <div className="font-semibold text-blue-700">Input Phase</div>
            <div className="text-sm text-gray-600 mt-2">Collection → Sorting → Preparation → Drying</div>
          </div>
          
          <svg className="w-8 h-8 text-gray-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          
          <div className="bg-white rounded-lg p-4 shadow-sm min-w-[120px]">
            <div className="font-semibold text-green-700">Processing Phase</div>
            <div className="text-sm text-gray-600 mt-2">Size Reduction → Pyrolysis → Decomposition → Formation</div>
          </div>
          
          <svg className="w-8 h-8 text-gray-400 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          
          <div className="bg-white rounded-lg p-4 shadow-sm min-w-[120px]">
            <div className="font-semibold text-purple-700">Output Phase</div>
            <div className="text-sm text-gray-600 mt-2">Separation → Testing → Storage → Distribution</div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-500 italic">
          All operational procedures and implementation details are based on established technical specifications and systematic operational requirements. 
          The framework emphasizes consistent processing standards and efficient resource utilization within defined operational parameters.
        </p>
      </div>
    </div>
  );
};

export default OperationsPlan;