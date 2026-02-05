import axios from 'axios';

// Import all data files statically
import problemData from '../data/problem.json';
import technologyData from '../data/technology.json';
import processData from '../data/process.json';
import marketData from '../data/market.json';
import investmentData from '../data/investment.json';
import operationsData from '../data/operations.json';
import revenueData from '../data/revenue.json';
import profitabilityData from '../data/profitability.json';
import risksData from '../data/risks.json';
import impactData from '../data/impact.json';

// Map filenames to imported data
const dataMap = {
  problem: problemData.problem,
  technology: technologyData.technology,
  process: processData.process,
  market: marketData.market,
  investment: investmentData.investment,
  operations: operationsData.operations,
  revenue: revenueData.revenue,
  profitability: profitabilityData.profitability,
  risks: risksData.risks,
  impact: impactData.impact
};

// Check if we're in production/GitHub Pages environment
const isProduction = import.meta.env.PROD || window.location.hostname.includes('github.io');

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Function to load local data files
const loadLocalData = async (filename) => {
  try {
    // Return data from the map
    if (dataMap[filename]) {
      return dataMap[filename];
    } else {
      throw new Error(`Data file ${filename} not found in data map`);
    }
  } catch (error) {
    console.error(`Error loading local data file ${filename}:`, error);
    throw error;
  }
};

export const fetchData = async (endpoint) => {
  // In production, use local data files
  if (isProduction) {
    const filename = endpoint.replace('/api/', '');
    const data = await loadLocalData(filename);
    return data; // Return the data directly (already the nested object)
  }
  
  // In development, use API calls
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