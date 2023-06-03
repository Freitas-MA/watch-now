import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

document.body.style.marginTop = '50px';

root.render(<App />);

// Add the following CSS rule to the root element
document.getElementById('root').style.width = '100vw';
document.getElementById('root').style.overflowX = 'hidden';

// Add the following CSS rule to the App component
document.body.style.overflow = 'hidden';


