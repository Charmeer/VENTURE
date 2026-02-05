import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-r-4 border-r-green-400 border-b-4 border-b-transparent border-l-4 border-l-green-300 mb-6"></div>
      <p className="text-gray-600 text-lg font-medium">{message}</p>
    </div>
  );
};

export default LoadingSpinner;