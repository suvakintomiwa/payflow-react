import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import FilterBar from '../components/transactions/FilterBar';
import TransactionTable from '../components/transactions/TransactionTable';
import BulkActions from '../components/transactions/BulkActions';

const Transactions = () => {
  const [selectedTransactions, setSelectedTransactions] = useState(new Set());
  const [filters, setFilters] = useState({
    search: '',
    dateRange: 'all',
    paymentMethod: 'all',
    amountRange: 'all',
    status: 'all'
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSelectionChange = (selected) => {
    setSelectedTransactions(selected);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
            <p className="text-sm text-gray-600">Manage and track all your payment transactions</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              📊 Export CSV
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              💳 New Payment
            </button>
          </div>
        </div>

        {/* Filters */}
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />

        {/* Bulk Actions */}
        {selectedTransactions.size > 0 && (
          <BulkActions 
            selectedCount={selectedTransactions.size} 
            onSelectAll={() => {}} 
            onClearSelection={() => setSelectedTransactions(new Set())}
          />
        )}

        {/* Transactions Table */}
        <TransactionTable
          filters={filters}
          selectedTransactions={selectedTransactions}
          onSelectionChange={handleSelectionChange}
        />
      </div>
    </Layout>
  );
};

export default Transactions;