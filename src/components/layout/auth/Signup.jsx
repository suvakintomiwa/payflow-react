import React, { useState } from 'react';

const SignupFlow = ({ onComplete, loading }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    middleName: '',
    age: '',
    // Step 2
    email: '',
    parentEmail: '',
    phone: '',
    // Step 3
    address: '',
    postalCode: '',
    referralCode: '',
    password: ''
  });

  const steps = [
    { number: 1, title: 'Basic Info', subtitle: "Let's get started with your account" },
    { number: 2, title: 'Contact Details', subtitle: 'We need your contact information' },
    { number: 3, title: 'Address & Security', subtitle: 'Complete your profile setup' },
    { number: 4, title: 'Verify Your Email', subtitle: 'Enter the 6-digit code sent to your email' },
    { number: 5, title: 'Success!', subtitle: 'Welcome to our platform' }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
    if (currentStep === steps.length - 1) {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress Bar */}
      <div className="h-2 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-accent-purple to-light-purple transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="p-8">
        {/* Step Content */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Welcome</h2>
              <p className="text-gray-600">Let's get started with your account</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-accent-purple to-light-purple text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Continue
            </button>
          </div>
        )}

        {/* Add other steps similarly */}

        {/* Success Step */}
        {currentStep === 5 && (
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Created Successfully!</h2>
            <p className="text-gray-600 mb-6">Welcome to our platform. Redirecting to your dashboard...</p>
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupFlow;