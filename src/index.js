import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RecentTransactions from './components/RecentTransactions';
import Login from './components/Login';
import SpendingChart from './components/SpendingChart';

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
   <React.StrictMode>
    <App/>
     <RecentTransactions />
     <Login/>
     <SpendingChart/>
  </React.StrictMode>
 );

reportWebVitals();



