import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import MetricsGrid from '../components/analytics/MetricsGrid';
import Charts from '../components/analytics/Charts';
import TransactionTable from '../components/analytics/TransactionTable';

const Analytics = () => {
  const [timePeriod, setTimePeriod] = useState('7d');

  const metrics = [
    {
      title: 'Revenue Growth',
      value: '+12.5%',
      change: 'vs previous period',
      type: 'revenue',
      icon: '📈'
    },
    {
      title: 'Transaction Volume',
      value: '1,247',
      change: '+8.2% increase',
      type: 'volume',
      icon: '💳'
    },
    {
      title: 'Avg Transaction',
      value: '$892',
      change: '+15.3% higher',
      type: 'average',
      icon: '💰'
    },
    {
      title: 'Conversion Rate',
      value: '94.2%',
      change: '+2.1% improvement',
      type: 'conversion',
      icon: '🎯'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
            <p className="text-sm text-gray-600">Deep insights into your payment performance and trends.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Time Period Filter */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              {['7d', '30d', '3m', '1y'].map((period) => (
                <button
                  key={period}
                  onClick={() => setTimePeriod(period)}
                  className={`filter-button px-3 py-1 text-sm font-medium rounded-md ${
                    timePeriod === period ? 'active' : ''
                  }`}
                >
                  {period.toUpperCase()}
                </button>
              ))}
            </div>
            
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              📊 Export Report
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <MetricsGrid metrics={metrics} />

        {/* Charts */}
        <Charts timePeriod={timePeriod} />

        {/* Transaction Table */}
        <TransactionTable />
      </div>
    </Layout>
  );
};

export default Analytics;