import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

// Specific API calls
export const getProblemData = () => fetchData('/api/problem');
export const getTechnologyData = () => fetchData('/api/technology');
export const getProcessData = () => fetchData('/api/process');
export const getMarketData = () => fetchData('/api/market');
export const getInvestmentData = () => fetchData('/api/investment');
export const getOperationsData = () => fetchData('/api/operations');
export const getRevenueData = () => fetchData('/api/revenue');
export const getProfitabilityData = () => fetchData('/api/profitability');
export const getRisksData = () => fetchData('/api/risks');
export const getImpactData = () => fetchData('/api/impact');