import React, { StrictMode } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDom.render(
  <StrictMode>
      <App />
  </StrictMode>
    ,document.getElementById('root')
);


reportWebVitals();
