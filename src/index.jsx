import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    {/* <SignUp /> */}
    {/* <Login /> */}
  </React.StrictMode>
)
