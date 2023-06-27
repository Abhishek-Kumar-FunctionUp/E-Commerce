import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/Login';
import Home from './component/home';
import MyCart from './component/mycart';

const App = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Redirect to home page if user is authenticated
    }
  }, [isAuthenticated, navigate]);
 console.log(isAuthenticated)
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/myCart" element={<MyCart />} />
      {isAuthenticated ? (
        <>
        <Route path="/" element={<Home />} />
       
        </>
      ) : (
        <Route path="/*" element={<LoginPage />} />
      )}
    </Routes>
  );
};

export default App;
