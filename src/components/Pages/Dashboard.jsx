import React from 'react';
import Layout from '../components/layout/Layout';
import BalanceCard from '../components/dashboard/BalanceCard';
import AssetList from '../components/dashboard/AssetList';
import QuickActions from '../components/dashboard/QuickActions';
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
    {
      title: 'Fiat Assets',
      amount: '$24,323.30',
      change: '+3.1%',
      positive: true,
      icon: '💵'
    }
  ];

  const cryptoAssets = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      amount: '0.425',
      value: '$36,450.20',
      change: '+2.5%',
      positive: true,
      icon: '₿'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      amount: '6.75',
      value: '$2,845.60',
      change: '+1.8%',
      positive: true,
      icon: 'Ξ'
    }
  ];

  const fiatAssets = [
    {
      name: 'US Dollar',
      symbol: 'USD',
      amount: '$15,230.00',
      change: 'Stable',
      positive: true,
      icon: '$'
    },
    {
      name: 'Euro',
      symbol: 'EUR',
      amount: '€8,230.50',
      change: '-0.3%',
      positive: false,
      icon: '€'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <BalanceCard key={index} {...metric} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Crypto Assets */}
          <div className="bg-white rounded-xl p-6 shadow-sm card-hover">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Crypto Assets</h3>
            <AssetList assets={cryptoAssets} />
          </div>

          {/* Fiat Assets */}
          <div className="bg-white rounded-xl p-6 shadow-sm card-hover">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Fiat Assets</h3>
            <AssetList assets={fiatAssets} />
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Transaction History */}
        <TransactionHistory />
      </div>
    </Layout>
  );
};

export default Dashboard;