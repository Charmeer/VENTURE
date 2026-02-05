import React from 'react';
import { Link } from 'react-router-dom';

const NextSteps = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="section-title">Call to Action / Next Steps</h1>
        <p className="section-subtitle">Ready to transform waste into opportunity? Here's how to get started</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Immediate Actions</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Contact Our Team</h3>
                <p className="text-gray-600">Schedule a consultation to discuss your investment opportunity</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Site Assessment</h3>
                <p className="text-gray-600">Evaluate potential locations and infrastructure requirements</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Due Diligence</h3>
                <p className="text-gray-600">Review technical, financial, and market feasibility studies</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
              <span className="font-medium">Months 1-2: Project planning and approvals</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-4"></div>
              <span className="font-medium">Months 3-4: Equipment procurement and installation</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-4"></div>
              <span className="font-medium">Months 5-6: Testing and commissioning</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-purple-500 mr-4"></div>
              <span className="font-medium">Month 7+: Full commercial operations</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Make an Impact?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join us in revolutionizing waste management while generating exceptional returns on investment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-4">
            Schedule Consultation
          </button>
          <button className="bg-white hover:bg-gray-50 text-green-600 border-2 border-green-600 font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-lg">
            Download Executive Summary
          </button>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link to="/" className="text-green-600 hover:text-green-700 font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NextSteps;