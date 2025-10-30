import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Process payments in seconds with our optimized infrastructure and real-time settlement.'
    },
    {
      icon: '🔒',
      title: 'Bank-Grade Security',
      description: 'Military-grade encryption and compliance with global financial regulations.'
    },
    {
      icon: '🔄',
      title: 'Easy Integration',
      description: 'Simple APIs and SDKs to integrate payments into any platform in minutes.'
    }
  ];

  const currencies = [
    { symbol: '$', name: 'USD' },
    { symbol: '€', name: 'EUR' },
    { symbol: '£', name: 'GBP' },
    { symbol: '₦', name: 'NGN' },
    { symbol: '₿', name: 'BTC' },
    { symbol: 'Ξ', name: 'ETH' }
  ];

  return (
    <div className="min-h-screen gradient-bg text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-accent-purple rounded-lg flex items-center justify-center">
              <span className="text-white">₿</span>
            </div>
            <span className="text-2xl font-bold">Molada Pay</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-light-purple transition-colors">Features</a>
            <a href="#currencies" className="hover:text-light-purple transition-colors">Currencies</a>
            <a href="#security" className="hover:text-light-purple transition-colors">Security</a>
            <Link to="/login" className="hover:text-light-purple transition-colors">Sign In</Link>
            <Link to="/signup" className="bg-accent-purple hover:bg-light-purple px-4 py-2 rounded-lg transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Universal Payment Platform for the{' '}
            <span className="text-light-purple animate-pulse">Digital Age</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Accept cryptocurrency and fiat payments seamlessly. Support for USD, EUR, GBP, NGN, and major cryptocurrencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-accent-purple hover:bg-light-purple px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 text-center"
            >
              Get Started Free
            </Link>
            <button className="border-2 border-accent-purple hover:bg-accent-purple px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Currency Support */}
      <section id="currencies" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Supported Currencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {currencies.map((currency, index) => (
            <div key={index} className="bg-medium-purple p-6 rounded-lg text-center card-hover">
              <div className="text-3xl mb-2">{currency.symbol}</div>
              <div className="font-semibold">{currency.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose PayFlow?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-medium-purple p-8 rounded-xl card-hover">
              <div className="w-16 h-16 bg-accent-purple rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-light-purple mb-2">50K+</div>
            <div className="text-gray-300">Active Merchants</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-light-purple mb-2">$2.5B</div>
            <div className="text-gray-300">Processed Volume</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-light-purple mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-light-purple mb-2">150+</div>
            <div className="text-gray-300">Countries</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-medium-purple rounded-2xl p-8 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Payments?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using PayFlow to accept payments globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-accent-purple hover:bg-light-purple px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 text-center"
            >
              Start Free Trial
            </Link>
            <button className="border-2 border-accent-purple hover:bg-accent-purple px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-medium-purple">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent-purple rounded-lg flex items-center justify-center">
                <span className="text-white">₿</span>
              </div>
              <span className="text-xl font-bold">Molada Pay</span>
            </div>
            <p className="text-gray-400">The future of payments, today.</p>
          </div>
          {/* Footer links */}
        </div>
        <div className="border-t border-medium-purple mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Molada Pay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;