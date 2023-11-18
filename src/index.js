import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { YoutubeProvider } from './context/youtubeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <YoutubeProvider>
    <App />
  </YoutubeProvider>
);
