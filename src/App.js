import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/Login';
import Home from './component/home';
import { Navigate } from 'react-router-dom';

const App = () => {
  const navigate=useNavigate()
  const isAuthenticated = false; // Replace with your authentication logic
  
  useEffect(()=>{
    if(isAuthenticated){
          navigate("/")
        }else{
          navigate("/login")
        }
  },[])
  // (function(){
  //   if(isAuthenticated){
  //     navigate("/")
  //   }else{
  //     navigate("/login")
  //   }
  // })();
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      {isAuthenticated ? (
        <Route path="/home" element={<Home />} />
      ) : (
        <Route
          path="/"
          element={() => <Navigate to="/login" replace />}
        />
      )}
    </Routes>
  );
};

export default App;
