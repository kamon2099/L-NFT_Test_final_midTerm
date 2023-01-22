import React from 'react';

import ReactDOM from 'react-dom/client';
import MyApp from './_app';
import '../styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
