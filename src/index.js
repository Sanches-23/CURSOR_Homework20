import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/*<HashRouter>*/}
      {/*</HashRouter>*/}
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
