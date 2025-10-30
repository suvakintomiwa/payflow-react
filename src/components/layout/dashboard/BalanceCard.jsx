import React from 'react';

const BalanceCard = ({ title, amount, change, positive, icon }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm card-hover">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{amount}</p>
          <p className={`text-sm mt-1 ${positive ? 'text-green-600' : 'text-red-600'}`}>
            {positive ? '↑' : '↓'} {change} from last month
          </p>
        </div>
        <div className="text-3xl opacity-80">{icon}</div>
      </div>
    </div>
  );
};

export default BalanceCard;