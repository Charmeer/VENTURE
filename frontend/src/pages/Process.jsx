import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="section-title">{processData.title}</h1>
        <p className="section-subtitle">{processData.description}</p>
      </div>

      {/* Process Overview Section */}
      <div className="mb-20">
        <h2 className="h2 mb-12 text-center">
          Plastic Waste Conversion Process
        </h2>
        
        <div className="relative">
          {/* Vertical line for process flow */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-400 hidden md:block"></div>
          
          <div className="space-y-10">
            {processData.steps.map((step, index) => (
              <div key={step.step} className="relative flex items-start">
                {/* Step number circle */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
                  {step.step}
                </div>
                
                {/* Step content card */}
                <div className="ml-8 flex-1">
                  <div className="card hover:shadow-xl transition-all duration-300 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Roadmap Section */}
      <div className="mb-20">
        <h2 className="h2 mb-12 text-center">
          Development Roadmap
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processData.roadmap.map((phase, index) => (
            <div 
              key={phase.phase} 
              className="card hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-xl mb-4 shadow-lg">
                    {phase.phase.split(' ')[1]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {phase.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Details */}
      <div className="gradient-bg mb-16">
        <h2 className="h2 mb-10 text-center">
          Process Technology Specifications
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="stat-card">
            <div className="text-3xl font-bold text-green-600 mb-3">400-500°C</div>
            <p className="text-gray-700 font-medium">Operating Temperature</p>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold text-green-600 mb-3">70-80%</div>
            <p className="text-gray-700 font-medium">Conversion Efficiency</p>
          </div>
          <div className="stat-card">
            <div className="text-3xl font-bold text-green-600 mb-3">Zeolite</div>
            <p className="text-gray-700 font-medium">Catalyst Type</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="stat-card">
            <div className="font-semibold text-xl text-blue-700 mb-2">Liquid Fuel</div>
            <div className="text-3xl font-bold text-blue-600 mb-2">60-70%</div>
            <p className="text-gray-600">of total output</p>
          </div>
          <div className="stat-card">
            <div className="font-semibold text-xl text-green-700 mb-2">Gaseous Fuel</div>
            <div className="text-3xl font-bold text-green-600 mb-2">20-25%</div>
            <p className="text-gray-600">of total output</p>
          </div>
          <div className="stat-card">
            <div className="font-semibold text-xl text-purple-700 mb-2">Solid Residue</div>
            <div className="text-3xl font-bold text-purple-600 mb-2">5-10%</div>
            <p className="text-gray-600">of total output</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <Link to="/" className="btn-primary">Return to Home</Link>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500 italic">
        All process information and development phases are based on established operational procedures and systematic implementation approaches derived from project documentation and technical specifications.
      </div>
    </div>
  );
};

export default Process;