import React from 'react';
import App from './App.jsx';
import './index.css';

async function renderApp() {
  await ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

renderApp();
