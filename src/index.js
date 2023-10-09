import React from 'react';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './storage/store/configure-store.prod.store';
import App from './App';

// Styles
import './index.css';

const container = document.getElementById('app') || document.createElement('div');
container.id = 'app';
document.body.appendChild(container);

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();