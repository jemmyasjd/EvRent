import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className="auth-container">
      <SignIn signUpUrl='/Register'  />
    </div>
  );
};

export default Login;
