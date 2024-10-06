import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { RequiredAuthProvider } from '@propelauth/react';  // Use RequiredAuthProvider to force login
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <RequiredAuthProvider
      authUrl={process.env.REACT_APP_AUTH_URL}  // Ensure this is correctly set in .env
      displayWhileLoading={<div>Loading...</div>}
      displayIfLoggedOut={<LoginScreen />}
    >
      <Router>
        <Routes>
          {/* Route for the root path ("/") - Redirect to "/home" when authenticated */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Protected route for HomeScreen */}
          <Route path="/home" element={<HomeScreen />} />
          
          {/* Add other protected routes here */}
        </Routes>
      </Router>
    </RequiredAuthProvider>
  );
};

export default App;
