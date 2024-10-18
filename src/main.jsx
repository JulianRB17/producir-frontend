// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './global.css';
import { ScrollToTop } from './utils/scrollToTop';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <HelmetProvider>
      <ScrollToTop />
      <App />
    </HelmetProvider>
  </BrowserRouter>
  // </StrictMode>
);
