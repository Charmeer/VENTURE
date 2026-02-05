import React from 'react';

const Process = () => {
  const processData = {
    title: "Process Overview",
    description: "Systematic approach involving feedstock preparation, pyrolysis reactor, product separation, and quality control to ensure consistent fuel production.",
    steps: [
      {
        step: 1,
        name: "Feedstock Collection and Sorting",
        description: "Collection of mixed plastic waste from local sources with basic sorting to remove non-plastic materials"
      },
      {
        step: 2,
        name: "Size Reduction and Drying",
        description: "Plastic waste is shredded to uniform size and dried to optimal moisture content"
      },
      {
        step: 3,
        name: "Pyrolysis Reactor Processing",
        description: "Controlled thermal decomposition in presence of catalysts at 400-500°C"
      },
      {
        step: 4,
        name: "Product Separation",
        description: "Fractional condensation separates liquid fuel, gases, and solid residue"
      },
      {
        step: 5,
        name: "Quality Testing and Storage",
        description: "Final product testing for quality parameters and proper storage"
      }
    ],
    roadmap: [
      {
        phase: "Phase 1",
        title: "Initial Setup and Pilot Implementation",
        description: "Establishment of the first micro-scale processing unit with focus on system commissioning and initial operational procedures. This phase emphasizes learning and process optimization at small scale."
      },
      {
        phase: "Phase 2",
        title: "Operational Stabilization",
        description: "Refinement of operational procedures and establishment of consistent production standards. Focus on achieving reliable daily operations and quality control protocols."
      },
      {
        phase: "Phase 3",
        title: "Optimization and Efficiency Improvement",
        description: "Systematic enhancement of processing efficiency and output quality. Implementation of continuous improvement measures based on operational experience and performance data."
      },
      {
        phase: "Phase 4",
        title: "Replication and Scaling",
        description: "Expansion through deployment of additional micro-scale units following the proven model. Each new unit builds upon lessons learned from previous implementations while maintaining standardized processes."
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {processData.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {processData.description}
        </p>
      </div>

      {/* Process Overview Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Plastic Waste Conversion Process
        </h2>
        
        <div className="relative">
          {/* Vertical line for process flow */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-8">
            {processData.steps.map((step, index) => (
              <div key={step.step} className="relative flex items-start">
                {/* Step number circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg z-10">
                  {step.step}
                </div>
                
                {/* Step content card */}
                <div className="ml-6 flex-1">
                  <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {step.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Roadmap Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Development Roadmap
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processData.roadmap.map((phase, index) => (
            <div 
              key={phase.phase} 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold mb-3">
                  {phase.phase.split(' ')[1]}
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {phase.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Details */}
      <section className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Process Technology Specifications
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-5 text-center shadow-sm">
            <div className="text-2xl font-bold text-blue-600 mb-2">400-500°C</div>
            <p className="text-gray-600">Operating Temperature</p>
          </div>
          <div className="bg-white rounded-lg p-5 text-center shadow-sm">
            <div className="text-2xl font-bold text-green-600 mb-2">70-80%</div>
            <p className="text-gray-600">Conversion Efficiency</p>
          </div>
          <div className="bg-white rounded-lg p-5 text-center shadow-sm">
            <div className="text-2xl font-bold text-purple-600 mb-2">Zeolite</div>
            <p className="text-gray-600">Catalyst Type</p>
          </div>
        </div>
        
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="font-semibold text-blue-800">Liquid Fuel</div>
            <div className="text-2xl font-bold text-blue-600">60-70%</div>
            <div className="text-sm text-gray-600">of total output</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="font-semibold text-green-800">Gaseous Fuel</div>
            <div className="text-2xl font-bold text-green-600">20-25%</div>
            <div className="text-sm text-gray-600">of total output</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="font-semibold text-purple-800">Solid Residue</div>
            <div className="text-2xl font-bold text-purple-600">5-10%</div>
            <div className="text-sm text-gray-600">of total output</div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <p className="text-gray-500 italic">
          All process information and development phases are based on established operational procedures and systematic implementation approaches derived from project documentation and technical specifications.
        </p>
      </div>
    </div>
  );
};

export default Process;