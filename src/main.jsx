import React from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp.jsx';
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
