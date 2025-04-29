import React from 'react';
import ForgotPasswordForm from '../components/AuthForms/ForgotPasswordForm';

const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-4">
        <ForgotPasswordForm />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;