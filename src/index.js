import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import LocaleProvider from 'context/LocaleProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/news-project">
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </BrowserRouter>

  // </React.StrictMode>
);
