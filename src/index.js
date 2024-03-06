import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/styles.css';

const root = document.getElementById('root');

// Use ReactDOM.createRoot for Concurrent Mode
const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);