import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import InputField from '../InputField';
import Button from '../Button';
import { useAuth } from '../../contexts/AuthContext';

const ForgotPasswordForm: React.FC = () => {
  const { requestPasswordReset } = useAuth();
  
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };
  
  const validateForm = () => {
    if (!email.trim()) {
      setError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return false;
    }
    return true;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const success = await requestPasswordReset(email);
      
      if (success) {
        setIsSuccess(true);
      } else {
        setError('No account found with this email address');
      }
    } catch (error) {
      setError('Failed to process your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isSuccess) {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Check your email</h2>
          <p className="text-gray-600 mb-6">
            We've sent password reset instructions to:<br />
            <span className="font-medium">{email}</span>
          </p>
          <Link to="/login">
            <Button variant="primary">
              Back to Login
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <Link to="/login" className="inline-flex items-center text-green-600 hover:text-green-700">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Login
        </Link>
      </div>
      
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Forgot Password</h2>
      <p className="text-center text-gray-600 mb-6">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <InputField
          id="email"
          label="Email Address"
          type="email"
          value={email}
          onChange={handleChange}
          error={error ? error : ''}
          required
          icon={<Mail className="w-5 h-5" />}
        />
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={isLoading}
          className="mt-4"
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;