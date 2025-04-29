import React from 'react';
import LoginForm from '../components/AuthForms/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-green-600 text-white p-8 rounded-l-lg hidden md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
          <p className="mb-6">
            Sign in to your account to access your bookings, manage your profile, and book new football fields.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="h-6 w-6 rounded-full bg-white text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                ✓
              </span>
              <span>Access your booking history</span>
            </li>
            <li className="flex items-center">
              <span className="h-6 w-6 rounded-full bg-white text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                ✓
              </span>
              <span>Manage upcoming reservations</span>
            </li>
            <li className="flex items-center">
              <span className="h-6 w-6 rounded-full bg-white text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                ✓
              </span>
              <span>Quick and easy booking process</span>
            </li>
          </ul>
        </div>
        
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg md:rounded-l-none md:rounded-r-lg shadow-md">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;