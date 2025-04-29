import React from 'react';
import RegisterForm from '../components/AuthForms/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-green-600 text-white p-8 rounded-l-lg hidden md:flex md:flex-col md:justify-center">
          <h1 className="text-3xl font-bold mb-4">Join FootballPitch Today</h1>
          <p className="mb-6">
            Create an account to book football fields, manage your reservations, and enjoy a seamless booking experience.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="h-6 w-6 rounded-full bg-white text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                ✓
              </span>
              <span>Easy booking process</span>
            </li>
            <li className="flex items-center">
              <span className="h-6 w-6 rounded-full bg-white text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                ✓
              </span>
              <span>Access to premium fields</span>
            </li>
            <li className="flex items-center">
              <span className="h-6 w-6 rounded-full bg-white text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                ✓
              </span>
              <span>Booking history and management</span>
            </li>
            <li className="flex items-center">
              <span className="h-6 w-6 rounded-full bg-white text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                ✓
              </span>
              <span>Special offers for members</span>
            </li>
          </ul>
        </div>
        
        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg md:rounded-l-none md:rounded-r-lg shadow-md">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;