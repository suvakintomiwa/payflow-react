import React from 'react';
import Layout from '../components/layout/Layout';
import BalanceCard from '../components/dashboard/BalanceCard';
import TransactionHistory from '../components/dashboard/TransactionHistory';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Total Balance',
      amount: '$42,568.90',
      change: '+5.2%',
      positive: true,
      icon: '💰'
    },
    {
      title: 'Crypto Assets',
      amount: '$18,245.60',
      change: '+12.7%',
      positive: true,
      icon: '₿'
    },
    // Add more metrics...
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <BalanceCard key={index} {...metric} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Add Funds', 'Exchange', 'Send', 'Invest'].map((action) => (
            <button
              key={action}
              className="bg-white p-6 rounded-xl shadow-sm card-hover text-center"
            >
              <div className="text-2xl mb-2">💳</div>
              <span className="font-medium text-gray-700">{action}</span>
            </button>
          ))}
        </div>

        {/* Transaction History */}
        <TransactionHistory />
      </div>
    </Layout>
  );
};

export default Dashboard;