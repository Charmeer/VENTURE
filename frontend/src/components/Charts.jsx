import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

export const InvestmentChart = ({ data }) => {
  const chartData = [
    { name: 'Plant Equipment', value: 12 },
    { name: 'Land & Infrastructure', value: 8 },
    { name: 'Working Capital', value: 5 },
    { name: 'Licensing & Permits', value: 2 }
  ];

  return (
    <div className="h-80 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            formatter={(value) => [`₹${value} lakhs`, 'Amount']}
            contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}
          />
          <Bar dataKey="value" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#34d399" stopOpacity={0.8}/>
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const RevenueChart = ({ data }) => {
  const chartData = [
    { name: 'Liquid Fuel Sales', value: 18 },
    { name: 'Gaseous Fuel Sales', value: 3.5 },
    { name: 'Processing Fees', value: 2 },
    { name: 'By-product Sales', value: 1.5 }
  ];

  return (
    <div className="h-80 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`₹${value} lakhs`, 'Monthly Revenue']}
            contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export const ProfitabilityChart = ({ data }) => {
  const chartData = [
    { name: 'Revenue', value: 25 },
    { name: 'Operating Costs', value: 10.05 },
    { name: 'Net Profit', value: 4.9 }
  ];

  return (
    <div className="h-80 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip 
            formatter={(value) => [`₹${value} lakhs`, 'Amount']}
            contentStyle={{ borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}
          />
          <Bar dataKey="value" fill="url(#profitGradient)" radius={[4, 4, 0, 0]} />
          <defs>
            <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#34d399" stopOpacity={0.8}/>
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};