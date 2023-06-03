import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Navbar from './components/navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <div style={{ marginTop: '60px' }}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);