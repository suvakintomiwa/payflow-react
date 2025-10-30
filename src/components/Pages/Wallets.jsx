import React from 'react';
import Layout from '../components/layout/Layout';
import WalletCard from '../components/wallets/WalletCard';
import WalletStats from '../components/wallets/WalletStats';

const Wallets = () => {
  const wallets = [
    {
      name: 'Bitcoin Wallet',
      balance: '0.425 BTC',
      address: '1A1zP1e...9MZGkH6',
      currency: 'BTC',
      gradient: 'from-orange-500 to-yellow-500',
      icon: '₿'
    },
    {
      name: 'Ethereum Wallet',
      balance: '6.75 ETH',
      address: '0xd8dA6B...7F7C3D',
      currency: 'ETH',
      gradient: 'from-blue-500 to-purple-500',
      icon: 'Ξ'
    },
    {
      name: 'USD Wallet',
      balance: '$15,230.00',
      address: '****4567',
      currency: 'USD',
      gradient: 'from-green-500 to-emerald-500',
      icon: '$'
    },
    {
      name: 'EUR Wallet',
      balance: '€8,230.50',
      address: '****8901',
      currency: 'EUR',
      gradient: 'from-blue-600 to-cyan-500',
      icon: '€'
    }
  ];

  const stats = [
    { value: '7', label: 'Total Wallets' },
    { value: '$42,568', label: 'Total Balance' },
    { value: '+12.5%', label: 'Monthly Growth' },
    { value: '24', label: 'Active Assets' }
  ];

  const recentActivity = [
    {
      type: 'Bitcoin Received',
      from: '1A1zP1e...9MZGkH6',
      amount: '+0.25 BTC',
      positive: true,
      time: '2 hours ago',
      icon: '₿'
    },
    {
      type: 'Ethereum Sent',
      to: '0xd8dA6B...7F7C3D',
      amount: '-1.5 ETH',
      positive: false,
      time: '5 hours ago',
      icon: 'Ξ'
    },
    {
      type: 'USD Deposit',
      method: 'Bank Transfer',
      amount: '+$2,500.00',
      positive: true,
      time: '1 day ago',
      icon: '$'
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Wallets</h1>
          <p className="text-gray-600">Manage your cryptocurrency and fiat wallets</p>
        </div>

        {/* Wallet Statistics */}
        <WalletStats stats={stats} />

        {/* Wallet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wallets.map((wallet, index) => (
            <WalletCard key={index} {...wallet} />
          ))}
          {/* Add Wallet Card */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <div className="text-4xl text-blue-500 mb-4">+</div>
            <h3 className="font-semibold text-gray-900">Add New Wallet</h3>
            <p className="text-gray-500 text-sm mt-2">Create or import a new wallet</p>
          </div>
        </div>

        {/* Wallet Actions */}
        <div className="flex gap-4">
          {['Create Wallet', 'Import Wallet', 'Send Crypto', 'Receive'].map((action) => (
            <button
              key={action}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Wallet Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-lg">{activity.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{activity.type}</p>
                    <p className="text-sm text-gray-500">{activity.from || activity.to || activity.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${activity.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {activity.amount}
                  </p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wallets;