import React from 'react';
import { RedirectToLogin } from '@propelauth/react';

const LoginScreen = () => {
  return (
    <RedirectToLogin 
      postLoginRedirectUrl={window.location.href}  // Redirect back to the current page after login
    />
  );
};

export default LoginScreen;
