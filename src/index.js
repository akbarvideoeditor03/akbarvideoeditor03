import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import '../src/styles/global.css';
import App from '../src/pages/App';
import reportWebVitals from '../src/help/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
