import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SignupFlow from '../components/auth/SignupFlow';

const Signup = () => {
  const { signup, loading } = useAuth();
  const navigate = useNavigate();

  const handleSignupComplete = async (userData) => {
    const result = await signup(userData);
    if (result.success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-purple to-medium-purple flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <SignupFlow onComplete={handleSignupComplete} loading={loading} />
      </div>
    </div>
  );
};

export default Signup;