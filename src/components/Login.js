import React from 'react';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../redux/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    
    dispatch(authenticateUser());
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
