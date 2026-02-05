import React, { useState, useEffect } from 'react';
import { getProblemData } from '../utils/api';

const TestPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [envInfo, setEnvInfo] = useState({});

  useEffect(() => {
    // Log environment info
    setEnvInfo({
      isProduction: import.meta.env.PROD,
      hostname: window.location.hostname,
      pathname: window.location.pathname,
      search: window.location.search
    });

    const fetchData = async () => {
      try {
        console.log('Fetching problem data...');
        const problemData = await getProblemData();
        console.log('Problem data received:', problemData);
        setData(problemData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load problem data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-12">Loading test data...</div>;
  if (error) return (
    <div className="text-center py-12">
      <div className="text-red-600 mb-4">Error: {error}</div>
      <div className="text-sm text-gray-600">
        <pre>{JSON.stringify(envInfo, null, 2)}</pre>
      </div>
    </div>
  );
  if (!data) return <div className="text-center py-12">No data available</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Test Page - Debug Info</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Environment Info:</h2>
        <pre className="text-sm">{JSON.stringify(envInfo, null, 2)}</pre>
      </div>
      
      <div className="bg-green-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Problem Data:</h2>
        <pre className="text-sm">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default TestPage;